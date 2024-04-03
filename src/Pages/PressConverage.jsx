import React from "react";
import { Footer2, Navbar, PressCoverageGrid } from "../componet";
import { line2 } from "../assets/Images";

const PressCoverage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="pressCovBg">
      <div className="max-container px-20 py-10 h-auto">
        <div className="my-10">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-poppins font-semibold text-[55px] leading-[66px] tracking-tight text-[#161C2D]">
              Press Coverage
            </h1>
            <p className="text-[26px] leading-[26px] tracking-tight font-dmSans text-[#161C2D] opacity-80 mt-5">
              News coverage of AC Agarwal on leading publications.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-20">
          <p className="font-poppins font-bold text-[30px] text-[#161C2D] leading-[30px]">
            Press Coverage
          </p>
          <img src={line2} alt="" />
        </div>

        <PressCoverageGrid/>
        
      </div>
      <Footer2/>
      </div>
    </div>
  );
};

export default PressCoverage;
