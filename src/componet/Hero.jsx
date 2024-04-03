import React, { useState } from "react";
import {
  ArrowRight,
  heroImage,
  commit1,
  commit2,
  commit3,
  commit4,
  bloom,
  soil,
  swift,
  moons,
  ArrowRight2,
} from "../assets/Images";

const Hero = () => {
  const [activeButton, setActiveButton] = useState("Mobile Apps");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <div className="heroBg ">
      <div className="max-container font-poppins space-x-10 flex items-center justify-center px-20">
        <div className="w-[50%]">
          <h1 className="font-normal text-[55px] leading-[66px]">
            India’s <br /> Most <span className="font-bold"> Transparent</span>{" "}
            Trading Platform
          </h1>
          <h4 className="mt-5 w-[85%] text-[26px] text-[#161C2D] leading-[42px] font-normal opacity-70">
            India’s first backup system to ensure stress-free downtime.
          </h4>

          <button className="check-out-btn flex items-center justify-center w-[176px] h-[56px] rounded-[55px] bg-[#244896] text-white font-bold text-[18px">
            Start Now{" "}
            <span className="ml-3">
              <img src={ArrowRight} alt="" />
            </span>
          </button>
        </div>
        <div className="w-[50%] py-20">
          <img src={heroImage} alt="" className="w-[500px]" />
        </div>
      </div>

      <div className="max-container pt-32 pb-20">
        <div className="">
          <h2 className="text-center text-[40px] leading-[52px] font-bold font-poppins">
            Our Commitment
          </h2>
          <p className="text-center text-[32px] leading-[66px] font-normal font-jakarta">
            Has Made Us Achieve Leading Milestones
          </p>
        </div>
        <div className="flex items-center justify-center space-x-14 mt-10">
          <div className="flex items-center font-poppins">
            <div className="">
              <img src={commit1} alt="" className="w-24" />
            </div>
            <div className="">
              <p className="font-poppins font-semibold text-[40px] text-[#1F1F1F]">
                35+
              </p>
              <p className="font-poppins font-normal text-[15px] -mt-2 text-[#5E587A]">
                Years of Experience
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="">
              <img src={commit2} alt="" className="w-24" />
            </div>
            <div className="">
              <p className="font-poppins font-semibold text-[40px] text-[#1F1F1F]">
                190+
              </p>
              <p className="font-poppins font-normal text-[15px] -mt-2 text-[#5E587A]">
                Branches
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="">
              <img src={commit3} alt="" className="w-24" />
            </div>
            <div className="">
              <p className="font-poppins font-semibold text-[40px] text-[#1F1F1F]">
                500+
              </p>
              <p className="font-poppins font-normal text-[15px] -mt-2 text-[#5E587A]">
                Daily AUM(in crores)
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="">
              <img src={commit4} alt="" className="w-24" />
            </div>
            <div className="">
              <p className="font-poppins font-semibold text-[40px] text-[#1F1F1F]">
                25K+
              </p>
              <p className="font-poppins font-normal text-[15px] -mt-2 text-[#5E587A]">
                Active user
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center text-[40px] leading-[52px] font-bold font-poppins mt-20">
            Smartest Ecosystem <br />
            of Growth & Wealth Creation
          </h2>
          <p className="mt-5 w-[50%] text-center font-poppins text-[24px] text-[#161C2D] leading-[38px]">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>

          <div className="mt-10 w-[580px] h-[80px] rounded-[100px] gradient-btn flex items-center justify-center space-x-10 px-5">
            <button
              className={`${
                activeButton === "Mobile Apps"
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              } rounded-[50px] text-[22px] inline-flex focus:border-none items-center justify-center py-3 px-4 font-bold font-poppins whitespace-nowrap`}
              onClick={() => handleClick("Mobile Apps")}
            >
              Mobile Apps
            </button>
            <button
              className={`${
                activeButton === "Desktop & Web"
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              } rounded-[50px] text-[22px] inline-flex items-center focus:border-none justify-center py-3 px-4 font-bold font-poppins whitespace-nowrap`}
              onClick={() => handleClick("Desktop & Web")}
            >
              Desktop & Web
            </button>
            <button
              className={`${
                activeButton === "API’s"
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              } rounded-[50px] text-[22px] inline-flex items-center focus:border-none justify-center py-3 px-5 font-bold font-poppins`}
              onClick={() => handleClick("API’s")}
            >
              API’s
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 px-20 gap-x-4 mt-16">
          <div className="w-full h-auto rounded-[30px] bg-[#fff]">
            <img src={bloom} alt="" />
            <div className="p-5">
              <img src={moons} alt="" />
              <p className="mt-2 font-semibold font-poppins text-[22px] text-[#161C2D]">
                ACA Bloom
              </p>
              <p className="mt-2 font-normal font-poppins text-[14px] text-[#161C2D]">
                Simplest platform ever. Quick insights, 1-touch orders and
                direct access to support.
              </p>

              <button className="check-out-btn flex items-center px-2 w-full h-[33px] rounded-[17px] text-white font-poppins text-[13px]">
                Check it out{" "}
                <span>
                  <img src={ArrowRight2} alt="" />
                </span>
              </button>
            </div>
          </div>
          <div className="w-full h-auto rounded-[30px] bg-[#fff]">
            <img src={soil} alt="" />
            <div className="p-4">
              <img src={moons} alt="" />
              <p className="mt-2 font-semibold font-poppins text-[22px] text-[#161C2D]">
                ACA Soil
              </p>
              <p className="mt-2 font-normal font-poppins text-[14px] text-[#161C2D]">
                Super-popular browser-based platform. Lag-free orders,
                personalised monitoring, in-depth data.
              </p>

              <button className="check-out-btn flex items-center px-2 w-full h-[33px] rounded-[17px] text-white font-poppins text-[13px]">
                Check it out{" "}
                <span>
                  <img src={ArrowRight2} alt="" />
                </span>
              </button>
            </div>
          </div>
          <div className="w-full h-auto rounded-[30px] bg-[#fff] p-1">
            <div className="bg-[#f6f9fc] rounded-tl-[20px] rounded-tr-[20px]">
              <img src={swift} alt="" />
            </div>
            <div className="p-5">
              <img src={moons} alt="" />
              <p className="mt-2 font-semibold font-poppins text-[22px] text-[#161C2D]">
                ACA Swift
              </p>
              <p className="mt-2 font-normal font-poppins text-[14px] text-[#161C2D]">
                Launch a B2B business and collect one time or recurring payments
                from customers.
              </p>

              <button className="check-out-btn flex items-center px-2 w-full h-[33px] rounded-[17px] text-white font-poppins text-[13px]">
                Check it out{" "}
                <span>
                  <img src={ArrowRight2} alt="" />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center my-20">
          <button className="w-[300px] h-[70px] rounded-[50px] gradient-btn font-semibold text-[22px] text-white">
            Our other products
          </button>
        </div>

        <div className="flex justify-center items-center space-x-5 place-items-center">
          <div className="w-[410px] h-auto rounded-[30px] bg-[#fff]">
            <img src={bloom} alt="" />
            <div className="p-5">
              <img src={moons} alt="" />
              <p className="mt-2 font-semibold font-poppins text-[22px] text-[#161C2D]">
                ACA Bloom
              </p>
              <p className="mt-2 font-normal font-poppins text-[14px] text-[#161C2D]">
                Simplest platform ever. Quick insights, 1-touch orders and
                direct access to support.
              </p>

              <button className="check-out-btn flex items-center px-2 w-full h-[33px] rounded-[17px] text-white font-poppins text-[13px]">
                Check it out{" "}
                <span>
                  <img src={ArrowRight2} alt="" />
                </span>
              </button>
            </div>
          </div>
          <div className="w-[410px] h-auto rounded-[30px] bg-[#fff]">
            <img src={soil} alt="" />
            <div className="p-4">
              <img src={moons} alt="" />
              <p className="mt-2 font-semibold font-poppins text-[22px] text-[#161C2D]">
                ACA Soil
              </p>
              <p className="mt-2 font-normal font-poppins text-[14px] text-[#161C2D]">
                Super-popular browser-based platform. Lag-free orders,
                personalised monitoring, in-depth data.
              </p>

              <button className="check-out-btn flex items-center px-2 w-full h-[33px] rounded-[17px] text-white font-poppins text-[13px]">
                Check it out{" "}
                <span>
                  <img src={ArrowRight2} alt="" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
