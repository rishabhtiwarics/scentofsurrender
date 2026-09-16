import React from "react";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../icons/Icons.jsx";
import { img } from "../../data/assets.js";

export default function CollectionSection() {
  return (
    <section className="collection-section">
      <div className="collection-watermark" aria-hidden="true">
        <div className="collection-watermark__track">
          <span className="collection-watermark__group">
            <span>SCENT OF SURRENDER</span>
            <span>SCENT OF SURRENDER</span>
            <span>SCENT OF SURRENDER</span>
          </span>
          <span className="collection-watermark__group">
            <span>SCENT OF SURRENDER</span>
            <span>SCENT OF SURRENDER</span>
            <span>SCENT OF SURRENDER</span>
          </span>
        </div>
      </div>
      <div className="collection-inner">
        <div className="collection-media">
          <div className="collection-media__back">
            <img
              src={img("sos-800_jpg.webp")}
              alt="SOS perfume detail"
              loading="lazy"
            />
          </div>
          <div className="collection-media__front">
            <img
              src={img("Untitled_design_8.webp")}
              alt="SOS perfume bottle"
              loading="lazy"
            />
          </div>
        </div>
        <div className="collection-content">
          <span className="collection-eyebrow">The Collection</span>
          <h2 className="collection-title">Our Most Coveted Scents</h2>
          <p className="collection-desc">
            Each bottle is a study in contrast - bold top notes fading into a soft, lingering base. Crafted in small batches and poured into hand-finished glass, every fragrance is designed to feel personal, not just worn.
          </p>
          <Link to="/shop" className="collection-cta">
            <span>Explore Now</span>
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
