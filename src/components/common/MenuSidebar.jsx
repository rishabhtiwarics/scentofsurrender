import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowIcon, CartIcon, CloseIcon } from "../icons/Icons.jsx";
import { img } from "../../data/assets.js";
import { useCart } from "../../context/CartContext.jsx";
import { useAuth } from "../../context/AuthContext.jsx";

export default function MenuSidebar() {
  const { isMenuOpen, closeMenu, openCart, cartCount } = useCart();
  const { isLoggedIn, user, login, logout } = useAuth();
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  const handleOpenCart = () => {
    closeMenu();
    openCart();
  };

  return (
    <>
      <div
        className={`sidebar-backdrop ${isMenuOpen ? "is-visible" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <aside
        className={`menu-sidebar ${isMenuOpen ? "is-open" : ""}`}
        aria-label="Navigation Menu"
      >
        {/* Top Div: rgb(246, 243, 236), Logo and Cross Icon */}
        <div className="menu-sidebar__top">
          <Link to="/" onClick={closeMenu} className="menu-sidebar__brand">
            <img
              src={img("Logo.png")}
              alt="SOS - Scent of Surrender"
              className="menu-sidebar__logo"
            />
          </Link>
          <button
            type="button"
            className="icon-btn menu-sidebar__close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Main Div: White background, Menu items with Arrow Icon */}
        <div className="menu-sidebar__main">
          <nav className="menu-sidebar__nav">
            <ul>
              <li>
                <NavLink to="/" end onClick={closeMenu} className="menu-sidebar__link">
                  <span>Home</span>
                  <ArrowIcon />
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={closeMenu} className="menu-sidebar__link">
                  <span>About Us</span>
                  <ArrowIcon />
                </NavLink>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setIsCatalogOpen((prev) => !prev)}
                  className="menu-sidebar__link menu-sidebar__catalog-btn"
                  aria-expanded={isCatalogOpen}
                >
                  <span>Catalog</span>
                  <svg className={`catalog-chevron ${isCatalogOpen ? "is-open" : ""}`} viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {isCatalogOpen && (
                  <ul className="menu-sidebar__sublinks">
                    <li>
                      <NavLink to="/shop" onClick={closeMenu} className="menu-sidebar__sublink">
                        <span>Perfume</span>
                        <ArrowIcon />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/skin-care" onClick={closeMenu} className="menu-sidebar__sublink">
                        <span>Skin Care</span>
                        <ArrowIcon />
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <NavLink to="/contact" onClick={closeMenu} className="menu-sidebar__link">
                  <span>Contact Us</span>
                  <ArrowIcon />
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="menu-sidebar__auth-section">
          {isLoggedIn ? (
            <div className="sidebar-user-content">
              <div className="sidebar-user-header">
                <img src={user.avatar} alt="User Avatar" className="sidebar-user-avatar" />
                <span className="sidebar-user-name">{user.name}</span>
              </div>
              <div className="sidebar-user-actions">
                <Link to="/profile" onClick={closeMenu} className="btn-pill" style={{ width: '100%', marginBottom: '10px', textAlign: 'center' }}>My Profile</Link>
                <button onClick={logout} className="btn-outline" style={{ width: '100%' }}>Logout</button>
              </div>
            </div>
          ) : (
            <div className="sidebar-user-content">
              <p className="sidebar-user-msg" style={{fontSize: '12px', textAlign: 'center', marginBottom: '12px', color: '#666'}}>Sign in for exclusive offers & fast checkout.</p>
              <div className="sidebar-user-actions" style={{display: 'flex', gap: '10px'}}>
                <Link to="/login" onClick={closeMenu} className="btn-gold" style={{ flex: 1, padding: '10px 12px', textAlign: 'center' }}>Login</Link>
                <Link to="/register" onClick={closeMenu} style={{ flex: 1, padding: '10px 12px', textAlign: 'center', color: '#111', border: '1px solid rgba(200, 162, 78, 0.5)', background: 'transparent', borderRadius: '999px', textDecoration: 'none', fontWeight: '600' }}>Register</Link>
              </div>

            </div>
          )}
        </div>

        {/* Bottom Div: #0c1411 bg color with Cart text */}
        <div className="menu-sidebar__bottom">
          <button
            type="button"
            className="menu-sidebar__cart-trigger"
            onClick={handleOpenCart}
          >
            <div className="menu-sidebar__cart-label">
              <CartIcon />
              <span>Cart ({cartCount})</span>
            </div>
            <span className="menu-sidebar__cart-action">
              <span>View Cart</span>
              <ArrowIcon />
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}
