import React, { useState } from "react";
import { dropDownArr, openArr, openWhiteArr } from "../../assets/Images";

const faqs = [
  {
    question: "Where can I check my PNL report and financial ledger on AC Agarwal?",
    answer: "AC Agarwal has created its web portal and trading apps and tools to ensure you have all the necessary information available in a matter of clicks. You can check your PNL report and financial ledger by accessing the back office of AC Agarwal or client's back office 'Tradeweb' directly through website.",
    answer2: "Here is the link for the back office of AC Agarwal: [AC Agarwal Back Office](https://backoffice.acagarwal.com:8092/login.aspx?ReturnUrl=%2fdefault.aspx)"
  },
  {
    question: "How do I log-in to the back office and its overview on AC Agarwal?",
    answer: "Logging in to AC Agarwal’s back office is fairly simple. All you need is your Login ID and the Password. The Login ID is the same as your AC Agarwal Client Code. The password was sent to you when you opened the demat account with AC Agarwal. You can also click on Get Password if you have forgotten your password. Once you have logged in, you can view the overview and all the information about your trading activities."
  },
  {
    question: "How to check the buy price of the holding and positions on AC Agarwal?",
    answer: "You can check the buy price of all your holdings by logging into your demat account on the AC Agarwal website or any of trading apps and navigating to the ‘Holdings’ section.",
    answer2: "However, if you want to check the average buy/sell price for the derivative segment, you can log in to AC Agarwal’s back office and navigate to trade confirmation, contract note or the net positions section."
  },
  {
    question: "How can I download contract notes from AC Agarwal's back office?",
    answer: "Downloading contract notes from AC Agarwal is a simple and straightforward process that takes only a few minutes. To download the contract notes, follow the below process:",
    answer2: "Step 1: Navigate to the Login section, click on the Back Office tab, and select Client Login.",
    answer3: "Step 2: Click on 'Digital Documents' then click on second dropdown and select 'Combine Contract' and Choose the time period for which you want to view the contract note.",
    answer4: "Step 3: Click on View, and you can see the contract note. Click on the download tab, and it will start downloading the contract note."
  },
  {
    question: "Can you give a brief overview for back-office options like what is the ledger balance, less margin, and net balance?",
    answer: "You can enjoy numerous options when you log in to the AC Agarwal back office. Some of these are:",
    answer2: "Ledger Balance: A ledger balance in a demat account refers to the total amount of securities or financial instruments held in the account at a specific point in time, excluding the trade amount.",
    answer3: "Less Margin: The less margin is the total amount that you are using in your cash/derivatives positions.",
    answer4: "Net Balance: Net balance is the total amount left after subtracting the ledger balance and the less margin.",
    answer5: "Net Balance = (Ledger Balance - Less Margin)"
  },
  {
    question: "How to figure out how many shares are pledged of a particular scrip using AC Agarwal's back office?",
    answer: "AC Agarwal allows you to see how many shares are currently pledged of a particular scrip. You can log in to AC Agarwal’s back office using your Client ID and Password and navigate to the Demat Holdings section. The section allows you to see an overview of DP details such as pledge stocks, pledge value, and DP lock stocks.",
    answer2: "If you want to check your pledged margin, you can navigate to the Limit section and see Collaterals or MF Collaterals in your mobile or web app."
  },
  {
    question: "Where do you check ledger balance and the available limit?",
    answer: "You can check the ledger balance from AC Agarwal’s Back Office ledger. However, you can calculate the available limit by adding the above ledger balance and the pledge value (collateral value)."
  },
  {
    question: "How to update the buying price of transferred shares using AC Agarwal's back office?",
    answer: "If you have transferred shares from a different demat account to the AC Agarwal demat account, we cannot know the buy price at which you originally bought the transferred shares. However, AC Agarwal has created an easy system for you to update the buying price of the transferred shares so that you have transparency on the PNL and your current holdings.",
    answer2: "Client just needs to e-mail us the ISIN of the scrip, quantities, and the buying price of that scrip. AC Agarwal will update the same in your account manually within 2-3 working days.",
    answer3: "Your P&L will then be updated and calculated according to the details provided by you.",
    answer4: "You can share the details on Care@acagarwal.com."
  },
  {
    question: "How to do E-voting in CDSL through AC Agarwal's back office?",
    answer: "Unfortunately, AC Agarwal does not provide an e-voting facility to the demat account holders. You can e-vote by visiting the CDSL website."
  },
  {
    question: "Can NRIs use a similar process as others to use AC Agarwal's back office?",
    answer: "Yes, there is no difference in the usage of AC Agarwal’s back office for NRIs, and they can use the same process as others to use AC Agarwal’s back office."
  }
];


const BackOffice = () => {
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

export default BackOffice;
