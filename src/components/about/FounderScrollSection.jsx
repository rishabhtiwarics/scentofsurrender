import React from "react";
import { Link } from "react-router-dom";
import { img } from "../../data/assets.js";

export default function FounderScrollSection() {
  return (
    <section className="founder-scroll">
        <div className="founder-scroll__inner">
            {/* 75% : Co-Founder Details */}
            <div className="founder-scroll__content">
                <div className="founder-banner__frame-wrap founder-scroll__frame-wrap">
                    <span className="founder-banner__tag">
                        <span className="founder-banner__tag-dot"></span>
                        Co-Founder
                    </span>
                    <div className="founder-banner__tick founder-banner__tick--tl"></div>
                    <div className="founder-scroll__media">
                        <img src={img("founder/Co founder.jpeg")} alt="Co-Founder portrait" />
                    </div>
                    <div className="founder-banner__signature">
                        <div className="founder-banner__signature-mark" style={{background: 'var(--gold)'}}>AM</div>
                        <div className="founder-banner__signature-text">
                            <strong>Arjun Malhotra</strong>
                            <span>Co-Founder</span>
                        </div>
                    </div>
                </div>
                <div className="founder-scroll__text">
                    <span className="section-eyebrow">Meet Our Co-Founder</span>
                    <h2>Crafted with purpose,<span className="name">built to last</span></h2>
                    <p>What began as a small idea in a quiet workshop has grown into a brand rooted in craftsmanship, patience, and an obsession with getting the details right. Every product carries a part of that original vision forward.</p>
                    <p className="founder-scroll__quote">"We don't chase trends. We build things meant to last a lifetime — and beyond."</p>
                    <Link to="/shop" className="btn-gold">
                        Shop Now
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* 25% : Two vertical auto-scrolling image columns */}
            <div className="founder-scroll__gallery">
                <div className="founder-scroll__col">
                    <div className="founder-scroll__track founder-scroll__track--down">
                        <div className="founder-scroll__thumb"><img src={img("instragram/inst1.jpeg")} alt="" /></div>
                        <div className="founder-scroll__thumb"><img src={img("instragram/inst2.png")} alt="" /></div>
                        <div className="founder-scroll__thumb"><img src={img("instragram/inst3.jpeg")} alt="" /></div>
                        <div className="founder-scroll__thumb"><img src={img("instragram/inst4.jpeg")} alt="" /></div>
                        {/* duplicate set for seamless loop */}
                        <div className="founder-scroll__thumb"><img src={img("instragram/inst1.jpeg")} alt="" /></div>
                        <div className="founder-scroll__thumb"><img src={img("instragram/inst2.png")} alt="" /></div>
                        <div className="founder-scroll__thumb"><img src={img("instragram/inst3.jpeg")} alt="" /></div>
                        <div className="founder-scroll__thumb"><img src={img("instragram/inst4.jpeg")} alt="" /></div>
                    </div>
                </div>
                <div className="founder-scroll__col">
                    <div className="founder-scroll__track founder-scroll__track--up">
                        <div className="founder-scroll__thumb"><img src={img("instragram/inst5.png")} alt="" /></div>
                        <div className="founder-scroll__thumb"><img src={img("instragram/inst6.jpeg")} alt="" /></div>
                        <div className="founder-scroll__thumb"><img src={img("instragram/inst7.jpeg")} alt="" /></div>
                        <div className="founder-scroll__thumb"><img src={img("instragram/inst8.png")} alt="" /></div>
                        {/* duplicate set for seamless loop */}
                        <div className="founder-scroll__thumb"><img src={img("instragram/inst5.png")} alt="" /></div>
                        <div className="founder-scroll__thumb"><img src={img("instragram/inst6.jpeg")} alt="" /></div>
                        <div className="founder-scroll__thumb"><img src={img("instragram/inst7.jpeg")} alt="" /></div>
                        <div className="founder-scroll__thumb"><img src={img("instragram/inst8.png")} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
