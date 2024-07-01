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
  PricingPlans,
} from "../componet";
import {
  pricingMain,
  pr1,
  pr2,
  pr3,
  pr4,
  ArrowRight,
  cross,
} from "../assets/Images";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Pricing = () => {
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

  useEffect(() => {
    window.scrollTo(0, 0);
    // Aos.init({duration: 2000});
  }, []);

  const isMobile = window.innerWidth <= 768;
  const backColor = isMobile ? "bg-[#f8f8f8]" : "bg-[#fcfdfe]";
  const navColor = isMobile ? "bg-[#F7F9FA99]" : "bg-[#FCFDFE]";

  return (
    <div>
      <Helmet>
        <meta
          name="title"
          content="Pricing - AC Agarwal"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Pricing Plans Tailored To Your Needs Custom yet Transparent Pricing Tailored To Your Requirements"
        />

        <link rel="canonical" href="https://acagarwal.com/pricing" />
      </Helmet>
      <Navbar navColor={navColor} />
      <div className=" lg:pb-20 pb-32 lg:pt-20 pt-10">
        <section>
          <div className="  flex flex-col lg:px-20 px-5  max-container justify-center items-center  ">
            <img src={pricingMain} alt="Pricing Main Images" className="lg:w-[260px] w-[200px]" />
            <h1 className="text-center font-poppins font-medium lg:text-[52px] text-[32px] lg:leading-[70px] leading-[44px] text-[#161C2DCC] tracking-tight mt-10">
              Pricing Plans Tailored To Your Needs
            </h1>
            <p className="font-poppins lg:text-[38px] text-[15px] lg:leading-[54px] leading-[26px] text-center text-[#161C2D] opacity-80 mt-7">
              Custom yet Transparent Pricing Tailored To Your
              <br className="lg:block hidden" /> Requirements
            </p>
          </div>
        </section>
        {/* <hr className="my-20" /> */}
        <section className="my-20 lg:px-20 px-5 py-10 lg:py-20 bg-[#F4F7FA]">
          <p className="font-poppins lg:w-[75%] lg:text-[24px] max-container text-[15px] lg:leading-[40px] leading-[26px] lg:text-center text-[#161C2D] opacity-70">
            At AC Agarwal, we understand that every client is unique, with
            specific needs and preferences, That’s why we offer customizable
            pricing plans designed to cater to your individual requirements. Our
            transparent pricing ensures that you know exactly what you’re paying
            for, without any hidden fees or surprises.
          </p>
        </section>

        <section className="lg:mt-32 mt-24 ">
          <p className="font-poppins font-medium lg:text-[42px] text-[30px] text-center text-[#161C2DCC] tracking-tight">
            How our Pricing Works
          </p>

          <div className="grid max-container px-5 lg:px-40 lg:grid-cols-2 grid-cols-1 lg:gap-y-28 lg:gap-x-40 gap-y-12 gap-x-12 lg:mt-28 mt-[64px]">
            <div className="flex items-start space-x-3">
              <img src={pr1} alt="pricing1" className="w-[29px] h-auto lg:mt-1" />
              <div className="space-y-2 lg:space-y-4">
                <h3 className="font-poppins text-[18px] lg:text-[22px] font-semibold text-[#161C2D]">
                  Customization
                </h3>
                <p className="font-poppins text-[15px] lg:text-[17px] text-[#161C2D] opacity-[80%]">
                  We work with you to customize a pricing plan that meets your
                  specific needs.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <img src={pr2} alt="pricing1" className="w-[29px] h-auto lg:mt-1" />
              <div className="space-y-2 lg:space-y-4">
                <h3 className="font-poppins text-[18px] lg:text-[22px] font-semibold text-[#161C2D]">
                  Clarity
                </h3>
                <p className="font-poppins text-[15px] lg:text-[17px] text-[#161C2D] opacity-[80%]">
                  Our pricing is clear and easy to understand, so you know
                  exactly what you’re paying for.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <img src={pr3} alt="pricing3" className="w-[29px] h-auto lg:mt-1" />
              <div className="space-y-2 lg:space-y-4">
                <h3 className="font-poppins text-[18px] lg:text-[22px] font-semibold text-[#161C2D]">
                  Transparency
                </h3>
                <p className="font-poppins text-[15px] lg:text-[17px] text-[#161C2D] opacity-[80%]">
                  There are no hidden fees or surprises, everything is laid out
                  upfront.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <img src={pr4} alt="pricing4" className="w-[29px] h-auto lg:mt-1" />
              <div className="space-y-2 lg:space-y-4">
                <h3 className="font-poppins text-[18px] lg:text-[22px] font-semibold text-[#161C2D]">
                  Flexibility
                </h3>
                <p className="font-poppins text-[15px] lg:text-[17px] text-[#161C2D] opacity-[80%]">
                  Our pricing plans are flexible and can be adjusted as your
                  needs change over time.
                </p>
              </div>
            </div>
          </div>

          <section className="">
            <div className="flex lg:space-x-10 space-x-2 lg:justify-center justify-center w-full lg:mt-40 mt-14 lg:mb-0 mb-0 lg:px-0 px-5">
              <button
                onClick={handleGetOfferClick}
                className="lg:w-[180px] w-[150px] lg:h-[59px] h-[47px]  font-poppins bg-[#244896] hover:bg-[#6688d1] transition-all px-8 text-white lg:font-medium text-[17px] rounded-[10px]"
              >
                Get Offer
              </button>
              <Link to="/list-of-charges">
                <button className="lg:w-[220px] w-[180px] lg:h-[59px] h-[47px] font-poppins bg-[#244896] hover:bg-[#6688d1] transition-all lg:px-8 text-white lg:font-medium text-[17px] rounded-[10px] whitespace-nowrap">
                  List of Charges
                </button>
              </Link>
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
                      alt="pricing5"
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
                        <span className="text-red-500 text-sm">
                          {errors.email}
                        </span>
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
        </section>
      </div>

      <Footer backColor={backColor} />
    </div>
  );
};

export default Pricing;
