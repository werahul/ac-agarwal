import React from "react";
import {
    Navbar,
    Hero,
    Twitter,
    PricingCalc,
    RecentNews,
    Partner,
    Cta,
    Footer,
  } from "../../componet";
  import {
    filledChecked,
    dropDownArr,
    supportBg,
    supportBg2,
    blueTick,
    blueTick2,
    customerSupport,
    openArr,
  } from "../../assets/Images";

const data = [
    {
      detailsOf: "Client Servicing",
      contactPerson: "Ms. Neha Yadav",
      address: "315, City Mall, C-Scheme, Jaipur - 302001",
      contactNo: "0141-4920999",
      emailId: "care@acagarwal.com",
      timings: "9AM - 6PM",
    },
    {
      detailsOf: "Head of Client Servicing",
      contactPerson: "Mr. Naman Agarwal",
      address: "406 Payal Complex, Sayajigunj, Vadodara - 390005",
      contactNo: "0265-2361059",
      emailId: "care@acagarwal.com",
      timings: "9AM - 6PM",
    },
    {
      detailsOf: "Compliance Officer",
      contactPerson: "Mr. Ravindra Uniyal",
      address: "406 Payal Complex, Sayajigunj, Vadodara - 390005",
      contactNo: "0265-2361059",
      emailId: "compliance@acagarwal.com",
      timings: "9AM - 6PM",
    },
    {
      detailsOf: "CEO",
      contactPerson: "Mr. Nagessh Agarwal",
      address: "406 Payal Complex, Sayajigunj, Vadodara - 390005",
      contactNo: "0265-2361059",
      emailId: "acashare@acagarwal.com",
      timings: "9AM - 6PM",
    },
  ];

  const randomNames = [
    [
      "Client Servicing",
      "Ms. Neha Yadav",
      "315, City Mall, C-Scheme, Jaipur - 302001",
      "0141-4920999",
      "care@acagarwal.com",
      "9AM - 6PM",
    ],
    [
      "Head of Client Servicing",
      "Mr. Naman Agarwal",
      "406 Payal Complex, Sayajigunj, Vadodara - 390005",
      "0265-2361059",
      "care@acagarwal.com",
      "9AM - 6PM",
    ],
    [
      "Compliance Officer",
      "Mr. Ravindra Uniyal",
      "406 Payal Complex, Sayajigunj, Vadodara - 390005",
      "0265-2361059",
      "compliance@acagarwal.com",
      "9AM - 6PM",
    ],
    [
      "CEO",
      "Mr. Nagessh Agarwal",
      "406 Payal Complex, Sayajigunj, Vadodara - 390005",
      "0265-2361059",
      "acashare@acagarwal.com",
      "9AM - 6PM",
    ],
  ];

  const randomNames2 = [
    [
      "1",
      "Mr. Nagessh Agarwal",
      "Director",
      "0141-4920999",
      "acashare@acagarwal.com",
    ],
    [
      "2",
      "Mr. Ankit Agarwal",
      "Director",
      "0265-2361059",
      "ankit@acagarwal.com",
    ],
    [
      "3",
      "Mr. Ravindra Uniyal",
      "Compliance Officer",
      "0265-2361059",
      "compliance@acagarwal.com",
    ],
  ];


