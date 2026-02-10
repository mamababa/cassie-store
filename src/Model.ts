import { useCallback } from 'react';
import useSyncExternalStoreExports from 'use-sync-external-store/shim/with-selector';
import type { IDispatchOptions, TEqualityFn,TComputed,TWatch } from './type';
import { shallowEqualKeys,execWatchHandler } from './utils';
import { useMemoizedFn } from './hooks';
import { calcComputedState } from './utils';  // 🆕 新增导入

import { AsyncManager } from './Manager/AsyncManager';
import type { AsyncManagerOptions } from './Manager/AsyncManager';

const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;
type IEffects<M extends Model<any, any>> = Record<
  string,
  ((this: M, ...args: any[]) => any) | any
>;
// src/type.ts - 扩展现有的IModelConfig接口
export interface IModelConfig<
  TState extends Record<string, any> = Record<string, any>,
  TEffects extends IEffects<Model<TState, TEffects>> = IEffects<Model>,
> {
  state: TState;
  effects?: Partial<TEffects>;
   watch?: TWatch<TState>;     // 🎯 Watch配置
  computed?: TComputed<TState>;  // 🆕 新增：计算属性配置
}
type TSubscribeFunc<
  TState extends Record<string, any> = Record<string, any>,
  TEffects extends Record<string, any> = Record<string, any>,
> = (state: Model<TState, TEffects>, silent: boolean) => any;

export class Model<
  TState extends Record<string, any> = Record<string, any>,
  TEffects extends Record<string, any> = Record<string, any>
> {
  isUnMount = false;
  state: TState = {} as TState;
  _preState: TState = {} as TState;
  _subscribes: TSubscribeFunc<TState, TEffects>[] = [];
  _isInited = false;
   asyncManagerMap: Record<
    string,
    AsyncManager<
      Partial<TState>,
      (
        aborts: {
          lastAbortController: AbortController | null;
          abortController: AbortController;
        },
        tryCount: number,
      ) => Promise<Partial<TState>>
    >
  > = {};

  constructor(public config: IModelConfig<TState, TEffects>) {}


  // 🆕 新增：asyncManager方法（源码中的实现）
  asyncManager(
    name: string,
    options?: {
      loadingKey?: string;
      errorKey?: string;
      config?: AsyncManagerOptions;
      showLoading?: boolean;
    },
  ) {
    const {
      loadingKey = 'loading',
      errorKey = 'error',
      showLoading = true,
      config,
    } = options || {};

    // 如果不存在，创建新的AsyncManager
    if (!this.asyncManagerMap[name]) {
      this.asyncManagerMap[name] = new AsyncManager(config);
    }

    const asyncManager = this.asyncManagerMap[name];

    // 🎯 关键：清除之前的监听器，重新绑定
    asyncManager.offAllListeners();

    // 🎯 绑定loading事件
    asyncManager.on('loading', () => {
      if (showLoading) {
        this.setState({
          [loadingKey]: true,
        } as Partial<TState>);
      }
    });

    // 🎯 绑定success事件
    asyncManager.on('success', (result) => {
      if (typeof result === 'object' && result !== null) {
        this.setState({
          [loadingKey]: false,
          ...result,  // 🎯 关键：将结果合并到状态中
        } as Partial<TState>);
      }
    });

    // 🎯 绑定error事件
    asyncManager.on('error', (error) => {
      this.setState({
        [loadingKey]: false,
        [errorKey]: error,
      } as Partial<TState>);
    });

    return this.asyncManagerMap[name];
  }

 // 🔧 修改：init方法，使用getActualState
  init() {
    if (!this._isInited) {
      this._isInited = true;
      const config = this.config;

      // 🆕 使用getActualState处理初始状态（包含计算属性）
      this.state = this.getActualState({} as TState, config.state || {});
      this._preState = { ...this.state };

 
    }
  }

  getState = (): TState => {
    if (!this._isInited) {
      this.init();
    }
    return this.state;
  };

 // 🔧 修改：setState方法，使用getActualState
  setState(
    state: Partial<TState> | ((state: TState) => Partial<TState>),
    options?: IDispatchOptions,
  ) {
    if (!this._isInited) {
      this.init();
    }

    if (state) {
      // 1. 处理函数形式的state
      let payload: Partial<TState>;
      if (typeof state === 'function') {
        payload = state(this.state);
      } else {
        payload = state;
      }

      // 🆕 2. 使用getActualState处理状态（包含计算属性）
      this.state = this.getActualState(this._preState, payload);

      // 3. 分发更新
      this.dispatch(options);
      this._preState = { ...this.state };
    }
  }

    // 🆕 新增：getActualState方法（源码中的核心方法）
  getActualState(prevState: TState, payload: Partial<TState>): TState {
    // 1. 合并状态
    let nextState = { ...prevState, ...payload };

    // 2. 获取配置
    const { computed,watch } = this.config || {};

    // 🆕 3. 处理计算属性
    nextState = calcComputedState<TState>({
      prevState,
      nextState,
      computed,
    });

    // 4. 执行 watch
    execWatchHandler({
      prevState,
      nextState,
      watch,
    });

    return nextState;
  }
  dispatch(options?: IDispatchOptions): void {
    if (this.isUnMount) return;

    this._subscribes.forEach((func) =>
      func(this, options?.silent || false)
    );
  }

  subscribe(func: TSubscribeFunc<TState, TEffects>): () => void {
    this._subscribes.push(func);
    return () => {
      this.unsubscribe(func);
    };
  }

  unsubscribe(func: TSubscribeFunc<TState, TEffects>): void {
    if (this._subscribes.length) {
      this._subscribes = this._subscribes.filter((fn) => fn !== func);
    }
  }

  useSelector = (equalityFn?: TEqualityFn<TState>) => {
    const subscribe = useCallback(
      (listener: () => void) => {
        return this.subscribe((_, silent) => {
          if (!silent) {
            listener();
          }
        });
      },
      [this],
    );

    const selector = useMemoizedFn((state: TState) => state);
    const isEqual = useMemoizedFn((prevState: TState, nextState: TState) => {
      if (equalityFn) {
        return equalityFn(prevState, nextState);
      }
      return Object.is(prevState, nextState);
    });

    const state = useSyncExternalStoreWithSelector(
      subscribe,
      this.getState,
      this.getState,
      selector,
      isEqual,
    );

    return state;
  };

  useGetState = <Key extends keyof TState & string>(
    keys?: Key[],
    equalityFn?: TEqualityFn<TState>,
  ) => {
    return this.useSelector((prevState, nextState) => {
      if (equalityFn) {
        return equalityFn(prevState, nextState);
      }
      if (keys && shallowEqualKeys(prevState, nextState, keys)) {
        return true;
      }
      return false;
    });
  };
}