import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../shop/ProductCard.jsx";
import { products } from "../../data/assets.js";
import { ArrowIcon } from "../icons/Icons.jsx";

const visibleCount = 3;
const slideDelay = 2600;
const arrivalProducts = products.slice(0, 5);

export default function HeroNewArrivalSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleProducts = useMemo(
    () => Array.from({ length: visibleCount }, (_, index) => arrivalProducts[(activeIndex + index) % arrivalProducts.length]),
    [activeIndex, arrivalProducts]
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % arrivalProducts.length);
    }, slideDelay);

    return () => window.clearInterval(timer);
  }, [arrivalProducts.length]);

  return (
    <section className="hero-arrival-section">
      <div className="hero-arrival-inner">
        <div className="hero-arrival-copy">
          <span className="hero-arrival-eyebrow">New Arrival</span>
          <h2>Highlight new scents prominently</h2>
          <p>Discover fresh SOS signatures crafted for presence, depth, and unforgettable everyday luxury.</p>
          <Link to="/shop" className="hero-arrival-link">
            <span>View All</span>
            <ArrowIcon />
          </Link>
        </div>

        <div className="hero-arrival-swiper" aria-label="New arrival products">
          <div className="hero-arrival-track" key={activeIndex}>
            {visibleProducts.map((product) => (
              <ProductCard product={product} variant="heroArrival" key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
