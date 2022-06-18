import React from "react";
// Routing
import { Routes, Route } from "react-router-dom";
// Components
import About from "./components/pages/About";
import Copyright from "./components/Copyright";
import Home from "./components/pages/Home";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/pages/Portfolio";
import Prices from "./components/pages/Prices";
import MobileNavbar from "./components/navbar/mobile/MobileNavbar";
// Styles
import "./styles/css/App.css";

const App = (): JSX.Element => {
  return (
    <div>
      <Navbar />
      <MobileNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Copyright />
    </div>
  );
};

export default App;
