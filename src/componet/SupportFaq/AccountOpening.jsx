import React, { useState } from "react";
import { dropDownArr, openArr, openWhiteArr } from "../../assets/Images";

const AccountOpening = () => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const [faqVisibility, setFaqVisibility] = useState(Array(10).fill(false));
  const [activeButton, setActiveButton] = useState(0);

  // Function to toggle the visibility of the answer section
  const toggleAnswerVisibility = (index) => {
    const updatedVisibility = [...faqVisibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setFaqVisibility(updatedVisibility);
  };

  const faqs = [
    {
      question: "How much does it cost to open an account?",
      answer:
        "The cost of creating an online account with Bloom for Trading and Demat is Rs. 250 + 18% GST. This is the AMC which is charged to you after 1 year. If you want to trade commodities derivatives through MCX, you can do so after you've opened your Trading & Demat account by enabling the Commodity section from Trading portals. The charge for activating the commodity account is Rs.100, which will be deducted from your ledger.",
    },
    {
      question: "How much does it cost to open an account?",
      answer:
        "The cost of creating an online account with Bloom for Trading and Demat is Rs. 250 + 18% GST. This is the AMC which is charged to you after 1 year. If you want to trade commodities derivatives through MCX, you can do so after you've opened your Trading & Demat account by enabling the Commodity section from Trading portals. The charge for activating the commodity account is Rs.100, which will be deducted from your ledger.",
    },
    {
      question: "How much does it cost to open an account?",
      answer:
        "The cost of creating an online account with Bloom for Trading and Demat is Rs. 250 + 18% GST. This is the AMC which is charged to you after 1 year. If you want to trade commodities derivatives through MCX, you can do so after you've opened your Trading & Demat account by enabling the Commodity section from Trading portals. The charge for activating the commodity account is Rs.100, which will be deducted from your ledger.",
    },
    {
      question: "How much does it cost to open an account?",
      answer:
        "The cost of creating an online account with Bloom for Trading and Demat is Rs. 250 + 18% GST. This is the AMC which is charged to you after 1 year. If you want to trade commodities derivatives through MCX, you can do so after you've opened your Trading & Demat account by enabling the Commodity section from Trading portals. The charge for activating the commodity account is Rs.100, which will be deducted from your ledger.",
    },
    {
      question: "How much does it cost to open an account?",
      answer:
        "The cost of creating an online account with Bloom for Trading and Demat is Rs. 250 + 18% GST. This is the AMC which is charged to you after 1 year. If you want to trade commodities derivatives through MCX, you can do so after you've opened your Trading & Demat account by enabling the Commodity section from Trading portals. The charge for activating the commodity account is Rs.100, which will be deducted from your ledger.",
    },
    {
      question: "How much does it cost to open an account?",
      answer:
        "The cost of creating an online account with Bloom for Trading and Demat is Rs. 250 + 18% GST. This is the AMC which is charged to you after 1 year. If you want to trade commodities derivatives through MCX, you can do so after you've opened your Trading & Demat account by enabling the Commodity section from Trading portals. The charge for activating the commodity account is Rs.100, which will be deducted from your ledger.",
    },
    // Add more FAQs here
  ];
  const faqs2 = [
    {
      question: "This is Quation is for Offline tab",
      answer:
        "The cost of creating an online account with Bloom for Trading and Demat is Rs. 250 + 18% GST. This is the AMC which is charged to you after 1 year. If you want to trade commodities derivatives through MCX, you can do so after you've opened your Trading & Demat account by enabling the Commodity section from Trading portals. The charge for activating the commodity account is Rs.100, which will be deducted from your ledger.",
    },
    {
      question: "How much does it cost to open an account?",
      answer:
        "The cost of creating an online account with Bloom for Trading and Demat is Rs. 250 + 18% GST. This is the AMC which is charged to you after 1 year. If you want to trade commodities derivatives through MCX, you can do so after you've opened your Trading & Demat account by enabling the Commodity section from Trading portals. The charge for activating the commodity account is Rs.100, which will be deducted from your ledger.",
    },
    {
      question: "How much does it cost to open an account?",
      answer:
        "The cost of creating an online account with Bloom for Trading and Demat is Rs. 250 + 18% GST. This is the AMC which is charged to you after 1 year. If you want to trade commodities derivatives through MCX, you can do so after you've opened your Trading & Demat account by enabling the Commodity section from Trading portals. The charge for activating the commodity account is Rs.100, which will be deducted from your ledger.",
    },
    {
      question: "How much does it cost to open an account?",
      answer:
        "The cost of creating an online account with Bloom for Trading and Demat is Rs. 250 + 18% GST. This is the AMC which is charged to you after 1 year. If you want to trade commodities derivatives through MCX, you can do so after you've opened your Trading & Demat account by enabling the Commodity section from Trading portals. The charge for activating the commodity account is Rs.100, which will be deducted from your ledger.",
    },
    {
      question: "How much does it cost to open an account?",
      answer:
        "The cost of creating an online account with Bloom for Trading and Demat is Rs. 250 + 18% GST. This is the AMC which is charged to you after 1 year. If you want to trade commodities derivatives through MCX, you can do so after you've opened your Trading & Demat account by enabling the Commodity section from Trading portals. The charge for activating the commodity account is Rs.100, which will be deducted from your ledger.",
    },
    {
      question: "How much does it cost to open an account?",
      answer:
        "The cost of creating an online account with Bloom for Trading and Demat is Rs. 250 + 18% GST. This is the AMC which is charged to you after 1 year. If you want to trade commodities derivatives through MCX, you can do so after you've opened your Trading & Demat account by enabling the Commodity section from Trading portals. The charge for activating the commodity account is Rs.100, which will be deducted from your ledger.",
    },
    // Add more FAQs here
  ];
  const faqs3 = [
    {
      question: "This is Quation is for NRI tab",
      answer:
        "The cost of creating an online account with Bloom for Trading and Demat is Rs. 250 + 18% GST. This is the AMC which is charged to you after 1 year. If you want to trade commodities derivatives through MCX, you can do so after you've opened your Trading & Demat account by enabling the Commodity section from Trading portals. The charge for activating the commodity account is Rs.100, which will be deducted from your ledger.",
    },
    {
      question: "How much does it cost to open an account?",
      answer:
        "The cost of creating an online account with Bloom for Trading and Demat is Rs. 250 + 18% GST. This is the AMC which is charged to you after 1 year. If you want to trade commodities derivatives through MCX, you can do so after you've opened your Trading & Demat account by enabling the Commodity section from Trading portals. The charge for activating the commodity account is Rs.100, which will be deducted from your ledger.",
    },
    {
      question: "How much does it cost to open an account?",
      answer:
        "The cost of creating an online account with Bloom for Trading and Demat is Rs. 250 + 18% GST. This is the AMC which is charged to you after 1 year. If you want to trade commodities derivatives through MCX, you can do so after you've opened your Trading & Demat account by enabling the Commodity section from Trading portals. The charge for activating the commodity account is Rs.100, which will be deducted from your ledger.",
    },
    {
      question: "How much does it cost to open an account?",
      answer:
        "The cost of creating an online account with Bloom for Trading and Demat is Rs. 250 + 18% GST. This is the AMC which is charged to you after 1 year. If you want to trade commodities derivatives through MCX, you can do so after you've opened your Trading & Demat account by enabling the Commodity section from Trading portals. The charge for activating the commodity account is Rs.100, which will be deducted from your ledger.",
    },
    {
      question: "How much does it cost to open an account?",
      answer:
        "The cost of creating an online account with Bloom for Trading and Demat is Rs. 250 + 18% GST. This is the AMC which is charged to you after 1 year. If you want to trade commodities derivatives through MCX, you can do so after you've opened your Trading & Demat account by enabling the Commodity section from Trading portals. The charge for activating the commodity account is Rs.100, which will be deducted from your ledger.",
    },
    {
      question: "How much does it cost to open an account?",
      answer:
        "The cost of creating an online account with Bloom for Trading and Demat is Rs. 250 + 18% GST. This is the AMC which is charged to you after 1 year. If you want to trade commodities derivatives through MCX, you can do so after you've opened your Trading & Demat account by enabling the Commodity section from Trading portals. The charge for activating the commodity account is Rs.100, which will be deducted from your ledger.",
    },
    // Add more FAQs here
  ];
  const faqs4 = [
    {
      question: "This is Quation is for Charges tab",
      answer:
        "The cost of creating an online account with Bloom for Trading and Demat is Rs. 250 + 18% GST. This is the AMC which is charged to you after 1 year. If you want to trade commodities derivatives through MCX, you can do so after you've opened your Trading & Demat account by enabling the Commodity section from Trading portals. The charge for activating the commodity account is Rs.100, which will be deducted from your ledger.",
    },
    {
      question: "How much does it cost to open an account?",
      answer:
        "The cost of creating an online account with Bloom for Trading and Demat is Rs. 250 + 18% GST. This is the AMC which is charged to you after 1 year. If you want to trade commodities derivatives through MCX, you can do so after you've opened your Trading & Demat account by enabling the Commodity section from Trading portals. The charge for activating the commodity account is Rs.100, which will be deducted from your ledger.",
    },
    {
      question: "How much does it cost to open an account?",
      answer:
        "The cost of creating an online account with Bloom for Trading and Demat is Rs. 250 + 18% GST. This is the AMC which is charged to you after 1 year. If you want to trade commodities derivatives through MCX, you can do so after you've opened your Trading & Demat account by enabling the Commodity section from Trading portals. The charge for activating the commodity account is Rs.100, which will be deducted from your ledger.",
    },
    {
      question: "How much does it cost to open an account?",
      answer:
        "The cost of creating an online account with Bloom for Trading and Demat is Rs. 250 + 18% GST. This is the AMC which is charged to you after 1 year. If you want to trade commodities derivatives through MCX, you can do so after you've opened your Trading & Demat account by enabling the Commodity section from Trading portals. The charge for activating the commodity account is Rs.100, which will be deducted from your ledger.",
    },
    {
      question: "How much does it cost to open an account?",
      answer:
        "The cost of creating an online account with Bloom for Trading and Demat is Rs. 250 + 18% GST. This is the AMC which is charged to you after 1 year. If you want to trade commodities derivatives through MCX, you can do so after you've opened your Trading & Demat account by enabling the Commodity section from Trading portals. The charge for activating the commodity account is Rs.100, which will be deducted from your ledger.",
    },
    {
      question: "How much does it cost to open an account?",
      answer:
        "The cost of creating an online account with Bloom for Trading and Demat is Rs. 250 + 18% GST. This is the AMC which is charged to you after 1 year. If you want to trade commodities derivatives through MCX, you can do so after you've opened your Trading & Demat account by enabling the Commodity section from Trading portals. The charge for activating the commodity account is Rs.100, which will be deducted from your ledger.",
    },
    // Add more FAQs here
  ];
  const faqs5 = [
    {
      question: "This is Quation is for A/C login tab",
      answer:
        "The cost of creating an online account with Bloom for Trading and Demat is Rs. 250 + 18% GST. This is the AMC which is charged to you after 1 year. If you want to trade commodities derivatives through MCX, you can do so after you've opened your Trading & Demat account by enabling the Commodity section from Trading portals. The charge for activating the commodity account is Rs.100, which will be deducted from your ledger.",
    },
    {
      question: "How much does it cost to open an account?",
      answer:
        "The cost of creating an online account with Bloom for Trading and Demat is Rs. 250 + 18% GST. This is the AMC which is charged to you after 1 year. If you want to trade commodities derivatives through MCX, you can do so after you've opened your Trading & Demat account by enabling the Commodity section from Trading portals. The charge for activating the commodity account is Rs.100, which will be deducted from your ledger.",
    },
    {
      question: "How much does it cost to open an account?",
      answer:
        "The cost of creating an online account with Bloom for Trading and Demat is Rs. 250 + 18% GST. This is the AMC which is charged to you after 1 year. If you want to trade commodities derivatives through MCX, you can do so after you've opened your Trading & Demat account by enabling the Commodity section from Trading portals. The charge for activating the commodity account is Rs.100, which will be deducted from your ledger.",
    },
    {
      question: "How much does it cost to open an account?",
      answer:
        "The cost of creating an online account with Bloom for Trading and Demat is Rs. 250 + 18% GST. This is the AMC which is charged to you after 1 year. If you want to trade commodities derivatives through MCX, you can do so after you've opened your Trading & Demat account by enabling the Commodity section from Trading portals. The charge for activating the commodity account is Rs.100, which will be deducted from your ledger.",
    },
    {
      question: "How much does it cost to open an account?",
      answer:
        "The cost of creating an online account with Bloom for Trading and Demat is Rs. 250 + 18% GST. This is the AMC which is charged to you after 1 year. If you want to trade commodities derivatives through MCX, you can do so after you've opened your Trading & Demat account by enabling the Commodity section from Trading portals. The charge for activating the commodity account is Rs.100, which will be deducted from your ledger.",
    },
    {
      question: "How much does it cost to open an account?",
      answer:
        "The cost of creating an online account with Bloom for Trading and Demat is Rs. 250 + 18% GST. This is the AMC which is charged to you after 1 year. If you want to trade commodities derivatives through MCX, you can do so after you've opened your Trading & Demat account by enabling the Commodity section from Trading portals. The charge for activating the commodity account is Rs.100, which will be deducted from your ledger.",
    },
    // Add more FAQs here
  ];

  return (
    <div className="animOpac h-auto bg-[#F4F7FA] rounded-[20px] py-20 px-14 mt-10 mb-20">
      <div>
        <div className="buttonSec flex justify-between items-center space-x-1">
          <button
            className={`rounded-[14px] font-poppins text-[20px] px-10 py-3 ${
              activeButton === 0
                ? "bg-[#244896] text-white"
                : "bg-[#ffffff] text-[#6F6C90] border"
            }`}
            onClick={() => setActiveButton(0)}
          >
            Online Account
          </button>
          <button
            className={`rounded-[14px] font-poppins text-[20px] px-10 py-3 ${
              activeButton === 1
                ? "bg-[#244896] text-white"
                : "bg-[#ffffff] text-[#6F6C90] border"
            }`}
            onClick={() => setActiveButton(1)}
          >
            Offline Account
          </button>
          <button
            className={`rounded-[14px] font-poppins text-[20px] px-10 py-3 ${
              activeButton === 2
                ? "bg-[#244896] text-white"
                : "bg-[#ffffff] text-[#6F6C90] border"
            }`}
            onClick={() => setActiveButton(2)}
          >
            NRI Account
          </button>
          <button
            className={`rounded-[14px] font-poppins text-[20px] px-10 py-3 ${
              activeButton === 3
                ? "bg-[#244896] text-white"
                : "bg-[#ffffff] text-[#6F6C90] border"
            }`}
            onClick={() => setActiveButton(3)}
          >
            Charges
          </button>
          <button
            className={`rounded-[14px] font-poppins text-[20px] px-10 py-3 ${
              activeButton === 4
                ? "bg-[#244896] text-white"
                : "bg-[#ffffff] text-[#6F6C90] border"
            }`}
            onClick={() => setActiveButton(4)}
          >
            A/c Login
          </button>
        </div>
        <div className="contentSec mt-4">
          <div style={{ display: activeButton === 0 ? "block" : "none" }}>
            <div className="faqSec mt-16">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="w-full h-auto py-8 px-10 rounded-[18px] bg-white shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-poppins font-medium text-[22px] text-[#161C2D]">
                        {faq.question}
                      </p>
                      {/* Button to show/hide the answer */}
                      <div
                        className={`showHideBtn w-[50px] h-[50px] rounded-[50%] ${
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
                    {/* Answer section */}
                    {faqVisibility[index] && (
                      <div className="ansSec">
                        <p className="w-[86%] text-[18px] leading-[27px] text-[#6F6C90] font-poppins">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: activeButton === 1 ? "block" : "none" }}>
            <div className="faqSec mt-16">
              <div className="space-y-6">
                {faqs2.map((faq, index) => (
                  <div
                    key={index}
                    className="w-full h-auto py-8 px-10 rounded-[18px] bg-white shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-poppins font-medium text-[22px] text-[#161C2D]">
                        {faq.question}
                      </p>
                      {/* Button to show/hide the answer */}
                      <div
                        className={`showHideBtn w-[50px] h-[50px] rounded-[50%] ${
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
                    {/* Answer section */}
                    {faqVisibility[index] && (
                      <div className="ansSec">
                        <p className="w-[86%] text-[18px] leading-[27px] text-[#6F6C90] font-poppins">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: activeButton === 2 ? "block" : "none" }}>
            <div className="faqSec mt-16">
              <div className="space-y-6">
                {faqs3.map((faq, index) => (
                  <div
                    key={index}
                    className="w-full h-auto py-8 px-10 rounded-[18px] bg-white shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-poppins font-medium text-[22px] text-[#161C2D]">
                        {faq.question}
                      </p>
                      {/* Button to show/hide the answer */}
                      <div
                        className={`showHideBtn w-[50px] h-[50px] rounded-[50%] ${
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
                    {/* Answer section */}
                    {faqVisibility[index] && (
                      <div className="ansSec">
                        <p className="w-[86%] text-[18px] leading-[27px] text-[#6F6C90] font-poppins">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: activeButton === 3 ? "block" : "none" }}>
            <div className="faqSec mt-16">
              <div className="space-y-6">
                {faqs4.map((faq, index) => (
                  <div
                    key={index}
                    className="w-full h-auto py-8 px-10 rounded-[18px] bg-white shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-poppins font-medium text-[22px] text-[#161C2D]">
                        {faq.question}
                      </p>
                      {/* Button to show/hide the answer */}
                      <div
                        className={`showHideBtn w-[50px] h-[50px] rounded-[50%] ${
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
                    {/* Answer section */}
                    {faqVisibility[index] && (
                      <div className="ansSec">
                        <p className="w-[86%] text-[18px] leading-[27px] text-[#6F6C90] font-poppins">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: activeButton === 4 ? "block" : "none" }}>
            <div className="faqSec mt-16">
              <div className="space-y-6">
                {faqs5.map((faq, index) => (
                  <div
                    key={index}
                    className="w-full h-auto py-8 px-10 rounded-[18px] bg-white shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-poppins font-medium text-[22px] text-[#161C2D]">
                        {faq.question}
                      </p>
                      {/* Button to show/hide the answer */}
                      <div
                        className={`showHideBtn w-[50px] h-[50px] rounded-[50%] ${
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
                    {/* Answer section */}
                    {faqVisibility[index] && (
                      <div className="ansSec">
                        <p className="w-[86%] text-[18px] leading-[27px] text-[#6F6C90] font-poppins">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      .
    </div>
  );
};

export default AccountOpening;
