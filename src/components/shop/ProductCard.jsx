import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowIcon } from "../icons/Icons.jsx";
import { useCart } from "../../context/CartContext.jsx";
import { img } from "../../data/assets.js";

export default function ProductCard({ product, variant = "shop", index = 0 }) {
  const { addToCart, inCart } = useCart();

  if (!product) return null;

  if (variant === "heroArrival") {
    return (
      <article className="hero-arrival-card">
        <Link to="/shop" className="hero-arrival-card__image" aria-label={`Shop ${product.name}`}>
          <img src={product.src} alt={product.name} loading="lazy" />
        </Link>
        <div className="hero-arrival-card__body">
          <h3>{product.name}</h3>
          <p>{product.price}.00</p>
        </div>
      </article>
    );
  }

  if (variant === "newArrival") {
    return (
      <div className={`new-arrival-card ${index % 2 === 1 ? "is-reversed" : ""}`}>
        <div className="new-arrival-card-line" />

        <div className="new-arrival-card-left">
          <div className="new-arrival-card-text">
            <span className="new-arrival-card-kicker">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="new-arrival-card-title">{product.name}</h3>
            <p className="new-arrival-card-price">{product.price}</p>
            <p className="new-arrival-card-desc">{product.note}</p>
          </div>

          <div className="new-arrival-card-btns">
            <Link to="/shop" className="new-arrival-card-btn btn-shop" aria-label={`Shop ${product.name}`}>
              <span>Add To Cart</span>
              <ArrowIcon />
            </Link>
            <Link to="/shop" className="new-arrival-card-btn btn-view" aria-label={`View ${product.name}`}>
              <span>Shop Now</span>
              <ArrowIcon />
            </Link>
          </div>
        </div>

        <div className="new-arrival-card-image-wrap">
          <motion.img
            src={product.src}
            alt={product.name}
            className="new-arrival-card-img"
            loading="lazy"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>
    );
  }

  const isShop = variant === "shop" || variant === "related";
  const priceDisplay = isShop ? 'From ₹ 750' : `₹ ${product.price}`;

  const rating = product.rating || 5;

  return (
    <Link to={`/product/${product.id}`} className={`product-card ${isShop ? 'shop-card' : ''}`}>
      <div className="product-card__media">
        <img src={product.src} alt={product.name} className="main-img" />
        <img src={img("product/beckgrond.png")} alt="" className="hover-img" />
      </div>
      <div className="product-card__info">
        <div className="product-card__text">
          <h3>{product.name}</h3>
          <div className="product-card__rating">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={i < rating ? "var(--gold)" : "none"} stroke="var(--gold)"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            ))}
          </div>
          <span className="price">
            {priceDisplay}
            {isShop && <del className="old-price">₹ 999</del>}
          </span>
        </div>
        <button
          className="product-card__add circle-btn"
          aria-label="Add to bag"
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
        >
          {inCart && inCart(product.id) ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
          )}
        </button>
      </div>
    </Link>
  );
}
