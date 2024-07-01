import React, { useEffect } from "react";
import { Footer, Navbar } from "../componet";
import { ExchangeRates } from "../componet/LOC";
import { Helmet } from "react-helmet";

const LOC = () => {
  const charges = [
    {
      head: "AMC (1st Year Free)",
      minAmt: "₹250",
      percentage: "",
      fixCharges: "",
      perCertificate: "",
    },
    {
      head: "AMC (1st Year Free)",
      minAmt: "₹50",
      percentage: "",
      fixCharges: "",
      perCertificate: "₹3",
    },
    {
      head: "Off Market Debit",
      minAmt: "₹15",
      percentage: "0.025",
      fixCharges: "",
      perCertificate: "",
    },
    {
      head: "Off Market Debit",
      minAmt: "₹15",
      percentage: "0.025",
      fixCharges: "",
      perCertificate: "",
    },
    {
      head: "CM/TO CM",
      minAmt: "₹15",
      percentage: "0.025",
      fixCharges: "",
      perCertificate: "",
    },
    {
      head: "Off Market Debit to CM",
      minAmt: "₹15",
      percentage: "0.025",
      fixCharges: "",
      perCertificate: "",
    },
    {
      head: "Early Pay-in",
      minAmt: "₹15",
      percentage: "0.025",
      fixCharges: "",
      perCertificate: "",
    },
    {
      head: "Pledge Creation",
      minAmt: "₹35",
      percentage: "",
      fixCharges: "",
      perCertificate: "",
    },
    {
      head: "Pledge Creation (Margin)",
      minAmt: "₹35",
      percentage: "",
      fixCharges: "",
      perCertificate: "₹35",
    },
    {
      head: "Pledge Creation (Re Pledge)",
      minAmt: "₹30",
      percentage: "",
      fixCharges: "",
      perCertificate: "₹35",
    },
    {
      head: "Pledge Creation (MTF)",
      minAmt: "₹35",
      percentage: "",
      fixCharges: "",
      perCertificate: "₹30",
    },
    {
      head: "Pledge Creation (CUSPA)",
      minAmt: "₹35",
      percentage: "",
      fixCharges: "",
      perCertificate: "₹35",
    },
    {
      head: "Pledge Closure",
      minAmt: "₹35",
      percentage: "",
      fixCharges: "",
      perCertificate: "₹35",
    },
    {
      head: "Pledge Invocation",
      minAmt: "",
      percentage: "",
      fixCharges: "",
      perCertificate: "₹35",
    },
    {
      head: "Slip Issue",
      minAmt: "",
      percentage: "",
      fixCharges: "₹20",
      perCertificate: "",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    // Aos.init({duration: 2000});
  }, []);

  const isMobile = window.innerWidth <= 768;
  const backColor = isMobile ? "bg-[#f8f8f8]" : "bg-[#fcfdfe]";
  const navColor = isMobile ? "bg-[#F7F9FA99]" : "bg-[#FCFDFE]";
  return (
    <div>
      <Helmet>
        <meta
          name="title"
          content="List of Charges - AC Agarwal"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Find your personal wealth manager from India’s leading Advisors to help you grow and manage your Investments"
        />

        <link rel="canonical" href="https://acagarwal.com/list-of-charges" />
      </Helmet>

      <Navbar navColor={navColor} />
      <div className="container font-poppins max-w-[1440px] mx-auto p-4 lg:p-20">
        <h1 className="text-[15px] lg:text-[28px] text-[#161C2D] opacity-70 text-center mb-4 mt-10 lg:mt-0">
          Pricing & Plans
        </h1>
        <h2 className="text-[32px] lg:text-[42px] text-[#161C2DCC] font-medium text-center mb-[50px] lg:mb-[100px]">
          DP Charges
        </h2>
        <div className="overflow-x-auto rounded-[24px]">
          <table className="min-w-full bg-white   rounded-lg">
            <thead className="text-[20px] font-semibold whitespace-nowrap text-[#161C2DCC]">
              <tr>
                <th className="py-6 bg-[#f3f3f3] px-4 mx-auto border rounded-tl-lg">
                  Heads
                </th>
                <th className="py-6 bg-[#f3f3f3] px-4 mx-auto border">
                  Minimum Amt.
                </th>
                <th className="py-6 bg-[#f3f3f3] px-4 mx-auto border">
                  Percentage
                </th>
                <th className="py-6 bg-[#f3f3f3] px-4 mx-auto border">
                  Fix charges
                </th>
                <th className="py-6 bg-[#f3f3f3] px-4 mx-auto border rounded-tr-lg">
                  Per Certificate
                </th>
              </tr>
            </thead>
            <tbody className="whitespace-nowrap">
              {charges.map((charge, index) => (
                <tr key={index} className="text-[14px]">
                  <td
                    className={`py-4 px-4 border text-center ${
                      index === charges.length - 1 ? "rounded-bl-lg" : ""
                    }`}
                  >
                    {charge.head}
                  </td>
                  <td className="py-4 px-4  text-center  border">
                    {charge.minAmt}
                  </td>
                  <td className="py-4 px-4  text-center  border">
                    {charge.percentage}
                  </td>
                  <td className="py-4 px-4  text-center  border">
                    {charge.fixCharges}
                  </td>
                  <td
                    className={`py-4 px-4 text-center  border ${
                      index === charges.length - 1 ? "rounded-br-lg" : ""
                    }`}
                  >
                    {charge.perCertificate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-base text-left lg:text-right mt-5 text-[#161C2D] opacity-70 ">
          Note: All charges are in INR
        </p>
      </div>
      <div className="mt-10 lg:mt-0">
        <ExchangeRates />
      </div>
      <div className="flex items-center justify-center mb-[100px]">
        <a href="https://kyc.acagarwal.com/" target="_blank">
          <button className="mt-14 flex items-center justify-center  w-auto lg:h-[57px] h-[50px] font-poppins bg-[#244896] tracking-tight hover:bg-[#6688d1] transition-all px-8 text-white font-normal text-[17px] rounded-[10px]">
            {" "}
            Get Started{" "}
          </button>
        </a>
      </div>
      <Footer backColor={backColor} />
    </div>
  );
};

export default LOC;
