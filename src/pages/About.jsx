import React from "react";
import InnerBanner from "../components/common/InnerBanner.jsx";
import { img } from "../data/assets.js";

export default function About() {
  const founderImage = img("founder/founder.jpeg");

  return (
    <main>
      <InnerBanner title="About Us" />
      <section className="founder-banner">
        <div className="founder-banner__bg">
          <img src={founderImage} alt="" />
        </div>
        <div className="founder-banner__glow founder-banner__glow--gold"></div>
        <div className="founder-banner__glow founder-banner__glow--dim"></div>

        <div className="founder-banner__inner">
          {/* Copy — left */}
          <div className="founder-banner__copy">
            <span className="section-eyebrow">The Founder</span>
            <h2>
              The vision of<span className="name">Mayank Gupta</span>
            </h2>
            <p>
              For Mayank Gupta, fragrance was never simply about scent — it was about emotion, memory, and the quiet power of surrender. His vision for SOS was born from a desire to create perfumes that feel intimate, timeless, and deeply personal.
            </p>
            <p>
              Guided by restraint, elegance, and craftsmanship, he envisioned a maison where every creation would evoke feeling before attention — where luxury whispers instead of shouts.
            </p>
            <div className="founder-banner__quote">
              "True luxury doesn't announce itself. It's felt, remembered, and quietly returned to."
            </div>
            <div className="founder-banner__signoff">
              <span className="founder-banner__signoff-line"></span>
              <div className="founder-banner__signoff-text">
                <strong>Mayank Gupta</strong>
                <span>Founder &amp; Creative Director</span>
              </div>
            </div>
          </div>

          {/* Framed photo — right */}
          <div className="founder-banner__frame-wrap">
            <span className="founder-banner__tag">
              <span className="founder-banner__tag-dot"></span>
              Founder
            </span>
            <div className="founder-banner__tick founder-banner__tick--tl"></div>
            <div className="founder-banner__frame">
              <img src={founderImage} alt="Mayank Gupta, Founder of SOS" />
            </div>
            <div className="founder-banner__signature">
              <div className="founder-banner__signature-mark">MG</div>
              <div className="founder-banner__signature-text">
                <strong>Mayank Gupta</strong>
                <span>Founder, SOS</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

