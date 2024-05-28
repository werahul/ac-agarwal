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
  callIcon,
  msgIcon,
  smallLinkIcon,
  smallXicon,
  acSvgLogo,
} from "../assets/Images";
import { Link } from "react-router-dom";

const Footer = ({ backColor }) => {
  return (
    <div className={`lg:pt-10 pt-0 bg-[#F7F9FA99] border-t border-[#0000001f]`}>
      <div className="max-container lg:px-14 px-5 py-20 ">
        <div className=" lg:flex items-start lg:space-x-32">
          <div className="lg:w-[25%] block">
            <img src={acLogo} alt="" className="lg:w-[250px] w-[210px] " />
            {/*<p className="font-poppins text-[16px] leading-6 text-[#161C2D]">
              Your One stop solution for all the Stock broking needs.
  </p>*/}

            <p className="mt-4 font-semibold font-poppins text-[20px]  text-[#161C2D]">
              Address
            </p>
            <p className="mt-5 font-poppins lg:text-[16px] text-[14px] leading-6 text-[#161C2D] whitespace-nowrap opacity-80">
              315, City Mall, C-Scheme, Jaipur - 302001
            </p>
            <p className="mt-3 lg:mb-0 mb-10 font-poppins lg:text-[16px] text-[14px] leading-6 text-[#161C2D] whitespace-nowrap opacity-80">
              406 Payal Complex, Sayajigunj, <br /> Vadodara - 390005
            </p>

            {/*<p className="mt-7 font-semibold font-poppins text-[20px]  text-[#161C2D]">
              Social Media
            </p>
           * <div className="mt-1 flex items-center space-x-4">
              <img src={fbook} alt="" />
              <img src={ig} alt="" />
              <img src={twitterIcon} alt="" />
              <img src={yt} alt="" />
</div>*/}
          </div>

          {/* <div className="lg:hidden block">
            <div className="">
              <p className="mb-3 font-semibold font-poppins text-[22px]  text-[#161C2D]">
                Important Links
              </p>
              <p className="mt-3 font-poppins text-[16px] leading-6 text-[#161C2D]">
                Our Legacy
              </p>
              <p className="mt-3 font-poppins text-[16px] leading-6 text-[#161C2D]">
                Why Partner with us
              </p>
              <p className="mt-3 font-poppins text-[16px] leading-6 text-[#161C2D]">
                Our Products
              </p>
              <p className="mt-3 font-poppins text-[16px] leading-6 text-[#161C2D]">
                Support
              </p>
              <p className="mt-3 font-poppins text-[16px] leading-6 text-[#161C2D]">
                Media
              </p>
              <p className="mt-3 font-poppins text-[16px] leading-6 text-[#161C2D]">
                Terms and Conditions
              </p>
            </div>
            <div className="mt-10">
              <p className="mb-3 font-semibold font-poppins text-[22px]  text-[#161C2D]">
                Contacts
              </p>
              <p className="mt-3 font-poppins text-[16px] leading-6 text-[#161C2D]">
                SCHLEP Games, Inc
              </p>
              <p className="mt-3 font-poppins text-[16px] leading-6 text-[#161C2D]">
                P.O. Box #400260
              </p>
              <p className="mt-3 font-poppins text-[16px] leading-6 text-[#161C2D]">
                1953 Massachusetts Ave.
              </p>
              <p className="mt-3 font-poppins text-[16px] leading-6 text-[#161C2D]">
                Cambridge, MA. 02140
              </p>
              <p className="flex items-center mt-3 font-poppins text-[16px] leading-6 text-[#161C2D]">
                <img src={callIcon} alt="" className="mr-3" />
                <a href="tel:+1 617-863-7821">+1 617-863-7821</a>
              </p>
              <p className="flex items-center mt-3 font-poppins text-[16px] leading-6 text-[#161C2D]">
                <img src={msgIcon} alt="" className="mr-3" />
                <a href="mailto:support@gullycricket.us">
                  {" "}
                  support@gullycricket.us{" "}
                </a>
              </p>
            </div>
          </div>
          <div className="lg:hidden block mt-10">
            <p className=" font-semibold font-poppins text-[22px]  text-[#161C2D]">
              Social Media
            </p>
            <div className="mt-1 flex items-center space-x-4">
              <img src={fbook} alt="" />
              <img src={ig} alt="" />
              <img src={twitterIcon} alt="" />
              <img src={yt} alt="" />
            </div>
</div>*/}

          <div className="">
            <div className="flex lg:flex-row flex-col  lg:space-x-32 lg:space-y-0 space-y-10 whitespace-nowrap">
              <div className="">
                <p className="mb-3 font-semibold font-poppins text-[24px]  text-[#161C2D]">
                  Company
                </p>
                <Link to="/about">
                <p className="lg:mt-4 mt-2 font-poppins text-[20px] leading-6 text-[#161C2D] opacity-80">
                  About Us
                </p>
                </Link>
                <Link to="/support">
                <p className="lg:mt-4  mt-2 font-poppins text-[20px] leading-6 text-[#161C2D] opacity-80">
                  Support
                </p>
                </Link>
                <Link to="/pricing">
                <p className="lg:mt-4 mt-2 font-poppins text-[20px] leading-6 text-[#161C2D] opacity-80">
                  Pricing
                </p>
                </Link>
              </div>
              <div className="">
                <p className="mb-3 font-semibold font-poppins text-[24px]  text-[#161C2D]">
                  Product
                </p>
                <Link to="/bloom">
                  <p className="lg:mt-4 mt-2 font-poppins text-[20px] leading-6 text-[#161C2D] opacity-80">
                    Bloom
                  </p>
                </Link>
                <Link to="/math">
                  <p className="lg:mt-4 mt-2 font-poppins text-[20px] leading-6 text-[#161C2D] opacity-80">
                    Math
                  </p>
                </Link>
                <Link to="/xts-api">
                  <p className="lg:mt-4 mt-2 font-poppins text-[20px] leading-6 text-[#161C2D] opacity-80">
                    XTS
                  </p>
                </Link>
                <Link to="/gullak">
                  <p className="lg:mt-4 mt-2 font-poppins text-[20px] leading-6 text-[#161C2D] opacity-80">
                    Gullak
                  </p>
                </Link>
              </div>
              <div className="">
                <p className="mb-3 font-semibold font-poppins text-[24px]  text-[#161C2D]">
                  Download Now
                </p>

                <div className="flex items-center space-x-5 lg:mt-6 mt-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.wave.aca&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={playstore}
                      alt=""
                      className="w-[132px] cursor-pointer"
                    />
                  </a>
                  <a
                    href="https://apps.apple.com/in/app/bloom-by-aca/id1281521661"
                    target="_blank"
                  >
                    <img
                      src={appStore}
                      alt=""
                      className="w-[120px] object-contain cursor-pointer"
                    />
                  </a>
                </div>

                <div className="flex items-center space-x-5 mt-6">
                  <a
                    href="https://x.com/acagarwal_in?s=11&mx=2"
                    target="_blank"
                  >
                    <img src={smallXicon} alt="" className="w-7" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/ac-agarwal-share-brokers/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={smallLinkIcon} alt="" className="w-7" />
                  </a>
                </div>
              </div>
            </div>

            {/*<div className="lg:flex items-center lg:mt-20 mt-10 lg:space-x-3">
              <p className="font-semibold text-[#161C2D] text-[20px] font-poppins">
                {" "}
                Download Now{" "}
              </p>
              <div className="flex lg:mt-0 mt-3 items-center lg:space-x-3 space-x-2">
                <img
                  src={playstore}
                  alt=""
                  className="w-[160px] cursor-pointer"
                />
                <img
                  src={appStore}
                  alt=""
                  className="w-[160px] h-[48px] cursor-pointer"
                />
              </div>
</div>*/}
          </div>
        </div>
        <div className="my-10 h-0  border-b-[3px] border-[#161C2D] opacity-25  hidden" />

        <div className="font-poppins font-normal lg:text-[16px] text-[12px] text-[#161C2D] lg:mt-20 mt-10 opacity-90">
          ATTENTION INVESTORS :- a) Prevent unauthorised transactions in your
          account. Update your mobile numbers/email IDs with your stock brokers.{" "}
          <br />
          Receive information of your transactions directly from Exchange on
          your mobile/email at the end of the day; <br /> b) KYC is one time
          exercise while dealing in securities markets - once KYC is done
          through a SEBI registered intermediary (broker, DP, Mutual Fund etc.),
          you need not undergo the same process again when you approach another
          intermediary; <br />
          c) Prevent Unauthorized Transactions in your demat account. Update
          your mobile number with your depository participant. Receive alerts on
          your registered mobile for all debit and other important transactions
          in your demat account directly from NSDL / CDSL on the same day.
          (Issued in the interest of investors). Please read the Risk Disclosure
          Document and Do's & Dont's prescribed by the Exchanges carefully
          before investing; <br /> d)In case you want to{" "}
          <span className="  font-medium text-[#244896] opacity-100">
            {" "}
            <a href="https://closure.acagarwal.com/closure">
              close your account
            </a>
          </span>{" "}
           , you can do it online with us. To know more, contact our customer
          care team. <br /> <br />
          <span className="mr-5 font-medium text-[#244896] opacity-100">
            {" "}
            <a href="https://www.acagarwal.com/assets/img/Investor-Charter-of-Depository-Participant-Jan.pdf">
              Investor Charter of Depository Participant
            </a>
          </span>
               
          <span className=" mr-5 font-medium text-[#244896] opacity-100">
            {" "}
            <a href="https://www.acagarwal.com/assets/img/Investor-Charter-Stock-Broker-jan.pdf">
              Investor Charter Stock Broker
            </a>
          </span>{" "}
              {" "}
          <span className="font-medium text-[#244896] opacity-100">
            {" "}
            <a href="https://files.acagarwal.com/dp-dos-donts-for-investor-10.pdf">
              Information Contained In Links To The Investor Charter
            </a>
          </span>
          <br /> <br />
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
          <span className="font-medium text-[#244896]">
            {" "}
            <a href="https://www.acagarwal.com/assets/img/AP-list.pdf">
              AP list
            </a>
          </span>
          <br />
          For E-voting, kindly 
          <span className="font-medium text-[#244896]">
            {" "}
            <a href="https://evoting.cdslindia.com/Evoting/EvotingLogin">
              click here
            </a>
          </span>
          <br /> <br />
          <div className="overflow-x-auto p-0 border border-[#00000026] rounded-[22px]">
            <table className="min-w-full bg-white border border-[#00000026] rounded-[22px] overflow-hidden">
              <thead>
                <tr>
                  <th
                    colSpan="2"
                    className="font-poppins font-normal lg:text-[16px] text-[12px] text-center bg-white text-[#161C2DCC] py-4 px-4 border-b border-[#00000026]"
                  >
                    Our Bank Account Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="flex flex-col lg:table-row border-b border-gray-200">
                  <th className="font-poppins font-normal lg:text-[16px] text-[12px] text-center py-3 px-4 border-t lg:border-t-0 border-b border-r lg:border-r border-[#00000026]">
                    Bank name - HDFC Bank <br /> A/c No. 04290340000696 <br />{" "}
                    IFSC Code - HDFC0000429
                  </th>
                  <th className="font-poppins font-normal lg:text-[16px] text-[12px] text-center py-3 px-4 border-t lg:border-t-0 border-b lg:border-b-0 border-[#00000026]">
                    Bank name - HDFC Bank <br /> A/c No. 04290340000704 <br />{" "}
                    IFSC Code - HDFC0000429
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="overflow-x-auto p-0 border border-[#00000026] rounded-[22px] lg:mt-10 mt-5">
            <table className="min-w-full bg-white border border-[#00000026] rounded-[22px] overflow-hidden">
              <thead>
                <tr>
                  <th
                    colSpan="2"
                    className="font-poppins font-normal lg:text-[16px] text-[12px] text-center bg-white text-[#161C2DCC] py-4 px-4 border-b border-[#00000026]"
                  >
                    SEBI Registration No. - INZ000216930
                  </th>
                </tr>
              </thead>
            </table>
          </div>
          <br /> <br />
          {/*<span className="underline">
            Our Bank Account Details <br /> 1. Bank name - HDFC Bank <br />
            A/c No. 04290340000696 <br />
            IFSC Code - HDFC0000429 <br /> 2. Bank name - HDFC Bank <br />
            A/c No. 04290340000704 <br /> IFSC Code - HDFC0000429 <br />
</span>*/}
          A C Agarwal Share Brokers Pvt. Ltd. <br /> Please carefully read the
          risk disclosure document as prescribed by SEBI & FMC and Do's & Don'ts
          by MCX. Existing customers can send in their grievances to {" "}
          <span className="font-medium text-[#244896]">
            {" "}
            <a href="mailto:care@acagarwal.com">care@acagarwal.com </a> 
          </span>
           and for DP related queries & Complaints please write us to{" "}
          <span className="font-medium text-[#244896]">
            {" "}
            <a href="mailto:care@acagarwal.com">care@acagarwal.com </a> 
          </span>{" "}
          <br />
          To File A Complaint on &nbsp;
          <span className="font-medium text-[#244896]">
            <a href="https://scores.gov.in/scores/Welcome.html">
              SCORES &emsp; &emsp; &emsp;
            </a>
          </span>
           <br className="lg:hidden block"/>
          To File A Complaint on &nbsp;
          <span className="font-medium text-[#244896]">
            <a href="https://www.cdslindia.com/Footer/grievances.aspx">
              CDSL <br /> <br />
            </a>
          </span>
          Disclaimer: <br className="lg:hidden block"/> A C Agarwal Share Brokers Pvt. Ltd. and A. C. Agarwal
          Commodities Pvt. Ltd. are engaged in client based and proprietary
          trading on various stock and commodity exchanges. <br />
        </div>

        <div className="font-medium lg:text-[16px] text-[12px] text-[#244896] mt-10 flex-wrap lg:justify-between lg:space-x-10 space-x-4 lg:space-y-0 leading-[30px] opacity-90">
          <a
            href="https://www.nseindia.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <span>NSE </span>{" "}
          </a>
          <a
            href="https://www.bseindia.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <span> BSE</span>{" "}
          </a>
          <a
            href="https://www.acagullak.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span> Mutual Fund</span>
          </a>
          <a
            href="https://www.sebi.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <span>SEBI</span>
          </a>
          <a
            href="https://www.acagarwal.com/vernacular-languages"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <span> Vernacular Languages</span>
          </a>
          <a
            href="https://www.finmin.nic.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span> Ministry of Finance</span>
          </a>
          <a
            href="https://www.mca.gov.in/content/mca/global/en/home.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <span>Ministry of Corporate Affairs</span>
          </a>
          <a
            href="https://www.cdslindia.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>CDSL</span>
          </a>
          <a
            href="https://nsdl.co.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>NSDL</span>
          </a>
          <a
            href="https://www.rbi.org.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>RBI</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
