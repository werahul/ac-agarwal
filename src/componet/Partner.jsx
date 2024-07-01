import React from "react";
import {
  line,
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
} from "../assets/Images";

const Partner = () => {
  return (
    <div className="max-container px-20 py-20">
      <img src={line} alt="line" />
      <div className="font-poppins text-[#161C2D] mt-6">
        <p className="font-normal text-[32px] ">Many companies</p>
        <p className="font-bold text-[32px] ">have partnered with us</p>
      </div>

      <div className="flex space-x-10 items-center mt-10">
        <img src={partner1} alt="partner1"  className="w-[130px] h-[30px]" />
        <img src={partner2} alt="partner2"  className="w-[190px] h-[32px]" />
        <img src={partner3} alt="partner3"  className="w-[141px] h-[32px]" />
        <img src={partner4} alt="partner4"  className="w-[68px] h-[28px]" />
        <img src={partner5} alt="partner5"  className="w-[115px] h-[30px]" />
      </div>
    </div>
  );
};

export default Partner;
