import React from "react";
import { useEffect, useRef, useState } from "react";
import { ArrowIcon, MutedIcon, UnmutedIcon } from "../icons/Icons.jsx";
import { homeBannerPoster, instagramVideo } from "../../data/assets.js";
export default function FloatingVideoWidget() {
  const videoRef = useRef(null);
  const [closed, setClosed] = useState(false);
  const [visible, setVisible] = useState(false);
  const [muted, setMuted] = useState(true);
  useEffect(() => {
    const onFloatScroll = () => {
      if (closed) return;
      const heroSection = document.getElementById("hero");
      const heroBottom = heroSection ? heroSection.getBoundingClientRect().bottom : -1;
      setVisible(heroBottom <= 0 || !heroSection);
    };
    window.addEventListener("scroll", onFloatScroll, { passive: true });
    onFloatScroll();
    return () => window.removeEventListener("scroll", onFloatScroll);
  }, [closed]);
  const closeWidget = () => { setClosed(true); setVisible(false); videoRef.current?.pause(); };
  const toggleMute = () => { const next = !muted; setMuted(next); if (videoRef.current) videoRef.current.muted = next; };
  return <div className={`float-widget ${visible && !closed ? "is-visible" : ""}`}><div className="float-widget__card"><video ref={videoRef} className="float-widget__media" autoPlay muted={muted} loop playsInline poster={homeBannerPoster}><source src={instagramVideo} type="video/mp4" /></video><button type="button" className="float-widget__close" onClick={closeWidget} aria-label="Close"><svg viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button><button type="button" className="float-widget__mute" onClick={toggleMute} aria-pressed={muted}><MutedIcon hidden={!muted} /><UnmutedIcon hidden={muted} /><span className="float-widget__mute-label">{muted ? "Muted" : "Unmuted"}</span></button></div><a href="/shop" className="float-widget__cta"><span>Explore Now</span><ArrowIcon /></a></div>;
}

