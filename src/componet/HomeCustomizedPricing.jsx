import React from "react";
import { customizedPricing } from "../assets/Images";
import { a1, a2, a3, a4, a5, a6, BigI, rightArrow } from "../assets/newImages";
import { HomeGridMobile } from ".";

const HomeCustomizedPricing = () => {
  return (
    <div className="lg:px-20 px-5 lg:py-0 py-10 bg-[#fcfdfe]">
      <div className="mt-10 max-container">
        <div className="flex flex-col items-center justify-center">
          <h2 className=" text-center lg:text-[46px] text-[32px] lg:leading-[52px] leading-[42px] font-semibold tracking-tighter font-poppins text-[#161C2D]">
            The Difference <br className="lg:hidden block" /> in Our Approach
          </h2>
          <p className="lg:mt-5 mt-4 lg:w-[60%] text-center font-poppins lg:text-[28px] text-[20px] text-[#161C2D] lg:leading-[38px] leading-[20px] opacity-80">
            Unmatched Capacity
          </p>
        </div>
        <div className="lg:grid hidden lg:grid-cols-2 px-0 justify-items-center lg:mt-20 mt-5 mb-10">
          <div className="relative flex items-start space-x-4 w-full h-[280px] rounded-[20px] p-7 ">
            <img src={a1} alt="" className="w-9" />
            <div>
              <h2 className="text-[22px] font-bold font-poppins leading-[30px] text-[#161C2D]">
                Ready for Growth
              </h2>
              <p className="mt-3 mb-4  text-[17px] w-[90%] font-normal font-poppins text-[#161C2D]">
                Our daily{" "}
                <span className="font-semibold text-[17px]">
                  operations run below 30% of our server capacity,{" "}
                </span>
                ensuring that when you're ready to expand, we're more than
                capable of supporting you.
              </p>
              <p className="linkImg">
                <a
                  href="#"
                  className="flex font-poppins font-medium text-[17px]  items-center "
                >
                  <span>Click to learn more </span>
                  <img src={rightArrow} alt="" className="w-[12px]" />
                </a>
              </p>
            </div>
          </div>
          <div className="relative flex items-start space-x-4 w-full h-[280px] rounded-[20px] p-7 ">
            <img src={a2} alt="" className="w-9" />
            <div>
              <h2 className="text-[22px] font-bold font-poppins leading-[30px] text-[#161C2D]">
                Dedicated Support
              </h2>
              <p className="mt-3 mb-4  text-[17px] w-[90%] font-normal font-poppins text-[#161C2D]">
                With one team member for every 100 active clients, our dedicated
                support ensures that your needs are addressed promptly and
                personally.
              </p>
              <p className="linkImg">
                <a
                  href="#"
                  className="flex font-poppins font-medium text-[17px] items-center "
                >
                  <span>Click to learn more </span>
                  <img src={rightArrow} alt="" className="w-[12px]" />
                </a>
              </p>
            </div>
          </div>
          <div className="relative flex items-start space-x-4 w-full h-[280px] rounded-[20px] p-7 ">
            <img src={a3} alt="" className="w-9" />
            <div>
              <h2 className="text-[22px] font-bold font-poppins leading-[30px] text-[#161C2D]">
                No Sales Pressure
              </h2>
              <p className="mt-3 mb-4  text-[17px] w-[90%] font-normal font-poppins  text-[#161C2D]">
                Focus on What Matters: With no sales team to pressure you, our
                relationship is built on trust and your success. We're here to
                support, not to sell.
              </p>
              <p className="linkImg">
                <a
                  href="#"
                  className="flex font-poppins font-medium text-[17px]  items-center "
                >
                  <span>Click to learn more </span>
                  <img src={rightArrow} alt="" className="w-[12px]" />
                </a>
              </p>
            </div>
          </div>
          <div className="relative flex items-start space-x-4 w-full h-[280px] rounded-[20px] p-7 ">
            <img src={a4} alt="" className="w-9" />
            <div>
              <h2 className="text-[22px] font-bold font-poppins leading-[30px] text-[#161C2D]">
                Accessible Founders
              </h2>
              <p className="mt-3 mb-4  text-[17px] w-[90%] font-normal font-poppins text-[#161C2D]">
                Direct Access to Decision-Makers: Our founders aren't just names
                on a website; they're your personal consultants in your
                financial journey.
              </p>
              <p className="linkImg">
                <a
                  href="#"
                  className="flex font-poppins font-medium text-[17px]  items-center"
                >
                  <span>Click to learn more </span>
                  <img src={rightArrow} alt="" className="w-[12px]" />
                </a>
              </p>
            </div>
          </div>
          <div className="relative flex items-start space-x-4 w-full h-[280px] rounded-[20px] p-7 ">
            <img src={a5} alt="" className="w-9" />
            <div>
              <h2 className="text-[22px] font-bold font-poppins leading-[30px] text-[#161C2D]">
                Reliable Tech
              </h2>
              <p className="mt-3 mb-4  text-[17px] w-[90%] font-normal font-poppins text-[#161C2D]">
                Empower Your Trading with Our Dual Application Advantage: Access
                two full-fledged trading applications designed for peak
                performance.
              </p>
              <p className="linkImg">
                <a
                  href="#"
                  className="flex font-poppins font-medium text-[17px]  items-center "
                >
                  <span>Click to learn more </span>
                  <img src={rightArrow} alt="" className="w-[12px]" />
                </a>
              </p>
            </div>
          </div>
          <div className="relative flex items-start space-x-4 w-full h-[280px] rounded-[20px] p-7 ">
            <img src={a6} alt="" className="w-9" />
            <div>
              <h2 className="text-[22px] font-bold font-poppins leading-[30px] text-[#161C2D]">
                Exclusive Benefits
              </h2>
              <p className="mt-3 mb-4  text-[17px] w-[90%] font-normal font-poppins text-[#161C2D]">
                Big Broker Benefits, Small Broker Attention: Get the best of
                both worlds—advanced tools and personal guidance tailored to
                your needs.
              </p>
              <p className="linkImg">
                <a
                  href="#"
                  className="flex font-poppins font-medium text-[17px]  items-center "
                >
                  <span>Click to learn more </span>
                  <img src={rightArrow} alt="" className="w-[12px]" />
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="lg:hidden block mb-10">
          <HomeGridMobile />
        </div>

        <p className="text-center font-poppins lg:text-[17px] text-[14px] font-semibold text-[#161C2D] mb-20">
          Haven’t got your answer?{" "}
          <span className="text-[#244896] cursor-pointer">
            Contact our support now
          </span>
        </p>
      </div>
      <div className="max-container">
        <hr className="mb-20" />
        <div className="flex flex-col items-center justify-center">
          <img
            src={customizedPricing}
            alt=""
            className="lg:w-[300px] w-[220px]"
          />
          <p className="font-poppins font-semibold lg:text-[46px] text-[32px] text-center lg:leading-normal leading-[42px] tracking-tight text-[#161C2D] mt-4">
            Customized Pricing, Crystal Clear Costs
          </p>
          <p className="font-poppins text-center lg:text-[28px] text-[20px] lg:leading-[37px] leading-[32px] text-[#161C2D] opacity-80 mt-6 ">
            Invest on Your Terms, because One Size Never Fits All:{" "}
            <br className="lg:block hidden" /> Discover Win-Win Pricing Built
            Around You
          </p>

          <div className="flex lg:space-x-10 lg:justify-center justify-between w-full mt-16">
            <button className="lg:w-[240px] w-[160px] h-[59px] font-poppins bg-[#244896] hover:bg-[#6688d1] transition-all px-8 text-white font-normal text-[17px] rounded-[10px]">
              {" "}
              Get Offer
            </button>
            <button className="lg:w-[240px] w-[160px] h-[59px] font-poppins bg-[#244896] hover:bg-[#6688d1] transition-all px-8 text-white font-normal text-[17px] rounded-[10px]">
              {" "}
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCustomizedPricing;
