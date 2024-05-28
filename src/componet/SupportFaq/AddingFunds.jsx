import React, { useState } from "react";
import { dropDownArr, openArr, openWhiteArr } from "../../assets/Images";

const faqs = [
  {
    question:
      "How can I add my bank account for transferring funds to my AC Agarwal demat account?",
    answer:
      "AC Agarwal has created an account opening system that comes with negligible hassle for the investors and traders when it comes to adding and withdrawing money to and from their demat accounts.",
    answer2:
      "Step 1: Begin by initiating the Demat account opening process with AC Agarwal.",
    answer3:
      "Step 2: During the account opening, you will be prompted to enter details about your bank account. Specifically, you'll need to provide the IFSC code of your bank.",
    answer4:
      "Step 3: Once you've entered the IFSC code, AC Agarwal's system will automatically retrieve your bank account details.",
    answer5:
      "Step 4: You will then be asked to enter your bank account number to proceed.    ",
    answer6:
      "Step 5: After you've entered your bank account number, the system will automatically link your bank account to your AC Agarwal Demat account.",
    answer7:
      "Step 6: With your bank account successfully linked, you can complete the Demat account opening process with AC Agarwal.    ",
    answer8:
      "Step 7: Once your Demat account is opened with AC Agarwal, you won't need to manually add your bank account again. The linkage remains intact, streamlining the process for future transactions and fund transfers",
  },
  {
    question:
      "How many banks account can I add to my AC Agarwal demat account? Is there a limit?",
    answer:
      "Yes, you can add multiple bank accounts to your AC Agarwal demat account. ",
    answer2:
      "Currently, the limit for adding bank accounts to AC Agarwal demat account is five. It means you can add one primary bank account and four secondary bank accounts to your demat account. The bank account details you enter while opening the demat account will be considered as the primary account, and you can add four other bank accounts later on.    ",
  },
  {
    question:
      "What is the maximum amount that I can add to my AC Agarwal demat Account in a single transfer?",
    answer:
      "The overall transfer limit for UPI transfers is 1L per day, but there may be additional restrictions per transaction on a bank-to-bank basis. ",
    answer2:
      "For example, the Bank of India allows 1 lakh per day but only 10,000 per transaction. The bank determines the maximum amount per transaction for IMPS/NEFT/RTGS transfers. For IMPS, the standard limit is Rs.2 lakh per transaction. However, you should check with your bank to ensure the precise amount.",
    answer3:
      "The maximum amount per transaction for trading portal gateway transfers is $1 billion. If you wish to transfer more than $1 million, you'll have to make repeated transfers.    ",
  },
  {
    question:
      "What is a primary bank account? Can I change the primary bank account on AC Agarwal? ",
    answer:
      "Primary or Default bank account refers to the designated bank account linked to an individual's demat account. A primary bank account is necessary for various transactions related to the demat account, such as receiving dividends, interest, and proceeds from the sale of securities. It serves as the main bank account through which financial transactions associated with the demat account are conducted. ",
    answer2: "AC Agarwal allows you to change your primary bank account at your convenience. However, you will have to add secondary bank accounts by raising a request by dropping a mail on Care@acagarwal.com through registered mail ID (mentioning your details and attaching a cancelled cheque of the new bank). However, this process will only let you add your bank accounts in your Trading account only. If you wish to make any other bank as your default/primary bank then offline process needs to be followed. To add your new bank as your default bank then a physical modification form is required along with a cancelled cheque. You can get the modification form calling or mailing customer care.",
    answer3: "Please send your modification form on the address given below.",
    answer4: "VADODARA OFFICE",
    answer5: "A C Agarwal Share Brokers Pvt. Ltd.",
    answer6: "406, Payal Complex, Near Vadodara Stock Exchange, Sarod, Sayajiganj, Vadodara, Gujarat - 390005. ",
    answer7: "All linked and verified accounts to the AC Agarwal demat account can be used to add  money but for withdrawl only primary (Default) bank will be used. However, all the dividends and SEBI payouts will be credited to the primary bank account. ",
  },
  {
    question: "Can I transfer funds from a bank account that is not linked to my AC Agarwal demat account?",
    answer: "No, SEBI has made it mandatory that all the bank accounts should be verified and linked with the demat account for the process of adding and withdrawing money. Hence, you can not transfer funds from a bank account that is not linked with your AC Agarwal demat account. You can add the bank account as a secondary bank account to your AC Agarwal demat account and then proceed with adding funds. ",
    answer2: "Remember that if you have transferred funds from an unlinked bank account to your AC Agarwal demat account, the funds will get auto-refunded to the source bank account within 5-7 business days. ",
  },
  {
    question: "Which bank accounts should I use to fund my account with AC Agarwal?",
    answer: "There are no restrictions and conditions for using bank accounts of a specific bank or financial institution. You can use any bank account to fund your AC Agarwal demat account. However, the bank account must be with a RBI registered and licensed bank and financial institution. Furthermore, it is compulsory to link the bank account to your AC Agarwal demat account after verification to add or withdraw funds from your AC Agarwal demat account. ",
    answer2: "You can add up to five accounts to your demat account and choose one of them to fund your account with AC Agarwal. ",
  },
  {
    question: "I added money to my AC Agarwal account, but the same is not reflecting yet. What should I do?",
    answer: "When you add the funds it usually takes 15-20 minutes for funds to reflect. It takes some time as the allocation is done by exchange first then it reflects in your Demat ledger and margin is provided. However, the if updation gets delayed and doesn't reflects within 20minutes due to any technical problem you can contact customer care to check.     ",
    answer2: "If you have transferred funds through UPI and the transaction fails, you need not worry. Your bank should reverse the funds within 2-3 bank working days. If you have transferred funds from an unlinked bank account to your AC Agarwal demat account, the funds will get auto-refunded to the source bank account within 5-7 business days. ",
    answer3: "If the problem still persists, please contact your bank and AC Agarwal’s customer care. We would be happy to help you and get you back to trading and investing as soon as possible.     Contact customer service at 0141-4920999/4049663 or Care@acagarwal.com",
  },
  {
    question: "How much time does it take for funds to be transferred from a bank account to AC Agarwal demat account?",
    answer: "Generally, the funds are transferred instantly from your bank account to your AC Agarwal demat account. The process is similar to paying online on a daily basis. However, sometimes, the process may take a few hours for the funds to reflect in your demat account. Upon successful debit, AC Agarwal gets an instant confirmation of the transfer of funds from the payment gateway. If the payment is successful, it reflects instantly into your demat account, which you can use to trade or invest. ",
    answer2: "In case the transfer of funds fails, the funds get auto-refunded to the source bank account within 5-7 business days. If you have any further queries, you can always contact us at our customer service portal. ",
  },
  {
    question: " Do I need to add funds separately for trading in Equity, F&O, and MCX/commodities?",
    answer: "AC Agarwal understands that trading and investing in various segments is time-sensitive to ensure you achieve the goals of your investment strategy. Hence, we have made the trading and investing process in such a way that you do not need to add funds separately for trading in Equity, F&O, and MCX/commodities.     ",
    answer2: "All you have to do is transfer the desired funds from your bank account to the AC Agarwal demat account, and you can use the funds to invest in any segment. However, it is required that you have chosen the relevant category while opening the demat account with AC Agarwal. ",
    answer3: "Furthermore, as per SEBI regulation, you can only use the premium received in options selling from the next trading day to trade or invest in a different segment. ",
  },
  {
    question: "What are the different modes of adding funds from my bank account to my AC Agarwal demat account?",
    answer: "Adding funds from your bank account to your demat account typically involves transferring money for purchasing securities, settling trades, and paying fees or charges. The modes available can vary based on the depository participant (DP), broker, and financial institution you're working with. Here are some common modes of adding funds to your demat account:",
    answer2: "- Online Bank Transfers or Net Banking ",
    answer3: "- NEFT (National Electronic Funds Transfer) and RTGS (Real-Time Gross Settlement)",
    answer4: "- UPI (Unified Payments Interface)",
    answer5: "- Cheque or Demand Draft",
    answer6: "- Mobile Banking Apps",
    answer7: "- Automated Payment Instructions",
  },
  {
    question: "Are there any charges for transferring money to my AC Agarwal demat account?",
    answer: "At AC Agarwal, we have always maintained that we want to offer our unique services to our traders and investors at the lowest possible cost. No charges are applicable when you transfer funds from your bank account to the AC Agarwal demat account. Whatever amount is debited from your bank account is reflected in your demat account, and you can use all of it to trade and invest in the stock market. ",
    answer2: "The zero transfer fee is applicable to every mode of money transfer, such as UPI/Netbanking/NEFT/IMPS/RTGS, or through any payment app. ",
  },
  {
    question: "What is withdrawable balance? Why are withdrawals only allowed to primary bank account?",
    answer: "A withdrawable balance refers to the amount of funds that you can transfer or withdraw from your demat account to your linked bank account. When you sell securities, receive dividends, or any other transaction that results in a credit to your demat account, the associated funds are often held as a cash balance within the demat account until you decide to withdraw or transfer them to your linked bank account. The amount you can withdraw is called withdrawable balance.    ",
    answer2: "SEBI has made it mandatory under its set guidelines for compliance, and it is AC Agarwal’s internal policy that the balance or the money you withdraw from your demat account is directly credited to your selected primary account. You can add five bank accounts in total and select one of them as your primary bank account to receive funds. ",
  },
  {
    question: "What is the process of withdrawing funds from my AC Agarwal demat account to my bank account? ",
    answer: "The process of withdrawing funds from your AC Agarwal demat account is simple and quick. You just have to log in to your demat account and navigate to the ‘Funds’ section. You will see a section to withdraw funds from your demat account with the withdrawable balance. You can click on the ‘Withdraw Funds’ button and enter the amount you want to withdraw and submit. ",
    answer2: "NOTE:- Make sure you raise a request before 3pm in order to receive the funds on the same day else it will be processed the next working day evening.",
    answer3: "Your withdrawal request will be credited to your bank account within 24 hours of being processed. On all trading days, except Saturdays and holidays, withdrawals are processed.     ",
  },
  {
    question: "What is the fund settlement policy of AC Agarwal? What happens to funds in my account if not used",
    answer: "SEBI has recently revised the fund settlement policy for all the stockbrokers in India with respect to the demat account holders’ funds lying with stockbrokers. As per SEBI, AC Agarwal or any other broker should settle running demat accounts of customers after considering the end-of-the-day obligation of funds as on the date of settlement across all the exchanges on the first Friday of the quarter. ",
    answer2: " There are 2 settlements :- 30 days and 90 days. If the account holder doesn't trade within 30 days, the free cash will be settled and sent back to account holder's bank. 90 days settlement is amndatory as per SEBI's law, free cash lying in holder's account will be sent back to holder's account. Clients will receive their funds on the first Friday of every month. If the first Friday is a trading holiday, AC Agarwal settles the funds on the previous trading day.",
  },
  {
    question: "Can I put in a request for instant withdrawal? Are there any charges?",
    answer: "AC Agarwal provides its Demat account holders with the convenience of requesting instant withdrawals from your choice of front-end applications, which include mobile, web, and desktope. Here's a straightforward guide:",
    answer2: "Log in to your Demat account. ",
    answer3: "Navigate to the Funds section.",
    answer4: 'Within the Funds section, find the "Withdraw Funds" option.',
    answer5: "Here, you will see the available amount for instant withdrawal.",
    answer6: "Click on the 'withdraw' button, specify the desired withdrawal amount, and confirm your request.",
    answer7: "Notably, making a request for instant withdrawal from your AC Agarwal Demat account is entirely free of charge. However, please be aware that you can only submit one request for instant withdrawal every 24 hours.",
    answer8: "Furthermore, it's essential to understand the withdrawal processing timeline. AC Agarwal processes payout requests for its account holders by the end of the same day if the request is raised before 3 PM. If a request is submitted after 3 PM, it will be processed on the next working day in the evening. This ensures efficient and timely handling of withdrawal requests.",
  },
  {
    question: "I am unable to withdraw the full amount from the available funds section. Is there any reason for this?",
    answer: "The only reason for you to be unable to withdraw the full amount from your AC Agarwal demat account is when you have unsettled dues in your demat account. For more clarity, you can navigate to the funds sections in your demat account and view the total margin available for trading, the withdrawable amount, and the unsettled dues.     ",
    answer2: "If you have settled your dues and the problem still persists, feel free to contact AC Agarwal at our customer service section, and we would be happy to provide you with an instant solution. ",
  },
  {
    question: "My fund balance is showing negative. What does it mean? What should I do?    ",
    answer: "There are a few reasons for your demat account to show you a negative fund balance. The reason can be any of the following: ",
    answer2: "Your trade position has incurred a loss and run into negative. In this case, you may have to deposit additional funds to your AC Agarwal demat account. ",
    answer3: "Your daily trading positions have been marked to market losses. ",
    answer4: "You have unsettled charges or dues, which may include DP charges, interest charges, brokerage, or any other type of charges. You can have better clarity about such charges in your financial ledger and contract notes.",
    answer5: "If your fund balance is showing negative, it is advisable that you immediately deposit additional funds to avoid system position square-off, penalties, or account blockage.",
  },
  {
    question: "Why haven't I received my money after submitting a withdrawal request 24 hours ago?",
    answer: "On Saturdays & Sundays (or public holidays), withdrawal requests take longer than 24 hours to process. Funds are credited within 24 hours on weekdays after equity withdrawal requests are processed at 8:30 p.m. (8 a.m. for commodities) on the day they are submitted. ",
    answer2: "Withdrawal requests are processed at 5 p.m. on Saturdays. Saturday payments may not appear on Trading portals; however, they will be updated and accessible for trading on Trading portals. By Monday EOD, these transfers will be reflected in your primary bank account.     ",
  },
  {
    question: "If I sell my shares or close my positions today, when will I be able to withdraw my funds?",
    answer: "Any equity-based trades, such as stock sales from Demat, BTST, or intraday, are settled on a T+1 basis. As a result, on T+1, the Money will be ready for withdrawal.",
    answer2: "Because all F&O transactions are settled on a T+1 basis, money will be available for withdrawal on a T+1 basis. After the corresponding settlement cycle, the proceeds from the sale will be available in your Withdrawal balance.",
  },
  {
    question: "I received funds in my bank account but I had not placed a fund withdrawal request. What should I do? ",
    answer: "If you have received funds in your primary bank account without placing a withdrawal request, it is because of the SEBI-mandated fund settlement policy. As per your monthly or quarterly opted fund settlement cycle, AC Agarwal transfers funds lying unused to the primary bank account mapped to your Trading account. ",
    answer2: "Hence, you will see such credit on a regular pre-defined basis, and there is no need to worry about receiving funds without placing a withdrawal request. ",
  },
  {
    question: "Can NRIs follow the same process as others to add and withdraw funds to and from their AC Agarwal demat account? ",
    answer: "Yes, once NRIs have an operational AC Agarwal demat account, they have the same trading app and trading platform. The process of withdrawing funds for NRIs is exactly similar to the process of withdrawing funds for any other category of investors and traders with an AC Agarwal demat account. ",
  },
];

const AddingFunds = () => {
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

export default AddingFunds;
