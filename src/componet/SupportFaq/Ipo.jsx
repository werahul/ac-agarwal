import React, { useState } from "react";
import { dropDownArr, openArr, openWhiteArr } from "../../assets/Images";

const faqs = [
  {
    question:
      "What is an Initial Public Offering (IPO) and how can I apply for it through AC Agarwal?",
    answer:
      "An Initial Public Offering (IPO) is a process by which a private company offers its shares to the public for the first time, allowing individuals and institutional investors to purchase ownership in the company. The primary goal of an IPO is to raise capital for the company's growth and expansion.",
    answer2:
      "Before coming out with its IPO, a company must seek SEBI's approval by submitting its Draft Red Herring Prospectus (DRHP). SEBI reviews the DRHP and provides comments, suggestions, and clarifications to the issuer. After addressing any concerns and making necessary revisions, the issuer files the final prospectus with SEBI, which then approves.",
    answer3:
      "Once the company’s shares are listed on the stock exchange, it becomes a public company with shareholders as its owners. Investors can buy and sell these shares, and the stock price is determined by supply and demand in the market.",
    answer4:
      "When you open a demat account with AC Agarwal, you can easily apply to IPOs. All you have to do is log in to your demat accounts on the Bloom app or AC Agarwal's website and navigate to the IPO section. You will see all the live IPOs, which you can select and pay the required amount using the UPI ASBA. You will get a mandate on your UPI app, and approving it will block your funds for the IPO and complete the IPO application process.",
  },
  {
    question: "Are there any charges to apply for an IPO through AC Agarwal?",
    answer:
      "No, once you have opened a demat account with AC Agarwal, you can apply to as many IPOs as you want with an operational demat account free of cost. Applying to IPOs is an add-on facility provided by AC Agarwal to its demat account holders and attracts no cost.",
  },
  {
    question:
      "What is the process to withdraw/delete my IPO application after I have applied?",
    answer:
      "If you have applied for an IPO and you want to delete or withdraw it, you can do so easily, and your funds will be unblocked in the next 48 hours. Here is the process of deleting or withdrawing your IPO application:",
    answer2:
      "Log in to your AC Agarwal demat account or navigate to the IPO section.",
    answer3:
      "You will see your current IPO application/applications. Click on the application you want to delete or withdraw.",
    answer4:
      "Click on ‘Cancel/Delete/Withdraw Bid/Application and confirm the transaction.",
    answer5:
      "Revoke the UPI mandate received on your UPI app if required. Generally, the UPI mandate gets revoked automatically.",
    answer6:
      "If you have applied for the IPO through Netbanking’s ASBA, you will have to log in to your bank’s Net Banking and follow the same process. Here, the UPI mandate is not applicable.",
    answer7:
      "Note: You can only cancel or withdraw the IPO application before the issue closes. QIBs and NIIs cannot cancel their IPO applications once applied.",
  },
  {
    question: "Can I pre-apply for an IPO on AC Agarwal?",
    answer:
      "No, AC Agarwal does not allow you to pre-apply for an IPO. You can always apply to the IPO using AC Agarwal demat account once the IPO application opens.",
  },
  {
    question: "When can I start pre applying for upcoming IPOs?",
    answer:
      "Unfortunately, you can not pre-apply to IPOs through AC Agarwal. You can apply for IPOs only after their application window opens.",
  },
  {
    question:
      "How will I make payment for the IPO or will my funds get blocked for IPO?",
    answer:
      "SEBI has created an IPO payment process where the applicant’s funds are not immediately debited but blocked until the IPO process ends. If the applicant receives the allotment, the funds are debited from the bank account or are unblocked if there is no allotment. The applicant can not use the funds from the day of blocking to the day they get unblocked in case of no allotment.",
    answer2:
      "When you apply for the IPO using AC Agarwal's demat account, funds are blocked through a UPI mandate that you approve on the UPI app. Although you follow a similar process of paying through your UPI ID, the funds get blocked but are not immediately debited from your bank account.",
  },
  {
    question: "What is ASBA? How can I apply for an IPO using ASBA?",
    answer:
      'ASBA stands for "Application Supported by Blocked Amount." It is a mechanism introduced by the Securities and Exchange Board of India (SEBI) that simplifies applying for Initial Public Offerings (IPOs) and Rights Issues. ASBA allows investors to apply for shares in an IPO without making the full payment upfront. Instead, the application amount is blocked in the investor\'s bank account, and the funds are only debited if the investor is allotted shares in the IPO.',
    answer2: "Here is the process of applying to an IPO using ASBA:",
    answer3:
      "Log in to your bank’s net banking portal. The bank should be linked to your AC Agarwal demat account.",
    answer4: "Go to the ASBA section and navigate to the live IPOs.",
    answer5:
      "Select the IPO you want to apply to and enter bidding details like category, quantity, and amount.",
    answer6:
      "Allocate the funds by using your net banking details and submit the IPO application.",
    answer7:
      "You will receive a pop-up asking you to review the details. Review the details and approve the mandate.",
    answer8:
      "You will receive a text message and email from the bank with details of your successful IPO application and the blockage of funds.",
  },
  {
    question:
      "Can I cancel my IPO bid once the application process has closed?",
    answer:
      "No, you can not cancel your IPO bid once the application process has closed. You can cancel or withdraw the application only before the closing of the IPO application.",
  },
  {
    question: "How do I check the IPO allotment status on AC Agarwal?",
    answer:
      "The company coming out with an IPO sets the date of allotment of shares some days after the closing of the application. On the date of the allotment, you can check your IPO allotment status by visiting the website of the company’s IPO registrar or on the NSE’s website. You will have to enter your application and PAN number.",
    answer2:
      "On AC Agarwal, you can log in to your demat accounts and see your holdings. If you have gotten the allotment, the shares will start reflecting at 10 AM on the day of listing in your AC Agarwal demat account.",
  },
  {
    question:
      "Can I apply for an IPO in other categories apart from retail on AC Agarwal?",
    answer:
      "No, you can not apply for an IPO in other categories apart from retail on AC Agarwal. If you have applied in the retail category, you will not be able to place another bid in a different category.",
    answer2:
      "Retail investors are provided a reserved allocation of 35%, and some companies give a price discount to investors in the retail category. As a retail investor, you are allowed to invest a maximum of Rs 2 lakhs. While Resident Indians, HUF, NRIs, and Corporate bodies have to invest more than Rs 2 lakhs under the NII category. Hence, it is not possible to apply in other categories apart from retail on AC Agarwal.",
    answer3:
      "However, you can apply for an IPO in both the shareholder and retail categories with a single active IPO application.",
  },
  {
    question: "What is the IPO mandate? When will I receive it?",
    answer:
      "IPO mandate is a request put in by the investor to block funds for an IPO application. When investors apply for an IPO using an AC Agarwal demat account, they have to make the payment through UPI. However, there is no immediate debit in the bank account of the applicant, but the bank blocks the funds by sending a UPI IPO mandate on the UPI app. Once you approve the IPO mandate on your UPI app, the funds are blocked until the date of allotment. They are debited if you receive the shares or unblocked in case of no allotment.",
    answer2:
      "The National Payments Corporation of India (NPCI) sends the mandate request immediately after you submit the IPO application. However, it may take a few hours sometimes to receive the IPO mandate.",
  },
  {
    question:
      "When will I see the IPO shares reflect in my AC Agarwal demat account?",
    answer:
      "The company coming out with the IPO sets respective dates for events included in the IPO. One of the dates is called the allotment date. It is the date on which the shares are allotted to IPO applicants. If you have received allotment of the IPO shares, they are credited to your demat account. However, the shares start reflecting in your AC Agarwal demat account only on the day of listing. After the shares have been listed on the stock exchange at 10 AM on listing day, you can sell the credited shares or buy more.",
  },
  {
    question:
      "Why it is showing as payment pending even though I have approved the payment mandate?",
    answer:
      "The IPO application process does not work by immediately debiting funds from your bank account when you approve the net banking or UPI mandates. Instead, the application process blocks the funds in your bank account only to be debited if you get the share allotment. Hence, you may see that the UPI or net banking mandate shows payment pending. However, once you have received the email or text message for successful IPO application submission after you have approved the mandate, you do not have to worry about payment pending. The funds will be deducted or unlocked as per your IPO allotment status.",
  },
  {
    question:
      "What happens to my blocked amount if I do not receive the IPO shares?",
    answer:
      "When you apply for shares in an Initial Public Offering (IPO), and your application is successful, your bank or broker typically blocks a certain amount of funds in your bank account to cover the cost of the shares you've applied for.",
    answer2:
      "If you do not receive the IPO shares due to oversubscription or for any other reason, the blocked amount will be released back to your bank account. The specific timeline for releasing these funds may vary depending on the rules and procedures of the exchange and your broker. However, funds generally are credited to the bank account within 48 hours.",
  },
  {
    question: "Can I apply SME IPO on AC Agarwal?",
    answer:
      "An SME IPO (Small and Medium Enterprises Initial Public Offering) is a specific type of initial public offering designed for small and medium-sized enterprises (SMEs). However, for retail investors, the minimum investment in SME IPOs is above Rs 1,00,000.",
    answer2:
      "AC Agarwal allows its demat account holders to easily invest in SME IPOs. All you have to do is log in to your demat accounts, navigate to the IPO section, select the SME IPO you want to invest in, fill in the necessary bid details, and approve the mandate for blocking the funds.",
  },
  {
    question:
      "Can NRIs invest in IPOs and SME IPOs on AC Agarwal with the same process as others?",
    answer:
      "Yes, AC Agarwal allows NRIs with an operational NRI demat account to invest in IPOs and SME IPOs on AC Agarwal with the same process as others.",
  },
];

const Ipo = () => {
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

export default Ipo;
