import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { leftArr, rightArr } from "../../assets/Images";
import { p1, p2, p3, p4, p5, p6, p7, rightArrow } from "../../assets/newImages";

const ProductGridMobile2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleLearnMore = (e) => {
    e.preventDefault();
    // Functionality for "Learn More" button
  };

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const items = [
    {
      image: p1,
      title: "Optimized Capacity",
      description:
        "Our servers operate at less than 50% of their maximum capacity, ensuring smooth performance even during peak trading hours."
    },
    {
      image: p2,
      title: "Multiple Lease Lines",
      description:
        "Our servers our backed up by multiple leased up lines at each location, ensuring high-speed, providing lightning-fast execution for time-sensitive transactions."
    },
    {
      image: p3,
      title: "Dual Geographical Locations",
      description:
        "Strategically located in Jaipur and Vadodara, our servers provide redundancy and reliability, minimizing the risk of downtime."
    },
    {
      image: p4,
      title: "Tailored for Speed Trading",
      description:
        "High-speed internet connections are specifically optimized for speed trading, providing lightning-fast execution for time-sensitive transactions."
    },
    {
      image: p5,
      title: "Backup Systems",
      description:
        "Each location is equipped with backup systems to maintain uninterrupted service in case of any unforeseen incidents."
    },
    {
      image: p6,
      title: "Enhanced Resilience",
      description:
        "Our dual-location setup enhances the resilience of our infrastructure, ensuring seamless trading experiences for our clients."
    },
    {
      image: p7,
      title: "24/7 Monitoring",
      description:
        "Our server infrastructure is continuously monitored by our team of experts to promptly address any potential issues and maintain optimal performance."
    },
  ];

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => goToNextSlide(),
    onSwipedRight: () => goToPrevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div className="overflow-hidden relative" {...swipeHandlers}>
      <div
        className="flex transition-transform ease-in-out duration-500 transform"
        style={{
          width: `${items.length * 100}%`,
          transform: `translateX(-${activeIndex * (100 / items.length)}%)`,
        }}
      >
        {items.map((item, index) => (
          <div key={index} className="w-full h-[260px] relative">
            <div
              className={`flex items-start space-x-4 w-full h-[240px] rounded-[20px] p-6 bg-transparent border my-16 ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <img src={item.image} alt="" className="w-9" />
              <div>
                <h2 className="text-[18px] font-bold font-poppins leading-[30px] text-[#161C2DCC]">
                  {item.title}
                </h2>
                <p className="mt-3 mb-4 text-[15px] w-full font-normal font-poppins text-[#161C2D]">
                  {item.description}
                </p>
                {/*<p className="linkImg">
                  <a
                    href="#"
                    className="flex font-poppins font-medium text-[17px] items-center"
                    onClick={handleLearnMore}
                  >
                    <span>Click to learn more </span>
                    <img src={rightArrow} alt="" className="w-[12px]" />
                  </a>
                </p>*/}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-controls flex items-center justify-center lg:mt-[100px] mt-[80px]  space-x-4">
        <img
          src={leftArr}
          className="arrow left-arrow"
          alt="Left Arrow"
          onClick={goToPrevSlide}
        />
        <div className="dots-container flex space-x-2">
          {items.map((_, index) => (
            <div
              key={index}
              className={`dot h-1 rounded-[5px] ${
                index === activeIndex ? "bg-[#244896] w-5" : "bg-[#444444] w-3"
              }`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
        <img
          src={rightArr}
          className="arrow right-arrow"
          alt="Right Arrow"
          onClick={goToNextSlide}
        />
      </div>
    </div>
  );
};

export default ProductGridMobile2;
