import React from "react";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../icons/Icons.jsx";
import { img } from "../../data/assets.js";

export default function OurBeginningSection() {
  return (
    <section className="our-beginning-collage">
      <div className="our-beginning-collage__inner">
        <div className="our-beginning-collage__text-content">
          <span className="section-eyebrow">Our Beginning</span>
          <h2 className="our-beginning-collage__title">
            Born from the art of <span className="accent">letting go</span>
            <span className="thumb-inline">
              <img
                src={img("4_5489b149-a4a7-476e-be72-11f9bbc9a7a8.webp")}
                alt=""
              />
            </span>
          </h2>
          <div className="our-beginning-collage__desc">
            <p>
              SOS — Scent of Surrender — was conceived in the candlelit atelier of a
              perfumer's estate in Grasse, France. It began not as a business, but as a
              question: What does surrender smell like?
            </p>
            <p>
              Each fragrance is an olfactory poem — composed slowly, refined patiently,
              and bottled only when complete.
            </p>
          </div>
          <Link to="/shop" className="our-beginning-collage__cta">
            Explore Now
            <span className="btn-icon">
              <ArrowIcon />
            </span>
          </Link>
        </div>

        <div className="our-beginning-collage__stage">
          <div className="our-beginning-collage__cards">
            {/* Card 1 */}
            <div className="our-beginning-collage__card card-1">
              <div className="art">
                <img
                  src={img("instragram/inst1.jpeg")}
                  alt="Dramatic portrait"
                />
              </div>
            </div>
            {/* Card 2 */}
            <div className="our-beginning-collage__card card-2">
              <div className="art">
                <img
                  src={img("instragram/inst2.png")}
                  alt="Patterned texture"
                />
              </div>
            </div>
            {/* Card 3 */}
            <div className="our-beginning-collage__card card-3">
              <div className="art">
                <img
                  src={img("instragram/inst3.jpeg")}
                  alt="Abstract lines"
                />
              </div>
            </div>
            {/* Card 4 */}
            <div className="our-beginning-collage__card card-4">
              <div className="art">
                <img
                  src={img("instragram/inst4.jpeg")}
                  alt="Joyful group"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
