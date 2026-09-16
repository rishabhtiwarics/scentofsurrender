import React from "react";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../icons/Icons.jsx";

export default function ScentParallaxSection() {
  return (
    <section className="scent-parallax-section">
      <div className="scent-parallax-content">
        <span className="scent-parallax-eyebrow">Nomad Noir</span>
        <h2>Surrender to the Power of Scent</h2>
        <p>
          SOS isn't just a fragrance - it's an awakening. Crafted for those who command presence,
          <em> Nomad Noir</em> blends mystery, depth, and raw elegance into one unforgettable signature.
        </p>
        <Link to="/shop" className="scent-parallax-btn">
          <span>Explore Now</span>
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
