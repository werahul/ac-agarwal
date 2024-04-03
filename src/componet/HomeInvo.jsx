import React from "react";
import {
  ArrowRightBlue,
  InvoImg,
  InvoImg2,
  SrOne,
  SrTwo,
  SrThree,
  SrFive,
  SrFour,
  SrSix,
} from "../assets/Images";

const HomeInvo = () => {
  return (
    <div className="lg:px-20 px-5 lg:py-28 py-10  bg-[#fcfdfe]">
      <div className="max-container">
        <hr className="mb-14 lg:hidden block"/>
        <p className="font-poppins lg:text-left text-center font-semibold lg:text-[46px] text-[32px] lg:leading-[60px] leading-[42px] tracking-[-1.8px] text-[#161C2D]">
          Innovative Tools for <br />
          effortless trading and investing
        </p>
        <div className="lg:flex items-center justify-between mt-20 ">
          <div className="lg:w-[40%] space-y-9">
            <div className="flex space-x-4 items-start">
              <img src={SrOne} alt="" />
              <div className="">
                <p className="font-poppins font-semibold text-[22px]  tracking-[-0.5px] text-[#161C2D]">
                  Bloom
                </p>
                <p className="font-poppins text-[17px] lg:leading-[29px] leading-[27px] tracking-[-0.2px] text-[#161C2D]">
                  Seamless trading, stunning interface. Mobile to desktop,
                  invest with ease and elegance.
                </p>

                <p className="font-poppins font-medium text-[17px] tracking-[-0.2px] flex items-center mt-4 cursor-pointer linkImg ">
                  Know More <img src={ArrowRightBlue} alt="" className="" />
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img src={SrTwo} alt="" />
              <div className="">
                <p className="font-poppins font-semibold text-[22px]  tracking-[-0.5px] text-[#161C2D]">
                  Math
                </p>
                <p className="font-poppins text-[17px] lg:leading-[29px] leading-[27px] tracking-[-0.2px] text-[#161C2D]">
                  Streamlined for speed, designed for the dedicated trader.
                  Experience swift, focused trading across mobile, web, and
                  desktop—no frills, just efficiency.
                </p>

                <p className="font-poppins font-medium text-[17px] tracking-[-0.2px] text-[#244896] flex items-center mt-4 cursor-pointer linkImg">
                  Know More <img src={ArrowRightBlue} alt="" className="ml-3" />
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img src={SrThree} alt="" />
              <div className="">
                <p className="font-poppins font-semibold text-[22px]  tracking-[-0.5px] text-[#161C2D]">
                  Gullak
                </p>
                <p className="font-poppins text-[17px] lg:leading-[29px] leading-[27px] tracking-[-0.2px] text-[#161C2D]">
                  Your mobile-first gateway to mutual fund investing, designed
                  to turn saving into a seamless habit. With Gullak, watch your
                  financial goals come to life, one tap at a time.
                </p>

                <p className="font-poppins font-medium text-[17px] tracking-[-0.2px] text-[#244896] flex items-center mt-4 cursor-pointer linkImg">
                  Know More <img src={ArrowRightBlue} alt="" className="ml-3" />
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] lg:mt-0 mt-14">
            <img src={InvoImg} alt="" />
          </div>
        </div>
        <div className="flex lg:flex-row-reverse flex-col items-center justify-between mt-20 ">
          <div className="lg:w-[40%] space-y-8">
            <div className="flex lg:flex-row-reverse items-start lg:text-right ">
              <img src={SrFour} alt="" className="lg:ml-5 lg:mr-0 mr-4" />
              <div className="">
                <p className="font-poppins font-semibold text-[22px]  tracking-[-0.5px] text-[#161C2D]">
                  GreekSoft
                </p>
                <p className="font-poppins text-[17px] lg:leading-[29px] leading-[27px] tracking-[-0.2px] text-[#161C2D]">
                  Famous for its precision and reliability, Greek Soft is the
                  desktop trading software that brings your trading algorithms
                  to life, optimizing your market presence with unparalleled
                  efficiency.
                </p>

                <p className="font-poppins font-medium text-[17px] tracking-[-0.2px] text-[#244896] flex items-center  lg:justify-end mt-4 cursor-pointer linkImg2">
                  <img
                    src={ArrowRightBlue}
                    alt=""
                    className=" rotate-180 lg:block hidden"
                  />{" "}
                  Know More
                  <img
                    src={ArrowRightBlue}
                    alt=""
                    className="lg:hidden block ml-3"
                  />{" "}
                </p>
              </div>
            </div>
            <div className="flex lg:flex-row-reverse items-start lg:text-right ">
              <img src={SrFive} alt="" className="lg:ml-5 lg:mr-0 mr-4" />

              <div className="">
                <p className="font-poppins font-semibold text-[22px]  tracking-[-0.5px] text-[#161C2D]">
                  XTS API’s
                </p>
                <p className="font-poppins text-[17px] lg:leading-[29px] leading-[27px] tracking-[-0.2px] text-[#161C2D]">
                  Known for their robustness and seamless integration, they
                  provide the speed and precision essential for high-stakes
                  trading environments.
                </p>

                <p className="font-poppins font-medium text-[17px] tracking-[-0.2px] text-[#244896] flex items-center  lg:justify-end mt-4 cursor-pointer linkImg2">
                  <img
                    src={ArrowRightBlue}
                    alt=""
                    className=" rotate-180 lg:block hidden"
                  />{" "}
                  Know More
                  <img
                    src={ArrowRightBlue}
                    alt=""
                    className="lg:hidden block ml-3"
                  />{" "}
                </p>
              </div>
            </div>
            <div className="flex lg:flex-row-reverse items-start lg:text-right">
              <img src={SrSix} alt="" className="lg:ml-5 lg:mr-0 mr-4" />

              <div className="">
                <p className="font-poppins font-semibold text-[22px]  tracking-[-0.5px] text-[#161C2D]">
                  Trading View
                </p>
                <p className="font-poppins text-[17px] lg:leading-[29px] leading-[27px] tracking-[-0.2px] text-[#161C2D]">
                  Get access to TradingView Charts directly within our trading
                  applications, combining advanced market insights with seamless
                  trading execution.
                </p>

                <p className="font-poppins font-medium text-[17px] tracking-[-0.2px] text-[#244896] flex items-center  lg:justify-end mt-4 cursor-pointer linkImg2">
                  <img
                    src={ArrowRightBlue}
                    alt=""
                    className=" rotate-180 lg:block hidden"
                  />{" "}
                  Know More
                  <img
                    src={ArrowRightBlue}
                    alt=""
                    className="lg:hidden block ml-3"
                  />{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] lg:mt-0 mt-14">
            <img src={InvoImg2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInvo;
