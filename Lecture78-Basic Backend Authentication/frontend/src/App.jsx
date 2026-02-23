import { useState } from "react";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const SERVER_API = "http://localhost:3000/";

  return (
    <>
      {!isRegistered ? (
        <Register SERVER_API={SERVER_API} isRegistered={isRegistered} setIsRegistered={setIsRegistered} />
      ) : (
        <Login  SERVER_API={SERVER_API} />
      )}
    </>
  );
}

export default App;
