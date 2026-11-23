import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { img } from "../data/assets.js";
import bannerSheetmaskImg from "../IMG/bnnersheetmask.png";
import pack1Img from "../IMG/pack-1.png";
import pack2Img from "../IMG/pack-2.png";
import pack3Img from "../IMG/pack-3.png";
import pack4Img from "../IMG/pack-4.png";
import { useCart } from "../context/CartContext.jsx";
import { ArrowIcon } from "../components/icons/Icons.jsx";
import "../styles/sheetmask.css";

gsap.registerPlugin(ScrollTrigger);

const chapters = [
  { id: "arrival", num: "00", label: "The Mask" },
  { id: "discovery", num: "01", label: "Discovery" },
  { id: "zones", num: "02", label: "Multi-Zone" },
  { id: "innovation", num: "03", label: "Hydrogel" },
  { id: "collection", num: "04", label: "Collection" },
  { id: "ritual", num: "05", label: "Ritual" },
];

const facialZones = [
  {
    id: "forehead",
    colorClass: "is-lavender",
    zone: "Zone 01 — Lavender Hydrogel",
    title: "Forehead & T-Zone",
    subtitle: "Pore Refinement & Sebum Balance",
    desc: "Targeted care for the highest concentration of sebaceous glands. Controls midday shine, refines enlarged pores, and smooths stress micro-lines.",
    ingredients: ["5% Niacinamide", "Zinc PCA", "Organic Lavender Water", "Salicylic Acid 0.5%"],
    benefit: "Calms redness, balances oil production, and smooths skin texture.",
  },
  {
    id: "eyes",
    colorClass: "is-blue",
    zone: "Zone 02 — Ice-Blue Hydrogel",
    title: "Orbital & Upper Cheeks",
    subtitle: "Intense Depuffing & 7D Moisture",
    desc: "Formulated for the delicate 0.5mm eye contour and upper cheekbones. Delivers multi-depth hydration to banish fatigue, dark circles, and dehydration lines.",
    ingredients: ["7D Multi-Weight Hyaluronic Acid", "Copper Tripeptide-1", "Damask Rose Hydrosol", "Caffeine"],
    benefit: "Plumps hollow contours, illuminates under-eyes, and cools on contact by 3.5°C.",
  },
  {
    id: "jawline",
    colorClass: "is-blush",
    zone: "Zone 03 — Blush Hydrogel",
    title: "Lower Face & Jawline",
    subtitle: "Contouring, Firming & Elasticity",
    desc: "High-density elastic hydrogel infused with firming peptides and botanical collagen to sculpt the V-line and support natural facial tension.",
    ingredients: ["Hydrolyzed Marine Collagen", "Centella Asiatica (Cica)", "Kashmiri Saffron Extract", "Adenosine"],
    benefit: "Firms sagging skin, supports natural collagen, and restores bounce.",
  },
];

const maskProducts = [
  {
    id: "sm-aqua-glow",
    name: "Aqua Glow Hydrogel Mask",
    pack: "Single Treatment / 35g",
    price: "Rs. 499",
    priceNumber: 499,
    tone: "Ice-Blue Infusion",
    note: "Flood depleted skin with 7-layer hyaluronic acid and cooling glacier extract.",
    src: pack1Img || img("pack-1.png"),
  },
  {
    id: "sm-dual-glow",
    name: "Dual Glow Two-Zone Mask",
    pack: "Two-Piece System / 42g",
    price: "Rs. 549",
    priceNumber: 549,
    tone: "Blush & Lavender",
    note: "Simultaneously balances the T-zone while intensely firming the lower contours.",
    src: pack2Img || img("pack-2.png"),
  },
  {
    id: "sm-triple-repair",
    name: "Triple Repair Multi-Zone",
    pack: "Complete 3-Zone Mask / 48g",
    price: "Rs. 599",
    priceNumber: 599,
    tone: "Triple Gradient Gel",
    note: "Our flagship three-zone formulation addressing pore refinement, depuffing, and firming.",
    src: pack3Img || img("pack-3.png"),
  },
  {
    id: "sm-beauty-sleep",
    name: "Beauty Sleep Leave-On Treatment",
    pack: "Luxury Violet Jar / 50ml",
    price: "Rs. 1,799",
    priceNumber: 1799,
    tone: "Overnight Elixir",
    note: "A rich botanical sleeping cream infused with Kashmiri saffron and peptide complex.",
    src: pack4Img || img("pack-4.png"),
  },
];

