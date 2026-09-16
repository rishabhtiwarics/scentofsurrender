import React from "react";
import InnerBanner from "../components/common/InnerBanner.jsx";
import { products } from "../data/assets.js";
export default function Shop() {
  return <main><InnerBanner title="Catalog" eyebrow="Shop SOS" text="Signature scents, gifting picks, and everyday luxury in one place." /><section className="page-section"><div className="product-grid">{products.map((product) => <article className="product-card" key={product.name}><img src={product.src} alt={product.name} /><div className="product-card__body"><h3>{product.name}</h3><p>{product.price}</p><button>Add to Cart</button></div></article>)}</div></section></main>;
}
