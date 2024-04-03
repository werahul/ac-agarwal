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
  PricingPlans,
  Navbar2,
} from "../componet";

const Pricing = () => {
  return (
    <div>
      <Navbar2 />
      <sction>
        <div className="pricingBg px-[200px] flex flex-col  justify-center items-center">
          <h1 className="text-center font-poppins font-normal text-[48px] leading-[64px] text-[#161C2D] tracking-tight">
            India's Most{" "}
            <span className="font-bold">Transparent Pricing Plans.</span> Only
            Pay For What You Use.
          </h1>
          <p className="font-poppins text-[26px] leading-[38px] text-center text-[#161C2D] opacity-70 mt-5">
            No Hidden Charges.
          </p>
        </div>
      </sction>
      <section className="bg-[#F4F7FA]">
        <PricingCalc />
      </section>
      <PricingPlans />
      <Cta />
      <Footer />
    </div>
  );
};

export default Pricing;
