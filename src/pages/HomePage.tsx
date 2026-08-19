import React from "react";
import HeroSection from "../components/home/HeroSection";
import TickerBanner from "../components/home/TickerBanner";
import AboutTeaser from "../components/home/AboutTeaser";
import ServicesHighlight from "../components/home/ServicesHighlight";
import PortfolioTeaser from "../components/home/PortfolioTeaser";
import TestimonialsSection from "../components/home/TestimonialsSection";
import VisitCtaSection from "../components/home/VisitCtaSection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TickerBanner />
      <AboutTeaser />
      <ServicesHighlight />
      <PortfolioTeaser />
      <TestimonialsSection />
      <VisitCtaSection />
    </div>
  );
}