const CustomerSupportAndTable = () => {
  return (
    <div>
      <div className="lg:bg-[#f4f7fa]">
        <section className="max-container py-20  lg:px-20 px-5 lg:mt-32 mt-10">
          <div className="flex flex-col items-center justify-center">
            <img
              src={customerSupport}
              alt=""
              className="w-[150px] lg:w-auto h-auto"
            />
            <p className="font-poppins font-medium text-[32px] lg:text-[42px] lg:leading-[56px] leading-[44px]  tracking-tight text-[#161c2ddc] text-center mt-10 ">
              {" "}
              Our Commitment to You
            </p>
            <p className="font-poppins text-[15px] lg:text-[24px] leading-[26px] lg:leading-[38px]   text-[#161c2ddc] text-center opacity-90 lg:w-[87%] lg:mt-6 mt-4">
              {" "}
              At AC Agarwal, we value your satisfaction and strive to deliver{" "}
              <br className="lg:block hidden" />
              exceptional customer support. Our team of knowledgeable and
              friendly <br className="lg:block hidden" /> support
              representatives is dedicated to addressing your inquiries and
              ensuring your <br className="lg:block hidden" /> trading
              experience is smooth and successful. Don't hesitate to reach out –
              we're here <br className="lg:block hidden" /> to support you every
              step of the way.
            </p>
          </div>
        </section>
      </div>

      <div className="max-container">
        <section className="py-20  lg:px-20 px-5">
          <p className="font-poppins font-medium lg:text-[42px] text-[32px] lg:leading-normal leading-[44px] text-center text-[#161C2DCC] lg:mb-20 mb-10">
            Annexure - <br className="lg:hidden block" /> A Escalation Matrix
          </p>

          <div className="lg:block hidden overflow-x-auto p-0 border border-[#00000026] rounded-[22px]">
            <table className="min-w-full bg-[#FCFDFE] border border-[#00000026] rounded-[22px] overflow-hidden">
              <thead>
                <tr>
                  {[
                    "Details Of",
                    "Contact Person",
                    "Address",
                    "Contact No.",
                    "Email ID",
                    "Timings",
                  ].map((header, index) => (
                    <th
                      key={index}
                      className="font-poppins font-semibold lg:text-[20px] whitespace-nowrap text-[12px] text-center bg-[#fcfdfe] text-[#161c2ddc] py-8 px-4 border border-[#00000026]"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {randomNames.slice(0).map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="flex flex-col lg:table-row border-b border-gray-200"
                  >
                    {row.map((cell, colIndex) => {
                      let content = cell;
                      if (colIndex === 3) {
                        // Make phone number clickable
                        content = (
                          <a href={`tel:${cell}`} className="text-[#161C2DCC]">
                            {cell}
                          </a>
                        );
                      }
                      if (colIndex === 4) {
                        // Make email clickable
                        content = (
                          <a
                            href={`mailto:${cell}`}
                            className="text-[#161C2DCC]"
                          >
                            {cell}
                          </a>
                        );
                      }
                      return (
                        <td
                          key={colIndex}
                          className={`font-poppins font-normal lg:text-[14px] text-[12px] text-center py-8 px-4 text-[#161C2DCC] ${
                            colIndex < 5 ? "border-b border-r" : "border-b"
                          } border-[#00000026]`}
                        >
                          {content}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="lg:hidden block space-y-6">
            {data.map((item, index) => (
              <div
                key={index}
                className="p-5 h-[224px] bg-[#FCFDFE] border rounded-[22px] flex flex-col justify-between"
              >
                <p className="font-poppins text-[15px]">
                  {item.detailsOf} -{" "}
                  <span className="font-semibold">{item.contactPerson}</span>
                </p>
                <p className="font-poppins text-[15px]">
                  Address -{" "}
                  <span className="font-semibold">{item.address}</span>
                </p>
                <p className="font-poppins text-[15px]">
                  Contact No. -
                  <a href={`tel:${item.contactNo}`}>
                    {" "}
                    <span className="font-semibold">{item.contactNo}</span>
                  </a>
                </p>
                <p className="font-poppins text-[15px]">
                  E-mail ID -{" "}
                  <a href={`mailto:${item.emailId}`} className="font-semibold">
                    {item.emailId}
                  </a>
                </p>
                <p className="font-poppins text-[15px]">
                  Timings -{" "}
                  <span className="font-semibold">{item.timings}</span>
                </p>
              </div>
            ))}
          </div>
          <p className="font-poppins lg:text-[16px] text-[15px] leading-[26px] text-[#161C2DB2] lg:mt-5 mt-3">
            In absence of response/ complaint not addressed to your
            satisfaction, you may lodge a complaint with{" "}
            <a href="https://www.cdslindia.com/" target="_blank">
              {" "}
              <span className="font-semibold text-[#244896]"> CDSL </span>{" "}
            </a>{" "}
            /{" "}
            <a href="https://scores.gov.in/scores/Welcome.html" target="_blank">
              {" "}
              <span className="font-semibold text-[#244896]"> SEBI </span>{" "}
            </a>{" "}
            or{" "}
            <a
              href="https://www.bseindia.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-semibold text-[#244896]">BSE</span>{" "}
            </a>{" "}
            or{" "}
            <a
              href="https://www.mcxindia.com/Investor-Services"
              target="_blank"
            >
              <span className="font-semibold text-[#244896]">
                {" "}
                Investor Services{" "}
              </span>
            </a>{" "}
            or
            <a
              href="https://investorhelpline.nseindia.com/NICEPLUS/"
              target="_blank"
            >
              <span className="font-semibold text-[#244896]"> NICE. </span>{" "}
            </a>
            Please quote your Complaint Reference Number while raising your
            complaint at SEBI SCORES/ Depository Portal.
          </p>
        </section>

        <section className="pt-10 pb-20  lg:px-20 px-5">
          <p className="font-poppins font-medium lg:text-[42px] text-[32px] lg:leading-normal leading-[44px] text-center text-[#161C2DCC] lg:mb-20 mb-10">
            Names & Contact Details of all Key <br /> Managerial Personnel
          </p>

          <div className="lg:block hidden overflow-x-auto p-0 border border-[#00000026] rounded-[22px]">
            <table className="min-w-full bg-[#FCFDFE] border border-[#00000026] rounded-[22px] overflow-hidden">
              <thead>
                <tr>
                  {[
                    "Sr No.",
                    "Individual Name",
                    "Designation",
                    "Contact No.",
                    "Email ID",
                  ].map((header, index) => (
                    <th
                      key={index}
                      className="font-poppins font-semibold lg:text-[20px] whitespace-nowrap text-[12px] text-center bg-[#fcfdfe] text-[#161c2ddc] py-8 px-4 border border-[#00000026]"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {randomNames2.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="flex flex-col lg:table-row border-b border-gray-200"
                  >
                    {row.map((name, colIndex) => {
                      let content = name;
                      if (colIndex === 3) {
                        // Make phone number clickable
                        content = (
                          <a href={`tel:${name}`} className="text-[#161C2DCC]">
                            {name}
                          </a>
                        );
                      }
                      if (colIndex === 4) {
                        // Make email clickable
                        content = (
                          <a
                            href={`mailto:${name}`}
                            className="text-[#161C2DCC]"
                          >
                            {name}
                          </a>
                        );
                      }
                      return (
                        <td
                          key={colIndex}
                          className={`font-poppins font-normal lg:text-[14px] text-[12px] text-center py-8 px-4 text-[#161C2DCC] ${
                            colIndex < 4 ? "border-b border-r" : "border-b"
                          } border-[#00000026]`}
                        >
                          {content}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="lg:hidden block space-y-6">
            {randomNames2.map((item, index) => (
              <div
                key={index}
                className="min-h-[132px]  p-5 bg-[#FCFDFE] border rounded-[22px] flex flex-col justify-between"
              >
                <p className="font-poppins text-[15px]">
                  {item[2]} - <span className="font-semibold">{item[1]}</span>
                </p>
                <p className="font-poppins text-[15px]">
                  Contact No. -{" "}
                  <a href={`tel:${item[3]}`}>
                    <span className="font-semibold">{item[3]}</span>
                  </a>
                </p>
                <p className="font-poppins text-[15px]">
                  E-mail ID -{" "}
                  <a href={`mailto:${item[4]}`} className="font-semibold">
                    {item[4]}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CustomerSupportAndTable;
