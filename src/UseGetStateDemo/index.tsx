import React from 'react';
// 导入store和辅助函数
import { counterStore, increment, decrement } from './counterStore'; // 根据你的文件路径调整

// 主计数器组件 - 使用完整状态
function Counter() {
  // 🎯 使用完整状态（不传keys参数）
  const state = counterStore.useGetState();

  console.log('Counter组件重新渲染'); // 观察渲染次数

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>{state.name}</h2>
      <div style={{ fontSize: '24px', margin: '10px 0' }}>
        计数: {state.count}
      </div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
}

// 显示组件 - 只关心count字段
function CountDisplay() {
  // 🎯 使用选择性订阅，只关心count字段
  const state = counterStore.useGetState(['count']);

  console.log('CountDisplay组件重新渲染');

  return (
    <div style={{ padding: '10px', background: '#f0f0f0', margin: '10px' }}>
      当前计数: {state.count}
    </div>
  );
}

// 只显示名字的组件 - 只关心name字段
function NameDisplay() {
  // 🎯 使用选择性订阅，只关心name字段
  const state = counterStore.useGetState(['name']);

  console.log('NameDisplay组件重新渲染');

  return (
    <div style={{ padding: '10px', background: '#e0e0e0', margin: '10px' }}>
      名称: {state.name}
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>useGetState Hook 测试</h1>
      <Counter />
      <CountDisplay />
      <NameDisplay />

      <div style={{ margin: '20px', padding: '10px', background: '#fff3cd' }}>
        <h3>测试说明：</h3>
        <p>1. 点击+1/-1按钮，观察所有组件都会重新渲染</p>
        <p>2. 打开控制台，观察渲染日志</p>
        <p>3. 这说明所有组件都成功订阅了状态变化</p>
      </div>
    </div>
  );
}
export default App;