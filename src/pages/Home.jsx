import React from "react";
import HeroSection from "../components/home/HeroSection.jsx";
import HeroNewArrivalSection from "../components/home/HeroNewArrivalSection.jsx";
import TrustStrip from "../components/home/TrustStrip.jsx";
import NewArrivalSection from "../components/home/NewArrivalSection.jsx";
import CollectionSection from "../components/home/CollectionSection.jsx";
import ScentParallaxSection from "../components/home/ScentParallaxSection.jsx";
import VideoShowcase from "../components/home/VideoShowcase.jsx";
import ReelsSection from "../components/home/ReelsSection.jsx";
import TestimonialsSection from "../components/home/TestimonialsSection.jsx";

export default function Home() {
  return <main><HeroSection /><TrustStrip /><HeroNewArrivalSection /><VideoShowcase /><CollectionSection /><ScentParallaxSection /><ReelsSection /><TestimonialsSection /><NewArrivalSection /></main>;
}


