import React, { useState } from "react";
import { IPO, TradingView, greeksoft, rightArrow } from "../../assets/newImages";
import { leftArr, rightArr } from "../../assets/Images";




const ProductGridMobile = () => {
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
      image: greeksoft,
      title: "Greeksoft",
      description:
        "Elevate your trading with Greek Soft's automation. Renowned for accuracy and dependability, this desktop software enhances your algorithms, boosting market efficiency"
    },
    {
      image: TradingView,
      title: "Trading View",
      description:
        "Experience Trading View Charts within our apps, combining analytical depth with effortless trading. Track trends, monitor in real-time, & execute trades precisely from one platform."
    },
    {
      image: IPO,
      title: "IPOs",
      description:
        "Experience hassle-free IPO participation with our online platform. Easily apply for IPOs and seize investment opportunities with convenience and ease."
    },
    
  ];

  return (
    <div className="overflow-hidden relative">
      <div className="flex transition-transform ease-in-out duration-500 transform" style={{ width: `${items.length * 100}%`, marginLeft: `-${activeIndex * (300 / items.length)}%` }}>
        {items.map((item, index) => (
          <div key={index} className="w-full h-[310px] relative">
            <div className={`flex items-start space-x-4 w-full h-[310px] rounded-[20px] p-6 bg-transparent border my-8 ${index === activeIndex ? "active" : ""}`}>
              <img src={item.image} alt="Product" className="w-9" />
              <div>
                <h2 className="text-[22px] font-bold font-poppins leading-[30px] text-[#161C2D]">
                  {item.title}
                </h2>
                <p className="mt-3 mb-4  text-[17px] w-full font-normal font-poppins text-[#161C2D]">
                  {item.description}
                </p>
                <p className="linkImg">
                  <a
                    href="#"
                    className="flex font-poppins font-medium text-[17px] items-center"
                    onClick={handleLearnMore}
                  >
                    <span>Click to learn more </span>
                    <img src={rightArrow} alt="rightArrow" className="w-[12px]" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-controls  flex items-center justify-center mt-14 space-x-4">
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
              className={`dot h-1 rounded-[5px] ${index === activeIndex ? "bg-[#244896] w-5" : "bg-[#444444] w-3 "}`}
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

export default ProductGridMobile;
