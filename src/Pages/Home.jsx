import React, { useEffect } from "react";
import {
  Navbar,
  Hero,
  Twitter,
  PricingCalc,
  RecentNews,
  Partner,
  Cta,
  Footer,
  HeroNew,
  HomeInvo,
  HomeCustomizedPricing,
} from "../componet";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Aos.init({duration: 2000});
  }, []);

  const isMobile = window.innerWidth <= 768;
  const backColor = isMobile ? "bg-[#f8f8f8]" : "bg-[#fcfdfe]";
  const navColor = isMobile ? "bg-[#F7F9FA99]" : "bg-[#FCFDFE]";
  return (
    <div>
      <Navbar navColor={navColor} />
      <HeroNew />
      <HomeInvo />
      <HomeCustomizedPricing />
      <Footer backColor={backColor} />
    </div>
  );
};

export default Home;
