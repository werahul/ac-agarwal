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
  InvoImg2Mobile,
} from "../assets/Images";
import { Link } from "react-router-dom";

const HomeInvo = () => {
  return (
    <div className="lg:px-20 px-5 lg:py-28 py-10  lg:bg-[#fcfdfe]">
      <div className="max-container">
        
        <p className="font-poppins lg:text-left text-center font-medium  lg:text-[42px] text-[30px] lg:leading-[60px] leading-[42px] tracking-normal text-[#161C2DCC]">
          Innovative Tools for <br />
          Effortless Trading and Investing
        </p>
        <div className="lg:flex items-center justify-between lg:mt-16 2xl:mt-12 mt-[100px] ">
          <div className="lg:w-[40%] space-y-[60px]">
            <div className="flex space-x-4 items-start">
              <img src={SrOne} alt="one" className=""/>
              <div className="">
                <p className="font-poppins font-semibold lg:text-[22px] text-[18px]  tracking-[-0.5px] text-[#161C2DCC]">
                  Bloom
                </p>
                <p className="font-poppins lg:text-[17px] text-[15px] lg:leading-[29px] leading-[25px] tracking-[-0.2px] lg:text-[#161C2D] text-[#161C2DB2] opacity-80">
                  Seamless trading, stunning interface. Mobile to desktop,
                  invest with ease and elegance.
                </p>

                <Link to="/bloom">
                  <p className="font-poppins font-medium text-[17px] tracking-[-0.2px] flex items-center mt-4 cursor-pointer linkImg ">
                    Know More <img src={ArrowRightBlue} alt="rightArrow" className="" />
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img src={SrTwo} alt="two" />
              <div className="">
              <p className="font-poppins font-semibold lg:text-[22px] text-[18px]  tracking-[-0.5px] text-[#161C2DCC]">
                  Math
                </p>
                <p className="font-poppins lg:text-[17px] text-[15px] lg:leading-[29px] leading-[25px] tracking-[-0.2px] lg:text-[#161C2D] text-[#161C2DB2] opacity-80">
                  Streamlined for speed, designed for the dedicated trader.
                  Experience swift, focused trading across mobile, web, and
                  desktop—no frills, just efficiency.
                </p>
                <Link to="/math">
                  <p className="font-poppins font-medium text-[17px] tracking-[-0.2px] text-[#244896] flex items-center mt-4 cursor-pointer linkImg">
                    Know More{" "}
                    <img src={ArrowRightBlue} alt="rightArrow" className="ml-3" />
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img src={SrThree} alt="three" />
              <div className="">
              <p className="font-poppins font-semibold lg:text-[22px] text-[18px]  tracking-[-0.5px] text-[#161C2DCC]">
                  Gullak
                </p>
                <p className="font-poppins lg:text-[17px] text-[15px] lg:leading-[29px] leading-[25px] tracking-[-0.2px] lg:text-[#161C2D] text-[#161C2DB2] opacity-80">
                  Your mobile-first gateway to mutual fund investing, designed
                  to turn saving into a seamless habit. With Gullak, watch your
                  financial goals come to life, one tap at a time.
                </p>

                <Link to="/gullak">
                  <p className="font-poppins font-medium text-[17px] tracking-[-0.2px] text-[#244896] flex items-center mt-4 cursor-pointer linkImg">
                    Know More{" "}
                    <img src={ArrowRightBlue} alt="rightArrow" className="ml-3" />
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] w-full  lg:mt-0 mt-14">
            <img src={InvoImg} alt="Inovation" className="lg:w-[600px]"/>
          </div>
        </div>
        <div className="flex lg:flex-row-reverse flex-col items-center justify-between mt-20 ">
          <div className="lg:w-[40%] space-y-[60px]">
            <div className="flex lg:flex-row-reverse items-start lg:text-right ">
              <img src={SrFour} alt="four" className="lg:ml-5 lg:mr-0 mr-4" />
              <div className="">
              <p className="font-poppins font-semibold lg:text-[22px] text-[18px]  tracking-[-0.5px] text-[#161C2DCC]">
                  GreekSoft
                </p>
                <p className="font-poppins lg:text-[17px] text-[15px] lg:leading-[29px] leading-[25px] tracking-[-0.2px] lg:text-[#161C2D] text-[#161C2DB2] opacity-80">
                  Famous for its precision and reliability, Greek Soft is the
                  desktop trading software that brings your trading algorithms
                  to life, optimizing your market presence with unparalleled
                  efficiency.
                </p>

                {/*<p className="font-poppins font-medium text-[17px] tracking-[-0.2px] text-[#244896] flex items-center  lg:justify-end mt-4 cursor-pointer linkImg2">
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
  </p>*/}
              </div>
            </div>
            <div className="flex lg:flex-row-reverse items-start lg:text-right ">
              <img src={SrFive} alt="five" className="lg:ml-5 lg:mr-0 mr-4" />

              <div className="">
              <p className="font-poppins font-semibold lg:text-[22px] text-[18px]  tracking-[-0.5px] text-[#161C2DCC]">
                  XTS API’s
                </p>
                <p className="font-poppins lg:text-[17px] text-[15px] lg:leading-[29px] leading-[25px] tracking-[-0.2px] lg:text-[#161C2D] text-[#161C2DB2] opacity-80">
                  Known for their robustness and seamless integration, they
                  provide the speed and precision essential for high-stakes
                  trading environments.
                </p>

                <Link to="/xts-api">
                  <p className="font-poppins font-medium text-[17px] tracking-[-0.2px] text-[#244896] flex items-center  lg:justify-end mt-4 cursor-pointer linkImg2">
                    <img
                      src={ArrowRightBlue}
                      alt="rightArrow"
                      className=" rotate-180 lg:block hidden"
                    />{" "}
                    Know More
                    <img
                      src={ArrowRightBlue}
                      alt="rightArrow"
                      className="lg:hidden block ml-3"
                    />{" "}
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex lg:flex-row-reverse items-start lg:text-right">
              <img src={SrSix} alt="six" className="lg:ml-5 lg:mr-0 mr-4" />

              <div className="">
              <p className="font-poppins font-semibold lg:text-[22px] text-[18px]  tracking-[-0.5px] text-[#161C2DCC]">
                  Trading View
                </p>
                <p className="font-poppins lg:text-[17px] text-[15px] lg:leading-[29px] leading-[25px] tracking-[-0.2px] lg:text-[#161C2D] text-[#161C2DB2] opacity-80">
                  Get access to TradingView Charts directly within our trading
                  applications, combining advanced market insights with seamless
                  trading execution.
                </p>

                {/*<p className="font-poppins font-medium text-[17px] tracking-[-0.2px] text-[#244896] flex items-center  lg:justify-end mt-4 cursor-pointer linkImg2">
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
</p>*/}
              </div>
            </div>
          </div>
          <div className="lg:w-[60%] w-full lg:mt-0 mt-14">
            <img src={InvoImg2} alt="Inovation" className="lg:w-[920px] lg:block hidden" />
            <img src={InvoImg2Mobile} alt="Inovation" className="lg:hidden block -mt-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInvo;
