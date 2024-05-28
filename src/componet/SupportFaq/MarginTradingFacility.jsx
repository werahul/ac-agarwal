import React, { useState } from "react";
import { dropDownArr, openArr, openWhiteArr } from "../../assets/Images";

const faqs = [
  {
    id: 1,
    question:
      "What is Margin Trading Facility, and how can I trade with MTF on AC Agarwal?",
    answer: `A margin trading facility is a financial arrangement that allows traders and investors to borrow funds from a broker or an exchange to trade larger positions in the financial markets. Under the Margin Trading Facility, you can bring in a part of the funds, known as Margin, and can take leverage (borrow funds) from AC Agarwal based on the deposited margin.`,
    answer1: `For example, if you bring in Rs 1 lakh, you can take 3x leverage, allowing you to trade/invest equalling to Rs 3 lakhs.`,
    answer2: `Trading with MTF with AC Agarwal is quick and simple. Here's the stepwise process for activating and trading with a Margin Trading Facility (MTF) account with AC Agarwal:`,
    answer3: `Step 1: Begin by activating your MTF account with AC Agarwal. This typically involves a separate process or request to activate the MTF segment.`,
    answer4: `Step 2: Once your MTF account is successfully activated, you'll receive confirmation from AC Agarwal.`,
    answer5: `Step 3: Log in to your AC Agarwal Demat account.`,
    answer6: `Step 4: Choose the specific security you wish to trade or invest in.`,
    answer7: `Step 5: When placing your order, select MTF as the order type. This signifies that you're utilizing the Margin Trading Facility.`,
    answer8: `Step 6: Proceed to place your order, and the transaction will be executed as per the Margin Trading Facility guidelines.`,
  },
  {
    id: 2,
    question: "What Can be Used as Collateral for Margin Trading Facility?",
    answer: `SEBI has allowed stockbrokers such as AC Agarwal to use cash as well as non-cash holdings to provide leverage under the Margin Trading Facility. It means that you can deposit cash or pledge your non-cash holdings with AC Agarwal to borrow funds for trading.`,
    answer1: `Here are the non-cash components (assets) you can pledge for utilizing the Margin Trading Facility:`,
    answer2: `- Equity (Shares)`,
    answer3: `- Mutual Fund Units`,
    answer4: `- Bonds`,
    answer5: `- Gold ETFs`,
    answer6: `- Fixed Deposits`,
  },
  {
    id: 3,
    question: "How Long Can I Hold My Margin Funding Stocks?",
    answer: `Stocks bought using the Margin Trading Facility (Margin Funding) with AC Agarwal can be kept for an unlimited number of days, similar to stocks bought without MTF. However, it is vital that to keep the stocks as long as you want, you maintain the required margin in your margin trading account on a daily basis.`,
    answer1: `If you fail to maintain the margin in your margin trading account and if the MTM coverage falls below the minimum margin required depending upon the script , AC Agarwal will have to liquidate your holdings bought.`,
  },
  {
    id: 4,
    question:
      "What is the Interest Rate Charged on Margin Trading Facility by AC Agarwal?",
    answer: `AC Agarwal charges an interest of 0.0493% per day post-settlement on the funded amount under its Margin Trading Facility. For more information and any costing-related query, you can either visit the ‘Pricing’ section on AC Agarwal’s website or contact our customer care service. We will be happy to help you!`,
  },
  {
    id: 5,
    question:
      "How Does Pledging of Shares for MTF Work? What are the cut-off timings?",
    answer: `The pledging of shares on AC Agarwal for MTF work as per the exchange file and the limits provided for MTF from the second day. The cut-off timings are 4-9 PM.`,
    answer1: `SEBI has mandated that shares bought using the MFT facility must be Pledged in favor of the BROKER as Margin Funded A/c.  Once Trade Executed and Confirm the same at 4 pm, Broker Will process the Trade import to MTF Client A/c, Pledge request will be generated Auto and link will receive to Client from CDSL. Client has to process with OTP.`,
  },
  {
    id: 6,
    question: "What Happens If I do not pledge my MTF holdings?",
    answer: `It is mandatory to pledge the shares you buy using MTF in favor of AC Agarwal as per the guidelines of SEBI. However, if you fail to do so, AC Agarwal will convert your MTF holdings into normal holdings, and you will be required to deposit the balance amount into your margin trading account.`,
    answer1: `If you fail to deposit the balance amount, your holdings will be sold by AC Agarwal's operational team on the T+6 day.`,
  },
  {
    id: 7,
    question: "How to Exit Positions Bought Using Margin Trading Facility?",
    answer: `AC Agarwal has created its transaction process to be as simple as possible. If you want to exit the positions that you have bought using MTF, you simply have to place a sell order and select MTF as the order type. Under the process, you are not required to place a separate un-pledging request or enter any other information to square off margin funding holdings.`,
  },
  {
    id: 8,
    question:
      "What are the Charges for Pledging/Un-Pledging Stocks on AC Agarwal?",
    answer: `AC Agarwal charges Rs 35 + 18% GST for each pledge request and Rs 30 + 18% GST for each un-pledge request for stocks.`,
  },
  {
    id: 9,
    question:
      "Can I do a BTST (Buy Today, Sell Tomorrow) trade using MTF on AC Agarwal?",
    answer: `BTST, or "Buy Today, Sell Tomorrow," refers to a trading strategy in which an investor buys shares of a stock and then sells them the next trading day. This strategy is typically used in stock markets where the settlement cycle is usually T+2 or T+1, meaning that the shares bought today will be credited to the investor's account after two/one trading days. However, BTST trading allows investors to sell the shares before they are officially credited to their demat account, effectively bypassing the settlement period.`,
    answer1: `AC Agarwal allows you to effectively place a BTST, or "Buy Today, Sell Tomorrow," using its Margin Trading Facility.`,
  },
  {
    id: 10,
    question:
      "What are the benefits and risks associated with trading/investing through MTF?",
    answer: `Here are the benefits of trading/investing through MTF:`,
    answer1: `Benefits:`,
    answer2: `- Leverage: One of the primary benefits of using margin is the ability to leverage your investments.`,
    answer3: `- Diversification: Margin trading allows you to diversify your portfolio more effectively by trading multiple assets or securities simultaneously, even if you don't have sufficient capital to purchase each one.`,
    answer4: `- Flexible Trading Strategies: Margin trading supports a variety of trading strategies, such as day trading, swing trading, and arbitrage, that take advantage of short-term market movements.`,
    answer5: `Risks:`,
    answer6: `- Risk of Losses: While leverage can amplify gains, it can also significantly amplify losses. If the market moves against your position, you might lose more than your initial investment.`,
    answer7: `- Margin Calls: If your margin account's equity falls below a certain threshold, you might receive a margin call and be required to deposit additional funds to maintain your positions. Failure to meet margin calls could result in position liquidation or penalties.`,
    answer8: `- Interest Costs: Borrowing on margin comes with interest costs, which can impact your overall profitability. It's crucial to consider these costs when calculating potential returns.`,
  },
  {
    id: 11,
    question: "Under What Circumstances will RMS liquidate My MTF Holdings?",
    answer: `MTF holdings can be liquidated by Risk Management Systems (RMS) under the following circumstances:`,
    answer1: `- You have not pledged the MTF holdings with AC Agarwal within the cut-off time.`,
    answer2: `- You are not maintaining the required margins in your margin trading account.`,
    answer3: `- Your MTM coverage has fallen below 20%.`,
  },
  {
    id: 12,
    question: "How is MTM Coverage calculated?",
    answer: `The MTM value represents the current market value of your open positions. It's the value at which your positions would be liquidated if the market were to close at that moment. This value is calculated based on the current market prices of the assets you hold.`,
    answer1: `To calculate the required margin (MTM coverage), multiply the MTM value of your positions by the margin requirement percentage:`,
    answer2: `Required Margin = MTM Value × Margin Requirement Percentage`,
    answer3: `This calculation gives you the amount of funds or collateral that you need to have in your account to cover potential losses.`,
  },
  {
    id: 13,
    question:
      "Which Shares are Eligible for Margin Trading Facility on AC Agarwal?",
    answer: `The list of shares that are eligible for Margin Trading Facility changes on a regular basis as updated by the stock exchange. However, you can always view the eligible share from the list available on AC Agarwal. We update the list of eligible shares on a monthly basis.`,
  },
  {
    id: 14,
    question:
      "Can NRIs use the Margin Trading Facility on AC Agarwal with the same process as others?",
    answer: `No, unfortunately, NRIs are not eligible to use the Margin Trading Facility on AC Agarwal.`,
  },
];
const MarginTradingFacility = () => {
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

export default MarginTradingFacility;
