import React from "react";
const messages = [
  "Free shipping on orders above Rs. 1999",
  "New arrival - Liquid Gold Eau de Parfum",
  "100% authentic, alcohol-free long-lasting formula",
  "Cash on delivery available",
  "Complimentary engraving on every bottle",
];
export default function TopHeader() {
  const renderGroup = (suffix = "") => messages.map((message) => <span key={`${message}${suffix}`}><span>{message}</span><span className="topbar__sep" /></span>);
  return <div className="topbar"><div className="topbar__marquee"><div className="topbar__track"><span className="topbar__group">{renderGroup()}</span><span className="topbar__group" aria-hidden="true">{renderGroup("copy")}</span></div></div></div>;
}
