import React, { useState } from "react";
import { dropDownArr, openArr, openWhiteArr } from "../../assets/Images";

const faqs = [
  {
    question:
      "How can I trade/invest in equities using the AC Agarwal demat account? ",
    answer:
      "AC Agarwal has developed a versatile trading platform accessible through mobile, web, and desktop, allowing you to trade seamlessly in real-time while on the go.",
    answer2:
      "To begin your equity trading journey, the first step is to open a Demat and trading account with AC Agarwal. Rest assured, the account opening process is straightforward, and you can find comprehensive guidance in our 'Account Opening on AC Agarwal' FAQ section.",
    answer3:
      "Once your Demat and trading accounts with AC Agarwal are up and running, the process is smooth. Simply log in to your account, transfer funds from your linked bank account, and you're all set to place orders for buying stocks.",
    answer4:
      "The process of purchasing stocks is akin to making online purchases. Enter the name of the stock you wish to buy, specify the quantity, and place your order. The necessary funds will be automatically debited from the funds transferred to your trading account from your bank. Following the purchase, the stocks will reflect in your Demat account within the settlement cycle, which is now streamlined under the T+1 framework.",
  },
  {
    question:
      "How can I trade/invest in commodities using the AC Agarwal demat account?",
    answer:
      "Commodity trading encompasses the exchange of physical commodities, including agricultural products (e.g., wheat, corn), energy resources (e.g., oil, natural gas), metals (e.g., gold, silver), and other raw materials. These commodities are actively traded on various global markets, including both spot markets (for immediate delivery) and futures markets (for delivery at a specified future date).",
    answer2:
      "To commence commodity trading with AC Agarwal, the initial step is to open a Demat account, a swift and uncomplicated process. Once your Demat account is successfully established and functional, you can engage in commodity trading and investment, much like you would with equities. You have the option to leverage several commodity exchanges for these transactions, which include:",
    answer3:
      "Multi Commodity Exchange – MCX,     National Stock Exchange – NSE",
    answer4:
      "Just as with shares, commodity prices are subject to real-time fluctuations driven by supply and demand. Within your AC Agarwal Demat account, you can log in, search for the commodities you intend to trade or invest in, and place your orders while specifying the quantity. However, to engage in commodity trading or investment with AC Agarwal, it's essential to select commodities as a category when opening your Demat account.",
  },
  {
    question: "How can I trade/invest in derivatives (F&O) using the AC Agarwal demat account?",
    answer: 'F&O trading stands for "Futures and Options" trading. It is a type of financial trading involving buying and selling derivative contracts known as futures and options contracts. These contracts derive their value from an underlying asset, such as stocks, indices, commodities, currencies, or interest rates.',
    answer2: "Like other asset classes, F&Os are listed and traded on the Indian stock exchanges. To start F&O trading, you will need to open a demat and trading account with AC Agarwal and choose F&O as the desired category before completing the account opening process. Once you have opened the demat and trading account, you can transfer funds from your bank account to your trading account and start F&O trading.  It is always advisable that you do prior research on futures and options to ensure effective trading.",
  },
  {
    question: "How can I trade/invest in currencies using the AC Agarwal demat account?",
    answer: "Currency trading involves the buying and selling of different currencies in the foreign exchange market. The primary objective of currency trading is to profit from the fluctuations in exchange rates between various currency pairs. In India, the National Stock Exchange (NSE) and the Bombay Stock Exchange (BSE) offer currency futures and options that traders and investors can buy and sell to execute currency trading.     ",
    answer2: "To start currency trading, you will need to open a demat account with AC Agarwal and select the Currency category before completing the account opening process. Once your account is opened and operational, you can log in to your demat account on AC Agarwal’s website or the Bloom app, transfer the required funds, and buy currency pairs to start trading. ",
  },
  {
    question: "Can I invest/trade in penny stocks? What is AC Agarwal’s policy regarding penny stocks?",
    answer: "Penny stocks are typically low-priced stocks of small companies that trade at a relatively low market price, often well below Rs 50 per share. These stocks are comparatively high-risk and more volatile than larger, more established companies. Although these stocks are more volatile and risky, they can offer high returns to investors if the investment is made after extensive research.",
    answer2: "AC Agarwal's Demat account allows its holders to trade and invest in penny stocks similar to any other type of investment. When you are an AC Agarwal Demat account holder, there are no restrictions to investing in any type of stock, irrespective of their price. However, considering their lack of liquidity and easier exposure to price manipulation, AC Agarwal has created a policy of providing no leverage on penny stocks. This is done to protect its Demat account holders financially.",
    answer3: "Additionally, it's important to note that there might be some restrictions imposed by the exchange in the form of Additional Surveillance Measure (ASM) or Graded Surveillance Measure (GSM) or additional margin levies. These measures can affect the trading of certain penny stocks and may require investors to meet specific margin requirements or face trading restrictions as per exchange regulations.",
  },
  {
    question: "What are your square-off timings? In case of loss, what is your square-off percentage? ",
    answer: "Here are the segment-wise square-off timings: ",
    answer2: "NSE CASH - 3:20 PM ",
    answer3: "NSE NFO - 3:25 PM",
    answer4: "NSE CDS 4:45 PM ",
    answer5: "NSE CDS cross-currency - 4:45 PM ",
    answer6: "MCX (MAR TO NOV) - 11:15 PM ",
    answer7: "MCX (DEC TO FEB) - 11:40 PM",
    answer8: "If MTM losses exceed 80% of the funds in AC Agarwal’s demat account, the position may be squared off. ",
  },
  {
    question: "Why is DDPI required? Can I sell shares without a physical DDPI?",
    answer: "Demat Debit and Pledge Instruction (DDPI) is a document that legally permits the stockbroker to debit the selected securities from the demat account holder’s account and deliver them to respective stock exchanges. The DDPI facility allows the demat account holders to avoid entering the CDSL T-PIN and the OTP to sell securities. Hence, it is important to opt for the DDPI facility for seamless trading and investing using the AC Agarwal demat account. ",
    answer2: "Yes, you can sell shares without a physical DDPI, as you can electronically sign the DDPI form and submit it to AC Agarwal. Furthermore, you can use the e-DIS facility to sell shares. You can read more about the e-DIS facility from our ‘e-DIS Facility on AC Agarwal’ section. ",
  },
  {
    question: "What is call-up trading? Can I buy or sell shares by calling up AC Agarwal?",
    answer: "Callup trading is a unique feature provided by AC Agarwal to its investors and traders, where they can call AC Agarwal’s investment experts to buy or sell securities on their behalf. The call-up trading facility is beneficial when investors and traders do not have the bandwidth to access their demat accounts but want to place an order. However, it is important that you have submitted the signed DDPI form for executing call-up trade as the form is compulsory to permit AC Agarwal to buy or sell on its demat account holders’ behalf. ",
    answer2: "Please find below the deadline desk number on which you can call for call-up trading: 0141-4920999",
  },
  {
    question: "What are ASM and GSM? Can I trade in both ASM and GSM category shares?",
    answer: "Here are the definitions of ASM and GSM: ",
    answer2: "ASM (Additional Surveillance Measure): ASM is a surveillance measure implemented by SEBI to keep a closer watch on securities deemed at higher risk of price manipulation or excessive speculation. Under ASM, stocks that meet certain criteria (such as high volatility or abnormal price movements) are identified and subjected to additional regulatory scrutiny. In such stocks, the margin is banned at 100% of the traded value, i.e., there will be no intraday leverage (MIS/BO/CO is not allowed), and the shareholders can not pledge the stocks for leverage. ",
    answer3: "For AC Agarwal demat account holders, if a stock you have pledged is moved under ASM, you will no longer be offered collateral margins for that stock, as ASM requires a 100 percent margin. The collateral value obtained against that stock will be deducted from the collateral value (visible on the trading terminals). Until the stock is moved out of ASM, you can either un-pledge it or retain it pledged without collateral.",
    answer4: "GSM (Graded Surveillance Measure): Similar to ASM, GSM is another surveillance measure implemented by SEBI for investor protection. Under GSM, securities are categorised into various levels based on their risk factors. The categorisation determines the extent of surveillance and regulatory actions that will be applied to those securities",
    answer5: "Stage II requires a 50 percent Additional Surveillance Deposit (ASD) of the trade value, which is reflected in your ledger. Stocks in GSM stage 2 or higher will not be available for purchase. Additional Surveillance Deposit (ASD) of 100% of the trading value or more is required for these stocks. Even after you sell the stock, the exchange will keep the ASD margin restricted for at least 3 months. As part of AC Agarwal’s RMS policy, the limits apply only to new purchases. You can sell your GSM stage 2 and higher stock if it is in your account.",
  },
  {
    question: "What will happen if I don't square off my Option contract on expiry day?",
    answer: "If the options contract is in the money, it will be physically settled. The following is the implication for contracts where physical settlement is not predicated on delivery: ",
    answer2: "If you've purchased options:",
    answer3: "STT will be levied on executed contracts at a rate of 0.125 percent of intrinsic value (how much in-the-money the option is) rather than the whole contract value.",
    answer4: "OTM option contracts will expire worthless if they are out of the money. You will forfeit your whole premium payment.",
    answer5: "If you have any selections that have been shortened:",
    answer6: "STT is only paid on the sell-side for options, which implies you would have paid it when you started the short. As a result, the STT will not affect expiry. You keep the premiums you receive, depending on the moneyness of the option contract.",
  },
  {
    question: "What are the exchange and auto-square-off timings for all the segments?",
    answer: "Here are the exchange or market timings: ",
    answer2: "Equity: ",
    answer3: "9 a.m. to 9.15 a.m. – Pre-market trading",
    answer4: "9.15 a.m. to 3.30 p.m. – Regular trading",
    answer5: "3.40 p.m. to 4 p.m. — After-market ",
    answer6: "At 10:00 a.m., all new IPOs are listed on the exchange. From 9:00 a.m. to 10:00 a.m., there is a pre-open session.",
    answer7: "Currency: ",
    answer9: "9 a.m. to 5 p.m. — Regular trading and cross-currency transactions",
    answer10: "Commodity: ",
    answer11: "Non-Agri Commodities with International Reference - 9 a.m. to 11.30 p.m. – during daylight savings time – March to November (9 a.m. to 11.55 p.m. – November to March).",
    answer12: "09.00 AM to 09.00 PM - Internationally Referenceable Agri Commodities (Cotton, CPO, & KAPAS).",
    answer13: "09.00 AM to 05.00 PM - All Other Agri Commodities. ",
    answer14: "",
    answer15: "Here are the auto-square off timings for open intraday positions: ",
    answer16: "Equity/Cash 3:20 PM ",
    answer17: "Equity Derivatives 3:25 PM ",
    answer18: "Currency Derivatives 4:45 PM ",
    answer19: "Commodities 25 Minutes Before Closing    ",
    answer20: "Note: The client is responsible for squaring off the position.   ",
  },
  {
    question: "What is the process of delivery and intraday trading on AC Agarwal?",
    answer: "In delivery trading, you buy shares of a company and become the part owner, equalling the share percentage of your total purchased stocks. Here, you hold the shares for a longer duration, typically beyond the trading day. However, intraday trading is a trading process where you buy and sell shares within the same trading day. Here, you don't aim to become a shareholder. Instead, you're trying to benefit from price fluctuations within the day.",
    answer2: "While the process for both delivery and intraday trading is similar, the key difference lies in the choice of order type. Once you have an operational Demat account with AC Agarwal, you can log in through your choice of front-end applications, which include mobile, web, and desktop. After logging in, you can search for the stock you wish to purchase for delivery or intraday trading and specify the number of shares you want to buy. When placing the order, you will be prompted to choose the order type, either delivery or intraday, and proceed with the order.",
    answer3: "Note: You can keep the stocks bought with a delivery order for as long as you want. However, stocks bought with an intraday order must be sold before the closing of the stock market on the same day, or they will get auto-squared off at 3:15 PM. ",
  },
  {
    question: "How can I convert a trade from Delivery to Intraday or vice versa?",
    answer: "AC Agarwal allows its demat account holder to convert a trade from delivery to intraday or from intraday to delivery in a matter of clicks. Here are the steps to convert the trades: ",
    answer2: "Step 1: Log in to your demat account through your choice of front-end applications, which include mobile, web, and desktop",
    answer3: "Step 2: Navigate to the dashboard, and your order book and click on the stock you have bought either as a delivery trade or intraday. ",
    answer4: "Step 3: Once you have clicked on the stock, you will see an option to convert to delivery or intraday. ",
    answer5: "Step 4: Click on the option and change the order type to delivery or intraday and click Submit. The order will change, and the respective rules, such as auto square-off or settlement cycle, will apply.",
  },
  {
    question: "Can I place an After-Market-Order (AMO)? What are the timings for various asset classes to place AMO?",
    answer: "After-Market Orders (AMOs) are a type of order placement in the stock market that allows traders to place buy or sell orders for securities after regular trading hours. After-market orders extend trading beyond these hours, providing investors with additional flexibility. AMOs can be placed after regular trading hours, which typically occur between 9:15 AM and 3:30 PM (local time) in India for the National Stock Exchange (NSE). ",
    answer2: "AMOs can be placed, modified, or cancelled only between these times:",
    answer3: "NSE and BSE Equity: 4:01 PM to 11:30 PM",
    answer4: "Currency: 5:02 PM to 11:30 PM ",
    answer5: "F&O: 4:01 PM to 11:30 PM",
  },
  {
    question: "What is a Bracket Order? How does one place a Bracket Order on AC Agarwal?",
    answer: "A Bracket Order is a type of advanced trading order that combines multiple orders into a single package. It is designed to help traders manage their risk and potential profit in a more systematic way. ",
    answer2: "The order starts with a main or entry order, the initial order to buy or sell a security at a specified price. This could be a market order or a limit order. Once the main order is executed, two additional orders are automatically placed – a target order and a stop-loss order. ",
    answer3: "For example, if you want to buy a stock at Rs 200, with a stop loss of Rs 190, and want to book a profit at Rs 210, you can place a buy order at Rs 200 with a stop loss spread of Rs 10 and book profit at Rs 210. ",
    answer4: "Here are the steps to place a Bracket order on AC Agarwal: ",
    answer5: "Log in to your AC Agarwal demat account either on the website or the Bloom app, and select the security you want to trade and select it.",
    answer6: "Select Bracket Order as the product type, specify the number of units you want to buy, and Set the entry price at which you want the main order to be executed.",
    answer7: "Specify the target price at which you want to take your profit along with the stop-loss price at which you want to limit potential losses.",
    answer8: "Once you're satisfied with the order details, submit the Bracket Order.",
  },
  {
    question: "What is a Slicing Order? How does one place a Slicing Order on AC Agarwal?",
    answer: "A slicing order is an order type that allows traders to slice their bulk orders into multiple small orders called child orders. You can place slicing orders in Cash(NSE & BSE) and Futures(NSE). ",
    answer2: "For example, if you are placing an order in ‘BANKNIFTY,’ the minimum quantity restriction from exchange is 1200. If you are placing an order for 4000 quantities, you can use slicing orders for various lots to slice your orders into smaller orders. Here, the order can be sliced into four: 1200, 1200, 1200, and 400, and you can execute each of the orders gradually. ",
    answer3: "Here are the steps to place a Slicing order on AC Agarwal: ",
    answer4: "Log in to your AC Agarwal demat account either on the website or the Bloom app, and select the security you want to trade and select it. ",
    answer5: "Select Slicing Order as the product type, specify the number of units you want to buy, and Set the limit price at which you want the main order to be executed.",
    answer6: "Once you're satisfied with the order details, submit the Slicing Order. The moment you select the slicing order type, the order form will get expanded, and you can define the rest of the required units. ",
  },
  {
    question: "What are Basket Orders? How does one place Basket Orders on AC Agarwal?",
    answer: "Basket orders, also known as basket trades or portfolio trades, are a type of trading order that involves the simultaneous execution of multiple buy or sell orders for a group of securities. Instead of placing individual orders for each security, a basket order allows traders and investors to trade a collection of securities in a single transaction.",
    answer2: "Here are the steps to place a Slicing order on AC Agarwal: ",
    answer3: "Log in to your AC Agarwal demat account either on the website or the Bloom app, and select baskets from the product type. ",
    answer4: "Select the securities you want to include in your basket. You can select various securities, such as Stocks, ETFs, Futures, and Options in a single basket. ",
    answer5: "Once added, you will see the margin requirements for the overall basket as well as the individual securities. You have to maintain the margin requirements in your trading account. ",
    answer6: "Once you have created the basket, you can execute the trade as per your convenience, and a single order will execute trades for all the securities added to the basket. ",
  },
  {
    question: "What are Bulk Orders? How does one place Bulk Orders on AC Agarwal?",
    answer: "Bulk orders, also known as block trades or large trades, refer to trading orders that involve a substantial quantity of shares or contracts of a security. These orders are significantly larger than typical retail trades and are often executed by institutional investors, such as mutual funds, pension funds, hedge funds, and other large financial entities.",
    answer2: "Here is how you can place a bulk order on AC Agarwal:     ",
    answer3: "Log in to your AC Agarwal demat account either on the website or the Bloom app, and select bulk from the product type. ",
    answer4: "Select the securities you want to include in your bulk order. You can select various securities, such as Stocks, ETFs, Futures, and Options for executing the bulk order.",
    answer5: "Maintain the margin requirements in your trading account required for the securities added in the bulk order. ",
    answer6: "Before placing the bulk order, you will see a window that will showcase your bulk order being split into multiple orders. ",
    answer7: "After reviewing the order details, you can place the bulk order, and it will be executed in a single click",
  },
  {
    question: "What are Margin Orders? How can I place Margin Orders on AC Agarwal?",
    answer: "Margin orders allow investors and traders to buy securities by borrowing funds from the stockbroker. In such an order, you can borrow funds from the broker to increase your purchasing power. The amount you can borrow is determined by the initial margin requirement set by the broker and regulated by financial authorities. ",
    answer2: "For example, if the stockbroker provides 2x margin, and you have put up Rs 50,000 as the initial margin, you can borrow another Rs 50,000 from the broker and buy securities equalling Rs 1 lakh. However, borrowing funds from a broker incurs interest charges.",
    answer3: "Here is how you can place a margin order on AC Agarwal: ",
    answer4: "Log in to your AC Agarwal demat account either on the website or the Bloom app, and select margin from the product type. ",
    answer5: "Enter the number of units (shares, contracts, etc.) you want to trade and select your margin account as the trading account for the order. ",
    answer6: "Once you have entered all the relevant details, click submit, and your margin order will be executed. ",
    answer7: "However, it is important to manage your margin requirements in such an order. You'll need to maintain a certain level of equity in your account to avoid margin calls.",
    answer8: "It's also essential to consider the square-off time, which signifies the deadline for closing or settling your margin position to avoid potential penalties or automatic square-offs by your broker. The square-off time is 3:20 PM. ",
  },
  {
    question: "What is a Delivery Order? How can I place a Delivery Order on AC Agarwal?",
    answer: "Delivery orders are stock market orders that allow investors to hold the bought securities for a longer time than intraday, where traders have to sell the bought securities within the same day. Once you buy securities under the delivery orders, you can not sell them on the same day as they get credited at least after the T+1 settlement cycle. Delivery orders are the most common orders placed by investors. ",
    answer2: "Once you have an operational demat account with AC Agarwal, you can log in to your demat account on your Bloom app or the AC Agarwal website. Once you have logged in, search for the stock you want to buy and enter the number of shares. When placing the order, choose delivery as the order type and click on place order. Your order will be executed, and you will receive the shares in your AC Agarwal demat account after the applicable trade settlement cycle. ",
  },
  {
    question: "What is a SIP Order? How can I place a SIP Order on AC Agarwal?",
    answer: "A SIP order is an order type that involves investing a fixed amount of money at regular intervals, typically monthly or quarterly, into a chosen investment fund or stocks. A SIP order ensures that the investors and traders do not have to shell out large amounts at one go to buy stocks or invest in mutual funds but can do so over time by investing a predefined amount at regular intervals. ",
    answer2: "At AC Agarwal, you can invest in stocks or mutual funds using a SIP order. You have to log in to your AC Agarwal demat account either on the website or the Bloom app and search for any stock or a mutual fund scheme you want to invest in using SIP. You will see an option to start SIP, which you can select and choose a payment frequency between weekly or monthly, along with the number of shares (if equity SIP) or the amount you want to invest at selected intervals. Once you have entered all the relevant details, you can start the SIP. ",
  },
  {
    question: "Can NRIs trade and invest in various asset classes and place special orders on AC Agarwal?",
    answer: "Yes, as AC Agarwal allows NRIs to open a demat and trading account, they have access to all the features and special orders similar to other categories of investors. There may be some limits and restrictions as mandated by SEBI, which you can learn more about by contacting AC Agarwal’s customer care.  ",
  },
];

const TradingAndInvesting = () => {
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

export default TradingAndInvesting;
