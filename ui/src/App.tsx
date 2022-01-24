import React from "react";
// Routing
import { Routes, Route } from "react-router-dom";
// Components
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Prices from "./components/Prices";
// Styles
import "./styles/App.module.css";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
