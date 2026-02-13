import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login({ loggedIn, setLoggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  });

  return (
    <div>
      <button onClick={() => setLoggedIn((loggedIn) => !loggedIn)}>
        {loggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Login;
