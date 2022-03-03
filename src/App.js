import { useSelector } from 'react-redux';
function App() {
  const counter = useSelector((state) => state.counter);
  const increment = () => {};
  const decrement = () => {};

  return (
    <div className="App">
      <h1>Counter</h1>
      <p>{counter}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
