import React from "react";
import Login from "./components/Login";
import { useAuth } from "./context/authContext/AuthContext";
import Signup from "./components/Signup";
import { Routes, Route, useNavigate } from "react-router-dom";
import Products from "./components/Products";

function App() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />

      </Routes>

      {user && <div>`hello ${user.name}`</div>}

      {/* {!user ? (
        <div>
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/signup")}>signup</button>
        </div>
      ) : (
        <button onClick={() => logout()}>Logout</button>
      )} */}

       
    </div>
  );
}

export default App;

/* context ke kisi bhi value change krte hai to sare components re-render hote hai jaha apn vo context use kr rhe hai */
