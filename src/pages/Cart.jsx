import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../components/icons/Icons.jsx";
import { useCart } from "../context/CartContext.jsx";
import CartCard from "../components/cart/CartCard.jsx";

export default function Cart() {
  const { cartItems, cartCount, cartSubtotal } = useCart();
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponMsg, setCouponMsg] = useState("");

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (coupon.trim().toUpperCase() === "SOS10") {
      const disc = Math.round(cartSubtotal * 0.1);
      setDiscount(disc);
      setCouponMsg("10% discount applied successfully!");
    } else if (coupon.trim()) {
      setCouponMsg("Invalid coupon code. Try SOS10");
    }
  };

  const shipping = cartSubtotal >= 2000 || cartSubtotal === 0 ? 0 : 150;
  const finalTotal = Math.max(0, cartSubtotal - discount + shipping);

  return (
    <main className="cart-page">
      <div className="cart-page__container">
        <div className="cart-page__header">
          <nav className="cart-page__breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Cart</span>
          </nav>
          <h1 className="cart-page__title">Your Shopping Bag</h1>
          <p className="cart-page__subtitle">
            {cartCount} {cartCount === 1 ? "fragrance" : "fragrances"} curated for you
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-page__empty">
            <h2>Your Cart is Currently Empty</h2>
            <p>Explore our bespoke collection of signature perfumes and elixirs.</p>
            <Link to="/shop" className="btn-pill">
              <span>Explore Catalog</span>
              <ArrowIcon />
            </Link>
          </div>
        ) : (
          <div className="cart-page__grid">
            {/* Items Column */}
            <div className="cart-page__items-col">
              <div className="cart-page__items-list">
                {cartItems.map((item) => (
                  <CartCard key={item.id} item={item} variant="page" />
                ))}
              </div>
              <div className="cart-page__back-link">
                <Link to="/shop">
                  <ArrowIcon />
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>

            {/* Summary Column */}
            <aside className="cart-page__summary-col">
              <div className="cart-page__summary-card">
                <h2 className="cart-page__summary-title">Order Summary</h2>

                <div className="cart-page__summary-row">
                  <span>Subtotal ({cartCount} items)</span>
                  <span>Rs. {cartSubtotal.toLocaleString()}</span>
                </div>

                {discount > 0 && (
                  <div className="cart-page__summary-row cart-page__summary-row--discount">
                    <span>Discount (SOS10)</span>
                    <span>-Rs. {discount.toLocaleString()}</span>
                  </div>
                )}

                <div className="cart-page__summary-row">
                  <span>Estimated Shipping</span>
                  <span>{shipping === 0 ? "FREE" : `Rs. ${shipping}`}</span>
                </div>

                {cartSubtotal < 2000 && (
                  <p className="cart-page__shipping-hint">
                    Add Rs. {(2000 - cartSubtotal).toLocaleString()} more to unlock Free Express Delivery.
                  </p>
                )}

                <form onSubmit={handleApplyCoupon} className="cart-page__coupon-form">
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Promo code (e.g. SOS10)"
                    className="cart-page__coupon-input"
                  />
                  <button type="submit" className="cart-page__coupon-btn">
                    Apply
                  </button>
                </form>
                {couponMsg && (
                  <p className={`cart-page__coupon-msg ${discount ? "is-success" : "is-error"}`}>
                    {couponMsg}
                  </p>
                )}

                <div className="cart-page__summary-total">
                  <span>Total Amount</span>
                  <span>Rs. {finalTotal.toLocaleString()}</span>
                </div>

                <button
                  type="button"
                  className="cart-page__checkout-btn"
                  onClick={() => alert("Proceeding to secure checkout...")}
                >
                  Proceed to Secure Checkout
                </button>

                <div className="cart-page__badges">
                  <span>🔒 256-bit Secure Checkout</span>
                  <span>✨ 100% Authentic Guaranteed</span>
                  <span>📦 Complimentary Gift Packaging</span>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
