import React from "react";
import { x1, x2, x3, x4, x5 } from "../../assets/newImages";

const KeyFeature = () => {
  return (
    <div className="">
      <div className="lg:py-[120px] py-20 lg:px-36 font-poppins px-5">
        <div className="max-container mt-10">
          <div className="lg:space-y-7 space-y-2">
            <h2 className="font-poppins font-medium lg:text-[42px] text-[30px]  lg:leading-[60px] leading-[42px] tracking-tight text-center text-[#161C2DCC]">
              Key Features
            </h2>

            <div className="lg:pt-[100px] pt-[80px] grid lg:px-0 2xl:px-20  grid-cols-1 lg:gap-y-20 lg:gap-x-40 gap-x-10 gap-y-10 lg:grid-cols-2 place-items-center items-center">
              <div className="flex items-start space-x-5 ">
                <img src={x1} alt="" className="w-[34px] h-auto" />
                <div className="space-y-5">
                  <h3 className="text-[18px] lg:text-[22px] font-semibold text-[#161C2DCC]">
                    Zero Additional Cost
                  </h3>
                  <p className="text-[15px] lg:text-[17px] text-[#161C2D] opacity-[70%]">
                    Benefit from our XTS APIs withoutincurring any additional
                    fees. Enjoy the full range of features at no extra cost.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <img src={x4} alt="" className="w-[30px] h-auto mt-2" />
                <div className="space-y-5">
                  <h3 className="text-[18px] lg:text-[22px] font-semibold text-[#161C2DCC]">
                    Fast, Secure, and Easy to Implement
                  </h3>
                  <p className="text-[15px] lg:text-[17px] text-[#161C2D] opacity-[70%]">
                    Our XTS API's are designedfor speed, security, and ease of
                    implementation. Enjoy lightning-fast execution, robust
                    security measures, and simple integration into your
                    existingsystems.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-5">  
                <img src={x3} alt="" className="w-[38px] h-auto mt-2" />
                <div className="space-y-5">
                  <h3 className="text-[18px] lg:text-[22px] font-semibold text-[#161C2DCC] lg:leading-[32px]">
                    Test Your Program in Simulation Environment
                  </h3>
                  <p className="text-[15px] lg:text-[17px] text-[#161C2D] opacity-[70%]">
                    Test your trading algorithms and strategies in our
                    simulation environment without risking your capital. Gain
                    confidence in your program's performance before going live
                    in the market.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <img src={x2} alt="" className="w-[32px] h-auto mt-2" />
                <div className="space-y-5">
                  <h3 className="text-18px] lg:text-[22px] font-semibold text-[#161C2DCC]">
                    Build Your Own Trading Interface
                  </h3>
                  <p className="text-[15px] lg:text-[17px] text-[#161C2D] opacity-[70%]">
                    With AC Agarwal's XTS API's, you have the freedom to build
                    your own trading interface according to your preferences and
                    requirements. Customize your trading experience and execute
                    trades with precision.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <img src={x5} alt="" className="w-[33px] h-auto mt-2" />
                <div className="space-y-5">
                  <h3 className="text-[18px] lg:text-[22px] font-semibold text-[#161C2DCC] lg:leading-[32px]">
                    Flexible REST API Compatible with Multiple Languages
                  </h3>
                  <p className="text-[15px] lg:text-[17px] text-[#161C2D] opacity-[70%] ">
                    Our flexible REST API supports multiple programming
                    languages, making it easy for developers to work with and
                    integrate into their applications. Whether you prefer
                    Python, Java, or any other language, our API has you
                    covered.
                  </p>
                </div>
              </div>
            </div>
            {/*<div className="lg:hidden block ">
              <ProductGridMobile2 />
  </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeature;
