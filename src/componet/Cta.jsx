import React from "react";
import { ctaImg, ArrowRight } from "../assets/Images";

const Cta = () => {
  return (
    <div className="px-20 py-20 ctaBg">
      <div className="max-container flex items-center space-x-5">
        <img src={ctaImg} alt="" className="w-32" />

        <div className="">
          <p className="font-poppins font-bold text-[40px] text-[#161C2D]">
            Open Your Account In 5 Mins
          </p>
          <p className="w-[70%] font-poppins font-normal text-[18px] text-[#161C2D]">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>

        <button className="flex items-center justify-center w-auto px-5 h-[56px] rounded-[55px] bg-[#244896] text-white font-bold text-[18px] whitespace-nowrap font-poppins check-out-btn">
          Sign Up Now{" "}
          <span className="ml-3">
            <img src={ArrowRight} alt="" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Cta;
