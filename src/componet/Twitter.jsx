import React from "react";
import {
  blueTick,
  twiterDp,
  twiterLogo,
  tComment,
  tLike,
  bigXLogo,
  tShare,
  tUp,
} from "../assets/Images";

const Twitter = () => {
  return (
    <div className="bg-[#111111]  h-[900px] pt-20 px-20 flex space-x-10 twitterBg">
      <div className="max-container w-[33%] pt-[8rem]">
        <h2 className=" font-poppins font-bold text-[40px] leading-[40px] text-white">
          Users Kind Words
        </h2>
        <p className="mt-6 font-poppins text-[20px] leading-[30px] text-[#F2F4F7]">
          Here are some testimonials from our user after using Spend.In to
          manage their business expenses.
        </p>

        <img src={bigXLogo} alt="" className="-ml-[150px] mt-10" />
      </div>

      <div className="max-container flex space-x-6">
        <div className="space-y-6">
          <div className="w-[355px] h-[305px] bg-[#171616] rounded-[20px] twitterShodow p-5">
            <div className="flex justify-center items-center  space-x-5">
              <img src={twiterDp} alt="" className="w-16" />
              <div className="flex-col flex">
                <div className="flex space-x-2 items-center">
                  <p className="font-jakarta text-[18px] text-white">
                    Moritika Kazuki
                  </p>
                  <img src={blueTick} alt="" className="w-4 h-4" />
                </div>
                <p className="font-normal text-white text-[12px] font-jakarta">
                  @moritikakazuki
                </p>
              </div>
              <img src={twiterLogo} alt="" className="w-12 h-12" />
            </div>
            <div className=" mt-4 font-medium font-jakarta text-[14px] text-[#F3F5F7]">
              “The best”! That’s what I want to say to this platform, didn’t
              know that there’s a platform to help you manage your business
              expenses like this! Very recommended to you who have a big
              business!
            </div>

            <p className="mt-3 font-sans text-zinc-400 font-normal">
              1 January 2023
            </p>
            <div className="mt-3 flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <img src={tComment} alt="" />
                <p className="font-sans text-zinc-400 font-normal">100</p>
              </div>
              <div className="flex items-center space-x-1">
                <img src={tShare} alt="" />
                <p className="font-sans text-zinc-400 font-normal">1000</p>
              </div>
              <div className="flex items-center space-x-1">
                <img src={tLike} alt="" />
                <p className="font-sans text-zinc-400 font-normal">10000</p>
              </div>
              <div className="flex items-center space-x-1">
                <img src={tUp} alt="" />
              </div>
            </div>
          </div>
          <div className="w-[355px] h-[305px] bg-[#171616] rounded-[20px] twitterShodow p-5">
            <div className="flex justify-center items-center  space-x-5">
              <img src={twiterDp} alt="" className="w-16" />
              <div className="flex-col flex">
                <div className="flex space-x-2 items-center">
                  <p className="font-jakarta text-[18px] text-white">
                    Moritika Kazuki
                  </p>
                  <img src={blueTick} alt="" className="w-4 h-4" />
                </div>
                <p className="font-normal text-white text-[12px] font-jakarta">
                  @moritikakazuki
                </p>
              </div>
              <img src={twiterLogo} alt="" className="w-12 h-12" />
            </div>
            <div className=" mt-4 font-medium font-jakarta text-[14px] text-[#F3F5F7]">
              “The best”! That’s what I want to say to this platform, didn’t
              know that there’s a platform to help you manage your business
              expenses like this! Very recommended to you who have a big
              business!
            </div>

            <p className="mt-3 font-sans text-zinc-400 font-normal">
              1 January 2023
            </p>
            <div className="mt-3 flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <img src={tComment} alt="" />
                <p className="font-sans text-zinc-400 font-normal">100</p>
              </div>
              <div className="flex items-center space-x-1">
                <img src={tShare} alt="" />
                <p className="font-sans text-zinc-400 font-normal">1000</p>
              </div>
              <div className="flex items-center space-x-1">
                <img src={tLike} alt="" />
                <p className="font-sans text-zinc-400 font-normal">10000</p>
              </div>
              <div className="flex items-center space-x-1">
                <img src={tUp} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6 mt-24">
          <div className="w-[355px] h-[305px] bg-[#171616] rounded-[20px] twitterShodow p-5">
            <div className="flex justify-center items-center  space-x-5">
              <img src={twiterDp} alt="" className="w-16" />
              <div className="flex-col flex">
                <div className="flex space-x-2 items-center">
                  <p className="font-jakarta text-[18px] text-white">
                    Moritika Kazuki
                  </p>
                  <img src={blueTick} alt="" className="w-4 h-4" />
                </div>
                <p className="font-normal text-white text-[12px] font-jakarta">
                  @moritikakazuki
                </p>
              </div>
              <img src={twiterLogo} alt="" className="w-12 h-12" />
            </div>
            <div className=" mt-4 font-medium font-jakarta text-[14px] text-[#F3F5F7]">
              “The best”! That’s what I want to say to this platform, didn’t
              know that there’s a platform to help you manage your business
              expenses like this! Very recommended to you who have a big
              business!
            </div>

            <p className="mt-3 font-sans text-zinc-400 font-normal">
              1 January 2023
            </p>
            <div className="mt-3 flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <img src={tComment} alt="" />
                <p className="font-sans text-zinc-400 font-normal">100</p>
              </div>
              <div className="flex items-center space-x-1">
                <img src={tShare} alt="" />
                <p className="font-sans text-zinc-400 font-normal">1000</p>
              </div>
              <div className="flex items-center space-x-1">
                <img src={tLike} alt="" />
                <p className="font-sans text-zinc-400 font-normal">10000</p>
              </div>
              <div className="flex items-center space-x-1">
                <img src={tUp} alt="" />
              </div>
            </div>
          </div>
          <div className="w-[355px] h-[305px] bg-[#171616] rounded-[20px] twitterShodow p-5">
            <div className="flex justify-center items-center  space-x-5">
              <img src={twiterDp} alt="" className="w-16" />
              <div className="flex-col flex">
                <div className="flex space-x-2 items-center">
                  <p className="font-jakarta text-[18px] text-white">
                    Moritika Kazuki
                  </p>
                  <img src={blueTick} alt="" className="w-4 h-4" />
                </div>
                <p className="font-normal text-white text-[12px] font-jakarta">
                  @moritikakazuki
                </p>
              </div>
              <img src={twiterLogo} alt="" className="w-12 h-12" />
            </div>
            <div className=" mt-4 font-medium font-jakarta text-[14px] text-[#F3F5F7]">
              “The best”! That’s what I want to say to this platform, didn’t
              know that there’s a platform to help you manage your business
              expenses like this! Very recommended to you who have a big
              business!
            </div>

            <p className="mt-3 font-sans text-zinc-400 font-normal">
              1 January 2023
            </p>
            <div className="mt-3 flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <img src={tComment} alt="" />
                <p className="font-sans text-zinc-400 font-normal">100</p>
              </div>
              <div className="flex items-center space-x-1">
                <img src={tShare} alt="" />
                <p className="font-sans text-zinc-400 font-normal">1000</p>
              </div>
              <div className="flex items-center space-x-1">
                <img src={tLike} alt="" />
                <p className="font-sans text-zinc-400 font-normal">10000</p>
              </div>
              <div className="flex items-center space-x-1">
                <img src={tUp} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Twitter;
