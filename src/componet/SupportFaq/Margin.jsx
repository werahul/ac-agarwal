import React, { useState } from "react";
import { dropDownArr, openArr, openWhiteArr } from "../../assets/Images";

const faqs = [
  {
    question:
      "What is Margin? How much margin does AC Agarwal provide to its demat account holders?",
    answer:
      "The margin is the amount or the collateral that a demat account holder has to put up or deposit with the stockbroker or a stock exchange to cover the risk arising out of buying a security. It is the amount or collateral that covers the risk for the broker or the exchange based on the transactions of the investor or trader. ",
    answer2:
      "Under margin, the stockbroker or the exchange requires the demat account holders to add money to their trading accounts. Afterward, based on the margin requirements for the security selected by the investor or trader as specified by the stock exchange or the stockbroker’s risk policy, the stockbroker blocks the added amount based on the orders placed.     ",
    answer3:
      "On AC Agarwal, you can avail margins only if trades are done through Margin Trading Facility. For rest all trades only 1x margin goes in delivery.",
  },
  {
    question:
      "What are the costs and interest charged by AC Agarwal for providing the leverage facility?",
    answer:
      "AC Agarwal does not have any specific charges for providing the MTF facility but only charges 0.49% per day interest on the total amount provided as leverage to the account holder. The repayment terms and tenure are communicated in real-time.",
  },
  {
    question:
      "How much leverage does AC Agarwal provide to its demat account holders for all segments?",
    answer:
      "Equity: 20% of the trade value based on the volatility of the stock(VaR+ELM+Adhoc margins of the exchange)",
    answer2: "Index F&O: 1X (100% of NRML margins(SPAN + Exposure))",
    answer3: "Stock F&O: 1X (100% of NRML margins(SPAN + Exposure))",
    answer4: "Currency Futures: 1X (100% of NRML margins(SPAN + Exposure))",
    answer5: "Commodity Futures: 1X (100% of NRML margins(SPAN + Exposure))",
    answer6:
      "You can check the NRML margins required on our margin calculator.",
    answer7: "lINK: https://margin.acagarwal.com:12002/ ",
  },
  {
    question:
      "Which financial products qualify for trading/investing using margin on AC Agarwal?",
    answer:
      "AC Agarwal provides a collateral margin for stocks approved by NSE. Collateral margin is the money or assets that an investor provides as collateral when trading on leverage. When an investor trades on leverage, they are borrowing funds from their brokerage to invest in securities.",
    answer2:
      "Here is the link for the eligible securities: https://www.nseindia.com/products-services/slbs-clearing-settlement-eligible-securities ",
  },
  {
    question: "What will happen if I do not maintain a sufficient margin?",
    answer:
      "It is highly important to maintain sufficient margin in your margin trading account as it is compulsory as per the stock exchange and under AC Agarwal’s risk policy. If you fail to do so, you will not be able to take any fresh trading positions until you deposit more funds to settle your required margin. ",
    answer2:
      "If you already have an open position that has fallen short of margin and requires more funds to be added, it can lead to what is known as a 'margin call.' A margin call is a demand from AC Agarwal, as mandated by SEBI, for you to deposit additional funds or assets into your account to bring your margin level back up to the required minimum. ",
    answer3:
      "If you fail to deposit the margin even after the margin call, it can lead to your positions being automatically squared off by AC Agarwal. ",
  },
  {
    question:
      "How do I check for margin requirements on every trade/order on AC Agarwal?",
    answer: "Threre are 2 ways to check margin requirement. ",
    answer2:
      "1) Through mobile/web trading app - While placing order there is an option to calculate margin",
    answer3:
      "2) Visit our margin calculator page on website and enter your positions to calculate margin requirement ",
    answer4: "Margin calculator link: https://margin.acagarwal.com:12002/ ",
  },
  {
    question:
      "Why is the higher-than-usual margin blocked for my F&O trades close to expiry?",
    answer:
      "The margin required to be deposited with AC Agarwal increases as the open F&O contracts reach close to the day of their expiry. Hence, the margin blocked is also higher than usual. Here are the conditions that can lead to the clocking of higher-than-usual margins: ",
    answer2:
      "If you have to open in-the-money options positions four days before expiry (prior week Friday to expiry day). ",
    answer3:
      "If you have any open F&O positions that need to be physically settled or any out-of-the-money short options contracts, do it one day before expiry (Wednesday and Thursday of expiry week).",
    answer4:
      "Physical settlement entails giving or receiving real delivery of the underlying stock. As a result, the needed margin rises in tandem with the contract value.",
  },
  {
    question: "What is Margin Penalty? When is it levied by AC Agarwal?",
    answer:
      "A 'margin penalty' refers to a fee or charge imposed by a brokerage or financial institution when an investor fails to maintain the required margin levels in their margin trading account. Margin penalties are levied when the value of the securities held in the margin account falls below the specified maintenance margin, leading to a margin call.",
    answer2:
      "AC Agarwal can levy margin penalties in the following situations: ",
    answer3:
      "If there is a change in the required margin from the stock exchange’s end and your margin amount is lower. ",
    answer4:
      "If there is a change in margin required based on your trading and your margin amount is lower. ",
    answer5:
      "If you have to open in-the-money options positions four days before expiry (prior week Friday to expiry day) and you fail to deposit the required higher margin. ",
    answer6:
      "If you have any open F&O positions that need to be physically settled or any out-of-the-money short options contracts nearing expiry and you fail to deposit the required higher margin. ",
    answer7:
      "Note: In case you incur a margin penalty from AC Agarwal, the due date/cut-off date for reporting margin is T+5 days. Once we get the penalty file from the exchange on the T+6 day, we post the entry on your ledger. Meanwhile, your account may see a provisional blockage. ",
  },
  {
    question: "How can I keep track of any possible margin shortfall and ensure that there is no penalty?",
    answer: "The best way to keep track of any potential margin shortfall is to regularly monitor the margin requirement and deposit money into your AC Agarwal trading account in case your current margin amount falls short. You can log in to your AC Agarwal Demat account and navigate to the margin requirement section to view the required margin and your current margin.",
    answer2: "Additionally, AC Agarwal informs its demat account holders about margin shortfalls through various channels and notifications such as app notifications, phone calls, email etc. It is essential to keep a close watch on the required margin throughout the trading day until the markets are closed",
  },
  {
    question: "What is a Margin Call? When and how will I receive it?",
    answer: "A margin call is a situation where the stockbroker demands that an investor deposit additional funds into their trading account to meet the minimum margin requirement. The margin requirement is the minimum amount of capital that must be maintained in a trading account when using leverage to trade financial instruments like stocks, commodities, or derivatives.",
    answer2: "A margin call occurs when the value of the assets in the investor's trading account falls below a certain level, often referred to as the maintenance margin or margin maintenance level. The broker sets this level as a way to mitigate the risk of potential losses. If the value of the investor's positions declines and the account equity (the value of the assets minus any borrowed money) falls below the maintenance margin level, the broker will issue a margin call.",
    answe3: "AC Agarwal sends margin statements daily and sends an email to the investor along with a Bloom app notification asking to add additional margin to the trading account. If the investor or trader fails to do so, it can lead to margin shortfall penalties. ",
  },
  {
    question: "How can I pledge my shares and mutual funds with AC Agarwal?",
    answer: " You can pledge your shares, Exchange Traded Funds (ETFs), and Mutual Funds in favour of AC Agarwal to get leverage under the collateral margin facility. AC Agarwal provides the collateral margin for any exchange approved collateral. The collaterals will attract haircust as decided by the exchange and if needed extra haircut will be charged by the broker. You can dowload the latest haircut file from the following link____________________________________________ . Furthermore, you can look at the pledge circular from the following pledge circular number................................................... ",
    answer2: "Log in to your demat account on AC Agarwal’s website or through your mobile app.",
    answer3: "Navigate to the ‘Pledge’ section, select the share or the mutual fund scheme you want to pledge, and click on ‘Pledge Now’. ",
    answer4: "Select the segment and quantity and tap on Pledge.",
    answer5: "Enter the OTP and verify. ",
    answer6: "Note: Pledging activity at ACA is done in batches , if you have requested to pledge your collateral upto 5:00 PM on the T-DAY then you will recive the margin agaisnt it on T+1 DAY if you have requested to pledge your collateral on T- DAY post 5:00 PM then you will recieve margins agaisnt your collateral on T+2 DAY. ",
  },
  {
    question: "How can I un-pledge my shares and mutual funds with AC Agarwal?",
    answer: "To un-pledge your pledged shares or mutual funds, you must raise an un-pledging ticket by logging into your back office through the Bloom app or the AC Agarwal’s website. Furthermore, contact our customer service or email us at customercare@acagarwal.com by EOD to know the status. Ensure you provide the following details: scrip name and quantity for un-pledging.",
  },
  {
    question: "How can I avail myself of hedge margin? Will I get Hedge margin benefit only for overnight position trades?",
    answer: "Hedge margin, in trading, refers to the amount of money or collateral required by a broker or exchange to maintain an open locked position. Hedging involves taking offsetting positions in different assets or markets to reduce risk. This strategy helps protect against potential losses in one position with gains in another.",
    answer2: "As of June 1, 2020, NSE has significantly reduced the margin requirements for several hedged options strategies with the least risk potential, reducing them to nearly 70% of the previously required amount.",
    answer3: "To benefit from hedge margin, you can log in to your Demat account, purchase both offsetting positions, and implement your hedging strategy. It's crucial to place these orders as margin orders to avail of the hedge margin benefit. For more information about hedge margin, feel free to reach out to AC Agarwal's customer service.",
    answer4: "AC Agarwal offers hedge margin benefits for both overnight position trades and intraday trade positions, providing traders with valuable risk management tools.",
  },
  {
    question: "What is the difference between Haircut and VAR margin?",
    answer: "Here is the difference between Haircut and VAR margin: ",
    answer2: "Haircut: A haircut is a percentage reduction applied to the market value of an asset when determining its collateral value for margin purposes. The purpose of a haircut is to provide a buffer against potential losses that might occur if the value of the asset drops suddenly. A haircut is meant to protect the interest of the stockbrokers, who may incur losses on the collateral amount provided to the traders if the asset’s value falls. ",
    answer3: "Value At Risk (VAR) Margin: VAR margin is the amount of margin required to cover potential losses based on the calculated VAR of a portfolio or position. It's a way of determining the margin requirement by considering the historical volatility and potential market movements of the assets in the portfolio. VAR margins are covered for a single day for liquid securities and three days for illiquid securities.",
  },
  {
    question: "Can I pledge my shares without DDPI to get the collateral margin?",
    answer: "No, you cannot pledge your shares without DDPI to get the collateral margin. The ratio of cash margin and collateral margin should be 50:50. ",
    answer2: "DDPI is a document that allows a broker to debit the securities from the client's demat account and deliver them to the exchange. The client does not have to enter the CDSL T-PIN and OTP to sell shares once the DDPI is submitted.",
  },
  {
    question: "Is the process of utilising margin same for NRIs as others on AC Agarwal?",
    answer: "For NRIs who wish to trade in the Indian stock market, AC Agarwal offers similar services and facilities as it does for other categories of demat account holders. They can utilize margin and trade effectively in most segments.",
    answer2: "However, it's important to note that if NRIs want to engage in trading in the Futures and Options (F&O) segment, the process differs from other categories of demat account holders. In this case, NRIs are typically required to pledge their securities in favor of the clearing member with a CP code.",
  },
  {
    question: "What is the haircut for Gsec when used as a collateral ",
    answer: "Presently, the minimum haircut for all types of G-secs when used as collateral is 10 percent.",
  },
  {
    question: "Can I use FD as a collateral",
    answer: "Certainly, AC Agarwal does provide the option to use Fixed Deposits (FD) as collateral for margin requirements. However, it's essential to be aware that there are terms and conditions associated with this. For detailed information on the terms and conditions regarding the use of FD as collateral, please refer to the provided link: Terms and Conditions.",
    answer2: "The provided limits on FDs are created in favour of AC Agarwal Share Brokers.",
  },
  {
    question: "what is the haircut for stocks and cash equivalants at AC Agarwal ?",
    answer: "The haircut for stocks and cash equivalents at AC Agarwal is ascertained as per the Exchange File. You can view the exchange file from the below link:",
  },
  {
    question: "Is it mandatory to keep 50% margin as cash/cash equivalanet ? what are the charges levied if a client fails to mainatin 50% margin as cahs/cash equivalant ",
    answer: "Yes, as mentioned above, it is mandatory to keep a 50% margin as cash/cash equivalent. If the client fails to maintain the required margin in cash/cash equivalant AC Agarwal will fulfil the required margins and charge 9%PA on the shortfall amount. The charges will be same in case of intraday of carry forward trade. ",
  },
];

const Margin = () => {
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

export default Margin;
