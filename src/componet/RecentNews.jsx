import React from "react";
import { news1, news2, news3, blueArrow } from "../assets/Images";

const RecentNews = () => {
  return (
    <div className=" h-auto bg-[#f4f7fa] py-20 px-20">
      <div className="max-container flex flex-col items-center justify-center">
        <h2 className="text-center text-[40px] leading-[52px] font-bold font-poppins text-[#161C2D]">
          In Recent News
        </h2>
        <p className="mt-5 text-center font-poppins text-[24px] text-[#161C2D] leading-[38px]">
          With lots of unique blocks, you can easily build a page without
          coding.
        </p>
      </div>
      <div className="max-container grid grid-cols-3 gap-x-10 mt-16">
        <div className="">
          <p className="font-poppins text-[20px] text-[#161C2D] font-medium">Equity</p>
          <img src={news1} alt="" className="mt-2"/>
          <p className="mt-4 font-poppins font-normal text-[15px] leading-[26px] text-[#161C2D]">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
          <button className="mt-2 flex items-center learnMore font-poppins font-semibold text-[15px] text-[#244896]">
            Learn more
            <span>
              <img src={blueArrow} alt="" />
            </span>
          </button>
        </div>
        <div className="">
          <p className="font-poppins text-[20px] text-[#161C2D] font-medium">Mutual  Funds</p>
          <img src={news2} alt="" className="mt-2"/>
          <p className="mt-4 font-poppins font-normal text-[15px] leading-[26px] text-[#161C2D]">
          With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
          </p>
          <button className="mt-2 flex items-center learnMore font-poppins font-semibold text-[15px] text-[#244896]">
            Learn more
            <span>
              <img src={blueArrow} alt="" />
            </span>
          </button>
        </div>
        <div className="">
          <p className="font-poppins text-[20px] text-[#161C2D] font-medium">Algo Trading</p>
          <img src={news3} alt="" className="mt-2"/>
          <p className="mt-4 font-poppins font-normal text-[15px] leading-[26px] text-[#161C2D]">
          With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
          </p>
          <button className="mt-2 flex items-center learnMore font-poppins font-semibold text-[15px] text-[#244896]">
            Learn more
            <span>
              <img src={blueArrow} alt="" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
