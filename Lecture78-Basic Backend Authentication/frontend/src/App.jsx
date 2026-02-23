import { useState } from "react";
import "./App.css";

function App() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const SERVER_API="http://localhost:3000/"  


  const handleRegister=(email,pass)=>{
    

  }

  return (
    <>
      <div>
        <label>Email</label>
        <input type="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
         placeholder="enter email" />

        <label>Password</label>
        <input type="password" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="enter password" />
        <button onClick={()=>handleRegister(email,password)}>register</button>
      </div>
    </>
  );
}

export default App;
