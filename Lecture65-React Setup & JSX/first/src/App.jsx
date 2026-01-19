import Card from "./components/Card";
import Home from "./components/Home";
import About from "./components/About";
import { useState } from "react";
import Contact from "./components/Contact";
import GrandParent from "./components/GrandParent";
import Parent from "./components/Parent";
import Child from "./components/Child";

function App() {
  //props,state -> when we change prop/state component re-renders.
  const [tab, setTab] = useState("home");
  const objarr = [
    { name: "rahul", age: 23 },
    { name: "shweta", age: 25 },
  ];

  
  return (
    <>
      {/* <Card theme="light"/>
      <Card theme="dark"/> */}

      {/* <Profile />
      <div className="flex flex-wrap gap-6 p-6">
        <ProductCard />
        <About />
      </div> */}

      {/* <Card>
        <h2>Prajwal</h2>
        <p>I'm living in pune</p>
      </Card> */}

      {/* <Card children="i am children prop"> //here the children="i am children prop" is ignored
        <h2>Prajwal</h2>
        <p>I'm living in pune</p>
      </Card> */}

      <button
        className="mr-2 outline-none rounded-xl bg-blue-400 px-2 py-1 text-sm text-800 "
        onClick={() => setTab("home")}
      >
        Home
      </button>
      <button
        className="mr-2 outline-none rounded-xl bg-blue-400 px-2 py-1 text-sm text-800 "
        onClick={() => setTab("contact")}
      >
        Contact
      </button>
      <button
        className="mr-2 outline-none rounded-xl bg-blue-400 px-2 py-1 text-sm text-800 "
        onClick={() => setTab("about us")}
      >
        About us
      </button>

      {tab === "home" ? <Home /> : tab === "about us" ? <About /> : <Contact />}

      <GrandParent />
      <Card obj={objarr} />
    </>
  );
}

export default App;
