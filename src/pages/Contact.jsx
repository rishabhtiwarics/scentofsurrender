import React from "react";
import InnerBanner from "../components/common/InnerBanner.jsx";
export default function Contact() {
  return <main><InnerBanner title="Contact" eyebrow="Talk To Us" text="Questions about orders, gifting, or scent selection? We are here to help." /><section className="page-section contact-layout"><div><span className="section-eyebrow">Customer Care</span><h2>We would love to hear from you.</h2><p>Email: care@scentofsurrender.com</p><p>Phone: +91 98765 43210</p><p>Hours: Monday to Saturday, 10 AM - 7 PM</p></div><form className="contact-form"><input placeholder="Your name" /><input type="email" placeholder="Email address" /><textarea rows="5" placeholder="Message"></textarea><button type="button">Send Message</button></form></section></main>;
}
