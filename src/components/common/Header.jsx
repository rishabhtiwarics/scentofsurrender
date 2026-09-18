import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartIcon, MenuIcon, SearchIcon, UserIcon, ArrowIcon } from "../icons/Icons.jsx";
import { img, products } from "../../data/assets.js";
import { useCart } from "../../context/CartContext.jsx";
import { useAuth } from "../../context/AuthContext.jsx";
import ProductCard from "../shop/ProductCard.jsx";

export default function Header() {
  const { cartCount, openCart, toggleMenu, isMenuOpen } = useCart();
  const { isLoggedIn, user, logout, login } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isSearchHovered, setIsSearchHovered] = useState(false);
  const [isUserHovered, setIsUserHovered] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  const searchResults = searchQuery.trim()
    ? products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

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
              <div 
                className="search-dropdown-wrapper"
                onMouseEnter={() => setIsSearchHovered(true)}
                onMouseLeave={() => {
                  setIsSearchHovered(false);
                  setSearchQuery("");
                }}
              >
                <button className="icon-btn icon-btn--search" aria-label="Search">
                  <SearchIcon />
                </button>
                {isSearchHovered && (
                  <div className="search-mega-menu">
                    <div className="search-input-wrapper">
                      <SearchIcon size={18} className="search-input-icon" />
                      <input 
                        type="text" 
                        className="mega-search-input" 
                        placeholder="Search fragrances..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        autoFocus
                      />
                    </div>
                    {searchQuery.trim() && (
                      <div className="search-results">
                        {searchResults.length > 0 ? (
                          <>
                            <div className="search-results-grid">
                              {searchResults.slice(0, 4).map(product => (
                                <ProductCard key={product.id} product={product} variant="search" />
                              ))}
                            </div>
                            <div className="search-results-action" style={{ marginTop: '20px', textAlign: 'center' }}>
                              <Link to="/shop" className="btn-gold">
                                Explore Now <ArrowIcon />
                              </Link>
                            </div>
                          </>
                        ) : (
                          <div className="search-no-results">
                            <p>No fragrances found for "{searchQuery}"</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              <div 
                className="user-dropdown-wrapper"
                onMouseEnter={() => setIsUserHovered(true)}
                onMouseLeave={() => setIsUserHovered(false)}
              >
                <Link className="icon-btn icon-btn--account" aria-label="Account" to={isLoggedIn ? "/profile" : "/login"}>
                  <UserIcon />
                </Link>
                {isUserHovered && (
                  <div className="user-mega-menu">
                    {isLoggedIn ? (
                      <div className="user-menu-content">
                        <div className="user-profile-header">
                          <img src={user.avatar} alt="User Avatar" className="user-avatar" />
                          <span className="user-name">{user.name}</span>
                        </div>
                        <div className="user-menu-actions">
                          <Link to="/profile" className="btn-gold" style={{ width: '100%', marginBottom: '12px', textAlign: 'center', padding: '10px 24px', borderRadius: '999px', display: 'block', textDecoration: 'none' }}>My Profile</Link>
                          <button onClick={logout} style={{ width: '100%', display: 'block', color: '#111', border: '1px solid rgba(200, 162, 78, 0.5)', background: 'transparent', padding: '10px 24px', borderRadius: '999px', cursor: 'pointer', fontWeight: '600' }}>Logout</button>
                        </div>
                      </div>
                    ) : (
                      <div className="user-menu-content">
                        <p className="user-menu-msg">Sign in for exclusive offers & fast checkout.</p>
                        <div className="user-menu-actions">
                          <Link to="/login" className="btn-gold" style={{ width: '100%', marginBottom: '12px', display: 'flex', justifyContent: 'center', padding: '10px 24px' }}>Login</Link>
                          <Link to="/register" style={{ width: '100%', display: 'flex', justifyContent: 'center', color: '#111', border: '1px solid rgba(200, 162, 78, 0.5)', background: 'transparent', padding: '10px 24px', borderRadius: '999px', textDecoration: 'none', fontWeight: '600' }}>Register</Link>

                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
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


