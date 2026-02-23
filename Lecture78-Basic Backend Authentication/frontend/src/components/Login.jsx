import React, { useEffect } from "react";
import { useState } from "react";
import Profile from "./Profile";

function Login({ SERVER_API }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedin, setLoggedIn] = useState(false);

  const handleLogin = async (email, password) => {
    try {
      const res = await fetch(`${SERVER_API}login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await res.json();
      localStorage.setItem("token", data.token);
      setLoggedIn(true);
    } catch (error) {
      console.error({ "login error :": error });
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  if (loggedin) {
    return <Profile email={email}  />;
  }

  return (
    <div>
      <h2>Login</h2>
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="enter email"
      />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="enter password"
      />
      <button onClick={() => handleLogin(email, password)}>Login</button>
    </div>
  );
}

export default Login;
