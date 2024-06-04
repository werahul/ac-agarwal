import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightBlue,
  bloomProduct,
  appStore,
  playstore,
  MathProduct,
  gullakProduct,
  xtsProduct,
  playM,
  appM,
  bar,
} from "../../assets/Images";
import { greeksoft, IPO, TradingView } from "../../assets/newImages";
import ProductGridMobile from "./ProductGridMobile";

const FlexComp = () => {
  return (
    <div className="lg:pt-10 lg:pb-20 pt-0 pb-0 lg:px-20 px-5  lg:bg-[#fcfdfe] bg-[#ffffff]">
      <div className="max-container lg:space-y-32 space-y-24 lg:px-10 2xl:px-0">
        <div className="Bloom flex lg:flex-row flex-col-reverse justify-center items-center lg:space-x-32 2xl:space-x-10 ">
          <div className="lg:mt-0 mt-10 lg:w-[50%] 2xl:w-[60%]">
            <img src={bloomProduct} alt="" className="lg:w-[600px] 2xl:w-[660px]" />
          </div>
          <div className="mt-2 lg:w-[40%] 2xl:w-[50%] ">
            <h2 className="font-poppins font-medium lg:text-[42px] text-[22px] lg:leading-[60px] leading-[32px] tracking-tight text-[#161C2D]">
              Bloom
            </h2>
            <p className="font-poppins lg:text-[24px] text-[15px] lg:leading-[38px] leading-[26px] opacity-80 mt-3 ">
              Our flagship app offers effortless trading & investing with an
              elegant interface. Transition smoothly from mobile to desktop with
              ease.
            </p>
            <div className="flex lg:space-x-0 space-x-2 items-center lg:mt-0 mt-4">
              <div className="flex lg:hidden space-x-3 items-center">
                <a href="https://play.google.com/store/apps/details?id=com.wave.aca&pcampaignid=web_share" target="_blank">
                  <img src={playM} alt="" className="w-5" />
                </a>
                <a href="https://apps.apple.com/in/app/bloom-by-aca/id1281521661" target="_blank">
                  <img src={appM} alt="" className="w-5" />
                </a>
                <img src={bar} alt="" className="w-5 h-6" />
              </div>
              <Link to="/bloom">
                <p className="font-poppins font-medium text-[17px] tracking-[-0.2px] flex items-center lg:mt-4 cursor-pointer linkImg ">
                  Know More <img src={ArrowRightBlue} alt="" className="" />
                </p>
              </Link>
            </div>

            <div className="lg:flex hidden items-center space-x-4  lg:mt-[50px]">
              <a
                href="https://play.google.com/store/apps/details?id=com.wave.aca&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
              >
              <img src={playstore} alt="" className="w-[180] h-[47px] cursor-pointer" />
              </a>
              <a
                href="https://apps.apple.com/in/app/bloom-by-aca/id1281521661"
                target="_blank"
              >
                <img
                  src={appStore}
                  alt=""
                  className="w-[145px] object-contain cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="Math flex lg:flex-row flex-col items-center justify-center lg:space-x-32 2xl:space-x-20">
          <div className="mt-2 lg:w-[50%] 2xl:w-[60%]">
            <h2 className="font-poppins font-medium   lg:text-[42px] lg:leading-[60px]  text-[22px] leading-[32px]  tracking-tight text-[#161C2DCC]">
              Math
            </h2>
            <p className="font-poppins lg:text-[24px] text-[15px] lg:leading-[38px] leading-[26px] opacity-80 mt-3 text-[#161C2D]">
              A robust trading app crafted for professional traders, powered by
              XTS. Available on mobile, web, and desktop.
            </p>
            <div className="flex lg:space-x-0 space-x-2 items-center lg:mt-0 mt-4">
              <div className="flex lg:hidden space-x-3 items-center">
                <a href="https://play.google.com/store/apps/details?id=com.acagarwal.xts&pcampaignid=web_share" target="_blank">
                  <img src={playM} alt="" className="w-5" />
                </a>
                <a href="https://apps.apple.com/in/app/aca-math/id6450746616" target="_blank">
                  <img src={appM} alt="" className="w-5" />
                </a>
                <img src={bar} alt="" className="w-5 h-6" />
              </div>
              <Link to="/math">
                <p className="font-poppins font-medium text-[17px] tracking-[-0.2px] flex items-center lg:mt-4 cursor-pointer linkImg ">
                  Know More <img src={ArrowRightBlue} alt="" className="" />
                </p>
              </Link>
            </div>

            <div className="lg:flex hidden items-center space-x-4 lg:mt-[50px]">
              <a
                href="https://play.google.com/store/apps/details?id=com.acagarwal.xts&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={playstore} alt="" className="w-[180] h-[47px] cursor-pointer" />
              </a>
              <a
                href="https://apps.apple.com/in/app/aca-math/id6450746616"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={appStore}
                  alt=""
                  className="w-[145px] object-contain cursor-pointer"
                />
              </a>
            </div>
          </div>
          <div className="lg:w-[50%]  lg:mt-0 mt-10">
            <img src={MathProduct} alt="" className="lg:w-[580px] 2xl:[650px]" />
          </div>
        </div>

        <div className="Gullak flex lg:flex-row flex-col-reverse items-center lg:space-x-32 2xl:space-x-32 justify-center">
          <div className="lg:w-[50%] lg:mt-0 mt-10">
            <img src={gullakProduct} alt="" className="lg:w-[520px] 2xl:w-[670px]" />
          </div>
          <div className="mt-2 lg:w-[55%] 2xl:w-[40%] ">
            <h2 className="font-poppins font-medium lg:text-[42px] text-[22px] lg:leading-[60px] leading-[32px] tracking-tight text-[#161C2DCC]">
              Gullak
            </h2>
            <p className="font-poppins lg:text-[24px] text-[15px] lg:leading-[38px] leading-[26px] opacity-80 mt-3 text-[#161C2D]">
              Mutual fund investing meets mobile convenience. An intuitive app
              that shapes saving into a habit and turns your financial ambitions
              into reality, one easy step after another.
            </p>
            <div className="flex lg:space-x-0 space-x-2 items-center lg:mt-0 mt-4">
              <div className="flex lg:hidden space-x-3 items-center">
                <a href="https://play.google.com/store/apps/details?id=com.iw.aca.gullak&pcampaignid=web_share" target="_blank">
                  <img src={playM} alt="" className="w-5" />
                </a>
                <a href="https://apps.apple.com/in/app/aca-gullak/id1466198281" target="_blank">
                  <img src={appM} alt="" className="w-5" />
                </a>
                <img src={bar} alt="" className="w-5 h-6" />
              </div>
              <Link to="/gullak">
                <p className="font-poppins font-medium text-[17px] tracking-[-0.2px] flex items-center lg:mt-4 cursor-pointer linkImg ">
                  Know More <img src={ArrowRightBlue} alt="" className="" />
                </p>
              </Link>
            </div>

            <div className="lg:flex hidden   items-center space-x-4 lg:mt-[50px]">
              <a
                href="https://play.google.com/store/apps/details?id=com.iw.aca.gullak&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
              >
              <img src={playstore} alt="" className="w-[180] h-[47px] cursor-pointer" />
              </a>
              <a
                href="https://apps.apple.com/in/app/aca-gullak/id1466198281"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={appStore}
                  alt=""
                  className="w-[145px] object-contain cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="XTSApi flex lg:flex-row flex-col items-center lg:space-x-32 2xl:space-x-40">
          <div className="mt-2 lg:w-[50%]">
            <h2 className="font-poppins font-medium lg:text-[42px] text-[22px] lg:leading-[60px] leading-[32px] tracking-tight text-[#161C2D]">
              XTS API’s
            </h2>
            <p className="font-poppins lg:text-[24px] text-[15px]  lg:leading-[38px] leading-[26px] opacity-80 mt-3 text-[#161C2D]">
              Empower your trading strategies with XTS APIs, designed for
              seamless algorithmic trading. Enjoy robust, hassle-free
              integration for unmatched speed and accuracy in dynamic markets.
            </p>
            <Link to="/xts-api">
              <p className="font-poppins font-medium text-[17px] tracking-[-0.2px] flex items-center mt-4 cursor-pointer linkImg ">
                Know More <img src={ArrowRightBlue} alt="" className="" />
              </p>
            </Link>

            {/*<div className="flex items-center space-x-2 mt-6">
              <img src={playstore} alt="" className="w-40 cursor-pointer" />
              <img src={appStore} alt="" className="w-40 cursor-pointer" />
  </div>*/}
          </div>
          <div className="lg:w-[50%] lg:mt-0 mt-10">
            <img src={xtsProduct} alt="" className="lg:w-[670px]" />
          </div>
        </div>
       
        
      </div>
      <div className="font-poppins lg:mt-40 mt-20 max-container">
          <h3 className="capitalize font-medium  lg:mb-[130px] mb-10 text-center lg:text-[42px] text-[30px] text-[#161C2DCC]">
            and there’s more...{" "}
          </h3>
          <div className="font-poppins lg:grid hidden grid-cols-1 gap-10 lg:grid-cols-3 lg:mb-[80px]">
            <div className="w-full lg:min-w-[370px] flex border items-start space-x-5 p-6 rounded-[22px] border-black border-opacity-15">
              <img src={greeksoft} alt="" className="w-[27px] h-auto" />
              <div className="text-[#161C2d]  space-y-4">
                <h2 className="font-semibold text-[22px] text-[#161C2DCC]">
                  Greeksoft
                </h2>
                <p className="text-[17px] leading-[29px] tracking-[-0.2px] text-[#161C2D] opacity-80">
                  Elevate your trading with Greek Soft's automation. Renowned
                  for accuracy and dependability, this desktop software enhances
                  your algorithms, boosting market efficiency
                </p>
                {/*<p className="font-poppins font-medium text-[17px] tracking-[-0.2px] flex items-center mt-4 cursor-pointer linkImg ">
                  Click to learn more{" "}
                  <img src={ArrowRightBlue} alt="" className="" />
</p>*/}
              </div>
            </div>
            <div className="w-full lg:min-w-[370px] flex border items-start space-x-5 p-6 rounded-[22px] border-black border-opacity-15">
              <img src={TradingView} alt="" className="w-[35px] h-auto" />
              <div className="text-[#161C2d]  space-y-4">
                <h2 className="font-semibold text-[22px] text-[#161C2DCC]">
                  Trading View
                </h2>
                <p className="text-[17px] leading-[29px] tracking-[-0.2px] text-[#161C2D] opacity-80">
                  Experience Trading View Charts within our apps, combining
                  analytical depth with effortless trading. Track trends,
                  monitor in real-time, & execute trades precisely from one
                  platform.
                </p>
                {/*<p className="font-poppins font-medium text-[17px] tracking-[-0.2px] flex items-center mt-4 cursor-pointer linkImg ">
                  Click to learn more{" "}
                  <img src={ArrowRightBlue} alt="" className="" />
</p>*/}
              </div>
            </div>
            <div className="w-full lg:min-w-[370px] flex border items-start space-x-5 p-6 rounded-[22px] border-black border-opacity-15">
              <img src={IPO} alt="" className="w-[37px] h-auto" />
              <div className="text-[#161C2d]  space-y-3">
                <h2 className="font-semibold text-[22px] text-[#161C2DCC]">
                  IPOs
                </h2>
                <p className="text-[17px] leading-[29px] tracking-[-0.2px] text-[#161C2D] opacity-80 ">
                  Experience hassle-free IPO participation with our online
                  platform. Easily apply for IPOs and seize investment
                  opportunities with convenience and ease.
                </p>
                <a
                  href="https://kyc.acagarwal.com/ipo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="font-poppins font-medium text-[17px] tracking-[-0.2px] flex items-center mt-3 cursor-pointer linkImg ">
                    Apply IPO
                    <img src={ArrowRightBlue} alt="" className="" />
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:hidden block">
            <ProductGridMobile />
          </div>
        </div>
    </div>
  );
};

export default FlexComp;
