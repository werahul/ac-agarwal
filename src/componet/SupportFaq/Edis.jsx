import React, { useState } from "react";
import { dropDownArr, openArr, openWhiteArr } from "../../assets/Images";

const faqs = [
  {
    question: "What is e-DIS facility? Is it available on AC Agarwal?",
    answer:
      "e-DIS or Electronic Delivery Instruction Slip is an online facility provided by various stockbrokers to their demat account holders to allow selling shares without submitting the DDPI (previously POA). You can sell shares held in your demat account using the facility.",
    answer2:
      "AC Agarwal allows its demat account holders who have not submitted DDPI to sell shares using the e-DIS facility.",
  },
  {
    question: "Who can avail e-DIS facility on AC Agarwal?",
    answer:
      "AC Agarwal allows individuals, NRIs, and joint account holders to avail the e-DIS facility. However, you should ensure that you have revoked your DDPI to avail the e-DIS facility if you are a current registered DDPI user.",
  },
  {
    question:
      "What are the charges applicable for using e-DIS facility on AC Agarwal?",
    answer:
      "No, AC Agarwal does not charge any fee for using the e-DIS facility. It is entirely free of cost.",
  },
  {
    question: "How can I sell my shares using e-DIS facility?",
    answer:
      "Here is the detailed process of selling your shares using the e-DIS facility:",
    answer2: "Step 1: Login to your AC Agarwal demat account.",
    answer3:
      "Step 2: Click on Holdings, e-DIS button, and press Generate e-DIS TPIN.",
    answer4:
      "Step 3: Select the shares you want to sell using the e-DIS facility and enter the generated TPIN on the resulting CDSL website.",
    answer5: "Step 4: Enter the received OTP to confirm the order.",
  },
  {
    question: "Can I sell my shares without DDPI registration?",
    answer:
      "DDPI (previously POA) is not required to sell shares with AC Agarwal. You can sell the shares by opting for the e-DIS facility provided by AC Agarwal.",
    answer2:
      "DDPI is immensely beneficial for traders and investors as it eases the process of trading and investing by allowing to avoid the step of entering an OTP or using the e-DIS facility to place a sell order. The sell orders can be placed directly with AC Agarwal, and our expert team will sell the shares instantly as per your raised request, allowing you to get the best price for your securities.",
  },
  {
    question:
      "Can I revoke my DDPI and use the e-DIS functionality for sell transactions?",
    answer:
      "It is mandatory to revoke the DDPI (previously POA) to use the e-DIS functionality for sell transactions. Hence, you should ensure that you have revoked your DDPI to avail the e-DIS facility if you are a current registered DDPI user.",
  },
  {
    question:
      "Why do I need to take authorization under e-DIS to sell my own shares?",
    answer:
      "AC Agarwal has no control over the shares you hold in your demat account as they are under the management of CDSL. Hence, you will need to take authorization from CDSL to transfer your shares from the demat to the trading account to place a sell order.",
  },
  {
    question:
      "What is the process of generating CDSL TPIN for e-DIS on AC Agarwal?",
    answer:
      "Here is the process of generating CDSL TPIN for e-DIS on AC Agarwal:",
    answer2:
      "Step 1: Login to your AC Agarwal demat account on the Bloom app or the AC Agarwal website.",
    answer3:
      "Step 2: Click on Holdings, e-DIS button, and press Generate e-DIS TPIN.",
    answer4:
      "Step 3: Once you submit the request, you will receive the CDSL TPIN for e-DIS on your registered email and mobile number.",
  },
  {
    question: "What is the timeframe for TPIN validity?",
    answer:
      "Once you have generated the TPIN, it always remains valid. The only way for it to change is when you generate a new TPIN.",
  },
  {
    question: "I forgot my TPIN. How can I retrieve or regenerate it?",
    answer:
      "There is no need to worry if you have lost your TPIN. You can reset the TPIN from the CDSL authorization page while placing an order. Before entering the TPIN, you will get two options to either change the TPIN or retrieve it by clicking Forget TPIN.",
  },
  {
    question:
      "Do I need to generate TPIN every time for authorization on AC Agarwal?",
    answer:
      "No, as mentioned above, the TPIN remains valid indefinitely until you change it manually. Hence, you do not have to generate a TPIN every time and can use the same TPIN to authorize your sell orders on AC Agarwal.",
  },
  {
    question: "Can I do BTST with e-DIS on AC Agarwal?",
    answer:
      'BTST, or "Buy Today, Sell Tomorrow," refers to a trading strategy in which an investor buys shares of a stock and then sells them the next trading day. However, SEBI has mandated that investors or traders can not do BTST orders with e-DIS. Hence, you can not do BTST orders with e-DIS on AC Agarwal.',
  },
  {
    question:
      "Is there any limit to selling value via e-DIS per day on AC Agarwal?",
    answer:
      "AC Agarwal has always strived to provide the most effective services to its demat account holders across all segments. When you use the e-DIS facility, there is no limit to selling value, and you can make as many orders with any value you want per day on AC Agarwal.",
  },
  {
    question:
      "Can I do e-DIS authorization during off-market hours on AC Agarwal?",
    answer:
      "Unfortunately, SEBI does not allow e-DIS authorization during off-market hours on AC Agarwal. For using the e-DIS, you can only seek authorization during trading hours.",
  },
  {
    question: "Is e-DIS applicable for intraday transactions as well?",
    answer:
      "No, SEBI has mandated that investors and traders can only use the e-DIS facility for delivery trades and not for intraday transactions.",
  },
  {
    question:
      "What is BOID/Demat account number and where can I find mine on Agarwal?",
    answer:
      "BOID or the Beneficiary Owner Identification Number refers to a 16-digit identification number linked to your demat account, which is unique to every demat account holder. It is a mix of the first 8 digits, which are the Depository Participant ID, and the last 8 digits, which are the client ID with the DP.",
    answer2:
      "You can find the BOID on the e-DIS authorization screen on the AC Agarwal web portal as well as the Bloom mobile app.",
  },
  {
    question: "Can NRIs use e-DIS facility similar to others on AC Agarwal?",
    answer:
      "Yes, AC Agarwal has designed its e-DIS facility in such a way that NRIs can use it with ease and with a similar process as used by other categories of investors and traders on AC Agarwal.",
  },
];

