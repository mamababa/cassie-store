// src/Manager/AsyncManager.ts - AsyncManager类实现
import { EventEmitter2 } from '../utils/event';
export interface AsyncManagerOptions {
  retryCount?: number;
  retryInterval?: number;
}
const DEFAULT_TIMEOUT = 300;

export class AsyncManager<
  T,
  Fn extends (
    aborts: {
      lastAbortController: AbortController | null;
      abortController: AbortController;
    },
    tryCount: number,
  ) => Promise<T>,
> extends EventEmitter2<{
  loading: (() => void)[];
  success: ((result: any) => void)[];
  error: ((error: Error) => void)[];
  finish: ((error: Error | null, result: any) => void)[];
}> {
  execId = 0;  // 执行ID，用于解决竞态条件
  options: AsyncManagerOptions = {};
  abortSignalMap: Record<number, AbortController> = {};  // 存储每个请求的控制器

  constructor(options?: AsyncManagerOptions) {
    super();
    if (options) {
      this.options = options;
    }
  }

  // 获取当前执行ID
  getCurrentExecId() {
    return this.execId;
  }

  // 获取指定执行ID的控制器
  getAbortController(execId: number) {
    return this.abortSignalMap[execId];
  }

  // 🎯 核心方法：执行异步操作
  exec(fn: Fn): Promise<T> {
    let tryCount = 0;
    const execId = ++this.execId;  // 生成新的执行ID
    console.log(`先执行的 execId: ${execId}, 当前最新的 this.execId: ${this.execId}`);
    // 触发loading事件
    this.emit('loading');

    return new Promise((resolve, reject) => {
      const _exec = () => {
        // 获取上一个请求的控制器
        const lastAbortController = this.abortSignalMap[execId - 1] || null;

        // 创建当前请求的控制器
        const abortController = (this.abortSignalMap[execId] = new AbortController());

        // 执行用户提供的异步函数
        fn(
          {
            lastAbortController,
            abortController,
          },
          tryCount,
        )
          .then((res) => {
            // 🎯 关键：只有最新的请求才处理成功结果
            console.log( 'then execId, this.execId:', execId, this.execId);
            if (execId === this.execId) {
              this.emit('success', res);
            }
            resolve(res);
            delete this.abortSignalMap[execId];
            this.emit('finish', null, res);
            return res;
          })
          .catch((e) => {
            // 🎯 关键：只有最新的请求才处理错误
            if (execId === this.execId) {
              // 检查是否需要重试
              if (tryCount < (this.options.retryCount || 0)) {
                setTimeout(() => {
                  _exec();  // 重试
                }, this.options.retryInterval || DEFAULT_TIMEOUT);
              } else {
                this.emit('error', e);
                reject(e);
                delete this.abortSignalMap[execId];
                this.emit('finish', e, null);
              }
            } else {
              // 非最新请求，直接清理并拒绝
              delete this.abortSignalMap[execId];
              this.emit('finish', e, null);
              reject(e);
            }
            tryCount++;
          });
      };

      _exec();  // 开始执行
    });
  }
}