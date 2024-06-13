import React, { useState, useEffect } from "react";

import { ArrowRightBlue, linkedin } from "../../assets/Images";

const MeetCEO = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen size is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <section className="lg:py-[150px] py-10  px-4 lg:px-32 font-poppins text-center bg-[#F4F7FA]">
        <div className="container mx-auto px-4">
          <h2 className="text-[30px] lg:text-[42px] font-medium text-center text-[#161C2DCC] leading-[46px] lg:leading-[60px] mb-12 lg:mb-24">
            Hear What Our Clients <br /> Have to Say
          </h2>
          <div className="grid grid-cols-1 gap-16 lg:gap-24 lg:grid-cols-2 opacity-80 lg:mb-24 mb-16">
            <div className="text-[15px] lg:text-xl relative">
              <p className="text-[#161C2D] z-50 lg:leading-[32px] leading-relaxed">
                AC Agarwal's trading app is a game-changer!{" "}
                <span className="  transform  rounded-l-sm bg-[#ADC9F8]">
                  The user interface is intuitive, and the real-time
                </span>{" "}
                <span className="mb-0  transform  rounded-r-sm bg-[#ADC9F8]">
                  {" "}
                  data feeds are incredibly accurate. Highly
                </span>{" "}
                
                recommended for tech-savvy investors.
              </p>
              <p className="text-[#161C2D] lg:mt-10 mt-8">Rohan Sharma, Mumbai</p>
            </div>
            <div className="text-[15px] lg:text-xl relative">
              <p className="text-[#161C2D] z-50 lg:leading-[32px] leading-relaxed">
                <span className="mb-0 transform  rounded-l-sm bg-[#ADC9F8]">
                  The personalized recommendations have been a  gamechanger for my investment strategy.
                </span>{" "}
                
                However, I wish they had more transparency on their algorithm's
                methodology.
              </p>
              <p className="text-[#161C2D] lg:mt-10 mt-8">Vikram Puri, Jodhpur</p>
            </div>
            <div className="text-[15px] lg:text-xl relative">
              <p className="text-[#161C2D] z-50 lg:leading-[32px] leading-relaxed">
                I've been a client with AC Agarwal for over 5 years now, and{" "}
                <span className="mb-1 transform  rounded-l-sm bg-[#ADC9F8]">
                  their customer support has always been top-notch. They
                  patiently address all my queries, no matter
                </span>{" "}
                how basic.
              </p>
              <p className="text-[#161C2D] lg:mt-10 mt-8">Nisha Gupta, Delhi</p>
            </div>
            <div className="text-[15px] lg:text-xl relative">
              <p className="text-[#161C2D] z-50 lg:leading-[32px] leading-relaxed">
                <span className="mb-1 transform  rounded-l-sm bg-[#ADC9F8]">
                  The seamless integration of AC Agarwal's trading  platform with my existing financial apps has been
                </span>{" "}
                a real time-saver. However, I wish they had more third-party app
                integrations.
              </p>
              <p className="text-[#161C2D] lg:mt-10 mt-8">Neha Tandon, Delhi</p>
            </div>
          </div>
          <div className="">
            {showAll || !isMobile ? (
              <div className="grid grid-cols-1 gap-16 lg:gap-24 lg:grid-cols-2 opacity-80">
                <div className="text-[15px] lg:text-xl relative">
                  <p className="text-[#161C2D] z-50 lg:leading-[32px] leading-relaxed">
                    <span className="transform  rounded-l-sm bg-[#ADC9F8]">
                      As a busy professional, I appreciate AC Agarwal's mobile app for seamless trading on the go.
                    </span>{" "}
                    <span className="transform  rounded-r-sm bg-[#ADC9F8]">
                      
                    </span>{" "}
                    The only downside is occasional lags during peak market
                    hours.
                  </p>
                  <p className="text-[#161C2D] lg:mt-10 mt-8">Priya Kulkarni, Rajkot</p>
                </div>
                <div className="text-[15px] lg:text-xl relative">
                  <p className="text-[#161C2D] z-50  lg:leading-[32px] leading-relaxed">
                    <span className="mb-1  transform  rounded-l-sm bg-[#ADC9F8]">
                      The data security and privacy measures
                    </span>{" "}
                    <span className="mb-0  transform  rounded-r-sm bg-[#ADC9F8]">
                      they have in place are top-notch,
                    </span>{" "}
                    giving me complete peace of mind when sharing my financial
                    information.
                  </p>
                  <p className="text-[#161C2D] lg:mt-10 mt-8">Rajesh Patel, Ahmedabad</p>
                </div>
                <div className="text-[15px] lg:text-xl relative">
                  <p className="text-[#161C2D] z-50 lg:leading-[32px] leading-relaxed">
                    <span className="mb-1 transform  rounded-l-sm bg-[#ADC9F8]">
                      The portfolio optimization feature has helped me streamline my investments and maximize
                    </span>{" "}
                    <span className="mb-0 transform  rounded-r-sm bg-[#ADC9F8]">
                      
                    </span>{" "}
                    returns. A highly valuable tool for any serious investor.
                  </p>
                  <p className="text-[#161C2D] lg:mt-10 mt-8">Anjali Reddy, Mumbai</p>
                </div>
                <div className="text-[15px] lg:text-xl relative">
                  <p className="text-[#161C2D] z-50 lg:leading-[32px] leading-relaxed">
                    <span className="mb-1  transform  rounded-l-sm bg-[#ADC9F8]">
                      AC Agarwal's trading app is truly revolutionary!
                    </span>{" "}
                    <span className="mb-0  transform  rounded-r-sm bg-[#ADC9F8]">
                      The real-time data feeds and intuitive interface
                    </span>{" "}
                    make trading a breeze.
                  </p>
                  <p className="text-[#161C2D] lg:mt-10 mt-8">Akash Malhotra, Mumbai</p>
                </div>
                <div className="text-[15px] lg:text-xl relative">
                  <p className="text-[#161C2D] z-50 lg:leading-[32px] leading-relaxed">
                    <span className="mb-1  transform  rounded-l-sm bg-[#ADC9F8]">
                      The wealth of research and analysis tools
                    </span>{" "}
                    <span className="mb-0  transform  rounded-r-sm bg-[#ADC9F8]">
                      available on their platform is truly remarkable.
                    </span>{" "}
                    However, the learning curve for some advanced features can
                    be steep.
                  </p>
                  <p className="text-[#161C2D] lg:mt-10 mt-8">Aditya Singh, Delhi</p>
                </div>
                <div className="text-[15px] lg:text-xl relative">
                  <p className="text-[#161C2D] z-50 lg:leading-[32px] leading-relaxed">
                    <span className="mb-1  transform  rounded-l-sm bg-[#ADC9F8]">
                      AC Agarwal's trading platform is a cut above
                    </span>{" "}
                    <span className="mb-0  transform  rounded-r-sm bg-[#ADC9F8]">
                      the rest, with seamless integration of advanced
                    </span>{" "}
                    analytics and real-time market data. A true game-changer!
                  </p>
                  <p className="text-[#161C2D] lg:mt-10 mt-8">
                    Ishaan Bhatnagar, Mumbai
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          {isMobile && (
            <div className="flex flex-col justify-center items-center mt-10">
              <div className="border-t w-full mb-8"></div>
              <p
                onClick={toggleShowAll}
                className="font-poppins font-normal text-[17px] tracking-[-0.2px] text-[#244896] flex items-center mt-4 cursor-pointer"
              >
                {showAll ? "View Less" : "Read More"}{" "}
                <img src={ArrowRightBlue} alt="" className="ml-3" />
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MeetCEO;
