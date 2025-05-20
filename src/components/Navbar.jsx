import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import logo from "../components/images/logo.png";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="background">
      <div className="header">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </div>

        <button className="hamburger" onClick={toggleMenu}>☰</button>
        <nav className={menuOpen ? "open" : ""}>
          <NavLink to="/" exact="true" activeclassname="active" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" activeclassname="active" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/project" activeclassname="active" onClick={closeMenu}>
            Project
          </NavLink>
          <NavLink to="/contact" activeclassname="active" onClick={closeMenu}>Contact </NavLink>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Navigation;