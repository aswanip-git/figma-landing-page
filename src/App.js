import React from "react";
import Navbar from "./components/Navbar";
import SubHeader from "./components/SubHeader/SubHeader";
import Features from "./components/Features/Features";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <SubHeader />
      <Features />
    </div>
  );
}

export default App;
