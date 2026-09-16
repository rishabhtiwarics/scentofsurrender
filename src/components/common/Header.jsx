import React from "react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartIcon, SearchIcon, UserIcon } from "../icons/Icons.jsx";
import { img } from "../../data/assets.js";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 30);
      setIsHidden(y > lastScrollY && y > 120);
      lastScrollY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={`header-fixed ${isScrolled ? "is-scrolled" : ""} ${isHidden ? "is-hidden" : ""}`}>
      <header className="site-header">
        <nav className={`navbar ${isScrolled ? "is-scrolled" : ""}`}>
          <Link to="/" className="navbar__brand" onClick={() => setIsOpen(false)}><img className="navbar__logo" src={img("Logo.png")} alt="SOS - Scent of Surrender" /></Link>
          <ul className={`navbar__links ${isOpen ? "is-open" : ""}`}>
            <li><NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={() => setIsOpen(false)}>About Us</NavLink></li>
            <li><NavLink to="/shop" onClick={() => setIsOpen(false)}>Catalog</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink></li>
          </ul>
          <div className="navbar__actions"><div className="icon-group"><button className="icon-btn" aria-label="Search"><SearchIcon /></button><Link className="icon-btn" aria-label="Account" to="/login"><UserIcon /></Link><button className="icon-btn" aria-label="Cart"><CartIcon /><span className="cart-count">2</span></button></div><span className="navbar__divider" /><Link to="/shop" className="btn-pill">Shop Now</Link><button className="hamburger" aria-label="Menu" onClick={() => setIsOpen((value) => !value)}><span></span><span></span><span></span></button></div>
        </nav>
      </header>
    </div>
  );
}
