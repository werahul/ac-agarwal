import React from "react";
import {
  ArrowRight,
  heroImageNew1,
  heroImageNew2,
  heroImageNew3,
  userFriendlyBroker,
  heroImageNew1Mobile,
  appStore,
  playstore,
} from "../../assets/Images";

const HeroProduct = () => {
  return (
    <div className="lg:pt-32 lg:pb-10 pt-20 pb-10 lg:px-20 px-5 lg:bg-[#fcfdfe] bg-[#ffffff]">
      <div className="max-container">
        <div className="flex flex-col items-center justify-center mb-24">
          <h1 className="font-poppins text-center font-medium lg:font-semibold lg:text-[52px] text-[36px] lg:leading-[66px] leading-[50px] tracking-tight text-[#161C2DCC]">
            Gullak
          </h1>
          <p className="lg:mt-1 mt-3 font-poppins text-center  lg:text-[38px] text-[22px] lg:leading-[66px] leading-[32px] tracking-tight text-[#161C2DCC]">
            Your Digital Piggy Bank for Smarter Investing
          </p>
          <p className="font-poppins text-center lg:text-[28px] text-[15px] lg:leading-[40px]  leading-[26px] lg:px-0 px-0 text-[#161C2D] opacity-70 lg:mt-9 mt-6">
            Simplifying Mutual Fund Investing for a Better Financial Future.{" "}
            <br className="hidden lg:block" /> Start Investing Effortlessly and
            Achieve Your Goals with Just a Tap.
          </p>
          <div className="flex   items-center space-x-5 lg:mt-20 mt-14">
            <a
              href="https://play.google.com/store/apps/details?id=com.iw.aca.gullak&pcampaignid=web_share"
              target="_blank"
            >
              <img src={playstore} alt="" className="lg:w-40 w-32 cursor-pointer" />
            </a>

            <a
              href="https://apps.apple.com/in/app/aca-gullak/id1466198281"
              target="_blank"
            >
              {" "}
              <img
                src={appStore}
                alt=""
                className="lg:w-[140px] w-[120px] object-contain cursor-pointer"
              />
            </a>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default HeroProduct;
