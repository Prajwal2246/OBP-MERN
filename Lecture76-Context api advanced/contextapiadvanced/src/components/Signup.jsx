import React, { useState } from "react";
import { useAuth } from "../context/authContext/AuthContext";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const { signUp } = useAuth();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signUp({ name, email, password, phone });
        }}
      >
        <input
          type="text"
          placeholder="enter full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <input
          type="phone"
          placeholder="enter phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Signup;
