import React, { useState } from "react";
import { dropDownArr, openArr, openWhiteArr } from "../../assets/Images";

const faqs = [
  {
    question: "What is the best way to contact Customer Service for AC Agarwal?",
    answer:
      "AC Agarwal is committed to providing exceptional customer service to its Demat account holders. For support, visit the AC Agarwal website or the AC Agarwal-designed applications, click on 'SUPPORT' in the 'Get in Touch' section, and you'll find our contact details:",
    answer2:
      "Email: care@acagarwal.com",
    answer3:
      "Phone: 0141-4920999 / 4049663"
  },
  {
    question: "Are there any charges to call the customer care for AC Agarwal?",
    answer:
      "No, there are no charges to call customer care for AC Agarwal from our side. Contacting us is fully free of cost, and you can do so unlimited times. However, your service provider may charge you with the standard calling or data charges."
  },
  {
    question: "Where do I find answers to my questions related to the AC Agarwal account?",
    answer:
      "At AC Agarwal, we have always tried to make our platform and trading apps as user-friendly and self-explanatory as possible. You can find most of the answers with the web portal or the trading apps.",
    answer2:
      "However, if you have any queries regarding the AC Agarwal demat account along with trading and investing, you can contact AC Agarwal's customer care, and we would be happy to help you.",
    answer3:
      "You can contact us at:",
    answer4:
      "Email: care@acagarwal.com",
    answer5:
      "Phone: 0141-4920999 / 4049663"
  },
  {
    question: "What information is required while calling the customer care support of AC Agarwal?",
    answer:
      "Although we would love to assist you as long as it takes, we value your time when you call AC Agarwal’s customer care. To ensure that we can assist you as fast as possible, we request you to keep in handy your Client code (provided at the time of account opening)."
  },
  {
    question: "What are the timings for customer care support of AC Agarwal?",
    answer: "You can contact us between 9 AM to 6 PM."
  },
  {
    question: "How long does it usually take for the AC Agarwal team to resolve my issues?",
    answer:
      "AC Agarwal is highly committed to resolving every issue for its demat account holders instantly. However, sometimes, some issues may require a little more time from our side to ensure the resolution is satisfactory. However, most issues get resolved within 24 hours. If not, our customer care executives communicate a deadline for the resolution of the issue."
  },
  {
    question: "How can I reach out to the customer support team on AC Agarwal’s Social Media handles?",
    answer:
      "AC Agarwal understands the need for social channels to resolve queries or to hold relevant discussions. Hence, we have created our presence across social media channels. Here are the links for all our social media channels:",
    answer2:
      "Facebook: https://www.facebook.com/acagarwalsharebrokers",
    answer3:
      "Instagram: https://www.instagram.com/acagarwalofficial/?igshid=YmMyMTA2M2Y%3D",
    answer4:
      "Twitter: https://twitter.com/acagarwal_in?s=09",
    answer5:
      "LinkedIn: https://www.linkedin.com/company/ac-agarwal-share-brokers/"
  },
  {
    question: "What is the email address to contact Customer Service for AC Agarwal?",
    answer:
      "You can email AC Agarwal’s customer care at: care@acagarwal.com"
  },
  {
    question: "What is the customer care helpline number for AC Agarwal?",
    answer: "The customer care helpline for AC Agarwal is: 0141-4920999 / 4049663"
  },
  {
    question: "I have feedback for the AC Agarwal team, how do I share it?",
    answer:
      "We always value what our demat account holders have to say about our services and how we can make them better. Hence, we would love to have your feedback and work towards incorporating them across all our services.",
    answer2:
      "You can send your feedback to care@acagarwal.com or contact us at any of our social media channels. You can also call us at 0141-4920999 to talk to us and give us direct feedback."
  },
  {
    question: "What is the escalation matrix of customer service?",
    answer:
      "You can check the escalation Matrix by opening the AC Agarwal website and navigating to the 'Annexure A Escalation Matrix' section by clicking on SUPPORT."
  }
];


const CustomerService = () => {
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

export default CustomerService;
