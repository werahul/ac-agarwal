import React from "react";
import {
  ArrowRight,
  heroImageNew1,
  heroImageNew2,
  heroImageNew3,
  userFriendlyBroker,
  heroImageNew1Mobile,
} from "../../assets/Images";

const HeroProduct = () => {
  return (
    <div className="lg:pt-32 lg:pb-20 pt-20 lg:px-20 px-5 lg:bg-[#fcfdfe] bg-[#ffffff]">
      <div className="max-container">
        <div className="flex flex-col items-center justify-center mb-24">
          <h1 className="lg:block hidden font-poppins text-center font-medium lg:text-[52px] text-[30px] lg:leading-[66px] leading-[50px] tracking-tight text-[#161C2DCC]">
            Innovative tools for <br />
            effortless trading and investing
          </h1>
          <h1 className="lg:hidden block font-poppins text-center font-medium  text-[30px]  leading-[50px] tracking-tight text-[#161C2DCC] lg:mb-2 mb-1">
            Innovative tools
          </h1>
          <p className="lg:hidden  block font-normal font-poppins text-center   text-[22px]  leading-[30px] tracking-tight text-[#161C2DCC]">for effortless trading and investing</p>
          <p className="font-poppins text-center lg:text-[28px] text-[15px] lg:leading-[28px]  leading-[28px] lg:px-0 px-10 text-[#161C2D] opacity-60 lg:mt-8 mt-6">
            Sleek, modern, and intuitive trading platforms
          </p>
          {/*<button className="lg:mt-14 mt-10 flex items-center justify-center  w-auto lg:h-[57px] h-[50px] font-poppins bg-[#244896] tracking-tight hover:bg-[#6688d1] transition-all lg:px-6 px-4 text-white font-normal text-[17px] rounded-[10px]">
            {" "}
            Our Offerings{" "}
            <span>
              <img src={ArrowRight} alt="" className="ml-3" />
            </span>
  </button>*/}
        </div>
        
      </div>
    </div>
  );
};

export default HeroProduct;
