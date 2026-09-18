import React from 'react';
import ProductCard from './ProductCard.jsx';

export default function ProductSection({ eyebrow, title, products, variant }) {
  if (!products || products.length === 0) return null;
  
  return (
    <section className={`product-section ${variant ? `product-section--${variant}` : ''}`}>
      <div className="container">
        <div className="product-section__header">
          {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
          {title && <h2 style={{
            background: "linear-gradient(135deg, var(--gold-soft), var(--gold))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block"
          }}>{title}</h2>}
        </div>
        <div className="product-carousel" style={{ marginTop: '20px' }}>
          <swiper-container
            slides-per-view="4"
            space-between="20"
            autoplay="true"
            autoplay-delay="3000"
            autoplay-disable-on-interaction="false"
            breakpoints={JSON.stringify({
              320: { slidesPerView: 2, spaceBetween: 12 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 24 }
            })}
          >
            {products.map(product => (
              <swiper-slide key={product.id}>
                <ProductCard product={product} variant={variant} />
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </div>
    </section>
  );
}
