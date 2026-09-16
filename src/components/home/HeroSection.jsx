import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../icons/Icons.jsx";
import { heroSlides } from "../../data/assets.js";
export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCurrent((value) => (value + 1) % heroSlides.length), 6000);
    return () => clearInterval(timer);
  }, []);
  const thumbClass = (index) => {
    let diff = index - current;
    if (diff > 1) diff -= heroSlides.length;
    if (diff < -1) diff += heroSlides.length;
    if (diff === 0) return "hero-thumb is-active";
    return diff === -1 ? "hero-thumb hero-thumb--left" : "hero-thumb hero-thumb--right";
  };
  return (
    <section className="hero" id="hero">
      <div className="hero-track">
        {heroSlides.map((slide, index) => (
          <div className={`hero-slide ${index === current ? "is-active" : ""}`} key={slide.src}>
            <picture className="hero-picture">
              {slide.mobileSrc && (
                <source media="(max-width: 768px)" srcSet={slide.mobileSrc} />
              )}
              <img className="hero-img" src={slide.src} alt={slide.alt} />
            </picture>
          </div>
        ))}
      </div>
      <div className="hero-content">
        <div className="hero-left">
          <Link to="/shop" className="hero-shop-btn">
            <span>Shop Now</span>
            <ArrowIcon />
          </Link>
        </div>
        <div className="hero-right">
          <div className="hero-thumbs">
            {heroSlides.map((slide, index) => (
              <button
                type="button"
                className={thumbClass(index)}
                key={slide.src}
                onClick={() => setCurrent(index)}
              >
                <img src={slide.src} alt={slide.alt} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
