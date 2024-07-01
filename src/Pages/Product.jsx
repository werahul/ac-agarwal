import React, { useEffect } from "react";
import { Navbar, Footer } from "../componet";
import {
  HeroProduct,
  FlexComp,
  UnleashilingProduct,
} from "../componet/Product";
import { Helmet } from "react-helmet";

const Product = () => {
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
          content="Product - AC Agarwal"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Innovative tools for effortless trading and investing"
        />

        <link rel="canonical" href="https://acagarwal.com/product" />
      </Helmet>
      <Navbar navColor={navColor} />
      <HeroProduct />
      <FlexComp />
      <UnleashilingProduct />
      <Footer backColor={backColor} />
    </div>
  );
};

export default Product;
