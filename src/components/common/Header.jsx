import React from "react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartIcon, MenuIcon, SearchIcon, UserIcon } from "../icons/Icons.jsx";
import { img } from "../../data/assets.js";
import { useCart } from "../../context/CartContext.jsx";

export default function Header() {
  const { cartCount, openCart, toggleMenu, isMenuOpen } = useCart();
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
          <Link to="/" className="navbar__brand">
            <img className="navbar__logo" src={img("Logo.png")} alt="SOS - Scent of Surrender" />
          </Link>
          <ul className="navbar__links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/shop">Catalog</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="navbar__actions">
            <div className="icon-group">
              <button className="icon-btn icon-btn--search" aria-label="Search">
                <SearchIcon />
              </button>
              <Link className="icon-btn icon-btn--account" aria-label="Account" to="/login">
                <UserIcon />
              </Link>
              <button
                className="icon-btn icon-btn--cart"
                aria-label="Cart"
                onClick={openCart}
              >
                <CartIcon />
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
              </button>
            </div>
            <span className="navbar__divider" />
            <Link to="/shop" className="btn-pill">Shop Now</Link>
            <button
              className={`icon-btn hamburger ${isMenuOpen ? "is-open" : ""}`}
              aria-label={isMenuOpen ? "Close menu" : "Menu"}
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <MenuIcon isOpen={isMenuOpen} />
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}


