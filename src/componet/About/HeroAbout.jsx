import React, { useState } from "react";
import { ArrowRight } from "../../assets/Images";

const HeroAbout = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="lg:pt-32 pt-20 lg:px-20 px-5 bg-[#ffffff]">
      <div className="max-container">
        <div className="flex flex-col items-center justify-center lg:mb-24 mb-10">
          <h1 className="font-poppins text-center font-medium lg:text-[52px] text-[38px] lg:leading-[56px] leading-[50px] tracking-tight text-[#161c2dd2]">
            Crafting Excellence Over Time
          </h1>
          <p className="font-poppins text-center lg:text-[28px] text-[20px] lg:leading-[28px] leading-[28px] lg:px-0 px-10 text-[#161C2D] opacity-60 lg:mt-12 mt-7">
            30 Years of Valuing Quality Relationships in Our Growth Story
          </p>
          <a href="https://kyc.acagarwal.com/" target="_blank" rel="noopener noreferrer">
            <button className="lg:mt-14 mt-10 flex items-center justify-center w-auto lg:h-[57px] h-[50px] font-poppins bg-[#244896] tracking-tight hover:bg-[#6688d1] transition-all lg:px-6 px-4 text-white font-normal text-[17px] rounded-[10px]">
              Sign Up Now
            </button>
          </a>
        </div>
       
      </div>
      <div className="lg:flex lg:space-x-20 lg:py-20 py-10 max-container">
        <div className="font-poppins lg:text-[24px] text-[15px] lg:leading-[38px] leading-[26px] tracking-tighter text-[#161C2D] lg:w-[50%] opacity-80">
          Over the last 30 years, our journey has been marked by a steadfast
          commitment to building quality business relationships, rather than
          merely expanding our client base. At the heart of our operations lies
          a core philosophy that values depth over breadth, ensuring that each
          partnership we forge is built on a foundation of mutual respect,
          understanding, and long-term vision.
          <br />
          <br />
          Our dedication to standing by our commitments has been the cornerstone
          of our success, enabling us to earn the trust and loyalty of our
          clients. This principle guides every interaction and decision,
          reflecting our belief in the importance of integrity and reliability
          in the fast-paced world of trading.
        </div>
        <div
          className={`font-poppins lg:text-[24px] text-[15px] lg:leading-[38px] leading-[26px] tracking-tighter text-[#161C2D] lg:w-[50%] opacity-80 ${
            showMore ? "block" : "hidden"
          } lg:block`}
        >
          Supreme technology and services are not just part of our offering;
          they are integral to our identity. We believe that providing
          cutting-edge solutions and exceptional support is essential to
          empowering our clients, helping them to navigate the complexities of
          the market with confidence and ease. Our investment in technology and
          continuous improvement of our services underscore our commitment to
          not just meeting, but exceeding, the expectations of those we serve.
          <br />
          <br />
          As we reflect on the past 30 years and look forward to the future, our
          mission remains unchanged: to cultivate quality relationships, uphold
          our commitments, and deliver superior technology and services. This
          enduring commitment to excellence is what sets us apart and drives us
          forward.
        </div>
        <div className=" text-center mt-5">
          <button
            onClick={() => setShowMore(!showMore)}
            className="  lg:hidden  text-[#161C2DCC] text-[20px] font-semibold font-poppins py-2 px-4 rounded-lg transition-all "
          >
            {showMore ? "Show Less" : "View More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
