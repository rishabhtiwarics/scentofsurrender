import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CloseIcon, ArrowIcon } from "../icons/Icons.jsx";
import { useCart } from "../../context/CartContext.jsx";
import CartCard from "./CartCard.jsx";

export default function CartSidebar() {
  const { isCartOpen, closeCart, cartItems, cartCount, cartSubtotal } = useCart();
  const navigate = useNavigate();

  const handleGoToCartPage = () => {
    closeCart();
    navigate("/cart");
  };

  return (
    <>
      <div
        className={`sidebar-backdrop ${isCartOpen ? "is-visible" : ""}`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        className={`cart-sidebar ${isCartOpen ? "is-open" : ""}`}
        aria-label="Shopping Cart"
      >
        {/* Cart Sidebar Header */}
        <div className="cart-sidebar__top">
          <div className="cart-sidebar__title-wrap">
            <h3 className="cart-sidebar__title">Shopping Cart</h3>
            <span className="cart-sidebar__count-badge">{cartCount} items</span>
          </div>
          <button
            type="button"
            className="icon-btn cart-sidebar__close"
            onClick={closeCart}
            aria-label="Close cart"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Free Shipping Strip */}
        <div className="cart-sidebar__shipping-strip">
          {cartSubtotal >= 2000 ? (
            <span>🎉 You qualify for <strong>Free Express Shipping</strong>!</span>
          ) : (
            <span>
              Add Rs. {(2000 - cartSubtotal).toLocaleString()} more for <strong>Free Express Shipping</strong>!
            </span>
          )}
        </div>

        {/* Cart Items List */}
        <div className="cart-sidebar__body">
          {cartItems.length === 0 ? (
            <div className="cart-sidebar__empty">
              <p>Your bag is currently empty.</p>
              <Link to="/shop" className="btn-pill" onClick={closeCart}>
                Discover Fragrances
              </Link>
            </div>
          ) : (
            <div className="cart-sidebar__items">
              {cartItems.map((item) => (
                <CartCard key={item.id} item={item} variant="sidebar" />
              ))}
            </div>
          )}
        </div>

        {/* Cart Sidebar Footer */}
        {cartItems.length > 0 && (
          <div className="cart-sidebar__footer">
            <div className="cart-sidebar__subtotal-row">
              <span className="cart-sidebar__subtotal-label">Subtotal</span>
              <span className="cart-sidebar__subtotal-val">
                Rs. {cartSubtotal.toLocaleString()}
              </span>
            </div>
            <p className="cart-sidebar__note">Shipping & taxes calculated at checkout.</p>
            <div className="cart-sidebar__actions">
              <button
                type="button"
                className="cart-sidebar__view-btn"
                onClick={handleGoToCartPage}
              >
                <span>View Full Cart</span>
                <ArrowIcon />
              </button>
              <button
                type="button"
                className="cart-sidebar__checkout-btn"
                onClick={() => alert("Proceeding to secure checkout...")}
              >
                Checkout Now
              </button>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
