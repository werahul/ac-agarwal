import React from "react";
import {
  ArrowRight,
  heroImageNew1,
  heroImageNew2,
  heroImageNew3,
  userFriendlyBroker,
  heroImageNew1Mobile,
} from "../assets/Images";

const HeroNew = () => {
  return (
    <div className="lg:py-20 py-10 lg:px-20 px-5 homeNewBg">
      <div className="max-container">
        <div className="lg:hidden block">
          <img src={heroImageNew1Mobile} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-poppins text-center font-semibold lg:text-[56px] text-[38px] leading-[56px] tracking-tight text-[#161C2D]">
            Trade, Invest, Grow
          </h1>
          <p className="font-poppins lg:text-[28px] text-[20px] lg:leading-[28px] leading-[20px] text-[#161C2D] opacity-50 lg:mt-6 mt-3">
            Your complete broking partner
          </p>
          <button className="mt-14 flex items-center justify-center  w-auto lg:h-[57px] h-[50px] font-poppins bg-[#244896] tracking-tight hover:bg-[#6688d1] transition-all px-8 text-white font-normal text-[17px] rounded-[10px]">
            {" "}
            Sign up now{" "}
            <span>
              <img src={ArrowRight} alt="" className="ml-3" />
            </span>
          </button>
        </div>
        <div className="lg:flex hidden relative justify-center lg:mt-20 lg:px-20 px-5">
          <img src={heroImageNew1} alt="" className="" />
        </div>
        <div className="flex flex-col text-center items-center justify-center lg:mt-20 mt-28">
          <img src={userFriendlyBroker} alt="" className="lg:w-[300px] w-[200px]" />

          <p className="font-poppins font-semibold lg:text-[46px] text-[32px] lg:leading-[60px] leading-[42px] tracking-tight text-[#161C2D] mt-4">
            India’s Most <br />
            User-Friendly Broker
          </p>
          <p className="font-poppins text-center  lg:text-[28px] text-[20px] leading-[38px] text-[#161C2D] opacity-60 lg:mt-5 mt-3">
            Empowering{" "}
            <span className="font-semibold lg:text-[34px] text-[20px]">
              {" "}
              30,000+ Esteemed Clients{" "}
            </span>{" "}
            with <br className="lg:block hidden"/>
            Tailored Solutions and Exceptional Service
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroNew;
