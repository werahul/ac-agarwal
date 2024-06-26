import React from "react";
import {
  acLogo,
  fbook,
  ig,
  twitterIcon,
  yt,
  appDownload,
  appStore,
  playstore,
} from "../assets/Images";

const Footer2 = () => {
  return (
    <div className="footerBg">
      <div className="max-container mt-0 px-20 py-20 ">
        <div className=" flex items-start space-x-32">
          <div className="w-[20%]">
            <img src={acLogo} alt="AcLogo" className="w-[250px]" />
            <p className="font-poppins text-[16px] leading-6 text-[#161C2D]">
              Your One stop solution for all the Stock broking needs.
            </p>

            <p className="mt-7 font-semibold font-poppins text-[20px]  text-[#161C2D]">
              Address
            </p>
            <p className="mt-1 font-poppins text-[16px] leading-6 text-[#161C2D]">
              26 W 12th St. New York, NY 10342, NYC
            </p>

            <p className="mt-7 font-semibold font-poppins text-[20px]  text-[#161C2D]">
              Social Media
            </p>
            <div className="mt-1 flex items-center space-x-4">
              <img src={fbook} alt="Fb ICON" />
              <img src={ig} alt="insta Icon" />
              <img src={twitterIcon} alt="twitter Icon" />
              <img src={yt} alt="youtube Icon" />
            </div>
          </div>
          <div className="">
            <div className="flex space-x-10 whitespace-nowrap">
              <div className="">
                <p className="mb-3 font-semibold font-poppins text-[20px]  text-[#161C2D]">
                  Company
                </p>
                <p className="mt-1 font-poppins text-[16px] leading-6 text-[#161C2D]">
                  Our Legacy
                </p>
                <p className="mt-1 font-poppins text-[16px] leading-6 text-[#161C2D]">
                  Why Partner with us
                </p>
                <p className="mt-1 font-poppins text-[16px] leading-6 text-[#161C2D]">
                  Media
                </p>
                <p className="mt-1 font-poppins text-[16px] leading-6 text-[#161C2D]">
                  Support
                </p>
              </div>
              <div className="">
                <p className="mb-3 font-semibold font-poppins text-[20px]  text-[#161C2D]">
                  Product
                </p>
                <p className="mt-1 font-poppins text-[16px] leading-6 text-[#161C2D]">
                  ACA Bloom
                </p>
                <p className="mt-1 font-poppins text-[16px] leading-6 text-[#161C2D]">
                  ACA Soil
                </p>
                <p className="mt-1 font-poppins text-[16px] leading-6 text-[#161C2D]">
                  ACA Swift
                </p>
                <p className="mt-1 font-poppins text-[16px] leading-6 text-[#161C2D]">
                  ACA Math
                </p>
                <p className="mt-1 font-poppins text-[16px] leading-6 text-[#161C2D]">
                  ACA XTS
                </p>
              </div>
              <div className="">
                <p className="mb-3 font-semibold font-poppins text-[20px]  text-[#161C2D]">
                  External Links
                </p>
                <p className="mt-1 font-poppins text-[16px] leading-6 text-[#161C2D]">
                  Terms & conditions
                </p>
                <p className="mt-1 font-poppins text-[16px] leading-6 text-[#161C2D]">
                  Privacy policy
                </p>
              </div>
              <div className="">
                <p className="mb-3 font-semibold font-poppins text-[20px]  text-[#161C2D]">
                  External Links
                </p>
                <p className="mt-1 font-poppins text-[16px] leading-6 text-[#161C2D]">
                  Terms & conditions
                </p>
                <p className="mt-1 font-poppins text-[16px] leading-6 text-[#161C2D]">
                  Privacy policy
                </p>
              </div>
              <div className="">
                <p className="mb-3 font-semibold font-poppins text-[20px]  text-[#161C2D]">
                  Company
                </p>
                <p className="mt-1 font-poppins text-[16px] leading-6 text-[#161C2D]">
                  Our Legacy
                </p>
                <p className="mt-1 font-poppins text-[16px] leading-6 text-[#161C2D]">
                  Why Partner with us
                </p>
                <p className="mt-1 font-poppins text-[16px] leading-6 text-[#161C2D]">
                  Media
                </p>
                <p className="mt-1 font-poppins text-[16px] leading-6 text-[#161C2D]">
                  Support
                </p>
              </div>
            </div>

            <div className="flex items-center mt-20 space-x-3">
              <p className="font-semibold text-[#161C2D] text-[20px] font-poppins">
                {" "}
                Download Now{" "}
              </p>
              <img
                src={playstore}
                alt="play"
                className="w-[160px] cursor-pointer"
              />
              <img
                src={appStore}
                alt="app"
                className="w-[160px] h-[48px] cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="my-10 h-0  border-b-[3px] border-[#161C2D] opacity-25" />

        <div className="font-poppins font-normal text-[16px] text-[#161C2D]">
          ATTENTION INVESTORS :- a) Prevent unauthorised transactions in your
          account. Update your mobile numbers/email IDs with your stock brokers.
          Receive information of your transactions directly from Exchange on
          your mobile/email at the end of the day; b) KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another intermediary;
          c) Prevent Unauthorized Transactions in your demat account. Update
          your mobile number with your depository participant. Receive alerts on
          your registered mobile for all debit and other important transactions
          in your demat account directly from NSDL / CDSL on the same day.
          (Issued in the interest of investors). Please read the Risk Disclosure
          Document and Do's & Dont's prescribed by the Exchanges carefully
          before investing; d)In case you want to{" "}
          <span className="underline">
            {" "}
            <a href="https://closure.acagarwal.com/closure">
              close your account
            </a>
          </span>{" "}
           , you can do it online with us. To know more, contact our customer
          care team. <br />
          <span className="underline mr-5">
            {" "}
            <a href="https://www.acagarwal.com/assets/img/Investor-Charter-of-Depository-Participant-Jan.pdf">
              Investor Charter of Depository Participant
            </a>
          </span>
               
          <span className="underline mr-5">
            {" "}
            <a href="https://www.acagarwal.com/assets/img/Investor-Charter-Stock-Broker-jan.pdf">
              Investor Charter Stock Broker
            </a>
          </span>{" "}
              {" "}
          <span className="underline">
            {" "}
            <a href="https://files.acagarwal.com/dp-dos-donts-for-investor-10.pdf">
              Information Contained In Links To The Investor Charter
            </a>
          </span>
          <br />
          (1)Stock Brokers can accept securities as margin from clients only by
          way of pledge in the depository system w.e.f. September 1,
          2020.(2)Update your mobile number & email Id with your stock
          broker/depository participant and receive OTP directly from the
          depository on your email id and/or mobile number to create a pledge.
          (3)Pay 20% upfront margin of the transaction value to trade in the
          cash market segment. (4)Investors may please refer to the Exchange's
          Frequently Asked Questions (FAQs) issued vide circular reference
          NSE/INSP/45191 dated July 31, 2020 and NSE/INSP/45534 dated August 31,
          2020 and other guidelines issued from time to time in this
          regard.(5)Check your Securities /MF/ Bonds in the consolidated account
          statement issued by NSDL/CDSL every month. 
          <span className="underline">
            {" "}
            <a href="https://www.acagarwal.com/assets/img/AP-list.pdf">
              AP list
            </a>
          </span>
          <br />
          For E-voting, kindly 
          <span className="underline">
            {" "}
            <a href="https://evoting.cdslindia.com/Evoting/EvotingLogin">
              click here
            </a>
          </span>
          <br /> <br />
          <span className="underline">
            Our Bank Account Details <br /> 1. Bank name - HDFC Bank <br />
            A/c No. 04290340000696 <br />
            IFSC Code - HDFC0000429 <br /> 2. Bank name - HDFC Bank <br />
            A/c No. 04290340000704 <br /> IFSC Code - HDFC0000429 <br />
          </span>
          A C Agarwal Share Brokers Pvt. Ltd. Please carefully read the risk
          disclosure document as prescribed by SEBI & FMC and Do's & Don'ts by
          MCX. Existing customers can send in their grievances
          to care@acagarwal.com and for DP related queries & Complaints please
          write us to care@acagarwal.com <br />
          <span className="underline"><a href="https://acagarwal.com/#">To File A Complaint on SCORES <br /> .....Click Here... <br /></a></span>
          
          <span className="underline"><a href="https://www.cdslindia.com/Footer/grievances.aspx">To File A Complaint on CDSL <br />  .....Click Here.... <br /></a></span>
           
         
          Disclaimer: A C Agarwal Share Brokers Pvt. Ltd. and A. C. Agarwal
          Commodities Pvt. Ltd. are engaged in client based and proprietary
          trading on various stock and commodity exchanges. <br />
          SEBI Registration No. - <br />
          INZ000216930
        </div>
      </div>
    </div>
  );
};

export default Footer2;
