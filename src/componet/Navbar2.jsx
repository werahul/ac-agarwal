import React from "react";
import { acLogo, downArr } from "../assets/Images";

const Navbar2 = () => {
  return (
    <div className="">
      <div className="max-container px-20 w-full bg-[#fcfdfe] h-[100px]  font-Museo font-[600] text-[13px] flex items-center justify-between">
        <div className="">
          <img src={acLogo} alt="" className="w-[200px] mt-5" />
        </div>

        <div className="ml-20 flex space-x-">
          <div className="flex space-x-2 transition-all duration-[.3s] bg-transparent hover:bg-[#FFD900] py-4 px-5 rounded-[30px]">
            <li className="list-none">Our Legacy</li>
            <img src={downArr} alt="" />
          </div>
          <div className="flex space-x-2 transition-all duration-[.3s] bg-transparent hover:bg-[#FFD900] py-4 px-5 rounded-[30px]">
            <li className="list-none">Products</li>
            <img src={downArr} alt="" />
          </div>
          <li className="list-none transition-all duration-[.3s] bg-transparent hover:bg-[#FFD900] py-4 px-5 rounded-[30px]">Why Partner With Us?</li>
          <li className="list-none transition-all duration-[.3s] bg-transparent hover:bg-[#FFD900] py-4 px-5 rounded-[30px]">Media</li>
          <div className="flex space-x-2 transition-all duration-[.3s] bg-transparent hover:bg-[#FFD900] py-4 px-5 rounded-[30px]">
            <li className="list-none">Support</li>
            <img src={downArr} alt="" />
          </div>
        </div>

        <div className="flex items-center space-x-8">
          <p className="list-none transition-all duration-[.3s] bg-transparent hover:bg-[#FFD900] py-4 px-5 rounded-[30px] ">Sign In</p>

          <button className="w-[149px] h-[48px] cta-btn  text-white font-semibold rounded-[32px]">
            {" "}
            Open Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
