import React from "react";
import InnerBanner from "../components/common/InnerBanner.jsx";
import ProductCard from "../components/shop/ProductCard.jsx";
import { products } from "../data/assets.js";

export default function Shop() {
  return (
    <main>
      <InnerBanner title="Catalog" eyebrow="Shop SOS" text="Signature scents, gifting picks, and everyday luxury in one place." />
      <section className="page-section">
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard product={product} variant="shop" key={product.id} />
          ))}
        </div>
      </section>
    </main>
  );
}
