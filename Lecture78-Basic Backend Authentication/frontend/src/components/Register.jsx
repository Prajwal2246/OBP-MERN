import React from "react";
import { useState } from "react";

function Register({ SERVER_API, setIsRegistered }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (email, pass) => {
    try {
      const res = await fetch(`${SERVER_API}register`, {
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
      if (!data) throw new Error("unable to register");
      console.log(data.user);
      setIsRegistered(true);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h2>Register</h2>
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
      <button onClick={() => handleRegister(email, password)}>register</button>
    </div>
  );
}

export default Register;
