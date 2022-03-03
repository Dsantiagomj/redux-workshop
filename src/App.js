import { useSelector, useDispatch } from 'react-redux';
import { actions } from './redux/store';
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };

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
