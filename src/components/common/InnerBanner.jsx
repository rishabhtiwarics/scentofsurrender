import React from "react";
import { img } from "../../data/assets.js";
export default function InnerBanner({ title, eyebrow, text }) {
  return <section className="inner-banner"><img src={img("bannerhome/bnnrhome2.jpeg")} alt={title} /><div className="inner-banner__overlay"></div><div className="inner-banner__content"><span>{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section>;
}

