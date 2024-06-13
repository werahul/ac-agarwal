import React from "react";
import { comAb1, comAb2, comAb3, comAb4 } from "../../assets/Images";

const OurCommitment = () => {
  return (
    <div className="lg:pb-[150px] lg:pt-20 pt-10 pb-10 lg:mb-0 mb-10 lg:px-[100px] 2xl:px-[150px] px-5 lg:bg-[#fff] ">
      <div className="max-container">
        <div className="">
          <h2 className="font-poppins font-medium lg:text-[42px] text-[32px] lg:leading-[60px] leading-[42px] lg:tracking-normal tracking-tighter text-center text-[#161C2DCC]">
            Our Milestones
          </h2>
          {/* <p className="font-poppins  lg:text-[28px] text-[20px] lg:leading-[40px] leading-[32px]  text-center text-[#161C2D] opacity-80 mt-4">
            Has Made Us Achieve Leading Milestones
          </p> */}
        </div>
        <div className="grid grid-cols-1 text-[#161C2DCC] lg:grid-cols-2  lg:gap-[120px] gap-10 lg:mt-32 mt-20">
          <div className="flex items-start  space-x-5">
            <div className="">
              <img src={comAb1} alt="" className="lg:w-[100px] w-[120px]" />
            </div>
            <div className="space-y-5">
              <p className="font-poppins font-semibold lg:text-[22px] text-[18px] lg:leading-[22.65px] leading-[18px]">
                30k+ Clients
              </p>
              <p className="font-poppins  lg:text-[17px] text-[15px] lg:leading-[29px] leading-[26px]">
                We are proud to have served over 30,000 clients, ranging from
                individual traders to institutions. Our commitment to
                understanding and meeting the unique needs of each client has
                earned us their trust and loyalty.
              </p>
            </div>
          </div>
          <div className="flex items-start  space-x-5">
            <div className="">
              <img src={comAb2} alt="" className="lg:w-[130px] w-[140px]" />
            </div>
            <div className="space-y-5">
              <p className="font-poppins font-semibold lg:text-[22px] text-[18px] lg:leading-[22.65px] leading-[18px]">
                Dual Tech Infra
              </p>
              <p className="font-poppins  lg:text-[17px] text-[15px] lg:leading-[29px] leading-[26px]">
                Our cutting-edge technology infrastructure is designed for
                reliability, speed, and efficiency. With dual technology
                infrastructure in place, we ensure uninterrupted service and
                seamless trading experiences for our clients.
              </p>
            </div>
          </div>
          <div className="flex items-start  space-x-5">
            <div className="">
              <img src={comAb3} alt="" className="lg:w-[60px] w-[70px]" />
            </div>
            <div className="space-y-5">
              <p className="font-poppins font-semibold lg:text-[22px] text-[18px] lg:leading-[22.65px] leading-[18px]">
                2,00,000+ daily orders
              </p>
              <p className="font-poppins  lg:text-[17px] text-[15px] lg:leading-[29px] leading-[26px]">
                Each day, we process over 200,000 trade orders on behalf of our
                clients. This high volume of trading activity reflects the
                confidence that our clients have in our platform and services.
              </p>
            </div>
          </div>
          <div className="flex items-start  space-x-5">
            <div className="">
              <img src={comAb4} alt="" className="lg:w-[60px] w-[70px]" />
            </div>
            <div className="space-y-5">
              <p className="font-poppins font-semibold lg:text-[22px] text-[18px] lg:leading-[22.65px] leading-[18px]">
                200+ Channel Partners
              </p>
              <p className="font-poppins  lg:text-[17px] text-[15px] lg:leading-[29px] leading-[26px]">
                We are proud to have established strong partnerships with over
                200 channel partners. These strategic alliances enable us to
                expand our reach and provide even greater value to our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCommitment;
