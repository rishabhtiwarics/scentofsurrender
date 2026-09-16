import React from "react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { instagramPosts, instagramVideo } from "../../data/assets.js";
import { ArrowIcon } from "../icons/Icons.jsx";
const titles = ["Fragrances for\neverywhere you go", "International\nFragrance Day", "24Seven Floral\nx Alaya", "Face Of The\nSeason", "Notes From\nA Perfumer", "SOS Store\nSeawoods Mall", "Modern\nClassic Aura", "Signature\nMoments"];
function ReelCard({ src, title }) {
  const videoRef = useRef(null);
  const [active, setActive] = useState(false);
  const play = () => { setActive(true); if (videoRef.current) { videoRef.current.currentTime = 0; videoRef.current.play().catch(() => {}); } };
  const pause = () => { setActive(false); if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; } };
  const toggleTouch = () => (active ? pause() : play());
  return <article className={`reel-card ${active ? "is-touch-active" : ""}`} onMouseEnter={play} onMouseLeave={pause} onTouchStart={toggleTouch}><img className="reel-card__img reel-card__poster" src={src} alt={title.replace("\n", " ")} /><video ref={videoRef} className="reel-card__img reel-card__video" muted loop playsInline preload="metadata" aria-hidden="true"><source src={instagramVideo} type="video/mp4" /></video><div className="reel-card__scrim"></div><div className="reel-card__bar"><Link to="/shop" className="reel-card__title"><span>{title.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</span><span className="reel-card__arrow"><ArrowIcon /></span></Link></div></article>;
}
export default function ReelsSection() {
  const cards = instagramPosts.map((src, index) => ({ src, title: titles[index] }));
  return <section className="reels-section"><div className="reels-section__head"><span className="reels-section__eyebrow">In The Frame</span><h2 className="reels-section__title">Watch &amp; Shop The Story</h2></div><div className="reels-marquee"><div className="reels-marquee__track"><div className="reels-marquee__group">{cards.map((card) => <ReelCard key={card.src} {...card} />)}</div><div className="reels-marquee__group" aria-hidden="true">{cards.map((card) => <ReelCard key={`${card.src}-copy`} {...card} />)}</div></div></div></section>;
}
