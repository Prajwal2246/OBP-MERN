import React, { useState } from "react";
import { useAuth } from "../context/authContext/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  return (
    <div>
      <input
        type="email"
        placeholder="enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => login({ email, password })}>Login</button>
    </div>
  );
}

export default Login;
