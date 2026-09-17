import React from 'react';
import ProductCard from './ProductCard.jsx';

export default function ProductSection({ eyebrow, title, products, variant }) {
  if (!products || products.length === 0) return null;
  
  return (
    <section className={`product-section ${variant ? `product-section--${variant}` : ''}`}>
      <div className="container">
        <div className="product-section__header">
          {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
          {title && <h2>{title}</h2>}
        </div>
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} variant={variant} />
          ))}
        </div>
      </div>
    </section>
  );
}
