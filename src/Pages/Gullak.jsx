import React, { useEffect } from "react";
import { Navbar, Footer } from "../componet";
import { HeroProduct, FlexComp, UnleashilingProduct } from "../componet/Gullak";
import { Helmet } from "react-helmet";

const Gullak = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Aos.init({duration: 2000});
  }, []);

  const isMobile = window.innerWidth <= 768;
  const backColor = isMobile ? "bg-[#f8f8f8]" : "bg-[#fcfdfe]";
  const navColor = isMobile ? "bg-[#F7F9FA99]" : "bg-[#FCFDFE]";

  return (
    <div>
      <Helmet>
        <meta
          name="title"
          content="Gullak - AC Agarwal"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Simplifying Mutual Fund Investing for a Better Financial Future. Start Investing Effortlessly and Achieve Your Goals with Just a Tap."
        />

        <link rel="canonical" href="https://acagarwal.com/gullak" />
      </Helmet>
      <Navbar navColor={navColor} />
      <HeroProduct />
      <FlexComp />

      <Footer backColor={backColor} />
    </div>
  );
};

export default Gullak;
