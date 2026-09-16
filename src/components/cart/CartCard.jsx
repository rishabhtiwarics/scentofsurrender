import React from "react";
import { TrashIcon } from "../icons/Icons.jsx";
import { useCart } from "../../context/CartContext.jsx";

export default function CartCard({ item, variant = "sidebar" }) {
  const { updateQuantity, removeFromCart } = useCart();
  const isSidebar = variant === "sidebar";

  const handleDec = () => updateQuantity(item.id, item.quantity - 1);
  const handleInc = () => updateQuantity(item.id, item.quantity + 1);
  const handleRemove = () => removeFromCart(item.id);

  if (isSidebar) {
    return (
      <div className="cart-card cart-card--sidebar">
        <div className="cart-card__image-wrap">
          <img src={item.src} alt={item.name} className="cart-card__img" />
        </div>
        <div className="cart-card__details">
          <div className="cart-card__header-row">
            <h4 className="cart-card__title">{item.name}</h4>
            <button
              type="button"
              className="cart-card__remove-btn"
              onClick={handleRemove}
              aria-label={`Remove ${item.name}`}
              title="Remove item"
            >
              <TrashIcon />
            </button>
          </div>
          {item.size && <span className="cart-card__meta">{item.size}</span>}
          <div className="cart-card__bottom-row">
            <span className="cart-card__price">{item.price}</span>
            <div className="cart-card__qty-control">
              <button
                type="button"
                className="cart-card__qty-btn"
                onClick={handleDec}
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="cart-card__qty-num">{item.quantity}</span>
              <button
                type="button"
                className="cart-card__qty-btn"
                onClick={handleInc}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Variant: "page"
  const itemTotal = (item.priceNumber * item.quantity).toLocaleString();

  return (
    <div className="cart-card cart-card--page">
      <div className="cart-card__image-wrap">
        <img src={item.src} alt={item.name} className="cart-card__img" />
      </div>
      <div className="cart-card__details">
        <div className="cart-card__header-row">
          <div>
            <h3 className="cart-card__title">{item.name}</h3>
            {item.size && <span className="cart-card__meta">{item.size}</span>}
          </div>
          <button
            type="button"
            className="cart-card__remove-btn"
            onClick={handleRemove}
            aria-label={`Remove ${item.name}`}
          >
            <TrashIcon />
            <span className="cart-card__remove-text">Remove</span>
          </button>
        </div>
        <div className="cart-card__page-pricing">
          <div className="cart-card__unit-price">
            <span className="cart-card__label">Unit Price:</span>
            <span className="cart-card__val">{item.price}</span>
          </div>
          <div className="cart-card__qty-control">
            <span className="cart-card__label">Quantity:</span>
            <div className="cart-card__qty-box">
              <button
                type="button"
                className="cart-card__qty-btn"
                onClick={handleDec}
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="cart-card__qty-num">{item.quantity}</span>
              <button
                type="button"
                className="cart-card__qty-btn"
                onClick={handleInc}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>
          <div className="cart-card__total-price">
            <span className="cart-card__label">Total:</span>
            <span className="cart-card__total-val">Rs. {itemTotal}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
