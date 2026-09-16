import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products } from "../../data/assets.js";
import { ArrowIcon } from "../icons/Icons.jsx";

gsap.registerPlugin(ScrollTrigger);

const ARRIVALS = products.slice(0, 4).map((product, index) => ({
  ...product,
  id: product.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  note: [
    "A luminous alcohol-free signature with a rich golden trail.",
    "Smoky depth, polished spice, and a midnight-smooth finish.",
    "Velvet oud softened with warm amber and quiet sophistication.",
    "A refined signature made for everyday presence.",
  ][index] || "A long-lasting scent crafted for unforgettable presence.",
}));

const ARRIVAL_ROWS = Array.from({ length: Math.ceil(ARRIVALS.length / 2) }, (_, index) =>
  ARRIVALS.slice(index * 2, index * 2 + 2)
);

export default function NewArrivalSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((cardWrap, index) => {
        if (!cardWrap || index >= ARRIVAL_ROWS.length - 1) return;
        const nextCard = cardsRef.current[index + 1];
        const innerCards = cardWrap.querySelectorAll(".new-arrival-card");
        if (!nextCard || !innerCards.length) return;

        gsap.to(innerCards, {
          scale: 0.965,
          backgroundColor: "#f2eee3",
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: nextCard,
            start: "top 86%",
            end: `top ${92 + (index + 1) * 10}px`,
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="new-arrival-section" data-framer-name="Best Seller Section">
      <div className="new-arrival-container" data-framer-name="Container">
        <motion.div
          className="new-arrival-title-block"
          data-framer-name="Title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="new-arrival-eyebrow-wrap">
            <span className="new-arrival-eyebrow">BEST SELLER</span>
          </div>
          <h2 className="new-arrival-heading">Most-loved scents crafted to be remembered.</h2>
        </motion.div>

        <div className="new-arrival-cards-stack">
          {ARRIVAL_ROWS.map((row, rowIndex) => (
            <div
              key={`arrival-row-${rowIndex}`}
              ref={(el) => {
                cardsRef.current[rowIndex] = el;
              }}
              className="new-arrival-card-wrapper"
              style={{ top: `calc(90px + ${rowIndex * 10}px)`, zIndex: rowIndex + 1 }}
            >
              {row.map((arrival, arrivalIndex) => {
                const cardIndex = rowIndex * 2 + arrivalIndex;

                return (
                  <div className={`new-arrival-card ${cardIndex % 2 === 1 ? "is-reversed" : ""}`} key={arrival.id}>
                    <div className="new-arrival-card-line" />

                    <div className="new-arrival-card-left">
                      <div className="new-arrival-card-text">
                        <span className="new-arrival-card-kicker">{String(cardIndex + 1).padStart(2, "0")}</span>
                        <h3 className="new-arrival-card-title">{arrival.name}</h3>
                        <p className="new-arrival-card-price">{arrival.price}</p>
                        <p className="new-arrival-card-desc">{arrival.note}</p>
                      </div>

                      <div className="new-arrival-card-btns">
                        <Link to="/shop" className="new-arrival-card-btn btn-shop" aria-label={`Shop ${arrival.name}`}>
                          <span>Add To Cart</span>
                          <ArrowIcon />
                        </Link>
                        <Link to="/shop" className="new-arrival-card-btn btn-view" aria-label={`View ${arrival.name}`}>
                          <span>Shop Now</span>
                          <ArrowIcon />
                        </Link>
                      </div>
                    </div>

                    <div className="new-arrival-card-image-wrap">
                      <motion.img
                        src={arrival.src}
                        alt={arrival.name}
                        className="new-arrival-card-img"
                        loading="lazy"
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

