import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/count/actions";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      {count}
      <br />
      <br />
      <br />
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </>
  );
}

export default App;
