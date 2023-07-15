import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Dev from "./pages/Dev";
import NavBar from "./components/Shared/Navbar";
import Reservation from "./pages/Reservation";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace={true} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservation/>}/>
        <Route path="/dev" element={<Dev />} />
      </Routes>
    </Router>
  );
}

export default App;
