import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowIcon } from "../icons/Icons.jsx";

export default function ProductCard({ product, variant = "shop", index = 0 }) {
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

  return (
    <article className="product-card">
      <img src={product.src} alt={product.name} />
      <div className="product-card__body">
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <button>Add to Cart</button>
      </div>
    </article>
  );
}
