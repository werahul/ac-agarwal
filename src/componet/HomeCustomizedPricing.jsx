import React, { useState } from "react";
import { cross, customizedPricing } from "../assets/Images";
import { a1, a2, a3, a4, a5, a6, BigI, rightArrow } from "../assets/newImages";
import { HomeGridMobile } from ".";
import { Link } from "react-router-dom";

const HomeCustomizedPricing = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
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
      setErrors((prev) => ({ ...prev, fullName: '' }));
    } else {
      setErrors((prev) => ({ ...prev, fullName: 'Only letters and spaces are allowed.' }));
    }
  };

  const handleMobileNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setMobileNumber(value);
      setErrors((prev) => ({ ...prev, mobileNumber: '' }));
    } else {
      setErrors((prev) => ({ ...prev, mobileNumber: 'Only numbers are allowed.' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (fullName.trim() === '') {
      newErrors.fullName = 'Full Name is required.';
    }
    if (mobileNumber.trim() === '') {
      newErrors.mobileNumber = 'Mobile Number is required.';
    }
    if (!email) {
      newErrors.email = 'Email is required.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Proceed with form submission
      console.log('Form submitted');
    }
  };



  return (
    <div className="lg:px-20 px-5 lg:pt-10 lg:pb-28 pt-10 pb-20 lg:bg-[#fcfdfe]">
      <div className=" mt-10 max-container">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center lg:text-[42px] text-[30px] lg:leading-[42px] leading-[42px] font-medium tracking-tighter font-poppins text-[#161C2DCC]">
            The Difference <br className="lg:hidden block" /> in Our Approach
          </h2>
          <p className="lg:mt-5 mt-4 lg:w-[60%] text-center font-poppins lg:text-[28px] text-[15px] text-[#161C2D] lg:leading-[38px] leading-[20px] opacity-80">
            Ready for Growth
          </p>
        </div>
        <div className="lg:grid hidden lg:grid-cols-2 lg:px-5 justify-items-center place-items-center lg:mt-20 mt-5 mb-10">
          <div className="relative flex items-start space-x-4 w-full h-[280px] rounded-[20px] p-7 ">
            <img src={a1} alt="" className="w-8" />
            <div>
              <h2 className="text-[22px] font-semibold font-poppins leading-[30px] tracking-[-0.5px] text-[#161C2DCC]">
                Unmatched Capacity
              </h2>
              <p className="mt-3 mb-4 text-[17px] w-[90%] font-normal font-poppins text-[#161C2D] opacity-80">
                Our daily{" "}
                <span className="font-semibold text-[17px]">
                  operations run below 30% of our server capacity,{" "}
                </span>
                ensuring that when you're ready to expand, we're more than
                capable of supporting you.
              </p>
            </div>
          </div>
          <div className="relative flex items-start space-x-4 w-full h-[280px] rounded-[20px] p-7 ">
            <img src={a2} alt="" className="w-8" />
            <div>
              <h2 className="text-[22px] font-semibold font-poppins leading-[30px] tracking-[-0.5px] text-[#161C2DCC]">
                Dedicated Support
              </h2>
              <p className="mt-3 mb-4 text-[17px] w-[90%] font-normal font-poppins text-[#161C2D] opacity-80">
                With one team member for every 100 active clients, our dedicated
                support ensures that your needs are addressed promptly and
                personally.
              </p>
            </div>
          </div>
          <div className="relative flex items-start space-x-4 w-full h-[280px] rounded-[20px] p-7 ">
            <img src={a3} alt="" className="w-[30px]" />
            <div>
              <h2 className="text-[22px] font-semibold font-poppins leading-[30px] tracking-[-0.5px] text-[#161C2DCC]">
                No Sales Pressure
              </h2>
              <p className="mt-3 mb-4 text-[17px] w-[90%] font-normal font-poppins text-[#161C2D] opacity-80">
                Focus on What Matters: With no sales team to pressure you, our
                relationship is built on trust and your success. We're here to
                support, not to sell.
              </p>
            </div>
          </div>
          <div className="relative flex items-start space-x-4 w-fll h-[280px] rounded-[20px] p-7 ">
            <img src={a4} alt="" className="w-6" />
            <div>
              <h2 className="text-[22px] font-semibold font-poppins leading-[30px] tracking-[-0.5px] text-[#161C2DCC]">
                Accessible Founders
              </h2>
              <p className="mt-3 mb-4 text-[17px] w-[90%] font-normal font-poppins text-[#161C2D] opacity-80">
                Direct Access to Decision-Makers: Our founders aren't just names
                on a website; they're your personal consultants in your
                financial journey.
              </p>
            </div>
          </div>
          <div className="relative flex items-start space-x-4 w-full h-[280px] rounded-[20px] p-7 ">
            <img src={a5} alt="" className="w-8" />
            <div>
              <h2 className="text-[22px] font-semibold font-poppins leading-[30px] tracking-[-0.5px] text-[#161C2DCC]">
                Reliable Tech
              </h2>
              <p className="mt-3 mb-4 text-[17px] w-[90%] font-normal font-poppins text-[#161C2D] opacity-80">
                Empower Your Trading with Our Dual Application Advantage: Access
                two full-fledged trading applications designed for peak
                performance.
              </p>
            </div>
          </div>
          <div className="relative flex items-start space-x-4 w-full h-[280px] rounded-[20px] p-7 ">
            <img src={a6} alt="" className="w-8" />
            <div>
              <h2 className="text-[22px] font-semibold font-poppins leading-[30px] tracking-[-0.5px] text-[#161C2DCC]">
                Exclusive Benefits
              </h2>
              <p className="mt-3 mb-4 text-[17px] w-[90%] font-normal font-poppins text-[#161C2D] opacity-80">
                Big Broker Benefits, Small Broker Attention: Get the best of
                both worlds—advanced tools and personal guidance tailored to
                your needs.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:hidden block mb-10">
          <HomeGridMobile />
        </div>

        <p className="text-center font-poppins lg:text-[17px] text-[14px] text-[#161C2D] mb-20">
          Haven’t got your answer?{" "}
          <Link to="/support" className="text-[#244896] cursor- font-semibold ">
            Contact our support now
          </Link>
        </p>
      </div>
      <div className="max-container">
        <div className="flex flex-col items-center justify-center">
          <img
            src={customizedPricing}
            alt=""
            className="lg:w-[300px] w-[220px]"
          />
          <p className="font-poppins font-medium lg:text-[42px] text-[30px] text-center lg:leading-normal leading-[40px] tracking-tight text-[#161C2DCC] mt-4">
            Customized Pricing, Crystal Clear Costs
          </p>
          <p className="font-poppins text-center lg:text-[28px] text-[17px] lg:leading-[40px] leading-[26px] text-[#161C2D] opacity-80 mt-6">
            Invest on Your Terms, because One Size Never Fits All:{" "}
            <br className="lg:block hidden" /> Discover Win-Win Pricing Built
            Around You
          </p>

          <div className="flex lg:space-x-[30px] space-x-3 lg:justify-center justify-center w-full mt-16">
            <button
              onClick={handleGetOfferClick}
              className="lg:w-[165px] w-[150px] lg:h-[57px] h-[49px] font-poppins bg-[#244896] hover:bg-[#6688d1] transition-all text-white font-semibold text-[17px] rounded-[10px]"
            >
              Get Offer
            </button>
            <Link to="/pricing">
              <button className="lg:w-[165px] w-[150px] lg:h-[57px] h-[49px] font-poppins bg-[#244896] hover:bg-[#6688d1] transition-all text-white font-semibold text-[17px] rounded-[10px]">
                Know More
              </button>
            </Link>
          </div>
        </div>
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
                alt=""
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
                  <span className="text-red-500 text-sm">{errors.fullName}</span>
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
                  <span className="text-red-500 text-sm">{errors.mobileNumber}</span>
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
    </div>
  );
};

export default HomeCustomizedPricing;