const Edis = () => {
  const [faqVisibility, setFaqVisibility] = useState(
    Array(faqs.length).fill(false)
  );

  // Function to toggle the visibility of the answer section
  const toggleAnswerVisibility = (index) => {
    const updatedVisibility = [...faqVisibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setFaqVisibility(updatedVisibility);
  };

  return (
    <div className="border-t mt-5">
      <div className="h-auto rounded-[20px] pt-10 lg:pt-10 px-5 lg:px-20 mt-0 mb-10">
        <div>
          <div className="contentSec mt-0">
            <div className="faqSec mt-0">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`w-full h-auto py-8 px-4 lg:px-8 rounded-[18px] bg-transparent ${
                      faqVisibility[index] ? "bg-white border-2 border-[#24489688]" : ""
                    } border`}
                  >
                    <div className="flex items-center lg:justify-between space-x-3">
                      <p className="font-poppins font-medium text-[15px] lg:text-[22px] text-[#161C2D] opacity-90">
                        {faq.question}
                      </p>
                      {/* Button to show/hide the answer */}
                      <div
                        className={`showHideBtn cursor-pointer lg:min-w-[50px] min-w-[40px] lg:min-h-[50px] min-h-[40px] rounded-[50%] ${
                          faqVisibility[index] ? "bg-[#244896]" : "bg-white"
                        } flex items-center justify-center shadow-md`}
                        onClick={() => toggleAnswerVisibility(index)}
                      >
                        {/* Conditional rendering of images based on visibility */}
                        {faqVisibility[index] ? (
                          <img src={openWhiteArr} alt="" />
                        ) : (
                          <img src={openArr} alt="" />
                        )}
                      </div>
                    </div>
                    {faqVisibility[index] && (
                      <div className="faqAnswer mt-2 lg:mt-3 space-y-4 lg:space-y-6">
                        {Object.keys(faq)
                          .filter((key) => key.startsWith("answer"))
                          .map((key) => (
                            <p
                              key={key}
                              className="font-poppins font-normal text-[14px] lg:text-[18px] text-[#484F56] leading-[21px] lg:leading-[30px]"
                              style={{
                                wordWrap: "break-word",
                                wordBreak: "break-all",
                                overflowWrap: "break-word",
                              }}
                            >
                              {faq[key]}
                            </p>
                          ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edis;
