import React from "react";
import { linkedin, rightArr } from "../../assets/Images";
import { rightArrow } from "../../assets/newImages";

const LinkedinConn = () => {
  return (
    <div className="lg:py-[150px] px-5 py-20 lg:px-20 peer space-y-5 max-container text-center bg-white">
      <img src={linkedin} alt="linkedIn" className="w-[80px] lg:w-[94px] lg:h-[94px]  mx-auto" />
      <div className="w-fit mx-auto">
        <a
          href="https://www.linkedin.com/company/ac-agarwal-share-brokers/"
          target="_blank"
          className=""
        >
          <div className="flex peering text-center peer transition-transform duration-300 lg:tracking-normal tracking-tighter justify-center text-[#161C2DCC] font-medium text-[30px] lg:text-[42px] font-poppins items-end lg:items-center mt-10">
            <p>
              Stay connected
              <br className="lg:hidden block" /> on LinkedIn
            </p>
            <img
              src={rightArrow}
              alt="rightArrow"
              className="-ml-3 lg:ml-5 mb-2.5 lg:mb-0 w-[25px]"
            />
          </div>
        </a>
        <div className=""></div>
      </div>
      <p className="text-[#161C2DCC]  text-[15px] lg:text-[28px]  font-poppins opacity-80">
        to join our professional network, receive company{" "}
        <br className="hidden lg:block" /> updates, and engage with our team.
      </p>
    </div>
  );
};

export default LinkedinConn;
