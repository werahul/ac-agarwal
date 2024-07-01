import React, { useEffect } from "react";
import { Footer, Footer2, Navbar} from "../componet";
import { ArrowRight, xtsMain } from "../assets/Images";
import KeyFeature from "../componet/Xts/KeyFeature";
import { Helmet } from "react-helmet";

const Xts = () => {
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
          content="XTS API - AC Agarwal"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Effortless Trading with Super Simple API's Empower your strategies with the ultimate tool for seamless integration and unmatched performance in the trading world."
        />

        <link rel="canonical" href="https://acagarwal.com/xts-api" />
      </Helmet>
      <Navbar navColor={navColor} />
      <section className="lg:px-20 lg:pt-32 px-5 pt-20">
        <div className="flex flex-col items-center justify-center">
          <img src={xtsMain} alt="" className="lg:w-[450px] w-[240px]" />
          <p className="font-poppins font-medium lg:text-[52px] text-[32px] lg:leading-[66px] leading-[44px] text-center text-[#161C2DCC] mt-20">
            Effortless Trading <br />
            with Super Simple API's
          </p>
          <p className="font-poppins lg:text-[28px] text-[15px] lg:leading-[40px] leading-[26px] text-center text-[#161C2D] opacity-70 lg:w-[870px] mt-8">
            Empower your strategies with the ultimate tool for seamless
            integration and unmatched performance in the trading world.
          </p>
          <a href="https://kyc.acagarwal.com/" target="_blank">
            <button className="lg:mt-14 mt-10 flex items-center justify-center  lg:w-[184px] w-[171px] lg:h-[57px] h-[50px] font-poppins bg-[#244896] tracking-tight lg:hover:bg-[#6688d1] transition-all  text-white font-normal text-[17px] rounded-[10px]">
              {" "}
              Get Started{" "}
            </button>
          </a>
        </div>
      </section>
      <section>
        <KeyFeature />
      </section>
      <Footer backColor={backColor} />
    </div>
  );
};

export default Xts;
