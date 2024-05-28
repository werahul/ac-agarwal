import React from "react";
import { p1, p2, p3, p4, p5, p6, p7 } from "../../assets/newImages";
import ProductGridMobile2 from "./ProductGridMobile2";

const UnleashilingProduct = () => {
  return (
    <div className="">
      <div className="lg:py-[120px] py-20 lg:px-20 font-poppins px-5  lg:bg-[#f4f7fa]">
      <hr className="lg:hidden block mb-20"/>
        <div className="max-container">
          <div className="lg:space-y-7 space-y-4">
            <p className="text-center font-poppins font-medium text-[14px] text-[#244896]">
              BEHIND THE SCENES
            </p>
            <h2 className="font-poppins font-semibold lg:text-[46px] text-[32px]  lg:leading-[60px] leading-[42px] tracking-tight text-center text-[#161C2D]">
              Unleashing peak performance
            </h2>
            <p className="text-center font-poppins font-normal mx-auto lg:w-[600px] lg:text-[28px] text-[20px] opacity-70 text-[#161C2D] lg:leading-normal leading-[28px]">
              Discover the strength behind our trading platforms
            </p>
            <div className="pt-[100px] lg:grid hidden  grid-cols-1 gap-20 lg:grid-cols-2">
              <div className="flex items-start space-x-5">
                <img src={p1} alt="" className="w-[29px] h-auto" />
                <div className="space-y-5">
                  <h3 className="text-[22px] font-semibold text-[#161C2D]">
                    Optimized Capacity
                  </h3>
                  <p className="text-[17px] text-[#161C2D] opacity-[70%]">
                    Our servers operate at less than 50% of their maximum
                    capacity, ensuring smooth performance even during peak
                    trading hours.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <img src={p2} alt="" className="w-[29px] h-auto" />
                <div className="space-y-5">
                  <h3 className="text-[22px] font-semibold text-[#161C2D]">
                    Multiple Lease Lines
                  </h3>
                  <p className="text-[17px] text-[#161C2D] opacity-[70%]">
                    Our servers our backed up by multiple leased up lines at
                    each location, ensuring high-speed, providing lightning-fast
                    execution for time-sensitive transactions.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <img src={p3} alt="" className="w-[29px] h-auto" />
                <div className="space-y-5">
                  <h3 className="text-[22px] font-semibold text-[#161C2D]">
                    Dual Geographical Locations
                  </h3>
                  <p className="text-[17px] text-[#161C2D] opacity-[70%]">
                    Strategically located in Jaipur and Vadodara, our servers
                    provide redundancy and reliability, minimizing the risk of
                    downtime.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <img src={p4} alt="" className="w-[29px] h-auto" />
                <div className="space-y-5">
                  <h3 className="text-[22px] font-semibold text-[#161C2D]">
                    Tailored for Speed Trading
                  </h3>
                  <p className="text-[17px] text-[#161C2D] opacity-[70%]">
                    High-speed internet connections are specific ally optimized
                    for speed trading, providing lightning-fast execution for
                    time- sensitive transactions.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <img src={p5} alt="" className="w-[29px] h-auto" />
                <div className="space-y-5">
                  <h3 className="text-[22px] font-semibold text-[#161C2D]">
                    Backup Systems
                  </h3>
                  <p className="text-[17px] text-[#161C2D] opacity-[70%]">
                    Each location is equipped with backup systems to maintain
                    uninterrupted service in case of any unforeseen incidents.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <img src={p6} alt="" className="w-[29px] h-auto" />
                <div className="space-y-5">
                  <h3 className="text-[22px] font-semibold text-[#161C2D]">
                    Enhanced Resilience
                  </h3>
                  <p className="text-[17px] text-[#161C2D] opacity-[70%]">
                    Our dual- location setup enhances the resilience of our
                    infrastructure, ensuring seamless trading experiences for
                    our clients.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <img src={p7} alt="" className="w-[29px] h-auto" />
                <div className="space-y-5">
                  <h3 className="text-[22px] font-semibold text-[#161C2D]">
                    24/7 Monitoring
                  </h3>
                  <p className="text-[17px] text-[#161C2D] opacity-[70%]">
                    Our server infrastructure is continuously monitored by our
                    team of experts to promptly address any potential issues and
                    maintain optimal performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:hidden block ">
              <ProductGridMobile2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnleashilingProduct;
