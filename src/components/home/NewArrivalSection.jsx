import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductCard from "../shop/ProductCard.jsx";
import { products } from "../../data/assets.js";

gsap.registerPlugin(ScrollTrigger);

const ARRIVALS = products.slice(0, 4);

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

                return <ProductCard product={arrival} variant="newArrival" index={cardIndex} key={arrival.id} />;
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
