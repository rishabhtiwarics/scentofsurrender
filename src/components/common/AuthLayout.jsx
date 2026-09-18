import React from "react";
import { Link } from "react-router-dom";
import { img } from "../../data/assets.js";
import { ChevronLeft } from "./Icons.jsx";
export default function AuthLayout({ title, subtitle, icon: Icon, children, footer }) {
  return (
    <main className="auth-page">
      <div className="auth-page__media">
        <Link to="/">
          <img className="auth-media__logo" src={img("SOS_Logo_main.png")} alt="SOS" />
        </Link>
        <picture className="auth-media__bg-picture">
          <source media="(max-width: 768px)" srcSet={img("authimgmobile.jpeg")} />
          <img className="auth-media__bg" src={img("authimg.jpeg")} alt="Scent of Surrender" />
        </picture>
        <Link to="/" className="auth-card__home">
          <ChevronLeft size={16} /> Back to home
        </Link>
      </div>
      <section className="auth-card">
        {Icon && <div className="auth-card__icon"><Icon size={24} /></div>}
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {children}
        <div className="auth-card__footer">{footer}</div>
      </section>
    </main>
  );
}

