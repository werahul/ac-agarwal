import React, { useEffect, useState } from "react";
import { Footer, Navbar } from "../componet";
import {
  appStore,
  ArrowRight,
  ArrowRightBlue,
  bloomProduct,
  MathProduct,
  playstore,
  math1,
  math2,
  math3,
  math4,
  mathMain,
  mathMainMobile,
  cross,
} from "../assets/Images";
import { b1, b2, b3, b4, b5, bloomer } from "../assets/newImages";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Bloom = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Aos.init({duration: 2000});
  }, []);

  const isMobile = window.innerWidth <= 768;
  const backColor = isMobile ? "bg-[#f8f8f8]" : "bg-[#fcfdfe]";
  const navColor = isMobile ? "bg-[#F7F9FA99]" : "bg-[#FCFDFE]";

  const [showPopup, setShowPopup] = useState(false);
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [errors, setErrors] = useState({});

  const handleGetOfferClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };
  const handleDaySelect = (day) => {
    setSelectedDay(day);
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setFullName(value);
      setErrors((prev) => ({ ...prev, fullName: "" }));
    } else {
      setErrors((prev) => ({
        ...prev,
        fullName: "Only letters and spaces are allowed.",
      }));
    }
  };

  const handleMobileNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setMobileNumber(value);
      setErrors((prev) => ({ ...prev, mobileNumber: "" }));
    } else {
      setErrors((prev) => ({
        ...prev,
        mobileNumber: "Only numbers are allowed.",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (fullName.trim() === "") {
      newErrors.fullName = "Full Name is required.";
    }
    if (mobileNumber.trim() === "") {
      newErrors.mobileNumber = "Mobile Number is required.";
    }
    if (!email) {
      newErrors.email = "Email is required.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Proceed with form submission
      console.log("Form submitted");
    }
  };

  return (
    <div className="bg-[#fcfdfe]">
      <Helmet>
        <meta
          name="title"
          content="Math - AC Agarwal"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Designed for the Dedicated Trader, Engineered for Efficiency. Swift, Focused Trading Across All Devices."
        />

        <link rel="canonical" href="https://acagarwal.com/math" />
      </Helmet>

      <Navbar navColor={navColor} />

      <div className="lg:pt-32 lg:pb-0 pt-[62px] pb-0 lg:px-20 px-5 bg-[#fcfdfe]">
        <div className="max-container">
          <div className="flex flex-col items-center justify-center mb-24">
            <h1 className="font-poppins text-center font-medium lg:text-[52px] text-[36px] leading-[56px] lg:leading-[66px] tracking-tight text-[#161C2DCC]">
              Math <br />
              <p className="font-poppins text-center font-normal lg:text-[38px] text-[22px] leading-[32px] lg:leading-[66px] lg:tracking-tight text-[#161C2DCC]">
                Empowering Traders to Dominate the Market
              </p>
            </h1>
            <p className="font-poppins mx-auto text-center lg:text-[28px] lg:w-[910px] text-[15px]  lg:leading-[40px] leading-[26px] text-[#161C2D] opacity-70 lg:mt-8 mt-7">
              Designed for the Dedicated Trader, Engineered for Efficiency.
              Swift, Focused Trading Across All Devices.
            </p>
            <div className="lg:flex hidden items-center space-x-5 mt-16">
              <a
                href="https://play.google.com/store/apps/details?id=com.acagarwal.xts&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={playstore} alt="play" className="w-40 cursor-pointer" />
              </a>
              <a
                href="https://apps.apple.com/in/app/aca-math/id6450746616"
                target="_blank"
              >
                <img
                  src={appStore}
                  alt="aapS"
                  className="w-[140px] object-contain cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-[#fcfdfe]">
        <h2 className="pt-10 lg:pt-[150px] block font-poppins text-center font-medium lg:text-[42px] lg:leading-[42px] text-[22px] tracking-tight text-[#161C2DCC]">
          Trade Anywhere: <br className="lg:hidden block" />
          App, Web, Desktop
        </h2>
        <img
          src={mathMain}
          alt="Math Main Image"
          className="block lg:-mt-[210px] -mt-[40px]"
        />

        {/*<img src={mathMainMobile} alt="" className="lg:hidden block" />*/}

        <div className="flex lg:hidden items-center space-x-2 mt-0 mb-20">
          <a
            href="https://play.google.com/store/apps/details?id=com.acagarwal.xts&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={playstore} alt="play" className="w-32 cursor-pointer" />
          </a>
          <a
            href="https://apps.apple.com/in/app/aca-math/id6450746616"
            target="_blank"
          >
            <img
              src={appStore}
              alt="app"
              className="w-[120px] object-contain cursor-pointer"
            />
          </a>
        </div>
      </div>
      <div className="lg:pt-0 lg:pb-20 pt-10 pb-10 lg:px-28 2xl:px-60 px-5  bg-[#fcfdfe]">
        <div className="max-container lg:space-y-36 space-y-24 ">
          <div className="Bloom flex flex-col-reverse lg:flex-row items-center lg:justify-center  lg:space-y-0 lg:space-x-32">
            <div className=" lg:w-[50%]">
              <img src={math1} alt="Maht1" className="mt-10 lg:w-[570px] lg:mt-0" />
            </div>
            <div className="mt-2 lg:w-[50%]">
              <h2 className="font-poppins font-medium text-[22px] lg:text-[42px] leading-[32px] lg:leading-[60px] tracking-tight text-[#161C2DCC]">
                Rapid Trading:
                <br /> Clean Interface
              </h2>
              <p className="font-poppins lg:w-[486px] text-[15px] lg:text-[24px] leading-[26px] lg:leading-[36px] opacity-70 lg:mt-3 mt-4">
                Experience lightning-fast trading with our streamlined
                interface. Designed for traders who prioritize speed and
                precision, our platform eliminates distractions to ensure
                efficient execution. Trade seamlessly without unnecessary
                features, focusing solely on making quick, informed decisions in
                dynamic markets.
              </p>
            </div>
          </div>

          <div className="Math flex flex-col lg:flex-row items-center lg:justify-between  lg:space-y-0 lg:space-x-32">
            <div className="mt-2 lg:w-[50%]">
              <h2 className="font-poppins font-medium text-[22px] lg:text-[42px] leading-[32px] lg:leading-[60px] tracking-tight text-[#161C2DCC]">
                Charts: Powered by <br className="lg:hidden block" />{" "}
                TradingView
              </h2>
              <p className="font-poppins lg:w-[486px] text-[15px] lg:text-[24px] leading-[26px] lg:leading-[36px] opacity-70 lg:mt-3 mt-4">
                Dive into market trends with precision using our
                TradingView-powered charts. Access advanced tools and indicators
                for strategic analysis and informed trading decisions. Real-time
                data and customizable features bring clarity and insight,
                empowering you to spot opportunities and execute trades
                confidently.
              </p>
            </div>
            <div className="lg:w-[50%]">
              <img src={math2} alt="Maht2" className="mt-10 w-[557px] lg:mt-0" />
            </div>
          </div>

          <div className="Bloom flex flex-col-reverse lg:flex-row items-center lg:justify-center  lg:space-y-0 lg:space-x-32">
            <div className="lg:w-[50%]">
              <img src={math4} alt="Maht3" className="mt-10 lg:mt-0 lg:w-[558px]" />
            </div>
            <div className="mt-2 lg:w-[50%]">
              <h2 className="font-poppins font-medium text-[22px] lg:text-[42px] leading-[32px] lg:leading-[60px] tracking-tight text-[#161C2DCC]">
                Dashboard Insights: Margin, Holdings, P/L
              </h2>
              <p className="font-poppins lg:w-[486px] text-[15px] lg:text-[24px] leading-[26px] lg:leading-[36px] opacity-70 lg:mt-3 mt-4">
                Gain instant clarity on your trading performance with our
                Dashboard tab. Monitor your margin, holdings value, and
                profit/loss effortlessly in one convenient location. Stay
                informed and make informed decisions with a comprehensive
                overview of your portfolio's financial health.
              </p>
            </div>
          </div>

          <div className="Math flex flex-col lg:flex-row items-center lg:justify-between  lg:space-y-0 lg:space-x-32">
            <div className="mt-2 lg:w-[50%]">
              <h2 className="font-poppins font-medium text-[22px] lg:text-[42px] leading-[32px] lg:leading-[60px] tracking-tight text-[#161C2DCC]">
                XTS API Trade <br className="lg:block hidden" /> Oversight
                Dashboard
              </h2>
              <p className="font-poppins lg:w-[486px] text-[15px] lg:text-[24px] leading-[26px] lg:leading-[36px] opacity-70 lg:mt-3 mt-4">
                Effortlessly track, monitor, and modify trades placed via XTS
                APIs. Stay in control of your trading activities, make informed
                decisions, and optimize your strategies with ease, all within a
                single user-friendly interface.
              </p>
            </div>
            <div className="lg:w-[50%]">
              <img src={math3} alt="Maht3" className="mt-10 lg:mt-0" />
            </div>
          </div>
          {/* <div className="Bloom flex flex-col-reverse lg:flex-row items-start lg:justify-between  lg:space-y-0 lg:space-x-20">
            <div className="">
              <img src={b5} alt="" className="mt-10 lg:mt-0" />
            </div>
            <div className="mt-2">
              <h2 className="font-poppins font-semibold text-[32px] lg:text-[46px] leading-[44px] lg:leading-[60px] tracking-tight text-[#161C2D]">
                Easy Portfolio & P/L Insight
              </h2>
              <p className="font-poppins lg:w-[486px] text-[20px] lg:text-[24px] leading-[32px] lg:leading-[36px] opacity-70 mt-3">
                Effortlessly manage your portfolio and monitor profit and loss
                with our intuitive feature. Simplify your investment tracking
                and gain instant insights into your financial performance,
                enabling strategic decisions with ease. Our platform makes
                complex calculations straightforward, offering a clear view of
                your trading success.
              </p>
            </div>
          </div> */}
        </div>
      </div>
      {/*<div className="lg:py-[150px] py-10 lg:px-20 font-poppins px-5  bg-[#f4f7fa]">
        <div className="max-container">
          <img src={bloomer} alt="" className="w-[340px] mx-auto" />
          <h3 className="mt-[100px] text-[32px] lg:text-[46px] font-poppins text-center leading-[44px] lg:leading-[60px] font-semibold">
            Trade Anywhere: App, Web, Desktop
          </h3>
          <p className="text-[20px] lg:text-[28px] leading-[32px] lg:leading-[40px] mx-auto lg:w-[936px] mt-10 opacity-70 text-center">
            Experience seamless trading across all your devices with our
            versatile platform. Whether on the app, web, or desktop, access your
            trading account and execute trades effortlessly, ensuring you never
            miss an opportunity, no matter where you are.
          </p>
        </div>
        </div>*/}

      <section className="">
        <div className="flex lg:space-x-[30px] space-x-2 lg:justify-center justify-center w-full mt-16 lg:mb-28 mb-16 lg:px-0 px-5">
          <button
            onClick={handleGetOfferClick}
            className="lg:w-[180px] w-[150px] lg:h-[59px] h-[47px]  font-poppins bg-[#244896] hover:bg-[#6688d1] transition-all px-8 text-white font-medium text-[17px] rounded-[10px]"
          >
            Get Offer
          </button>
          <a href="https://kyc.acagarwal.com/" target="_blank">
            <button className="lg:w-[220px] w-[180px] lg:h-[59px] h-[47px] font-poppins bg-[#244896] hover:bg-[#6688d1] transition-all lg:px-8 text-white font-medium text-[17px] rounded-[10px] whitespace-nowrap">
              Open Account
            </button>
          </a>
        </div>

        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white sm:p-8 rounded-lg shadow-lg max-w-[650px] w-full relative">
              <div className="flex justify-between lg:p-0 p-6">
                <h2 className="text-[20px] font-poppins text-[#161C2D] font-semibold mb-4">
                  Get Offer
                </h2>
                <img
                  src={cross}
                  alt="Cross"
                  onClick={() => setShowPopup(false)}
                  className="cursor-pointer -mt-3"
                />
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4 lg:px-0 px-6">
                  <input
                    type="text"
                    className="mt-1 tracking-wide font-poppins block w-full border border-[#EAEEF4] shadow-sm bg-[#F6FAFD] h-[54px] sm:text-[17px] text-[12px] rounded-lg px-4 outline-none"
                    required
                    placeholder="Full Name"
                    value={fullName}
                    onChange={handleNameChange}
                  />
                  {errors.fullName && (
                    <span className="text-red-500 text-sm">
                      {errors.fullName}
                    </span>
                  )}
                </div>
                <div className="mb-4 lg:px-0 px-6">
                  <input
                    type="tel"
                    className="mt-1 tracking-wide font-poppins block w-full border border-[#EAEEF4] shadow-sm bg-[#F6FAFD] h-[54px] sm:text-[17px] text-[12px] rounded-lg px-4 outline-none"
                    required
                    placeholder="Mobile Number"
                    value={mobileNumber}
                    onChange={handleMobileNumberChange}
                  />
                  {errors.mobileNumber && (
                    <span className="text-red-500 text-sm">
                      {errors.mobileNumber}
                    </span>
                  )}
                </div>
                <div className="mb-4 lg:px-0 px-6">
                  <input
                    type="email"
                    className="mt-1 tracking-wide font-poppins block w-full border border-[#EAEEF4] shadow-sm bg-[#F6FAFD] h-[54px] sm:text-[17px] text-[12px] rounded-lg px-4 outline-none"
                    required
                    placeholder="Email ID"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email}</span>
                  )}
                </div>
                <div className="mb-4 lg:px-0 px-6">
                  <label className="font-poppins block text-[18px] text-[#161C2D] mb-3">
                    Preferred Time
                  </label>
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      className={`lg:w-[170px] w-[100px] py-3 font-poppins rounded-lg border sm:text-[17px] text-[12px] ${
                        selectedTime === "9 AM - 12 PM"
                          ? "bg-[#244896] text-white"
                          : "bg-[#F6FAFD] text-[#9598a0] border-[#EAEEF4]"
                      }`}
                      onClick={() => handleTimeSelect("9 AM - 12 PM")}
                    >
                      9 AM - 12 PM
                    </button>
                    <button
                      type="button"
                      className={`lg:w-[170px] w-[100px] py-3 font-poppins rounded-lg border sm:text-[17px] text-[12px] ${
                        selectedTime === "12 PM - 3 PM"
                          ? "bg-[#244896] text-white"
                          : "bg-[#F6FAFD] text-[#9598a0] border-[#EAEEF4]"
                      }`}
                      onClick={() => handleTimeSelect("12 PM - 3 PM")}
                    >
                      12 PM - 3 PM
                    </button>
                    <button
                      type="button"
                      className={`lg:w-[170px] w-[100px] py-3 font-poppins rounded-lg border sm:text-[17px] text-[12px] ${
                        selectedTime === "3 PM - 6 PM"
                          ? "bg-[#244896] text-white"
                          : "bg-[#F6FAFD] text-[#9598a0] border-[#EAEEF4]"
                      }`}
                      onClick={() => handleTimeSelect("3 PM - 6 PM")}
                    >
                      3 PM - 6 PM
                    </button>
                  </div>
                </div>
                <div className="mb-4 lg:px-0 px-6">
                  <label className="font-poppins block text-[18px] text-[#161C2D] mb-3">
                    Preferred Day
                  </label>
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      className={`lg:w-[170px] w-[100px] py-3 font-poppins rounded-lg border sm:text-[17px] text-[12px] ${
                        selectedDay === "Today"
                          ? "bg-[#244896] text-white"
                          : "bg-[#F6FAFD] text-[#9598a0] border-[#EAEEF4]"
                      }`}
                      onClick={() => handleDaySelect("Today")}
                    >
                      Today
                    </button>
                    <button
                      type="button"
                      className={`lg:w-[170px] w-[100px] py-3 font-poppins rounded-lg border sm:text-[17px] text-[12px] ${
                        selectedDay === "Tomorrow"
                          ? "bg-[#244896] text-white"
                          : "bg-[#F6FAFD] text-[#9598a0] border-[#EAEEF4]"
                      }`}
                      onClick={() => handleDaySelect("Tomorrow")}
                    >
                      Tomorrow
                    </button>
                    <button
                      type="button"
                      className={`lg:w-[170px] w-[100px] py-3 font-poppins rounded-lg border sm:text-[17px] text-[12px] ${
                        selectedDay === "Tomorrow + 1"
                          ? "bg-[#244896] text-white"
                          : "bg-[#F6FAFD] text-[#9598a0] border-[#EAEEF4]"
                      }`}
                      onClick={() => handleDaySelect("Tomorrow + 1")}
                    >
                      Tomorrow + 1
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full h-[54px] mt-4 px-4 bg-[#244896] font-poppins hover:bg-blue-700 text-white font-semibold sm:rounded-lg shadow-sm"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </section>
      <Footer backColor={backColor} />
    </div>
  );
};

export default Bloom;
