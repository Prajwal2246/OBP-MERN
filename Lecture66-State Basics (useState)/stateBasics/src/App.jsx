import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import CoinToss from "./components/CoinToss";
import FormDetails from "./components/FormDetails";

function App() {
  const [hide, setHide] = useState(false);
  return (
    <>
      {/* <button onClick={() => setHide((hide) => !hide)}>{hide ? "hide" : "show"}</button>{hide && <h1>this is component</h1>} */}

      {/* <Form /> */}

      {/* <CoinToss /> */}
      <FormDetails />
    </>
  );
}

export default App;
