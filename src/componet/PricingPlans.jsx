import React, { useState } from "react";
import { greenTick } from "../assets/Images";

const PricingPlans = () => {
  const [activeButton, setActiveButton] = useState("Intraday Turnover");
  const [activeButton2, setActiveButton2] = useState("Future Turnover");
  const [activeButton3, setActiveButton3] = useState("Futures");
  const [activeButton4, setActiveButton4] = useState("Future Turnover");

  const [showNextDiv, setShowNextDiv] = useState(false);
  const [showNextDiv2, setShowNextDiv2] = useState(false);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "Delivery Turnover") {
      setShowNextDiv(true);
    } else {
      setShowNextDiv(false);
    }
  };
  const handleClick2 = (buttonName) => {
    setActiveButton2(buttonName);
    if (buttonName === "Delivery Turnover") {
      setShowNextDiv2(true);
    } else {
      setShowNextDiv2(false);
    }
  };
  const handleClick3 = (buttonName) => {
    setActiveButton3(buttonName);
  };
  const handleClick4 = (buttonName) => {
    setActiveButton4(buttonName);
  };
  return (
    <div className=" bg-[#fcfdfe]  ">
      <div className="max-container px-[150px] py-20 flex flex-col justify-center items-center">
        <p className="font-poppins font-normal text-[30px] leading-[30px]">
          Pricing & Plans
        </p>
        <p className="font-poppins font-bold text-[50px] leading-[50px] tracking-tight mt-5 mb-10 text-[#161C2D]">
          DP Charges
        </p>

        <div className="w-full h-[780px] bg-white rounded-[20px] border p-8 pricingSelect">
          <div className="flex items-center">
            <div className="font-poppins font-medium uppercase text-[13px] leading-[19px] tracking-[1.63px] text-[#244896] w-[40%]">
              Head
            </div>
            <div className="w-[60%] flex items-center space-x-10 ">
              <div className="font-poppins font-medium uppercase text-[13px] leading-[19px] tracking-[1.63px] text-[#244896]">
                {" "}
                Minimum Amt.
              </div>
              <div className="font-poppins font-medium uppercase text-[13px] leading-[19px] tracking-[1.63px] text-[#244896]">
                {" "}
                Percentage
              </div>
              <div className="font-poppins font-medium uppercase text-[13px] leading-[19px] tracking-[1.63px] text-[#244896]">
                {" "}
                Fix charges
              </div>
              <div className="font-poppins font-medium uppercase text-[13px] leading-[19px] tracking-[1.63px] text-[#244896]">
                {" "}
                per certificate
              </div>
            </div>
          </div>
          <hr className="my-5" />

          <div className="flex items-center">
            <div className="space-y-4 w-[44%]">
              <div className="flex items-center space-x-2">
                <span>
                  <img src={greenTick} alt="" className="w-4" />
                </span>
                <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                  AMC (1st Year Free)
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <img src={greenTick} alt="" className="w-4" />
                </span>
                <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                  AMC (1st Year Free)
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <img src={greenTick} alt="" className="w-4" />
                </span>
                <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                  Off Marker Debit
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <img src={greenTick} alt="" className="w-4" />
                </span>
                <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                  Off Marker Debit
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <img src={greenTick} alt="" className="w-4" />
                </span>
                <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                  CM TO CM
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <img src={greenTick} alt="" className="w-4" />
                </span>
                <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                  Off Marker Debit to CM
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <img src={greenTick} alt="" className="w-4" />
                </span>
                <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                  Early Payin
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <img src={greenTick} alt="" className="w-4" />
                </span>
                <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                  Pledge Creation
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <img src={greenTick} alt="" className="w-4" />
                </span>
                <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                  Pledge Creation (Margin)
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <img src={greenTick} alt="" className="w-4" />
                </span>
                <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                  Pledge Creation (Re Pledge)
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <img src={greenTick} alt="" className="w-4" />
                </span>
                <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                  Pledge Creation (CUSPA)
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <img src={greenTick} alt="" className="w-4" />
                </span>
                <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                  Off Marker Debit to CM
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <img src={greenTick} alt="" className="w-4" />
                </span>
                <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                  Pledge Closure
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <img src={greenTick} alt="" className="w-4" />
                </span>
                <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                  Pledge Invocation
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <img src={greenTick} alt="" className="w-4" />
                </span>
                <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                  Slip Issue
                </p>
              </div>
            </div>
            <div className=" flex items-center space-x-[100px]">
              <div className="space-y-4 flex flex-col items-center justify-center">
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹250
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹50
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹15
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹15
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹15
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹15
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹15
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹35
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹35
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹30
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹35
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹35
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹35
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹35
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹0.025
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹0.025
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹0.025
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹0.025
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹0.025
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>

                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹20
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹3
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>

                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹35
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹35
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹30
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹35
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹35
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹35
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹35
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-white">
                    nill
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-end w-full mt-5">
          <p className="text-right font-poppins text-[16px] leading-[16px]">
            Note : All charges are in INR
          </p>
        </div>

        <p className="font-poppins font-bold text-[50px] leading-[50px] tracking-tight mt-16  text-[#161C2D]">
          NSE Cash
        </p>

        <div className="mt-10 w-auto h-[80px] rounded-[100px] gradient-btn flex items-center justify-center space-x-6 px-5">
          <button
            className={`${
              activeButton === "Intraday Turnover"
                ? "bg-white text-black"
                : "bg-transparent text-white"
            } rounded-[50px] text-[22px] inline-flex focus:border-none items-center justify-center py-3 px-6 font-bold font-poppins whitespace-nowrap`}
            onClick={() => handleClick("Intraday Turnover")}
          >
            Intraday Turnover
          </button>
          <button
            className={`${
              activeButton === "Delivery Turnover"
                ? "bg-white text-black"
                : "bg-transparent text-white"
            } rounded-[50px] text-[22px] inline-flex items-center focus:border-none justify-center py-3 px-6 font-bold font-poppins whitespace-nowrap`}
            onClick={() => handleClick("Delivery Turnover")}
          >
            Delivery Turnover
          </button>
        </div>

        {showNextDiv ? (
          <div className="deliveryTurnoverDiv w-[70%] h-auto bg-white rounded-[20px] border p-8 pricingSelect mt-16">
            <div className="flex items-center">
              <div className="font-poppins font-medium uppercase text-[13px] leading-[19px] tracking-[1.63px] text-[#244896] w-[60%]">
                NSE CASH SEGMENT
              </div>
              <div className="w-[60%] flex items-center space-x-[170px] whitespace-nowrap">
                <div className="font-poppins font-medium uppercase text-[13px] leading-[19px] tracking-[1.63px] text-[#244896]">
                  {" "}
                  BUY VALUE
                </div>
                <div className="font-poppins font-medium uppercase text-[13px] leading-[19px] tracking-[1.63px] text-[#244896]">
                  {" "}
                  SELL VALUE
                </div>
              </div>
            </div>
            <hr className="my-5" />

            <div className="flex ">
              <div className="space-y-4 w-[50%]">
                <div className="flex items-center space-x-2">
                  <span>
                    <img src={greenTick} alt="" className="w-4" />
                  </span>
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    Delivery Turnover
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <img src={greenTick} alt="" className="w-4" />
                  </span>
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    SEBI Turnover
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <img src={greenTick} alt="" className="w-4" />
                  </span>
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    Stamp Duty
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <img src={greenTick} alt="" className="w-4" />
                  </span>
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    Transaction CHGS
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <img src={greenTick} alt="" className="w-4" />
                  </span>
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    STT
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <img src={greenTick} alt="" className="w-4" />
                  </span>
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    GST
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <img src={greenTick} alt="" className="w-4" />
                  </span>
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    Total
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-[170px]">
                <div className="space-y-4 flex flex-col items-center justify-center">
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹5000000
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹5
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹750
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹172.5
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹5000
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹31.95
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹5959.45
                    </p>
                  </div>
                </div>
                <div className="space-y-4 flex flex-col items-center justify-center">
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹5000000
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹5
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹0
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹172.5
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹5000
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹31.95
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹5959.45
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-5" />
            <div className="flex items-end justify-end w-[96%]">
              <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                ₹11168.9
              </p>
            </div>
          </div>
        ) : (
          <div className="w-[70%] h-auto bg-white rounded-[20px] border p-8 pricingSelect mt-16">
            <div className="flex items-center">
              <div className="font-poppins font-medium uppercase text-[13px] leading-[19px] tracking-[1.63px] text-[#244896] w-[60%]">
                NSE CASH SEGMENT
              </div>
              <div className="w-[60%] flex items-center space-x-[170px] whitespace-nowrap">
                <div className="font-poppins font-medium uppercase text-[13px] leading-[19px] tracking-[1.63px] text-[#244896]">
                  {" "}
                  BUY VALUE
                </div>
                <div className="font-poppins font-medium uppercase text-[13px] leading-[19px] tracking-[1.63px] text-[#244896]">
                  {" "}
                  SELL VALUE
                </div>
              </div>
            </div>
            <hr className="my-5" />

            <div className="flex ">
              <div className="space-y-4 w-[50%]">
                <div className="flex items-center space-x-2">
                  <span>
                    <img src={greenTick} alt="" className="w-4" />
                  </span>
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    Intraday Turnover
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <img src={greenTick} alt="" className="w-4" />
                  </span>
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    SEBI Turnover
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <img src={greenTick} alt="" className="w-4" />
                  </span>
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    Stamp Duty
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <img src={greenTick} alt="" className="w-4" />
                  </span>
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    Transaction CHGS
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <img src={greenTick} alt="" className="w-4" />
                  </span>
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    STT
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <img src={greenTick} alt="" className="w-4" />
                  </span>
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    GST
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <img src={greenTick} alt="" className="w-4" />
                  </span>
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    Total
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-[170px]">
                <div className="space-y-4 flex flex-col items-center justify-center">
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹5000000
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹5
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹150
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹172.5
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹0
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹31.95
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹359.45
                    </p>
                  </div>
                </div>
                <div className="space-y-4 flex flex-col items-center justify-center">
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹5000000
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹5
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹0
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹172.5
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹1250
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹31.95
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹1459.45
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-5" />
            <div className="flex items-end justify-end w-[96%]">
              <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                ₹1818.9
              </p>
            </div>
          </div>
        )}
        {/*Note Tage*/}
        <div className="w-[70%] flex items-end justify-end mt-5">
          <p className="text-right font-poppins text-[16px] leading-[16px]">
            Note : All charges are in INR
          </p>
        </div>

        <div className="mt-20 w-auto h-[80px] rounded-[100px] gradient-btn flex items-center justify-center space-x-6 px-5">
          <button
            className={`${
              activeButton2 === "Future Turnover"
                ? "bg-white text-black"
                : "bg-transparent text-white"
            } rounded-[50px] text-[22px] inline-flex focus:border-none items-center justify-center py-3 px-6 font-bold font-poppins whitespace-nowrap`}
            onClick={() => handleClick2("Future Turnover")}
          >
            Future Turnover
          </button>
          <button
            className={`${
              activeButton2 === "Delivery Turnover"
                ? "bg-white text-black"
                : "bg-transparent text-white"
            } rounded-[50px] text-[22px] inline-flex items-center focus:border-none justify-center py-3 px-6 font-bold font-poppins whitespace-nowrap`}
            onClick={() => handleClick2("Delivery Turnover")}
          >
            Delivery Turnover
          </button>
        </div>

        {showNextDiv2 ? (
          <div className="w-[70%] h-auto bg-white rounded-[20px] border p-8 pricingSelect mt-16">
            <div className="flex items-center">
              <div className="font-poppins font-medium uppercase text-[13px] leading-[19px] tracking-[1.63px] text-[#244896] w-[60%]">
                NSE CASH SEGMENT
              </div>
              <div className="w-[60%] flex items-center space-x-[170px] whitespace-nowrap">
                <div className="font-poppins font-medium uppercase text-[13px] leading-[19px] tracking-[1.63px] text-[#244896]">
                  {" "}
                  BUY VALUE
                </div>
                <div className="font-poppins font-medium uppercase text-[13px] leading-[19px] tracking-[1.63px] text-[#244896]">
                  {" "}
                  SELL VALUE
                </div>
              </div>
            </div>
            <hr className="my-5" />

            <div className="flex ">
              <div className="space-y-4 w-[50%]">
                <div className="flex items-center space-x-2">
                  <span>
                    <img src={greenTick} alt="" className="w-4" />
                  </span>
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    Future Turnover
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <img src={greenTick} alt="" className="w-4" />
                  </span>
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    SEBI Turnover
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <img src={greenTick} alt="" className="w-4" />
                  </span>
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    IPFT Charges
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <img src={greenTick} alt="" className="w-4" />
                  </span>
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    Stamp Duty
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <img src={greenTick} alt="" className="w-4" />
                  </span>
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    Transaction CHGS
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <img src={greenTick} alt="" className="w-4" />
                  </span>
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    STT
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <img src={greenTick} alt="" className="w-4" />
                  </span>
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    GST
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <img src={greenTick} alt="" className="w-4" />
                  </span>
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    Total
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-[170px]">
                <div className="space-y-4 flex flex-col items-center justify-center">
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹5000000
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹5
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹5
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹150
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹172.5
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹0
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹31.95
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹359.45
                    </p>
                  </div>
                </div>
                <div className="space-y-4 flex flex-col items-center justify-center">
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹5000000
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹5
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹5
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹0
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹172.5
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹1250
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹31.95
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹1459.45
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-5" />
            <div className="flex items-end justify-end w-[96%]">
              <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                ₹1818.9
              </p>
            </div>
          </div>
        ) : (
          <div className="w-[70%] h-auto bg-white rounded-[20px] border p-8 pricingSelect mt-16">
            <div className="flex items-center">
              <div className="font-poppins font-medium uppercase text-[13px] leading-[19px] tracking-[1.63px] text-[#244896] w-[60%]">
                NSE CASH SEGMENT
              </div>
              <div className="w-[60%] flex items-center space-x-[170px] whitespace-nowrap">
                <div className="font-poppins font-medium uppercase text-[13px] leading-[19px] tracking-[1.63px] text-[#244896]">
                  {" "}
                  BUY VALUE
                </div>
                <div className="font-poppins font-medium uppercase text-[13px] leading-[19px] tracking-[1.63px] text-[#244896]">
                  {" "}
                  SELL VALUE
                </div>
              </div>
            </div>
            <hr className="my-5" />

            <div className="flex ">
              <div className="space-y-4 w-[50%]">
                <div className="flex items-center space-x-2">
                  <span>
                    <img src={greenTick} alt="" className="w-4" />
                  </span>
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    Future Turnover
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <img src={greenTick} alt="" className="w-4" />
                  </span>
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    SEBI Turnover
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <img src={greenTick} alt="" className="w-4" />
                  </span>
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    IPFT Charges
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <img src={greenTick} alt="" className="w-4" />
                  </span>
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    Stamp Duty
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <img src={greenTick} alt="" className="w-4" />
                  </span>
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    Transaction CHGS
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <img src={greenTick} alt="" className="w-4" />
                  </span>
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    STT
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <img src={greenTick} alt="" className="w-4" />
                  </span>
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    GST
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <img src={greenTick} alt="" className="w-4" />
                  </span>
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    Total
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-[170px]">
                <div className="space-y-4 flex flex-col items-center justify-center">
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹5000000
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹5
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹5
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹150
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹172.5
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹0
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹31.95
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹359.45
                    </p>
                  </div>
                </div>
                <div className="space-y-4 flex flex-col items-center justify-center">
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹5000000
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹5
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹5
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹0
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹172.5
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹1250
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹31.95
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                      ₹1459.45
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-5" />
            <div className="flex items-end justify-end w-[96%]">
              <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                ₹1818.9
              </p>
            </div>
          </div>
        )}
        <div className="w-[70%] flex items-end justify-end mt-5">
          <p className="text-right font-poppins text-[16px] leading-[16px]">
            Note : All charges are in INR
          </p>
        </div>

        <p className="font-poppins font-bold text-[50px] leading-[50px] tracking-tight mt-24 text-[#161C2D]">
          Commodity
        </p>

        <div className="mt-10 w-auto h-[80px] rounded-[100px] gradient-btn flex items-center justify-center space-x-6 px-5">
          <button
            className={`${
              activeButton3 === "Futures"
                ? "bg-white text-black"
                : "bg-transparent text-white"
            } rounded-[50px] text-[22px] inline-flex focus:border-none items-center justify-center py-3 px-6 font-bold font-poppins whitespace-nowrap`}
            onClick={() => handleClick3("Futures")}
          >
            Futures
          </button>
          <button
            className={`${
              activeButton3 === "Options"
                ? "bg-white text-black"
                : "bg-transparent text-white"
            } rounded-[50px] text-[22px] inline-flex items-center focus:border-none justify-center py-3 px-6 font-bold font-poppins whitespace-nowrap`}
            onClick={() => handleClick3("Options")}
          >
            Options
          </button>
        </div>

        <div className="w-[70%] h-auto bg-white rounded-[20px] border p-8 pricingSelect mt-16">
          <div className="flex items-center">
            <div className="font-poppins font-medium uppercase text-[13px] leading-[19px] tracking-[1.63px] text-[#244896] w-[60%]">
              NSE CASH SEGMENT
            </div>
            <div className="w-[60%] flex items-center space-x-[170px] whitespace-nowrap">
              <div className="font-poppins font-medium uppercase text-[13px] leading-[19px] tracking-[1.63px] text-[#244896]">
                {" "}
                BUY VALUE
              </div>
              <div className="font-poppins font-medium uppercase text-[13px] leading-[19px] tracking-[1.63px] text-[#244896]">
                {" "}
                SELL VALUE
              </div>
            </div>
          </div>
          <hr className="my-5" />

          <div className="flex ">
            <div className="space-y-4 w-[50%]">
              <div className="flex items-center space-x-2">
                <span>
                  <img src={greenTick} alt="" className="w-4" />
                </span>
                <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                  Commodity Future
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <img src={greenTick} alt="" className="w-4" />
                </span>
                <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                  SEBI Turnover
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <img src={greenTick} alt="" className="w-4" />
                </span>
                <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                  IPFT Charges
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <img src={greenTick} alt="" className="w-4" />
                </span>
                <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                  Stamp Duty
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <img src={greenTick} alt="" className="w-4" />
                </span>
                <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                  Transaction CHGS
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <img src={greenTick} alt="" className="w-4" />
                </span>
                <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                  STT
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <img src={greenTick} alt="" className="w-4" />
                </span>
                <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                  GST
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <img src={greenTick} alt="" className="w-4" />
                </span>
                <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                  Total
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-[170px]">
              <div className="space-y-4 flex flex-col items-center justify-center">
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹5000000
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹5
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹5
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹100
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹130
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹0
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹24.3
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹259
                  </p>
                </div>
              </div>
              <div className="space-y-4 flex flex-col items-center justify-center">
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹5000000
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹5
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹5
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹0
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹130
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹500
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹24.3
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹659
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-5" />
          <div className="flex items-end justify-end w-[96%]">
            <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
              ₹918.6
            </p>
          </div>
        </div>
        <div className="w-[70%] flex items-end justify-end mt-5">
          <p className="text-right font-poppins text-[16px] leading-[16px]">
            Note : All charges are in INR
          </p>
        </div>

        <div className="mt-20 w-auto h-[80px] rounded-[100px] gradient-btn flex items-center justify-center space-x-6 px-5">
          <button
            className={`${
              activeButton4 === "Future Turnover"
                ? "bg-white text-black"
                : "bg-transparent text-white"
            } rounded-[50px] text-[22px] inline-flex focus:border-none items-center justify-center py-3 px-6 font-bold font-poppins whitespace-nowrap`}
            onClick={() => handleClick4("Future Turnover")}
          >
            Future Turnover
          </button>
          <button
            className={`${
              activeButton4 === "Option Turnover"
                ? "bg-white text-black"
                : "bg-transparent text-white"
            } rounded-[50px] text-[22px] inline-flex items-center focus:border-none justify-center py-3 px-6 font-bold font-poppins whitespace-nowrap`}
            onClick={() => handleClick4("Option Turnover")}
          >
            Option Turnover
          </button>
        </div>

        <div className="w-[70%] h-auto bg-white rounded-[20px] border p-8 pricingSelect mt-16">
          <div className="flex items-center">
            <div className="font-poppins font-medium uppercase text-[13px] leading-[19px] tracking-[1.63px] text-[#244896] w-[60%]">
              NSE CASH SEGMENT
            </div>
            <div className="w-[60%] flex items-center space-x-[170px] whitespace-nowrap">
              <div className="font-poppins font-medium uppercase text-[13px] leading-[19px] tracking-[1.63px] text-[#244896]">
                {" "}
                BUY VALUE
              </div>
              <div className="font-poppins font-medium uppercase text-[13px] leading-[19px] tracking-[1.63px] text-[#244896]">
                {" "}
                SELL VALUE
              </div>
            </div>
          </div>
          <hr className="my-5" />

          <div className="flex ">
            <div className="space-y-4 w-[50%]">
              <div className="flex items-center space-x-2">
                <span>
                  <img src={greenTick} alt="" className="w-4" />
                </span>
                <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                  Intraday Turnover
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <img src={greenTick} alt="" className="w-4" />
                </span>
                <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                  SEBI Turnover
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <img src={greenTick} alt="" className="w-4" />
                </span>
                <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                  Stamp Duty
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <img src={greenTick} alt="" className="w-4" />
                </span>
                <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                  Transaction CHGS
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <img src={greenTick} alt="" className="w-4" />
                </span>
                <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                  STT
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <img src={greenTick} alt="" className="w-4" />
                </span>
                <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                  GST
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <img src={greenTick} alt="" className="w-4" />
                </span>
                <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                  Total
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-[170px]">
              <div className="space-y-4 flex flex-col items-center justify-center">
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹5000000
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹5
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹150
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹172.5
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹0
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹31.95
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹359.45
                  </p>
                </div>
              </div>
              <div className="space-y-4 flex flex-col items-center justify-center">
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹5000000
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹5
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹0
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹172.5
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹1250
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹31.95
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
                    ₹1459.45
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-5" />
          <div className="flex items-end justify-end w-[96%]">
            <p className="font-poppins font-medium  text-[17px] leading-[29px] tracking-tight text-[#161C2D]">
              ₹1818.9
            </p>
          </div>
        </div>
        <div className="w-[70%] flex items-end justify-end mt-5">
          <p className="text-right font-poppins text-[16px] leading-[16px]">
            Note : All charges are in INR
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
