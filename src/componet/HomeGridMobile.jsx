import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { a1, a2, a3, a4, a5, a6, rightArrow } from "../assets/newImages";
import { leftArr, rightArr } from "../assets/Images";

const HomeGridMobile = () => {
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
      image: a1,
      title: "Unmatched Capacity",
      description:
        "Our daily operations run below 30% of our server capacity, ensuring that when you're ready to expand, we're more than capable of supporting you.",
    },
    {
      image: a2,
      title: "Dedicated Support",
      description:
        "With one team member for every 100 active clients, our dedicated support ensures that your needs are addressed promptly and personally.",
    },
    {
      image: a3,
      title: "No Sales Pressure",
      description:
        "Focus on What Matters: With no sales team to pressure you, our relationship is built on trust and your success. We're here to support, not to sell.",
    },
    {
      image: a4,
      title: "Accessible Founders",
      description:
        "Direct Access to Decision-Makers: Our founders aren't just names on a website; they're your personal consultants in your financial journey.",
    },
    {
      image: a5,
      title: "Reliable Tech",
      description:
        "Empower Your Trading with Our Dual Application Advantage: Access two full-fledged trading applications designed for peak performance.",
    },
    {
      image: a6,
      title: "Exclusive Benefits",
      description:
        "Big Broker Benefits, Small Broker Attention: Get the best of both worlds—advanced tools and personal guidance tailored to your needs.",
    },
  ];

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => goToNextSlide(),
    onSwipedRight: () => goToPrevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
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
          <div key={index} className="w-full h-[250px] relative">
            <div
              className={`flex items-start space-x-4 w-full h-[240px] rounded-[20px] p-6 border my-8 ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <img src={item.image} alt="Home" className="w-9" />
              <div>
                <h2 className="text-[18px] font-bold font-poppins leading-[30px] text-[#161C2D]">
                  {item.title}
                </h2>
                <p className="mt-3 mb-4 text-[15px] leading-[26px] w-full font-normal font-poppins text-[#161C2D]">
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
      <div className="carousel-controls flex items-center justify-center mt-14 space-x-4">
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
                index === activeIndex ? "bg-[#244896] w-6" : "bg-[#4444449a] w-3"
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

export default HomeGridMobile;
