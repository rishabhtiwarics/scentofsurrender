import React, { useEffect, useMemo, useState } from "react";
import { img } from "../../data/assets.js";

const testimonials = [
  {
    name: "Aarav Mehta",
    city: "Mumbai",
    rating: 5,
    image: img("instragram/inst1.jpeg"),
    text: "Liquid Gold feels premium from the first spray. Smooth, warm, and genuinely long lasting.",
  },
  {
    name: "Riya Kapoor",
    city: "Delhi",
    rating: 5,
    image: img("instragram/inst3.jpeg"),
    text: "The bottle looks stunning and the scent gets noticed without feeling loud.",
  },
  {
    name: "Kabir Sethi",
    city: "Pune",
    rating: 4,
    image: img("instragram/inst4.jpeg"),
    text: "Noir Surrender has that deep evening feel. Elegant, clean, and memorable.",
  },
  {
    name: "Naina Shah",
    city: "Bengaluru",
    rating: 5,
    image: img("instragram/inst6.jpeg"),
    text: "I love how refined it feels. The dry-down is soft, rich, and very signature.",
  },
  {
    name: "Dev Malhotra",
    city: "Jaipur",
    rating: 5,
    image: img("instragram/inst7.jpeg"),
    text: "SOS has become my daily scent. Classy packaging and impressive performance.",
  },
];

function StarIcon({ filled = true }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={filled ? "star is-filled" : "star"}>
      <path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9L12 2.6z" />
    </svg>
  );
}

function RatingStars({ value }) {
  return (
    <div className="testimonial-stars" aria-label={`${value} star rating`}>
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon key={index} filled={index < value} />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % testimonials.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, []);

  const visibleTestimonials = useMemo(
    () => Array.from({ length: 3 }, (_, index) => testimonials[(activeIndex + index) % testimonials.length]),
    [activeIndex]
  );

  return (
    <section className="testimonials-section">
      <div className="testimonials-head">
        <span className="section-eyebrow">Customer Stories</span>
        <h2>Scents people remember.</h2>
      </div>

      <div className="testimonials-swiper" aria-label="Customer testimonials carousel">
        <div className="testimonials-track testimonials-track--step" key={activeIndex}>
          {visibleTestimonials.map((item, index) => (
            <article className={`testimonial-card testimonial-card--modern ${index === 1 ? "is-featured" : ""}`} key={`${item.name}-${activeIndex}-${index}`}>
              <div className="testimonial-card__top">
                <img src={item.image} alt={item.name} loading="lazy" />
                <div>
                  <h3>{item.name}</h3>
                  <span>{item.city}</span>
                </div>
              </div>
              <RatingStars value={item.rating} />
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="testimonial-pagination" aria-label="Testimonials pagination">
        {Array.from({ length: 3 }, (_, index) => (
          <button
            type="button"
            className={`testimonial-dot ${activeIndex % 3 === index ? "is-active" : ""}`}
            key={`testimonial-dot-${index}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show testimonial ${index + 1}`}
            aria-current={activeIndex === index ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}

