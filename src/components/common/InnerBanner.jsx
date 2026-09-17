import React from "react";
import { Link } from "react-router-dom";
import { img } from "../../data/assets.js";

export default function InnerBanner({ title }) {
  return (
    <section className="inner-banner">
      <img src={img("innerbanner.jpeg")} alt={title} />
      <section className="inner-banner-wrapper">
        <div className="inner-banner__content">
          <div className="inner-banner__breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>{title}</span>
          </div>
          <h1>{title}</h1>
        </div>
      </section>
    </section>
  );
}