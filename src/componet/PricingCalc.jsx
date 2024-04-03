import React from "react";
import { ArrowRight } from "../assets/Images";

const PricingCalc = () => {
  return (
    <div className="max-container px-20 py-20">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center text-[40px] leading-[52px] font-bold font-poppins text-[#161C2D]">
          Pricing Calculators
        </h2>
        <p className="mt-5 w-[60%] text-center font-poppins text-[24px] text-[#161C2D] leading-[38px] opacity-80">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>
      <div className="grid grid-cols-2 px-10 gap-x-7 mt-20">
        <div className="relative w-full h-[321px] rounded-[20px] p-7 bg-[#E2EBFF]">
          <h2 className="text-[32px] font-bold font-poppins leading-[38px] text-[#061C3D]">
            Brokerage Calculator
          </h2>
          <p className="mt-3 mb-7  text-[23px] w-[90%] font-normal font-poppins leading-[35px] text-[#42526B]">
            Calculate exactly how much you will pay in brokerage and your
            breakeven.
          </p>

          <button className="absolute bottom-10 w-[190px] h-[57px] rounded-[60px] bg-[#244896] font-poppins font-bold text-[19px] text-white flex items-center justify-center check-out-btn">
            {" "}
            Explore
            <span>
              <img src={ArrowRight} alt="" />
            </span>
          </button>
        </div>
        <div className="relative w-full h-[321px] rounded-[20px] p-7 bg-[#CED9C857]">
          <h2 className="text-[32px] font-bold font-poppins leading-[38px] text-[#061C3D]">
          Margin Calculator
          </h2>
          <p className="mt-3 mb-7  text-[23px] w-[90%] font-normal font-poppins leading-[35px] text-[#42526B]">
          Calculate the margin money required to construct your portfolio.

          </p>

          <button className="absolute bottom-10 w-[190px] h-[57px] rounded-[60px] bg-[#618D42] font-poppins font-bold text-[19px] text-white flex items-center justify-center check-out-btn-green">
            {" "}
            Explore
            <span>
              <img src={ArrowRight} alt="" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCalc;
