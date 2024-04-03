import React from "react";
import { pressCovrage, EcoBrand, eco2, ArrowRight } from "../assets/Images";

const gridData = [
  {
    mainPhoto: pressCovrage,
    ecoBrand: EcoBrand,
    date: "Jan 10, 2022",
    readTime: "3 min read",
    title: "Debt mutual funds continue to log outflow",
  },
  {
    mainPhoto: pressCovrage,
    ecoBrand: eco2,
    date: "Jan 10, 2022",
    readTime: "3 min read",
    title: "Debt mutual funds continue to log outflow",
  },
  {
    mainPhoto: pressCovrage,
    ecoBrand: EcoBrand,
    date: "Jan 10, 2022",
    readTime: "3 min read",
    title: "Debt mutual funds continue to log outflow",
  },
  {
    mainPhoto: pressCovrage,
    ecoBrand: EcoBrand,
    date: "Jan 10, 2022",
    readTime: "3 min read",
    title: "Debt mutual funds continue to log outflow",
  },
  {
    mainPhoto: pressCovrage,
    ecoBrand: EcoBrand,
    date: "Jan 10, 2022",
    readTime: "3 min read",
    title: "Debt mutual funds continue to log outflow",
  },
  {
    mainPhoto: pressCovrage,
    ecoBrand: EcoBrand,
    date: "Jan 10, 2022",
    readTime: "3 min read",
    title: "Debt mutual funds continue to log outflow",
  },
  {
    mainPhoto: pressCovrage,
    ecoBrand: EcoBrand,
    date: "Jan 10, 2022",
    readTime: "3 min read",
    title: "Debt mutual funds continue to log outflow",
  },
  {
    mainPhoto: pressCovrage,
    ecoBrand: EcoBrand,
    date: "Jan 10, 2022",
    readTime: "3 min read",
    title: "Debt mutual funds continue to log outflow",
  },
  {
    mainPhoto: pressCovrage,
    ecoBrand: EcoBrand,
    date: "Jan 10, 2022",
    readTime: "3 min read",
    title: "Debt mutual funds continue to log outflow",
  },
  {
    mainPhoto: pressCovrage,
    ecoBrand: EcoBrand,
    date: "Jan 10, 2022",
    readTime: "3 min read",
    title: "Debt mutual funds continue to log outflow",
  },
  {
    mainPhoto: pressCovrage,
    ecoBrand: EcoBrand,
    date: "Jan 10, 2022",
    readTime: "3 min read",
    title: "Debt mutual funds continue to log outflow",
  },
  {
    mainPhoto: pressCovrage,
    ecoBrand: EcoBrand,
    date: "Jan 10, 2022",
    readTime: "3 min read",
    title: "Debt mutual funds continue to log outflow",
  },
];

const PressCoverageGrid = () => {
  return (
    <div className="">
      <div className="grid grid-cols-4 gap-x-5 gap-y-16 mt-10">
        {gridData.map((item, index) => (
          <div
            key={index}
            className="bg-white w-full h-[425px] rounded-[12px] p-4"
          >
            <img src={item.mainPhoto} alt="" className="w-full" />
            <img src={item.ecoBrand} alt="" className="w-auto mt-6" />
            <p className="font-poppins font-medium text-[20px] leading-[30px] text-[#161C2D] mt-8 capitalize">
              {item.title}
            </p>
            <div className="flex items-center space-x-6 mt-7">
              <p className="font-poppins text-[14px] leading-[21px] text-[#161C2D]">
                {item.date}
              </p>
              <p className="font-poppins text-[14px] leading-[21px] text-[#161C2D] capitalize">
                {item.readTime}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="my-20">
        <button className="mx-auto w-[190px] h-[57px] rounded-[60px] bg-[#244896] font-poppins font-bold text-[19px] text-white flex items-center justify-center check-out-btn">
          Show More
          <span>
            <img src={ArrowRight} alt="" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default PressCoverageGrid;
