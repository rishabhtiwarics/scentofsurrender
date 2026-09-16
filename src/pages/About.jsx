import React from "react";
import InnerBanner from "../components/common/InnerBanner.jsx";
import { img } from "../data/assets.js";
export default function About() {
  return <main><InnerBanner title="About Us" eyebrow="Our Story" text="Fragrance made intimate, expressive, and beautifully long lasting." /><section className="page-section split-section"><div><span className="section-eyebrow">Scent of Surrender</span><h2>Crafted for moments that stay.</h2><p>Our perfumes balance rich top notes with soft lingering bases, poured in small batches and finished with a modern luxury sensibility.</p><p>Every SOS bottle is made to feel personal, from everyday rituals to gifting moments that deserve a lasting signature.</p></div><img src={img("4_5489b149-a4a7-476e-be72-11f9bbc9a7a8.webp")} alt="SOS product story" /></section></main>;
}
