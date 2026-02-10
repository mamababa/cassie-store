
import { Model } from '../Model';

// 🔧 修正：Store创建方式
interface CounterState {
  count: number;
  name: string;
}

// 修正前（错误）：
// const counterStore = new Model({ count: 0, name: 'My Counter' });

// 修正后（正确）：
const counterStore = new Model<CounterState>({
  state: {
    count: 0,
    name: 'My Counter'
  }
});

// 创建辅助函数
const increment = () => {
  const currentState = counterStore.getState();
  counterStore.setState({ count: currentState.count + 1 });
};

const decrement = () => {
  const currentState = counterStore.getState();
  counterStore.setState({ count: currentState.count - 1 });
};

export {
  counterStore,
  increment,
  decrement
}