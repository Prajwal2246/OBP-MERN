import { useState } from "react";
import Todos from "./components/Todos";
import Timer from "./components/Timer";

function App() {
  const [showTimer, setShowTimer] = useState(false);
  //useEffect
  //1.mounting
  // useEffect(()=>{

  // },[])

  //2.unmounting
  // useEffect(()=>{
  //     return ()=>{

  //     }
  // },[])

  //3.update
  // useEffect(()=>{

  // },[todos])

  return (
    <div>
      <Todos />

      <button onClick={() => setShowTimer(!showTimer)}>
        {!showTimer ? "show Timer" : "Hide Timer"}
      </button>
      {showTimer ? <Timer /> : null}
    </div>
  );
}

export default App;
