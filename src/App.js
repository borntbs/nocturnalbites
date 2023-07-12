import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Dev from "./pages/Dev";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dev" element={<Dev />} />
      </Routes>
    </Router>
  );
}

export default App;
