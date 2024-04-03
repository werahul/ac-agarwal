import React from "react";
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
  HomeCustomizedPricing
} from "../componet";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroNew />
      <HomeInvo />
      <HomeCustomizedPricing/>
      
      <Footer />
    </div>
  );
};

export default Home;
