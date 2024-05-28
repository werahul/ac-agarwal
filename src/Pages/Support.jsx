import React, { useEffect, useState } from "react";
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
  blueTick,
  blueTick2,
  customerSupport,
} from "../assets/Images";
import AccountOpening from "../componet/SupportFaq/AccountOpening";
import {
  AddingFunds,
  Api,
  BackOffice,
  CustomerService,
  Edis,
  Ipo,
  Margin,
  MarginTradingFacility,
  ShareTransfer,
  TradingAndInvesting,
} from "../componet/SupportFaq";

const Support = () => {
  const data = [
    {
      detailsOf: "Client Servicing",
      contactPerson: "Ms. Neha Yadav",
      address: "315, City Mall, C-Scheme, Jaipur - 302001",
      contactNo: "0141-4920999",
      emailId: "care@acagarwal.com",
      timings: "9AM - 6PM",
    },
    {
      detailsOf: "Head of Client Servicing",
      contactPerson: "Mr. Naman Agarwal",
      address: "406 Payal Complex, Sayajigunj, Vadodara - 390005",
      contactNo: "0265-2361059",
      emailId: "care@acagarwal.com",
      timings: "9AM - 6PM",
    },
    {
      detailsOf: "Compliance Officer",
      contactPerson: "Mr. Ravindra Uniyal",
      address: "406 Payal Complex, Sayajigunj, Vadodara - 390005",
      contactNo: "0265-2361059",
      emailId: "compliance@acagarwal.com",
      timings: "9AM - 6PM",
    },
    {
      detailsOf: "CEO",
      contactPerson: "Mr. Nagessh Agarwal",
      address: "406 Payal Complex, Sayajigunj, Vadodara - 390005",
      contactNo: "0265-2361059",
      emailId: "acashare@acagarwal.com",
      timings: "9AM - 6PM",
    },
  ];

  const randomNames = [
    [
      "Client Servicing",
      "Ms. Neha Yadav",
      "315, City Mall, C-Scheme, Jaipur - 302001",
      "0141-4920999",
      "care@acagarwal.com",
      "9AM - 6PM",
    ],
    [
      "Head of Client Servicing",
      "Mr. Naman Agarwal",
      "406 Payal Complex, Sayajigunj, Vadodara - 390005",
      "0265-2361059",
      "care@acagarwal.com",
      "9AM - 6PM",
    ],
    [
      "Compliance Officer",
      "Mr. Ravindra Uniyal",
      "406 Payal Complex, Sayajigunj, Vadodara - 390005",
      "0265-2361059",
      "compliance@acagarwal.com",
      "9AM - 6PM",
    ],
    [
      "CEO",
      "Mr. Nagessh Agarwal",
      "406 Payal Complex, Sayajigunj, Vadodara - 390005",
      "0265-2361059",
      "acashare@acagarwal.com",
      "9AM - 6PM",
    ],
  ];

  const randomNames2 = [
    [
      "1",
      "Mr. Nagessh Agarwal",
      "Director",
      "0141-4920999",
      "acashare@acagarwal.com",
    ],
    [
      "2",
      "Mr. Ankit Agarwal",
      "Director",
      "0265-2361059",
      "ankit@acagarwal.com",
    ],
    [
      "3",
      "Mr. Ravindra Uniyal",
      "Compliance Officer",
      "0265-2361059",
      "compliance@acagarwal.com",
    ],
  ];

  const [componentVisibility, setComponentVisibility] = useState([
    true,
    false,
    false,
  ]);
  const [activeComponent, setActiveComponent] = useState(0);

  const toggleComponentVisibility = (index) => {
    setActiveComponent(activeComponent === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // Aos.init({duration: 2000});
  }, []);

  const isMobile = window.innerWidth <= 768;
  const backColor = isMobile ? "bg-[#f8f8f8]" : "bg-[#fcfdfe]";
  const navColor = isMobile ? "bg-[#F7F9FA99]" : "bg-[#FCFDFE]";

  return (
    <div>
      <Navbar navColor={navColor} />
      <div className="">
        <div className="max-container">
          <section>
            <div className="flex flex-col items-center justify-center lg:pt-32 pt-20 pb-28">
              <h1 className="font-medium text-[32px] text-center w-[90%] lg:w-auto lg:text-[52px] leading-[48px] tracking-tight font-poppins text-[#161C2DCC] ">
                Welcome To Support
              </h1>
              <p className="text-[15px] lg:text-[28px] leading-[26px] lg:leading-[28px] text-center tracking-tight font-poppins text-[#161c2ddc] opacity-80 lg:mt-7 mt-2">
                Type your query or browse the FAQ section below
              </p>

              {/*<div className="relative w-[90%]  lg:w-[50%] h-[78px] mt-14">
              <input
                type="text"
                placeholder="Type here"
                className="w-[100%] h-[78px] rounded-[60px] border shadow-lg font-dmSans text-[18px] px-10 outline-none"
              />
              <button className="w-[134px] h-[55px] rounded-[56px] bg-[#244896] font-medium font-dmSans text-[18px] text-white absolute top-3 right-4">
                Search
              </button>
  </div>*/}

              <div className="flex items-start lg:items-center justify-center text-center lg:space-x-2 w-[70%] lg:mt-6 mt-6">
                <img
                  src={filledChecked}
                  alt=""
                  className="lg:ml-0 ml-2 lg:mt-0 mt-1"
                />
                <p className="font-poppins lg:text-[16px] text-[15px] text-[#161C2DCC] opacity-80">
                  Questions related to corporate terminology and work.
                </p>
              </div>
            </div>
          </section>

          <section className="px-5 w-full lg:px-20 pb-40 ">
            <div
              className={` rounded-3xl px-0 py-0 ${
                activeComponent === 0 ? "bg-[#fcfdfe] border" : ""
              }`}
            >
              {/* First Component */}
              <div
                className={`w-[100%] bg-transparent h-[131px] rounded-[18px] px-5 lg:px-20 ${
                  activeComponent === 0 ? "" : "custom-shadow  py-8"
                } flex items-center justify-between`}
              >
                <div className="">
                  <p className="font-semibold lg:text-[26px] text-[20px] leading-[35px] text-[#161c2ddc] font-poppins">
                    Account Opening on AC Agarwal
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
            </div>
            {/* Second Component */}
            <div
              className={` rounded-3xl px-0 py-0 mt-6 ${
                activeComponent === 1 ? "bg-[#fcfdfe] border" : ""
              }`}
            >
              <div
                className={`w-full bg-transparent h-[130px] lg:h-[131px] rounded-[18px] px-5 lg:px-20 mt-6 ${
                  activeComponent === 1 ? "" : "custom-shadow  py-8"
                } flex items-center justify-between`}
              >
                <div className="">
                  <p className="font-semibold lg:text-[26px] text-[20px] leading-[28px] lg:leading-[35px] text-[#161c2ddc] font-poppins">
                    Trading/ Investing on AC Agarwal
                  </p>
                </div>
                <div>
                  <img
                    src={dropDownArr}
                    alt=""
                    className="min-w-5 cursor-pointer"
                    onClick={() => toggleComponentVisibility(1)}
                  />
                </div>
              </div>
              {activeComponent === 1 && <TradingAndInvesting />}
            </div>

            {/* Third Component */}
            <div
              className={` rounded-3xl px-0 py-0 mt-6 ${
                activeComponent === 2 ? "bg-[#fcfdfe] border" : ""
              }`}
            >
              <div
                className={`w-full bg-transparent h-[131px] rounded-[18px] px-5 lg:px-20 mt-6 ${
                  activeComponent === 2 ? "" : "custom-shadow  py-8"
                } flex items-center justify-between`}
              >
                <div className="">
                  <p className="font-semibold lg:text-[26px] text-[20px] leading-[30px] lg:leading-[35px] text-[#161c2ddc] font-poppins">
                    Adding and withdrawing Funds on AC Agarwal
                  </p>
                </div>
                <div>
                  <img
                    src={dropDownArr}
                    alt=""
                    className="cursor-pointer min-w-5"
                    onClick={() => toggleComponentVisibility(2)}
                  />
                </div>
              </div>
              {activeComponent === 2 && <AddingFunds />}
            </div>

            {/* Fourth Component */}
            <div
              className={` rounded-3xl px-0 py-0 mt-6 ${
                activeComponent === 3 ? "bg-[#fcfdfe] border" : ""
              }`}
            >
              <div
                className={`w-full bg-transparent h-[131px] rounded-[18px] px-5 lg:px-20 mt-6 ${
                  activeComponent === 3 ? "" : "custom-shadow  py-8"
                } flex items-center justify-between`}
              >
                <div className="">
                  <p className="font-semibold lg:text-[26px] text-[20px] leading-[35px] text-[#161c2ddc] font-poppins">
                    Margins on AC Agarwal
                  </p>
                </div>
                <div>
                  <img
                    src={dropDownArr}
                    alt=""
                    className="cursor-pointer"
                    onClick={() => toggleComponentVisibility(3)}
                  />
                </div>
              </div>
              {activeComponent === 3 && <Margin />}
            </div>

            {/* Fifht Component */}
            <div
              className={` rounded-3xl px-0 py-0 mt-6 ${
                activeComponent === 4 ? "bg-[#fcfdfe] border" : ""
              }`}
            >
              <div
                className={`w-full bg-transparent h-[131px] rounded-[18px] px-5 lg:px-20 mt-6 ${
                  activeComponent === 4 ? "" : "custom-shadow  py-8"
                } flex items-center justify-between`}
              >
                <div className="">
                  <p className="font-semibold lg:text-[26px] text-[20px] leading-[30px] lg:leading-[35px] text-[#161c2ddc] font-poppins">
                    Margin Trading Facility on AC Agarwal
                  </p>
                </div>
                <div>
                  <img
                    src={dropDownArr}
                    alt=""
                    className="cursor-pointer min-w-5"
                    onClick={() => toggleComponentVisibility(4)}
                  />
                </div>
              </div>
              {activeComponent === 4 && <MarginTradingFacility />}
            </div>

            {/* Sixth Component */}
            <div
              className={` rounded-3xl px-0 py-0 mt-6 ${
                activeComponent === 5 ? "bg-[#fcfdfe] border" : ""
              }`}
            >
              <div
                className={`w-full bg-transparent h-[131px] rounded-[18px] px-5 lg:px-20 mt-6 ${
                  activeComponent === 5 ? "" : "custom-shadow  py-8"
                } flex items-center justify-between`}
              >
                <div className="">
                  <p className="font-semibold lg:text-[26px] text-[20px] leading-[30px] lg:leading-[35px] text-[#161c2ddc] font-poppins">
                    Initial Public Offering (IPO) on AC Agarwal
                  </p>
                </div>
                <div>
                  <img
                    src={dropDownArr}
                    alt=""
                    className="cursor-pointer min-w-5"
                    onClick={() => toggleComponentVisibility(5)}
                  />
                </div>
              </div>
              {activeComponent === 5 && <Ipo />}
            </div>

            {/* Seventh Component */}
            {/*<div
            className={` rounded-3xl px-0 py-0 mt-6 ${
              activeComponent === 6 ? "bg-[#fcfdfe] border" : ""
            }`}
          >
            <div
              className={`w-full bg-transparent h-[131px] rounded-[18px] px-5 lg:px-20 mt-6 ${
                activeComponent === 6 ? "" : "custom-shadow  py-8"
              } flex items-center justify-between`}
            >
              <div className="">
                <p className="font-semibold lg:text-[26px] text-[20px] leading-[30px] lg:leading-[35px] text-[#161c2ddc] font-poppins">
                 Mutual Fund
                </p>
                
              </div>
              <div>
                <img
                  src={dropDownArr}
                  alt=""
                  className="cursor-pointer min-w-5 "
                  onClick={() => toggleComponentVisibility(6)}
                />
              </div>
            </div>
            {activeComponent === 6 && <AccountOpening />}
            </div>*/}

            {/* Eight component */}
            <div
              className={` rounded-3xl px-0 py-0 mt-6 ${
                activeComponent === 7 ? "bg-[#fcfdfe] border" : ""
              }`}
            >
              <div
                className={`w-full bg-transparent h-[131px] rounded-[18px] px-5 lg:px-20 mt-6 ${
                  activeComponent === 7 ? "" : "custom-shadow  py-8"
                } flex items-center justify-between`}
              >
                <div className="">
                  <p className="font-semibold lg:text-[26px] text-[20px] leading-[35px] text-[#161c2ddc] font-poppins">
                    Share Transfer on AC Agarwal
                  </p>
                  <p className="lg:text-[22px] text-[15px] lg:leading-[16px] leading-[26px] text-[#161c2ddc] font-poppins opacity-80 mt-5 text-[#161C2DCC]"></p>
                </div>
                <div>
                  <img
                    src={dropDownArr}
                    alt=""
                    className="cursor-pointer"
                    onClick={() => toggleComponentVisibility(7)}
                  />
                </div>
              </div>
              {activeComponent === 7 && <ShareTransfer />}
            </div>

            {/* Ninth component */}
            <div
              className={` rounded-3xl px-0 py-0 mt-6 ${
                activeComponent === 8 ? "bg-[#fcfdfe] border" : ""
              }`}
            >
              <div
                className={`w-full bg-transparent h-[131px] rounded-[18px] px-5 lg:px-20 mt-6 ${
                  activeComponent === 8 ? "" : "custom-shadow  py-8"
                } flex items-center justify-between`}
              >
                <div className="">
                  <p className="font-semibold lg:text-[26px] text-[20px] leading-[35px] text-[#161c2ddc] font-poppins">
                    e-DIS on AC Agarwal
                  </p>
                  <p className="lg:text-[22px] text-[15px] lg:leading-[16px] leading-[26px] text-[#161c2ddc] font-poppins opacity-80 mt-5 text-[#161C2DCC]"></p>
                </div>
                <div>
                  <img
                    src={dropDownArr}
                    alt=""
                    className="cursor-pointer"
                    onClick={() => toggleComponentVisibility(8)}
                  />
                </div>
              </div>
              {activeComponent === 8 && <Edis />}
            </div>

            {/* Tenth component */}
            <div
              className={` rounded-3xl px-0 py-0 mt-6 ${
                activeComponent === 9 ? "bg-[#fcfdfe] border" : ""
              }`}
            >
              <div
                className={`w-full bg-transparent h-[131px] rounded-[18px] px-5 lg:px-20 mt-6 ${
                  activeComponent === 9 ? "" : "custom-shadow  py-8"
                } flex items-center justify-between`}
              >
                <div className="">
                  <p className="font-semibold lg:text-[26px] text-[20px] leading-[35px] text-[#161c2ddc] font-poppins">
                    Back Office on AC Agarwal
                  </p>
                  <p className="lg:text-[22px] text-[15px] lg:leading-[16px] leading-[26px] text-[#161c2ddc] font-poppins opacity-80 mt-5 text-[#161C2DCC]"></p>
                </div>
                <div>
                  <img
                    src={dropDownArr}
                    alt=""
                    className="cursor-pointer"
                    onClick={() => toggleComponentVisibility(9)}
                  />
                </div>
              </div>
              {activeComponent === 9 && <BackOffice />}
            </div>

            {/* Eleventh component */}
            <div
              className={` rounded-3xl px-0 py-0 mt-6 ${
                activeComponent === 10 ? "bg-[#fcfdfe] border" : ""
              }`}
            >
              <div
                className={`w-full bg-transparent h-[131px] rounded-[18px] px-5 lg:px-20 mt-6 ${
                  activeComponent === 10 ? "" : "custom-shadow  py-8"
                } flex items-center justify-between`}
              >
                <div className="">
                  <p className="font-semibold lg:text-[26px] text-[20px] leading-[35px] text-[#161c2ddc] font-poppins">
                    APIs on AC Agarwal
                  </p>
                  <p className="lg:text-[22px] text-[15px] lg:leading-[16px] leading-[26px] text-[#161c2ddc] font-poppins opacity-80 mt-5 text-[#161C2DCC]"></p>
                </div>
                <div>
                  <img
                    src={dropDownArr}
                    alt=""
                    className="cursor-pointer"
                    onClick={() => toggleComponentVisibility(10)}
                  />
                </div>
              </div>
              {activeComponent === 10 && <Api />}
            </div>

            {/* Tweleth component */}
            <div
              className={` rounded-3xl px-0 py-0 mt-6 ${
                activeComponent === 11 ? "bg-[#fcfdfe] border" : ""
              }`}
            >
              <div
                className={`w-full bg-transparent h-[131px] rounded-[18px] px-5 lg:px-20 mt-6 ${
                  activeComponent === 11 ? "" : "custom-shadow  py-8"
                } flex items-center justify-between`}
              >
                <div className="">
                  <p className="font-semibold lg:text-[26px] text-[20px] leading-[35px] text-[#161c2ddc] font-poppins">
                    Customer Service on AC Agarwal
                  </p>
                  <p className="lg:text-[22px] text-[15px] lg:leading-[16px] leading-[26px] text-[#161c2ddc] font-poppins opacity-80 mt-5 text-[#161C2DCC]"></p>
                </div>
                <div>
                  <img
                    src={dropDownArr}
                    alt=""
                    className="cursor-pointer"
                    onClick={() => toggleComponentVisibility(11)}
                  />
                </div>
              </div>
              {activeComponent === 11 && <CustomerService />}
            </div>
          </section>

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
              <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 items-center space-x-4 mt-8 lg:mt-16">
                <a href="mailto:support@acagarwal.com">
                  <div className="flex items-center  space-x-2 bg-[#244896] rounded-[62px] bg-opacity-20 text-[#244896] px-5 py-1">
                    <img src={blueTick2} alt="" className="lg:w-auto w-5" />
                    <p className="font-poppins font-medium text-[20px] lg:text-[24px]">
                      Support@acagarwal.com
                    </p>
                  </div>
                </a>
                <a href="tel:+911414920999">
                  <div className="flex items-center space-x-2 bg-[#244896] rounded-[62px] bg-opacity-20 text-[#244896] px-5 py-1">
                    <img src={blueTick2} alt="" className="lg:w-auto w-5" />
                    <p className="font-poppins font-medium text-[20px] lg:text-[24px]">
                      +91 141 4920999
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>
        <div className="lg:bg-[#f4f7fa]">
        <section className="max-container py-20  lg:px-20 px-5 lg:mt-32 mt-10">
          <div className="flex flex-col items-center justify-center">
            <img
              src={customerSupport}
              alt=""
              className="w-[150px] lg:w-auto h-auto"
            />
            <p className="font-poppins font-medium text-[32px] lg:text-[42px] lg:leading-[56px] leading-[44px]  tracking-tight text-[#161c2ddc] text-center mt-10 ">
              {" "}
              Our Commitment to You
            </p>
            <p className="font-poppins text-[15px] lg:text-[24px] leading-[26px] lg:leading-[38px]   text-[#161c2ddc] text-center opacity-90 lg:w-[87%] lg:mt-6 mt-4">
              {" "}
              At AC Agarwal, we value your satisfaction and strive to deliver <br className="lg:block hidden" />
              exceptional customer support. Our team of knowledgeable and
              friendly <br className="lg:block hidden" /> support representatives is dedicated to addressing your 
              inquiries and ensuring your <br className="lg:block hidden" /> trading experience is smooth and
              successful. Don't hesitate to reach out – we're here <br className="lg:block hidden" /> to support
              you every step of the way.
            </p>
          </div>
        </section>
        </div>

        <div className="max-container">
          <section className="py-20  lg:px-20 px-5">
            <p className="font-poppins font-medium lg:text-[42px] text-[32px] lg:leading-normal leading-[44px] text-center text-[#161C2DCC] lg:mb-20 mb-10">
              Annexure - <br className="lg:hidden block" /> A Escalation Matrix
            </p>

            <div className="lg:block hidden overflow-x-auto p-0 border border-[#00000026] rounded-[22px]">
              <table className="min-w-full bg-[#FCFDFE] border border-[#00000026] rounded-[22px] overflow-hidden">
                <thead>
                  <tr>
                    {[
                      "Details Of",
                      "Contact Person",
                      "Address",
                      "Contact No.",
                      "Email ID",
                      "Timings",
                    ].map((header, index) => (
                      <th
                        key={index}
                        className="font-poppins font-semibold lg:text-[20px] whitespace-nowrap text-[12px] text-center bg-[#fcfdfe] text-[#161c2ddc] py-8 px-4 border border-[#00000026]"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {randomNames.slice(0).map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="flex flex-col lg:table-row border-b border-gray-200"
                    >
                      {row.map((cell, colIndex) => {
                        let content = cell;
                        if (colIndex === 3) {
                          // Make phone number clickable
                          content = (
                            <a
                              href={`tel:${cell}`}
                              className="text-[#161C2DCC]"
                            >
                              {cell}
                            </a>
                          );
                        }
                        if (colIndex === 4) {
                          // Make email clickable
                          content = (
                            <a
                              href={`mailto:${cell}`}
                              className="text-[#161C2DCC]"
                            >
                              {cell}
                            </a>
                          );
                        }
                        return (
                          <td
                            key={colIndex}
                            className={`font-poppins font-normal lg:text-[14px] text-[12px] text-center py-8 px-4 text-[#161C2DCC] ${
                              colIndex < 5 ? "border-b border-r" : "border-b"
                            } border-[#00000026]`}
                          >
                            {content}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="lg:hidden block space-y-6">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="p-5 h-[224px] bg-[#FCFDFE] border rounded-[22px] flex flex-col justify-between"
                >
                  <p className="font-poppins text-[15px]">
                    {item.detailsOf} -{" "}
                    <span className="font-semibold">{item.contactPerson}</span>
                  </p>
                  <p className="font-poppins text-[15px]">
                    Address -{" "}
                    <span className="font-semibold">{item.address}</span>
                  </p>
                  <p className="font-poppins text-[15px]">
                    Contact No. -
                    <a href={`tel:${item.contactNo}`}>
                      {" "}
                      <span className="font-semibold">{item.contactNo}</span>
                    </a>
                  </p>
                  <p className="font-poppins text-[15px]">
                    E-mail ID - {" "}
                    <a
                      href={`mailto:${item.emailId}`}
                      className="font-semibold"
                    >
                      {item.emailId}
                    </a>
                  </p>
                  <p className="font-poppins text-[15px]">
                    Timings -{" "}
                    <span className="font-semibold">{item.timings}</span>
                  </p>
                </div>
              ))}
            </div>
            <p className="font-poppins lg:text-[16px] text-[15px] leading-[26px] text-[#161C2DB2] lg:mt-5 mt-3">
              In absence of response/ complaint not addressed to your
              satisfaction, you may lodge a complaint with{" "}
              <a href="https://www.cdslindia.com/" target="_blank">
                {" "}
                <span className="font-semibold text-[#244896]"> CDSL </span>{" "}
              </a>{" "}
              /{" "}
              <a
                href="https://scores.gov.in/scores/Welcome.html"
                target="_blank"
              >
                {" "}
                <span className="font-semibold text-[#244896]"> SEBI </span>{" "}
              </a>{" "}
              or{" "}
              <a
                href="https://www.bseindia.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-semibold text-[#244896]">BSE</span>{" "}
              </a>{" "}
              or{" "}
              <a
                href="https://www.mcxindia.com/Investor-Services"
                target="_blank"
              >
                <span className="font-semibold text-[#244896]">
                  {" "}
                  Investor Services{" "}
                </span>
              </a>{" "}
              or
              <a
                href="https://investorhelpline.nseindia.com/NICEPLUS/"
                target="_blank"
              >
                <span className="font-semibold text-[#244896]"> NICE. </span>{" "}
              </a>
              Please quote your Complaint Reference Number while raising your
              complaint at SEBI SCORES/ Depository Portal.
            </p>
          </section>

          <section className="pt-10 pb-20  lg:px-20 px-5">
            <p className="font-poppins font-medium lg:text-[42px] text-[32px] lg:leading-normal leading-[44px] text-center text-[#161C2DCC] lg:mb-20 mb-10">
              Names & Contact Details of all Key <br /> Managerial Personnel
            </p>

            <div className="lg:block hidden overflow-x-auto p-0 border border-[#00000026] rounded-[22px]">
              <table className="min-w-full bg-[#FCFDFE] border border-[#00000026] rounded-[22px] overflow-hidden">
                <thead>
                  <tr>
                    {[
                      "Sr No.",
                      "Individual Name",
                      "Designation",
                      "Contact No.",
                      "Email ID",
                    ].map((header, index) => (
                      <th
                        key={index}
                        className="font-poppins font-semibold lg:text-[20px] whitespace-nowrap text-[12px] text-center bg-[#fcfdfe] text-[#161c2ddc] py-8 px-4 border border-[#00000026]"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {randomNames2.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="flex flex-col lg:table-row border-b border-gray-200"
                    >
                      {row.map((name, colIndex) => {
                        let content = name;
                        if (colIndex === 3) {
                          // Make phone number clickable
                          content = (
                            <a
                              href={`tel:${name}`}
                              className="text-[#161C2DCC]"
                            >
                              {name}
                            </a>
                          );
                        }
                        if (colIndex === 4) {
                          // Make email clickable
                          content = (
                            <a
                              href={`mailto:${name}`}
                              className="text-[#161C2DCC]"
                            >
                              {name}
                            </a>
                          );
                        }
                        return (
                          <td
                            key={colIndex}
                            className={`font-poppins font-normal lg:text-[14px] text-[12px] text-center py-8 px-4 text-[#161C2DCC] ${
                              colIndex < 4 ? "border-b border-r" : "border-b"
                            } border-[#00000026]`}
                          >
                            {content}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="lg:hidden block space-y-6">
              {randomNames2.map((item, index) => (
                <div
                  key={index}
                  className="min-h-[132px]  p-5 bg-[#FCFDFE] border rounded-[22px] flex flex-col justify-between"
                >
                  <p className="font-poppins text-[15px]">
                    {item[2]} - <span className="font-semibold">{item[1]}</span>
                  </p>
                  <p className="font-poppins text-[15px]">
                    Contact No. - {" "}
                    <a href={`tel:${item[3]}`}>
                      <span className="font-semibold">{item[3]}</span>
                    </a>
                  </p>
                  <p className="font-poppins text-[15px]">
                    E-mail ID - {" "}
                    <a href={`mailto:${item[4]}`} className="font-semibold">
                      {item[4]}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer backColor={backColor} />
    </div>
  );
};

export default Support;
