import React from "react";
import { acLogo, downArr, accLogoMobile } from "../assets/Images";

const Navbar = () => {
  return (
    <div className="">
      <div className="max-container lg:px-20 px-5 w-full lg:bg-[#fcfdfe] h-[100px]  font-Museo font-[600] text-[13px] flex items-center justify-between">
        <div className="">
          <img src={acLogo} alt="" className="w-[200px] mt-5 lg:block hidden" />
          <img src={accLogoMobile} alt="" className="w-[160px] mt-0 lg:hidden block" />
        </div>

        <div className="ml-20 lg:flex hidden space-x-10 font-poppins font-medium text-[15px]">
          <li className="list-none cursor-pointer">About</li>
          <li className="list-none cursor-pointer">Products</li>
          <li className="list-none cursor-pointer">Support</li>
          <li className="list-none cursor-pointer">Contact</li>
        </div>

        <div className="lg:flex hidden items-center space-x-8">
          <button className="w-auto h-[45px] font-poppins bg-[#244896] hover:bg-[#6688d1] transition-all px-8 text-white font-normal text-[17px] rounded-[10px]">
            {" "}
            Sign up now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
