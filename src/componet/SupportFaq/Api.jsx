import React, { useState } from "react";
import { dropDownArr, openArr, openWhiteArr } from "../../assets/Images";

const faqs = [
  {
    question: "What is a Trading API? How does it help in trading?",
    answer:
      "A Trading API (Application Programming Interface) is a set of rules and protocols that allows traders to write and develop their own software programs to interact with and access the services provided by a stock exchange or brokerage firm. It enables traders to create software applications, algorithms, or trading tools to place orders, access market data, and programmatically manage trading accounts.",
    answer2:
      "Trading APIs enable the development of trading systems. These systems can execute trades automatically based on predefined trading strategies and criteria. Automated trading helps traders respond quickly to market conditions, execute complex strategies, and eliminate emotional biases. These trading APIs help traders place automated orders and collect real-time market data for making informed trading decisions.",
  },
  {
    question:
      "What are the APIs provided by AC Agarwal for its investors and traders?",
    answer:
      "AC Agarwal provides interactive and market data APIs that can be used to customize all trading operations according to one's needs. Both of these are REST APIs. Market data API offers both real-time and historical data for a wide range of instruments while interactive API allows you to integrate your own trading system with our trading platform for placing orders, monitoring positions, managing portfolios, and much more.",
    answer2:
      "Both of these APIs are built on Node.js, and you can customize and code using Python, Java, and Node.js over these APIs.",
  },
  {
    question:
      "What are the charges for using various APIs provided by AC Agarwal?",
    answer:
      "AC Agarwal always strives to ensure that its demat account holders can get as much return as possible on their investments. Hence, it ensures that it provides its facilities with the most cost-effective model to increase the profit margin.",
    answer2:
      "Taking forward the same cost-effective system, AC Agarwal has kept its APIs entirely free of cost. You can use the APIs unlimited times without incurring any cost.",
  },
  {
    question: "What are the benefits of using AC Agarwal APIs?",
    answer:
      "Our REST APIs will help you to develop your own trading and investment platform and integrate with our Trading system. Using our REST APIs you can execute orders in real-time, monitor your positions, manage your portfolio, and much more. This will give you a personalized experience using your own innovative trading features.",
  },
  {
    question: "How to generate or get an API key?",
    answer:
      "Once your XTS account is set up. You will receive mails regarding your login credentials of all platform and a documentation on a how to create an API.  ",
    answer2:
      " 1)You need to create an account on dashboard site mentioning your basic details like name, no., e-mail id and client code and create a password for your dashboard and verify email.",
    answer3:
      "2) Login in your Dashboard portal and validate XTS (Password will be provided in previous mails).  ",
    answer4:
      "  3) Click on create an application and provide API name then select interactive or market API option as per requirement and click on Create. You will be able to see you API and secret key then.",
    answer5:
      " You can refer to this document for more info:  (API pdf document will be inserted here)",
  },
  {
    question:
      "How long does it take to activate an API subscription on AC Agarwal?",
    answer:
      "Once you have selected the desired API and subscribed to it on AC Agarwal, you can use the API instantly. The API subscription starts as soon as you complete the subscription without having to wait.",
  },
  {
    question:
      "What are all the asset classes where I can place orders using AC Agarwal's APIs?",
    answer:
      "AC Agarwal allows the usage of its APIs for the following segments: Equity (NSE and BSE), Equity Derivatives (NSE and BSE), Commodities (MCX), and Currency.",
  },
  {
    question: "Are bracket and cover orders available in AC Agarwal's APIs?",
    answer:
      "Yes, you can Place/Modify/Cancel a bracket or cover order using AC Agarwal’s various APIs.",
  },
  {
    question:
      "What is the difference between 'Interactive APIs' and 'Market Data APIs'?",
    answer:
      "Interactive APIs are designed to facilitate the execution of trades and the management of trading accounts. They allow traders to place orders, access account information, and manage portfolios. They are commonly used for automating trading activities, including algorithmic trading, high-frequency trading (HFT), and systematic trading. These APIs can execute trading strategies without manual intervention. ",
    answer2:
      "On the other hand, Market Data APIs are designed to provide access to real-time market data and information, such as stock prices, trade volumes, order book data, and other market-related statistics. These APIs are used by traders, financial analysts, and software developers to consume and analyze market data for decision-making and research purposes.",
  },
  
  {
    question:
      "What type of historical data I can check in APIs and how to fetch it?",
    answer:
      "Using AC Agarwal’s various APIs, you can check the following types of historical data: .",
    answer2: "", 
    answer3: "get_daily_price_series", 
    answer4: "get_time_price_series", 
    answer5: "Here is the link for fetching historical data in APIs.", 
    answer6: "", 
  },
  {
    question: "Can orders be modified using APIs?",
    answer: "Yes, AC Agarwal allows modifying orders using APIs.",
  },
  {
    question:
      "For how many days can I place an order using the access token or is there any validity for the access token?",
    answer:
      "AC Agarwal has created its API process to give as much flexibility to traders as possible. When it comes to the validity of the API access token, it entirely depends on you to choose the validity.",
  },
  {
    question:
      "How can I check if my orders have been successfully executed or not from the Response Details?",
    answer:
    "Once you have placed an order using APIs, you will get the success or failure response. In case of any error, it will also show the reason. In case you have any other queries about API order executions, feel free to contact AC Agarwal customer service, and we will be happy to help you!",
  },
  {
    question:
      "Can NRIs invest in IPOs and SME IPOs on AC Agarwal with the same process as others?",
    answer:
      "Yes, AC Agarwal has streamlined the API process to be available for everyone who opens a demat account. As NRI can open a demat account with AC Agarwal, they can utilise the APIs to automate trading and make informed trading decisions. However, it is important that NRIs adhere to all the rules mentioned in the Foreign Exchange Management Act, 1999. ",
  },
];
``;

const Api = () => {
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

export default Api;
