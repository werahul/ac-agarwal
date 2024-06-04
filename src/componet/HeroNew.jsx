import React from "react";
import {
  ArrowRight,
  heroImageNew1,
  heroImageNew2,
  heroImageNew3,
  userFriendlyBroker,
  heroImageNew1Mobile,
  accLogoMobile,
} from "../assets/Images";

const HeroNew = () => {
  return (
    <div className="lg:pt-[145px] lg:pb-20 pt-[62px] pb-20 lg:px-20 px-5 homeNewBg ">
      <div className="max-container">
        <div className="lg:hidden flex items-center justify-center flex-col">
         
          <img src={heroImageNew1Mobile} alt="" className="mb-10" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-poppins text-center font-medium lg:text-[52px] text-[30px] leading-[56px] tracking-tight text-[#161C2DCC]">
            Trade, Invest, Grow
          </h1>
          <p className="font-poppins lg:text-[28px] text-[22px] lg:leading-[28px] leading-[20px] text-[#161C2D] lg:opacity-80 opacity-80 lg:mt-10 mt-3 z-0">
            Your complete broking partner
          </p>
          <a
            href="https://kyc.acagarwal.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-16 flex items-center justify-center  lg:w-[194px] w-[174px] lg:h-[57px] h-[47px] font-poppins bg-[#244896] tracking-tight lg:hover:bg-[#6688d1] transition-all  text-white font-normal text-[17px] rounded-[10px]">
              {" "}
              Sign up now{" "}
            </button>
          </a>
        </div>
        <div className="lg:flex hidden relative justify-center lg:mt-20 lg:px-20 px-5">
          <img src={heroImageNew1} alt="" className="" />
        </div>
        <div className="flex flex-col text-center items-center justify-center lg:mt-20 mt-28">
          <img
            src={userFriendlyBroker}
            alt=""
            className="lg:w-[300px] w-[200px]"
          />

          <p className="font-poppins font-medium lg:text-[42px] text-[30px] lg:leading-[60px] leading-[42px] tracking-tight text-[#161C2DCC] mt-4">
            India’s Most <br />
            User-Friendly Broker
          </p>
          <p className="font-poppins text-center  lg:text-[28px] text-[20px] leading-[38px] text-[#161C2D] opacity-80 lg:mt-7 mt-3">
            Empowering{" "}
            <span className="font-semibold lg:text-[34px] text-[20px]">
              {" "}
              30,000+ Esteemed Clients{" "}
            </span>{" "}
            with <br className="lg:block hidden" />
            Tailored Solutions and Exceptional Service
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroNew;
