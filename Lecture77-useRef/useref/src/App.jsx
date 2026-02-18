import { useState } from "react";
import "./App.css";
import { useRef } from "react";
import { useEffect } from "react";

function App() {
  /* call by valxue ->
   -primitive
   -yaha pr value change nh hogi
    */
  // function sum(a, b) {
  //   a = 50;
  //   b = 50;
  //   return a + b;
  // }

  // let x = 10;
  // let y = 20;

  // console.log(sum(x, y));
  // console.log(x, y); /* call by value */

  // let p = [1, 2, 3];
  // let q = { r: 2, s: 5 };

  // /* call by reference ->
  //  -non primitive (array, functions and objects)
  //  -yaha pr value change ho jaegi */
  // function sum2(a, b) {
  //   a.push(4);
  //   return a[0] + b.r;
  // }

  // console.log(sum2(p, q));/* call by reference */

  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const inputRef = useRef(null);
  const lastSectionRef = useRef(null);

  const [cnt, setCnt] = useState(0);
  const cntRef = useRef(0);

  useEffect(() => {
    cntRef.current = cnt;
  }, [cnt]);

  function inc() {
    cntRef.current = cnt;
    setCnt((prev) => prev + 1);
  }

  let timerRef = useRef(null);

  function handleStart() {
    timerRef.current = setInterval(() => {
      setCount((prev) => ++prev);
    }, 1000);
  }

  function handleStop() {
    clearInterval(timerRef.current);
  }

  function handleFocus() {
    inputRef.current.focus();
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleScroll = () => {
    lastSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <p>current value of count using useRef {countRef.current} </p>
      <button onClick={() => countRef.current++}>Increase</button>
      <br />

      <p>current value of count using useRef {count} </p>
      <button onClick={() => setCount((cnt) => cnt + 1)}>Increase</button>
      <hr />

      <p>previous value of count {cntRef.current} </p>
      <p>current value of count {cnt} </p>
      <button onClick={() => inc()}>Increase</button>

      <hr />
      <p>Stopwatch</p>
      <p>{count}</p>
      <button onClick={() => handleStart()}>Start</button>
      <button onClick={() => handleStop()}>Stop</button>
      <hr />

      <div>
        <input ref={inputRef} type="text" />
        <button onClick={handleFocus}>Focus</button>
      </div>

      <h1>welcome to OBP-3</h1>
      <button onClick={handleScroll}>Scroll to last section</button>
      <div style={{ height: "100vh" }}></div>
      <div style={{ height: "100vh" }}></div>
      <section ref={lastSectionRef}>last section</section>
    </>
  );
}

export default App;

//when state is change then that page will rerender again
// initially ui will be created of that page and then useEffect will run
// since useEffect has not run yet so ui shows previous value and then useEffect will run and change our value but as it is in ref so it not causes re-render so ui shows previous value only
/* changing in dom we use useref */

/* focus,stopwatch is classic example of useref */
