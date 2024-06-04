import React from "react";
import {
  ArrowRightBlue,
  bloomProduct,
  appStore,
  playstore,
  MathProduct,
  gullakProduct,
  xtsProduct,
  gullak1,
  gullak2,
  gullak3,
  gullak4,
} from "../../assets/Images";
import { greeksoft, IPO, TradingView } from "../../assets/newImages";
import ProductGridMobile from "./ProductGridMobile";

const FlexComp = () => {
  return (
    <div className="lg:pt-20 lg:pb-20 pt-0 pb-20 lg:px-28 2xl:px-52 px-5  lg:bg-[#fcfdfe] bg-[#ffffff]">
      <div className="max-container lg:space-y-40 space-y-20">
        <div className="Bloom flex lg:flex-row flex-col-reverse items-center justify-center lg:space-x-32">
          <div className="lg:mt-0 mt-10 lg:w-[50%]">
            <img src={gullak1} alt="" className=" lg:w-[580px]" />
          </div>
          <div className="mt-2 lg:w-[50%]">
            <h2 className="font-poppins font-medium lg:text-[42px] text-[22px] lg:leading-[60px] leading-[32px] tracking-tight text-[#161C2DCC]">
              Expert Guidance,
              <br /> Easy Investing
            </h2>
            <p className="font-poppins lg:text-[24px] text-[15px] lg:leading-[38px] leading-[26px] opacity-80 lg:mt-3 mt-4">
              Access expert insights for simplified mutual fund investing. From
              curated fund picks to new offers and top performers, make informed
              decisions effortlessly. Let our advisory services guide you
              towards achieving your financial goals with confidence and ease.
            </p>
            {/* <p className="font-poppins font-medium text-[17px] tracking-[-0.2px] flex items-center mt-4 cursor-pointer linkImg ">
              Know More <img src={ArrowRightBlue} alt="" className="" />
            </p>

            <div className="lg:flex hidden items-center space-x-2 mt-6">
              <img src={playstore} alt="" className="w-40 cursor-pointer" />
              <img
                src={appStore}
                alt=""
                className="w-[140px] object-contain cursor-pointer"
              />
  </div>*/}
          </div>
        </div>

        <div className="Math flex lg:flex-row flex-col items-center justify-center lg:space-x-32">
          <div className="mt-2 lg:w-[50%]">
            <h2 className="font-poppins font-medium lg:text-[42px] lg:leading-[60px]  text-[22px] leading-[32px]  tracking-tight text-[#161C2DCC]">
              Empowering Investments: Financial Calculators Suite
            </h2>
            <p className="font-poppins lg:text-[24px] text-[15px] lg:leading-[38px] leading-[26px] opacity-80 lg:mt-3 mt-4">
              Unlock the power of informed investing with our comprehensive
              suite of financial tools. From SIP calculators to education and
              marriage planners, make confident decisions and plan for your
              future with ease, ensuring your mutual fund investments align with
              your financial goals.
            </p>
            {/*<p className="font-poppins font-medium text-[17px] tracking-[-0.2px] flex items-center mt-4 cursor-pointer linkImg ">
              Know More <img src={ArrowRightBlue} alt="" className="" />
            </p>

            <div className="lg:flex hidden items-center space-x-2 mt-6">
              <img src={playstore} alt="" className="w-40 cursor-pointer" />
              <img
                src={appStore}
                alt=""
                className="w-[140px] object-contain cursor-pointer"
              />
</div>*/}
          </div>
          <div className="lg:w-[50%] lg:mt-0 mt-10">
            <img src={gullak2} alt="" className="lg:w-[550px]" />
          </div>
        </div>

        <div className="Gullak flex lg:flex-row flex-col-reverse items-center justify-center lg:space-x-32">
          <div className="lg:w-[50%] lg:mt-0 mt-10">
            <img src={gullak3} alt="" className="lg:w-[580px]" />
          </div>
          <div className="mt-2 lg:w-[50%] ">
            <h2 className="font-poppins font-medium lg:text-[42px] text-[22px] lg:leading-[60px] leading-[32px] tracking-tight text-[#161C2DCC]">
              Seamless Mutual Fund Transactions
            </h2>
            <p className="font-poppins lg:text-[24px] text-[15px] lg:leading-[38px] leading-[26px] opacity-80 lg:mt-3 mt-4">
              Experience seamless mutual fund transactions with our
              user-friendly platform. Easily invest, switch between funds, start
              SIPs, initiate STPs, and redeem investments—all in just a few
              clicks. Simplify your investment journey and take control of your
              financial future with ease.
            </p>
            {/*  <p className="font-poppins font-medium text-[17px] tracking-[-0.2px] flex items-center mt-4 cursor-pointer linkImg ">
              Know More <img src={ArrowRightBlue} alt="" className="" />
            </p>

            <div className="lg:flex hidden   items-center space-x-2 mt-6">
              <img src={playstore} alt="" className="w-40 cursor-pointer" />
              <img
                src={appStore}
                alt=""
                className="w-[140px] object-contain cursor-pointer"
              />
</div>*/}
          </div>
        </div>

        <div className="XTSApi flex lg:flex-row flex-col items-center justify-center lg:space-x-32">
          <div className="mt-2 lg:w-[50%]">
            <h2 className="font-poppins font-medium lg:text-[42px] text-[22px] lg:leading-[60px] leading-[40px] tracking-tight text-[#161C2DCC]">
              Simplified Portfolio Monitoring
            </h2>
            <p className="font-poppins lg:text-[24px] text-[15px]  lg:leading-[38px] leading-[26px] opacity-80 lg:mt-3 mt-4">
              Track your investment portfolio effortlessly with our intuitive
              tool. Monitor performance, review holdings, and stay updated on
              market trends, all in one convenient platform. Simplify your
              investment management and make informed decisions with ease.
            </p>
            {/* <p className="font-poppins font-medium text-[17px] tracking-[-0.2px] flex items-center mt-4 cursor-pointer linkImg ">
              Know More <img src={ArrowRightBlue} alt="" className="" />
</p>*/}

            {/*<div className="flex items-center space-x-2 mt-6">
              <img src={playstore} alt="" className="w-40 cursor-pointer" />
              <img src={appStore} alt="" className="w-40 cursor-pointer" />
  </div>*/}
          </div>
          <div className="lg:w-[50%] lg:mt-0 mt-10">
            <img src={gullak4} alt="" className="lg:w-[555px]" />
          </div>
        </div>
      </div>
      <div className="flex  justify-center  items-center lg:space-x-[30px] space-x-2 lg:mt-40 mt-16">
        <a
          href="https://kyc.acagarwal.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="lg:w-[220px] w-[153px] lg:h-[59px] h-[47px] font-poppins bg-[#244896] hover:bg-[#6688d1] transition-all lg:px-8 text-white lg:font-medium text-[17px] rounded-[10px] whitespace-nowrap flex items-center justify-center">
            Try Demo
          </p>
        </a>
        <a
          href="https://kyc.acagarwal.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="lg:w-[220px] w-[180px] lg:h-[59px] h-[47px] font-poppins bg-[#244896] hover:bg-[#6688d1] transition-all lg:px-8 text-white lg:font-medium text-[17px] rounded-[10px] whitespace-nowrap flex items-center justify-center">
            Open account
          </p>
        </a>
      </div>
    </div>
  );
};

export default FlexComp;
