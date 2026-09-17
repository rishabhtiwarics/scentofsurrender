import React from "react";
import { Link } from "react-router-dom";
import { img } from "../../data/assets.js";

const marketplaceLogos = [
  {
    src: "https://milletmaniaorganic.com/cdn/shop/files/2_27e93518-e2e2-41c3-b127-5c2815b213ac.png?v=1742473381&width=300",
    alt: "Available marketplace logo",
  },
  {
    src: "https://milletmaniaorganic.com/cdn/shop/files/3_52079da6-4fe8-43bb-806c-8db682eb55b3.png?v=1742473381&width=300",
    alt: "Available marketplace logo",
  },
];

function FacebookIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 8.2h2.4V4.4c-.4-.1-1.8-.2-3.4-.2-3.4 0-5.6 2.1-5.6 5.8v3.2H3.8v4.2h3.6V24h4.4v-6.6h3.5l.6-4.2h-4.1V10.4c0-1.2.3-2.2 2.2-2.2z" fill="currentColor" /></svg>;
}

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.4" cy="6.8" r="1.1" fill="currentColor" /></svg>;
}

function LocationIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21s7-5.8 7-12a7 7 0 1 0-14 0c0 6.2 7 12 7 12z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.8" /></svg>;
}

function MailIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3.5" y="5.5" width="17" height="13" rx="2.2" stroke="currentColor" strokeWidth="1.8" /><path d="m5 8 7 5 7-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function PhoneIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8.2 4.5 10 8.6c.3.7.1 1.4-.5 1.8l-1.4 1a11.3 11.3 0 0 0 4.6 4.6l1-1.4c.4-.6 1.2-.8 1.8-.5l4.1 1.8c.8.3 1.1 1.1.9 1.9l-.7 2.3c-.2.7-.9 1.2-1.6 1.2C9.7 21.3 2.7 14.3 2.7 5.8c0-.7.5-1.4 1.2-1.6l2.3-.7c.8-.2 1.6.2 2 1z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>;
}

function TopArrowIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="m6 11 6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="footer-wrapper">
      <div className="footer-watermark" aria-hidden="true">
        <div className="footer-watermark__track">
          <span className="footer-watermark__group">
            <span>SCENT OF SURRENDER</span>
            <span>SCENT OF SURRENDER</span>
            <span>SCENT OF SURRENDER</span>
          </span>
          <span className="footer-watermark__group">
            <span>SCENT OF SURRENDER</span>
            <span>SCENT OF SURRENDER</span>
            <span>SCENT OF SURRENDER</span>
          </span>
        </div>
      </div>
      <footer className="footer">
        <button className="footer__to-top" type="button" aria-label="Scroll to top" onClick={handleScrollTop}>
          <TopArrowIcon />
        </button>
        <div className="footer__info-block">
          <div className="footer__info-inner">
            <div className="footer__panel footer__panel--brand">
              <img className="footer__logo" src={img("SOS_Logo_main.png")} alt="Scent of Surrender" />
              <p className="footer__copy">Luxury fragrances crafted for quiet confidence, lasting memories, and the art of surrendering to your signature scent.</p>
              <div className="footer__socials" aria-label="Social links">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookIcon /></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon /></a>
              </div>
            </div>

            <div className="footer__panel footer__panel--contact">
              <h3>Contact</h3>
              <a href="https://maps.google.com/?q=India" target="_blank" rel="noreferrer"><LocationIcon /><span>Scent of Surrender, India</span></a>
              <a href="mailto:care@scentofsurrender.com"><MailIcon /><span>care@scentofsurrender.com</span></a>
              <a href="tel:+919876543210"><PhoneIcon /><span>+91 98765 43210</span></a>
            </div>

            <div className="footer__panel footer__panel--available">
              <h3>Available At</h3>
              <div className="footer__marketplaces">
                {marketplaceLogos.map((logo) => (
                  <a className="footer__marketplace" href="#" key={logo.src} aria-label={logo.alt}>
                    <img src={logo.src} alt={logo.alt} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom-block">
          <div className="footer__bottom-inner">
            <div className="footer__legal-links">
              <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/refund-policy">Refund Policy</Link>
            </div>
            <p>Copyright © 2026 Scent of Surrender. All rights reserved. / Created By <a href="https://www.launchveda.com/" target="_blank" rel="noreferrer">Launchveda</a></p>
          </div>
        </div>
      </footer>
    </section>
  );
}

