import React, { useState } from "react";
import {
  Navbar,
  Hero,
  Twitter,
  PricingCalc,
  RecentNews,
  Partner,
  Cta,
  Footer,
} from "../componet";
import {
  filledChecked,
  dropDownArr,
  supportBg,
  supportBg2,
} from "../assets/Images";
import AccountOpening from "../componet/SupportFaq/AccountOpening";

const Support = () => {
  const [componentVisibility, setComponentVisibility] = useState([
    true,
    false,
    false,
  ]);
  const [activeComponent, setActiveComponent] = useState(0);

  const toggleComponentVisibility = (index) => {
    setActiveComponent(activeComponent === index ? null : index);
  };

  return (
    <div>
      <Navbar />
      <div className="max-container">
        <section>
          <div className="flex flex-col items-center justify-center py-20">
            <h1 className="font-bold text-[48px] leading-[48px] tracking-tight font-dmSans">
              Welcome To Support
            </h1>
            <p className="text-[26px] leading-[26px] tracking-tight font-dmSans text-[#161C2D] opacity-80 mt-5">
              Type your query or browse the FAQ section below
            </p>

            <div className="relative w-[50%] h-[78px] mt-10">
              <input
                type="text"
                placeholder="Type here"
                className="w-[100%] h-[78px] rounded-[60px] border shadow-lg font-dmSans text-[18px] px-10 outline-none"
              />
              <button className="w-[134px] h-[55px] rounded-[56px] bg-[#244896] font-bold font-dmSans text-[18px] text-white absolute top-3 right-4">
                Search
              </button>
            </div>

            <div className="flex items-center justify-center space-x-2 mt-6">
              <img src={filledChecked} alt="" />
              <p className="font-poppins text-[16px] text-[#161C2DCC] opacity-80">
                Questions related to corporate terminology and work.
              </p>
            </div>
          </div>
        </section>

        <section className="px-20 ">
          <div>
            {/* First Component */}
            <div className="w-full bg-white h-[131px] rounded-[18px] custom-shadow px-10 py-8 flex items-center justify-between">
              <div>
                <p className="font-semibold text-[24px] leading-[35px] text-[#161C2D] font-poppins">
                  Account Opening
                </p>
                <p className="text-[16px] leading-[16px] text-[#161C2D] font-poppins opacity-80 mt-2">
                  Questions related to the account opening process.
                </p>
              </div>
              <div>
                <img
                  src={dropDownArr}
                  alt=""
                  className="cursor-pointer"
                  onClick={() => toggleComponentVisibility(0)}
                />
              </div>
            </div>
            {activeComponent === 0 && <AccountOpening />}

            {/* Second Component */}
            <div className="w-full bg-white h-[131px] rounded-[18px] custom-shadow px-10 py-8 flex items-center justify-between mt-6">
              <div>
                <p className="font-semibold text-[24px] leading-[35px] text-[#161C2D] font-poppins">
                  The Company, Partnership, and HUF
                </p>
                <p className="text-[16px] leading-[16px] text-[#161C2D] font-poppins opacity-80 mt-2">
                  This section will help you with your queries related to
                  company, partnership, and HUF accounts.
                </p>
              </div>
              <div>
                <img
                  src={dropDownArr}
                  alt=""
                  className="cursor-pointer"
                  onClick={() => toggleComponentVisibility(1)}
                />
              </div>
            </div>
            {activeComponent === 1 && <AccountOpening />}

            {/* Third Component */}
            <div className="w-full bg-white h-[131px] rounded-[18px] custom-shadow px-10 py-8 flex items-center justify-between mt-6">
              <div>
                <p className="font-semibold text-[24px] leading-[35px] text-[#161C2D] font-poppins">
                  Account Modification
                </p>
                <p className="text-[16px] leading-[16px] text-[#161C2D] font-poppins opacity-80 mt-2">
                  Questions related to alteration in your account.
                </p>
              </div>
              <div>
                <img
                  src={dropDownArr}
                  alt=""
                  className="cursor-pointer"
                  onClick={() => toggleComponentVisibility(2)}
                />
              </div>
            </div>
            {activeComponent === 2 && <AccountOpening />}
          </div>
          <div className="w-full bg-white h-[131px] rounded-[18px] custom-shadow px-10 py-8 flex items-center justify-between mt-6">
            <div className="">
              <p className="font-semibold text-[24px] leading-[35px] text-[#161C2D] font-poppins">
                Profile
              </p>
              <p className="text-[16px] leading-[16px] text-[#161C2D] font-poppins opacity-80 mt-2">
                Questions related to your profile (KYC).
              </p>
            </div>
            <div className="">
              <img src={dropDownArr} alt="" className="cursor-pointer" />
            </div>
          </div>

          <div className="w-full bg-white h-[131px] rounded-[18px] custom-shadow px-10 py-8 flex items-center justify-between mt-6">
            <div className="">
              <p className="font-semibold text-[24px] leading-[35px] text-[#161C2D] font-poppins">
                Transfer and Conversion
              </p>
              <p className="text-[16px] leading-[16px] text-[#161C2D] font-poppins opacity-80 mt-2">
                Queries related to the transfer or conversion of shares.
              </p>
            </div>
            <div className="">
              <img src={dropDownArr} alt="" className="cursor-pointer" />
            </div>
          </div>

          <div className="w-full bg-white h-[131px] rounded-[18px] custom-shadow px-10 py-8 flex items-center justify-between mt-6">
            <div className="">
              <p className="font-semibold text-[24px] leading-[35px] text-[#161C2D] font-poppins">
                Banks & Funds
              </p>
              <p className="text-[16px] leading-[16px] text-[#161C2D] font-poppins opacity-80 mt-2">
                Questions related to Bank accounts, E-mandates, and
                adding/withdrawing funds.
              </p>
            </div>
            <div className="">
              <img src={dropDownArr} alt="" className="cursor-pointer" />
            </div>
          </div>

          <div className="w-full bg-white h-[131px] rounded-[18px] custom-shadow px-10 py-8 flex items-center justify-between mt-6">
            <div className="">
              <p className="font-semibold text-[24px] leading-[35px] text-[#161C2D] font-poppins">
                Trading and Markets
              </p>
              <p className="text-[16px] leading-[16px] text-[#161C2D] font-poppins opacity-80 mt-2">
                Questions about Market and Segment trading.
              </p>
            </div>
            <div className="">
              <img src={dropDownArr} alt="" className="cursor-pointer" />
            </div>
          </div>

          <div className="w-full bg-white h-[131px] rounded-[18px] custom-shadow px-10 py-8 flex items-center justify-between mt-6">
            <div className="">
              <p className="font-semibold text-[24px] leading-[35px] text-[#161C2D] font-poppins">
                Corporate Actions
              </p>
            </div>
            <div className="">
              <img src={dropDownArr} alt="" className="cursor-pointer" />
            </div>
          </div>

          <img
            src={supportBg}
            alt=""
            className="absolute top-52 left-0 -z-10"
          />
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Support;
