import React from "react";
import { Link } from "react-router-dom";
import { img } from "../../data/assets.js";
export default function AuthLayout({ title, subtitle, children, footer }) {
  return <main className="auth-page"><div className="auth-page__media"><img src={img("bannerhome/bnnrhome1.jpeg")} alt="Scent of Surrender" /></div><section className="auth-card"><img className="auth-card__logo" src={img("Logo.png")} alt="SOS" /><h1>{title}</h1><p>{subtitle}</p>{children}<div className="auth-card__footer">{footer}</div><Link to="/" className="auth-card__home">Back to home</Link></section></main>;
}

