import React from "react";
import {
    filledChecked,
    dropDownArr,
    supportBg,
    supportBg2,
    blueTick,
    blueTick2,
    customerSupport,
    openArr,
  } from "../../assets/Images";

const ContactSupport = () => {
  return (
    <div>
      <section>
        <div className="flex flex-col justify-center items-center">
          <p className="font-poppins font-medium text-[32px] lg:text-[42px] leading-[56px] tracking-tight text-[#161C2DCC]">
            Contact Us
          </p>
          <p className="font-poppins text-[15px] lg:text-[28px] leading-[26px] lg:leading-[40px] tracking-tight text-center lg:mt-7 mt-3 text-[#161c2ddc] opacity-70 px-10">
            Need further assistance? &nbsp;
            <br className="lg:hidden block" />
            We're here to help! <br className="hidden lg:block" />
            Feel free to reach out to our dedicated support team{" "}
            <br className="hidden lg:block" />
            via phone or WhatsApp
          </p>
          <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 items-center space-x-4 mt-8 lg:mt-20">
            <a href="mailto:support@acagarwal.com">
              <div className="flex items-center  space-x-2 bg-[#244896] rounded-[62px] bg-opacity-20 text-[#244896] px-5 py-1">
                <img src={blueTick2} alt="Tick" className="lg:w-auto w-5" />
                <p className="font-poppins font-medium text-[20px] lg:text-[24px]">
                  Support@acagarwal.com
                </p>
              </div>
            </a>
            <a href="tel:+911414920999">
              <div className="flex items-center space-x-2 bg-[#244896] rounded-[62px] bg-opacity-20 text-[#244896] px-5 py-1">
                <img src={blueTick2} alt="Tick" className="lg:w-auto w-5" />
                <p className="font-poppins font-medium text-[20px] lg:text-[24px]">
                  +91 141 4920999
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSupport;
