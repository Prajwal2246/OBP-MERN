import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

import { useTheme } from "./context/ThemeContext";
import { languageContext } from "./context/LanguageContext";
import { useContext } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const { toogleTheme, theme } = useTheme();
  const { toogleLanguage, currentlang, text } = useContext(languageContext);

  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/login">Login</Link>\
      </nav>

      <Routes>
        {/* <Route
          path="/"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        /> */}

        {/* nested routes */}
        {/* <Route path="/contact" element={<ContactLayout />}>
        <Route path="instructor" element={<Instructor />} />
        <Route path="finance" element={<Finance />} />
        <Route path="ops" element={<Ops />} />
      </Route> */}

        {/* <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route> */}
      </Routes>

      <p>current theme:{theme}</p>
      <button onClick={toogleTheme}>theme</button>

      <button onClick={toogleLanguage}>{currentlang}</button>
      <p>{text.welcome}</p>
      <p>{text.msg}</p>
    </>
  );
}

export default App;
