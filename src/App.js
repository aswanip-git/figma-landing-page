import React from "react";
import Navbar from "./components/Navbar";
import SubHeader from "./components/SubHeader/SubHeader";
import Features from "./components/Features/Features";
import Contents from "./components/Contents/Contents";
import Gallery from "./components/Gallery/Gallery";
import Partners from "./components/Partners/Partners";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <SubHeader />
      <Features />
      <Contents />
      <Gallery />
      <Partners />
    </div>
  );
}

export default App;
