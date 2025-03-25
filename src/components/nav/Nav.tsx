"use client";
import React, { useState, useEffect } from "react";
import "./nav.css";
import Image from "next/image";
import logo from "../../../public/visu.svg";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger ve kapatma ikonları

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${isScrolled ? "active" : ""}`}>
      <div className="brand-logo">
        <Image
          src={logo}
          alt="logo"
          width={isScrolled ? 60 : 80}
          height={isScrolled ? 60 : 80}
          className={`logo ${isScrolled ? "scrolled" : ""}`}
        />
      </div>

      {/* Hamburger Butonu */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </button>

      <div className={`container ${menuOpen ? "open" : ""}`}>
        <ul className="menu-items">
          <li>
            <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
          </li>
          <li>
            <a href="#" onClick={() => setMenuOpen(false)}>About Us</a>
          </li>
          <li>
            <a href="#" onClick={() => setMenuOpen(false)}>Services</a>
          </li>
          <li>
            <a href="#" onClick={() => setMenuOpen(false)}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;