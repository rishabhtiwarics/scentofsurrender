import React from "react";
import { useRef, useState } from "react";
import { ArrowIcon, MutedIcon, PauseIcon, PlayIcon, UnmutedIcon } from "../icons/Icons.jsx";
import { homeBannerPoster, middleVideo } from "../../data/assets.js";

export default function VideoShowcase() {
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) videoRef.current.play();
    else videoRef.current.pause();
    setPaused(!videoRef.current.paused);
  };

  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    if (videoRef.current) videoRef.current.muted = next;
  };

  return (
    <section className="video-section">
      <div className="video-section__frame">
        <video
          ref={videoRef}
          className="video-section__media"
          autoPlay
          muted={muted}
          loop
          playsInline
          poster={homeBannerPoster}
          onPlay={() => setPaused(false)}
          onPause={() => setPaused(true)}
        >
          <source src={middleVideo} type="video/mp4" />
        </video>
      </div>

      <div className="video-section__overlay">
        <h2 className="video-section__title">One Scent. Every Moment.</h2>
        <div className="video-section__cta-wrap">
          <button type="button" className="video-section__ctrl" onClick={togglePlay} aria-label={paused ? "Play video" : "Pause video"} aria-pressed={paused}>
            <PauseIcon hidden={paused} />
            <PlayIcon hidden={!paused} />
          </button>
          <a href="/shop" className="video-section__cta">
            <span>Explore Now</span>
            <ArrowIcon />
          </a>
          <button type="button" className="video-section__ctrl" onClick={toggleMute} aria-label={muted ? "Unmute video" : "Mute video"} aria-pressed={muted}>
            <MutedIcon hidden={!muted} />
            <UnmutedIcon hidden={muted} />
          </button>
        </div>
      </div>
    </section>
  );
}
