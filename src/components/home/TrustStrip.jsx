import React from "react";
const items = [
  ["Free Shipping", "On orders above Rs. 1000", "M2.5 6.5h11v9h-11z"],
  ["Secure Payment", "100% secure transactions", "M12 3l7 3v5.5c0 4.5-3 7.7-7 9.5-4-1.8-7-5-7-9.5V6l7-3z"],
  ["Premium Quality", "Handpicked products", "M12 2.5l2.6 5.6 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6-4.4-4.2 6-.8z"],
  ["Special Offers", "Exclusive deals for you", "M3.5 9h17v11.5h-17z"],
];
export default function TrustStrip() {
  return <section className="trust-strip"><div className="trust-strip__inner">{items.map(([title, text, path]) => <div className="trust-item" key={title}><div className="trust-item__icon"><svg viewBox="0 0 24 24" fill="none"><path d={path} stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="16.5" cy="17.5" r="0" /></svg></div><div className="trust-item__text"><h3>{title}</h3><p>{text}</p></div></div>)}</div></section>;
}
