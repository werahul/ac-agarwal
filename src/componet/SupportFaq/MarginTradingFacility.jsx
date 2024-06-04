import React, { useState, useEffect } from "react";
import { openArr, openWhiteArr } from "../../assets/Images";

const MarginTradingFacility = ({ faqs, searchQuery }) => {
  const [filteredFaqs, setFilteredFaqs] = useState(faqs);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredFaqs(faqs);
    } else {
      const filtered = faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredFaqs(filtered);
    }
  }, [searchQuery, faqs]);

  const [faqVisibility, setFaqVisibility] = useState(
    Array(faqs.length).fill(false)
  );

  const toggleAnswerVisibility = (index) => {
    const updatedFaqVisibility = [...faqVisibility];
    updatedFaqVisibility[index] = !updatedFaqVisibility[index];
    setFaqVisibility(updatedFaqVisibility);
  };

  return (
    <div className="border-t mt-5">
      <div className="h-auto rounded-[20px] pt-10 lg:pt-10 px-5 lg:px-8 mt-0 mb-10">
        <div>
          <div className="contentSec mt-0">
            <div className="faqSec mt-0">
              <div className="space-y-6">
                {filteredFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`w-full h-auto py-8 px-4 lg:px-8 rounded-[18px] bg-transparent ${
                      faqVisibility[index] ? "bg-white border-2 border-[#24489688]" : ""
                    } border`}
                  >
                    <div
                      className="flex items-center lg:justify-between space-x-3 cursor-pointer"
                      onClick={() => toggleAnswerVisibility(index)}
                    >
                      <p className="font-poppins font-medium text-[15px] lg:text-[22px] text-[#161C2D] opacity-90">
                        {faq.question}
                      </p>
                      <div
                        className={`showHideBtn cursor-pointer lg:min-w-[50px] min-w-[40px] lg:min-h-[50px] min-h-[40px] rounded-[50%] ${
                          faqVisibility[index] ? "bg-[#244896]" : "bg-transparent"
                        } flex items-center justify-center border`}
                      >
                        {faqVisibility[index] ? (
                          <img src={openWhiteArr} alt="Collapse" />
                        ) : (
                          <img src={openArr} alt="Expand" />
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

export default MarginTradingFacility;