const ritualSteps = [
  {
    num: "01",
    title: "Cleanse & Prepare",
    desc: "Gently wash your face with lukewarm water. Pat dry to allow the second-skin hydrogel to form an airtight bond.",
  },
  {
    num: "02",
    title: "Position Zone 01 & 02",
    desc: "Unfold the upper hydrogel piece. Align over eyes and smooth the cooling lavender & blue wings across forehead and cheeks.",
  },
  {
    num: "03",
    title: "Secure the Jawline",
    desc: "Apply the blush lower piece around mouth and gently pull upwards towards ears for an instant contouring grip.",
  },
  {
    num: "04",
    title: "20-Min Surrender",
    desc: "Rest for 20 minutes as the temperature-reactive hydrogel turns translucent, transferring 99% of active serum into pores.",
  },
];

export default function SheetMask() {
  const { addToCart } = useCart();
  const [activeChapter, setActiveChapter] = useState("arrival");
  const [activeZoneIndex, setActiveZoneIndex] = useState(0);
  const [addedProductId, setAddedProductId] = useState(null);

  const heroContainerRef = useRef(null);
  const maskRef = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    document.title = "Multi-Zone Hydrogel Sheet Mask — Scent of Surrender | Skincare Innovation";
    window.scrollTo(0, 0);
  }, []);

  // -------------------------------------------------------------------------
  // Hero Entrance & Gentle 3D Levitation
  // -------------------------------------------------------------------------
  useEffect(() => {
    const ctx = gsap.context(() => {
      const mask = maskRef.current;
      if (!mask) return;

      gsap.fromTo(
        ".sheetmask-hero-content",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" }
      );

      gsap.to(mask, {
        y: -12,
        rotationZ: 1.5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroContainerRef);

    return () => ctx.revert();
  }, []);

  // -------------------------------------------------------------------------
  // Interactive 3D Mouse Parallax on Desktop
  // -------------------------------------------------------------------------
  const handleStageMouseMove = (e) => {
    if (window.innerWidth <= 1024 || !maskRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(maskRef.current, {
      rotateY: x * 20,
      rotateX: -y * 20,
      transformPerspective: 1000,
      ease: "power1.out",
      duration: 0.6,
    });
  };

  const handleStageMouseLeave = () => {
    if (!maskRef.current) return;
    gsap.to(maskRef.current, {
      rotateY: 0,
      rotateX: 0,
      ease: "power2.out",
      duration: 1,
    });
  };

  // -------------------------------------------------------------------------
  // ScrollSpy to track active chapter
  // -------------------------------------------------------------------------
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveChapter(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.25,
      rootMargin: "-10% 0px -40% 0px",
    });

    chapters.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAddToCart = (item) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      priceNumber: item.priceNumber,
      src: item.src || pack1Img || img("pack-1.png"),
      size: item.pack || "Multi-Zone Hydrogel Mask",
    });
    setAddedProductId(item.id);
    setTimeout(() => setAddedProductId(null), 2500);
  };

  const currentZone = facialZones[activeZoneIndex];

  return (
    <div className="sheetmask-page">
      {/* --------------------------------------------------------------------
          Floating Chapter Tracker (Clean Editorial Rail — No Card Pattern)
          -------------------------------------------------------------------- */}
      <aside className="sheetmask-tracker" aria-label="Chapter progress">
        <div className="sheetmask-tracker__indicator">
          <span className="sheetmask-tracker__cur">{chapters.find((c) => c.id === activeChapter)?.num || "00"}</span>
          <span className="sheetmask-tracker__sep">/</span>
          <span className="sheetmask-tracker__total">05</span>
        </div>
        <ul className="sheetmask-tracker__list">
          {chapters.map((ch) => {
            const isActive = activeChapter === ch.id;
            return (
              <li key={ch.id} className="sheetmask-tracker__row">
                <button
                  type="button"
                  className={`sheetmask-tracker__item ${isActive ? "is-active" : ""}`}
                  onClick={() => scrollToSection(ch.id)}
                  aria-label={`Jump to chapter ${ch.num}: ${ch.label}`}
                >
                  <span className="sheetmask-tracker__meta">
                    <span className="sheetmask-tracker__num">{ch.num}</span>
                    <span className="sheetmask-tracker__label">{ch.label}</span>
                  </span>
                  <span className="sheetmask-tracker__marker" />
                </button>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* --------------------------------------------------------------------
          Chapter 00: The Mask Hero Stage
          -------------------------------------------------------------------- */}
      <div ref={heroContainerRef} id="arrival" className="sheetmask-hero-container">
        <div
          ref={stageRef}
          className="sheetmask-hero-stage"
          onMouseMove={handleStageMouseMove}
          onMouseLeave={handleStageMouseLeave}
        >
          <div className="sheetmask-hero-light" />
          <div className="sheetmask-hero-ambient-pulse" />

          <div className="sheetmask-container sheetmask-hero-stage-inner">
            {/* Top Meta Bar */}
            <div className="sheetmask-hero-meta">
              <span className="sheetmask-hero-meta-primary">
                <span className="sheetmask-hero-meta-badge">MULTI-ZONE</span>
                <span className="sheetmask-hero-meta-text">A NEW PERSPECTIVE ON SKINCARE</span>
              </span>
              <span className="sheetmask-hero-meta-secondary">INDIA / PRE-LAUNCH INNOVATION</span>
            </div>

            {/* Hero Content: Left Typography & Actions, Right 3D Mask */}
            <div className="sheetmask-hero-content">
              <div className="sheetmask-hero-text">
                <div className="sheetmask-eyebrow">The Hydrogel Innovation</div>
                <h1 className="sheetmask-hero-main-title">
                  <span>ONE FACE.</span>
                  <span className="gold-text">MULTIPLE NEEDS.</span>
                  <span className="sub-text">AN ENTIRELY NEW <em>PERSPECTIVE.</em></span>
                </h1>
                <p className="sheetmask-hero-desc">
                  Three precision hydrogel zones infused with pure botanical actives — balancing forehead shine, depuffing under-eyes, and firming jawline contours in one 20-minute surrender.
                </p>
                <div className="sheetmask-hero-actions">
                  <button
                    type="button"
                    className="btn-gold"
                    onClick={() => scrollToSection("collection")}
                  >
                    Explore Collection →
                  </button>
                  <button
                    type="button"
                    className="btn-outline-gold"
                    onClick={() => scrollToSection("zones")}
                  >
                    The 3 Zones
                  </button>
                </div>
              </div>

              <div className="sheetmask-hero-sculpture-box">
                <img
                  ref={maskRef}
                  src={bannerSheetmaskImg || img("bnnersheetmask.png")}
                  alt="Hydrogel Sheet Mask Innovation"
                  loading="eager"
                />
                <div className="sheetmask-hero-sculpture-shadow" />
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="sheetmask-hero-bottom">
              <a href="#discovery" className="sheetmask-scroll-cue" onClick={(e) => { e.preventDefault(); scrollToSection("discovery"); }}>
                <span className="sheetmask-scroll-line-anim" />
                <span>SCROLL TO DISCOVER</span>
              </a>

              <a href="#collection" className="sheetmask-cta-anchor" onClick={(e) => { e.preventDefault(); scrollToSection("collection"); }}>
                <span>The Proposed Collection</span>
                <span>Explore 4 Formulations →</span>
              </a>

              <div className="sheetmask-concept-tag">
                CONCEPT VISUAL<br />
                PROPOSED HYDROGEL COLLECTION
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------------
          Parallax Banner Section (Home Page Scent Parallax Style)
          -------------------------------------------------------------------- */}
      <section className="scent-parallax-section">
        <div className="sheetmask-container">
          <div className="scent-parallax-content">
            <span className="scent-parallax-eyebrow">Hydrogel Ritual</span>
            <h2>Surrender to Second-Skin Transformation</h2>
            <p>
              SOS isn't just skincare — it's an awakening. Three precision hydrogel zones infuse
              <em> botanical collagen</em>, damask rose, and cooling glacier peptides into every contour for an immediate radiant transformation.
            </p>
            <button
              type="button"
              className="scent-parallax-btn"
              onClick={() => scrollToSection("collection")}
            >
              <span>Explore Formulations</span>
              <ArrowIcon />
            </button>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------
          Chapter 01: The Discovery Section
          -------------------------------------------------------------------- */}
      <section id="discovery" className="sheetmask-section sheetmask-section--alt">
        <div className="sheetmask-container">
          <div className="sheetmask-eyebrow">Chapter 01 / The Discovery</div>
          <h2 className="sheetmask-heading-large">
            Every zone deserves <span className="gold">different care.</span>
          </h2>
          <p className="sheetmask-lead">
            Traditional sheet masks treat the human face as a single uniform surface. Yet your forehead struggles with sebum, under-eyes crave intense moisture, and the jawline demands firming tension. SOS Multi-Zone Hydrogel delivers tailored dermatological actives precisely where each zone needs them.
          </p>

          <div className="sm-discovery-grid">
            <div className="sm-discovery-left">
              <div className="sm-discovery-quote">
                "One face does not have one skin type. We divided the mask so you never have to compromise."
              </div>

              {/* Using Uploaded Image: Untitled_design_8.webp */}
              <div className="sm-discovery-image-box">
                <img
                  src={img("Untitled_design_8.webp")}
                  alt="SOS Luxury skincare ritual"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="sm-discovery-pillars">
              <div className="sm-pillar-card">
                <div className="sm-pillar-num">01 / T-ZONE</div>
                <h3 className="sm-pillar-title">Pore Refinement</h3>
                <p className="sm-pillar-desc">
                  Lavender hydrogel controls sebum and refines pores without stripping natural hydration.
                </p>
              </div>

              <div className="sm-pillar-card">
                <div className="sm-pillar-num">02 / ORBITAL</div>
                <h3 className="sm-pillar-title">7D Hydration</h3>
                <p className="sm-pillar-desc">
                  Ice-blue gel floods the delicate eye contour with multi-molecular hyaluronic acid and cooling peptides.
                </p>
              </div>

              <div className="sm-pillar-card">
                <div className="sm-pillar-num">03 / JAWLINE</div>
                <h3 className="sm-pillar-title">Elastic V-Contour</h3>
                <p className="sm-pillar-desc">
                  Blush matrix grips the lower face, promoting natural collagen and tightening facial contours.
                </p>
              </div>

              <div className="sm-pillar-card">
                <div className="sm-pillar-num">04 / BOTANICALS</div>
                <h3 className="sm-pillar-title">Scent Infusion</h3>
                <p className="sm-pillar-desc">
                  Infused with SOS Damask rose hydrosol and pure Kashmiri saffron for an elevated sensorial ritual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------
          Chapter 02: Multi-Zone Facial Care Explorer
          -------------------------------------------------------------------- */}
      <section id="zones" className="sheetmask-section">
        <div className="sheetmask-container">
          <div className="sheetmask-eyebrow">Chapter 02 / The Three Facial Zones</div>
          <h2 className="sheetmask-heading-large">
            An engineered response to <span className="gold">facial biology.</span>
          </h2>
          <p className="sheetmask-lead">
            Select each facial zone below to explore its tailored active ingredients, dermatological mechanism, and targeted skincare benefits.
          </p>

          <div className="sm-zones-wrapper">
            <div className="sm-zones-visual">
              <img
                src={img("mask-sculpture.webp")}
                alt="SOS Multi-zone sheet mask anatomy"
                className="sm-zones-sculpture-img"
              />
            </div>

            <div className="sm-zone-selector-list">
              {facialZones.map((zone, idx) => (
                <div
                  key={zone.id}
                  className={`sm-zone-tab ${zone.colorClass} ${activeZoneIndex === idx ? "is-active" : ""}`}
                  onClick={() => setActiveZoneIndex(idx)}
                >
                  <div className="sm-zone-tab-header">
                    <span className="sm-zone-tab-title">{zone.title}</span>
                    <span className="sm-zone-tab-badge">{zone.zone}</span>
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--sm-gold)", marginBottom: "8px", fontWeight: "500" }}>
                    {zone.subtitle}
                  </div>
                  <p className="sm-zone-tab-desc">{zone.desc}</p>
                  <div className="sm-zone-tab-ingredients">
                    {zone.ingredients.map((ing, i) => (
                      <span key={i} className="sm-ingredient-pill">
                        ✦ {ing}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------
          Chapter 03: Hydrogel Innovation
          -------------------------------------------------------------------- */}
      <section id="innovation" className="sheetmask-section sheetmask-section--ivory">
        <div className="sheetmask-container">
          <div className="sheetmask-eyebrow">Chapter 03 / Hydrogel Innovation</div>
          <h2 className="sheetmask-heading-large">
            Why hydrogel outperforms <span className="gold">traditional cotton.</span>
          </h2>
          <p className="sheetmask-lead">
            Cotton sheet masks evaporate moisture within 15 minutes, pulling hydration back out of your skin. Our seaweed-derived hydrogel creates a sealed, temperature-sensitive second skin.
          </p>

          <div className="sm-tech-grid">
            <div className="sm-tech-card">
              <div className="sm-tech-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="sm-tech-card-title">Temperature-Triggered Melting</h3>
              <p className="sm-tech-card-desc">
                Upon contacting 36.5°C skin warmth, the inner hydrogel layer slowly liquefies, delivering concentrated micro-serums deep into epidermis.
              </p>
            </div>

            <div className="sm-tech-card">
              <div className="sm-tech-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="sm-tech-card-title">Airtight Moisture Occlusion</h3>
              <p className="sm-tech-card-desc">
                Locks in 99% of serum without evaporation. Your pores drink continuously for 20 full minutes of uninterrupted surrender.
              </p>
            </div>

            <div className="sm-tech-card">
              <div className="sm-tech-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="sm-tech-card-title">100% Water-Soluble Matrix</h3>
              <p className="sm-tech-card-desc">
                Eco-luxury with zero plastic waste. The biodegradable hydrogel dissolves completely in hot water after use to create an essence bath.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------
          Chapter 04: The Proposed Sheet Mask Collection
          -------------------------------------------------------------------- */}
      <section id="collection" className="sheetmask-section">
        <div className="sheetmask-container">
          <div className="sheetmask-eyebrow">Chapter 04 / Proposed Collection</div>
          <h2 className="sheetmask-heading-large">
            Four specialized formulations for <span className="gold">every ritual.</span>
          </h2>
          <p className="sheetmask-lead">
            Designed for the diverse needs of modern skin. From acute dehydration to nighttime cellular repair.
          </p>

          <div className="sm-collection-grid">
            {maskProducts.map((item) => (
              <div key={item.id} className="sm-product-card">
                <div className="sm-product-media">
                  <span className="sm-product-badge">{item.tone}</span>
                  <img src={item.src} alt={item.name} />
                </div>
                <div className="sm-product-body">
                  <div>
                    <h3 className="sm-product-name">{item.name}</h3>
                    <div style={{ fontSize: "11px", color: "var(--sm-gold)", marginBottom: "8px" }}>
                      {item.pack}
                    </div>
                    <p className="sm-product-note">{item.note}</p>
                  </div>

                  <div className="sm-product-footer">
                    <span className="sm-product-price">{item.price}</span>
                    <button
                      type="button"
                      className="sm-add-btn"
                      onClick={() => handleAddToCart(item)}
                    >
                      {addedProductId === item.id ? "Added ✓" : "Add To Bag +"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------
          Chapter 05: The 20-Minute Surrender Ritual
          -------------------------------------------------------------------- */}
      <section id="ritual" className="sheetmask-section sheetmask-section--alt">
        <div className="sheetmask-container">
          <div className="sheetmask-eyebrow">Chapter 05 / The Application Ritual</div>
          <h2 className="sheetmask-heading-large">
            The 20-minute <span className="gold">surrender.</span>
          </h2>
          <p className="sheetmask-lead">
            More than just skincare — an intimate sensorial pause. Transform everyday masking into a luxurious meditative experience.
          </p>

          <div className="sm-ritual-steps">
            {ritualSteps.map((step) => (
              <div key={step.num} className="sm-step-card">
                <div className="sm-step-num">{step.num}</div>
                <h3 className="sm-step-title">{step.title}</h3>
                <p className="sm-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
