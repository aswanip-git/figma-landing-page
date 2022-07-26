import React from "react";
import Navbar from "./components/Navbar";
import SubHeader from "./components/SubHeader/SubHeader";
import Features from "./components/Features/Features";
import Contents from "./components/Contents/Contents";
import Gallery from "./components/Gallery/Gallery";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <SubHeader />
      <Features />
      <Contents />
      <Gallery />
    </div>
  );
}

export default App;
