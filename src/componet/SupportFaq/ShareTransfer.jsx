import React, { useState } from "react";
import { dropDownArr, openArr, openWhiteArr } from "../../assets/Images";

const faqs = [
  {
    id: 1,
    question:
      "What is re-materialization? What is the process of re-materialization of shares on AC Agarwal?",
    answer: `Re-materialization of shares refers to the process of converting electronic or dematerialized shares back into physical paper certificates. Re-materialization is the reversal of the dematerialization process, which originally converted physical shares into electronic form.`,
    answer1: `AC Agarwal allows its demat account holders to re-materialize their held shares with ease. Here is the process of re-materialization of shares on AC Agarwal:`,
    answer2: `Step 1: Shareholders who wish to re-materialize their shares must fill out a re-materialization request form that AC Agarwal will provide.`,
    answer3: `Step 2: Enter all the details mentioned in the re-materialization request form, such as shareholder's name, folio number, number of shares to be re-materialized, and other relevant information.`,
    answer4: `Step 3: Once you have submitted the re-materialization request form to AC Agarwal, we will block your mentioned holdings, release a request to CDSL, and send the form to the Issuer/ R&T agent.`,
    answer5: `Step 4: The Issuer/ R&T agent will send you the share certificates and send a confirmation request to CDSL which will result in the debit of the blocked funds in your AC Agarwal demat account.`,
  },
  {
    id: 2,
    question:
      "What is the process of transferring shares from another demat account to AC Agarwal demat account?",
    answer: `You can transfer shares held in one operational demat account to another as SEBI allows share transfer. If you have a demat account with another stockbroker and you have opened a demat account with AC Agarwal, you can easily transfer your shares from that demat account to AC Agarwal’s demat account.`,
    answer1: `Here is the process of transferring shares from another demat account to AC Agarwal’s demat account:`,
    answer2: `**Online Process:** You can start the share transfer online by registering on the CDSL’s website and by using CDSL’s ‘Easiest Facility’.`,
    answer3: `Once you have registered on the facility and filled in all the required details, take a printout of the form and submit it to AC Agarwal.`,
    answer4: `AC Agarwal will send the form to the central depository, which will verify all the details.`,
    answer5: `Once the depository and AC Agarwal verify your details, you will receive login credentials through email. You can now log in and see your broker list and transfer shares from your previous demat account to the AC Agarwal demat account.`,
    answer6: `**Offline Method:** You need to get a Delivery Instruction Slip (DIS) from your current broker. Fill in the details such as beneficiary broker ID, ISIN, and mode of transfer.`,
    answer7: `Sign the DIS form and submit it to the current broker, and you will receive an acknowledgment slip.`,
    answer8: `Once the current broker has processed the DIS form, you will receive a CDSL link.`,
    answer9: `After opening the link, enter your PAN Card details and complete the OTP process.`,
    answer10: `Once you have paid the share transfer charges and post verification, you will receive the shares in your AC Agarwal demat account on the same day.`,
  },
  {
    id: 3,
    question:
      "Are there any charges for converting physical shares into Demat with AC Agarwal?",
    answer: `As there are several steps and costs involved in the process of dematerialization, the dematerialization charges include Rs 50 per share and Rs 3 per physical certificate, in addition to 18% GST on the overall bill. Feel free to contact AC Agarwal’s customer care if you have any queries regarding the dematerialization cost structure.`,
  },
  {
    id: 4,
    question:
      "If I have multiple demat accounts with different brokers, how do I see my holdings across the 3 brokers on CDSL easiest platform?",
    answer: `CDSL’s EASIEST platform stands for Electronic Access to Securities Information and Execution of Secured Transactions and is an online facility that allows shareholders to access and manage all their demat accounts in one place. You can link all the existing demat accounts on the CDSL’s easiest platform to view the holdings in one place. Here is the process:`,
    answer1: `Visit the CDSL’s official website, click on login, choose ‘My Easi New (Token), and click on the resulting login button.`,
    answer2: `Click on the relevant link below the ‘Forgot Password’ option to register.`,
    answer3: `You will need to enter the DP ID and Client ID. Accept the Terms and Conditions and click the Submit button.`,
    answer4: `Enter the OTP received on your registered mobile number and click Continue.`,
    answer5: `Go to the Account Details, choose a username security question, confirm your answer, select Trusted Account, and click Continue.`,
    answer6: `Enter the 16-digit demat ID of your selected Trusted Account and verify it by entering the received OTP and clicking Continue.`,
    answer7: `Navigate to the Grouping Section, and you can group all of the existing CDSL demat accounts with multiple stockbrokers.`,
    answer8: `Once you have grouped your demat accounts, the details will be sent to all the stockbrokers for validation. It may take 24-48 hours.`,
    answer9: `Post successful validation, you will receive the login credentials on your mobile number and email. You can log in through these credentials to the EASIEST platform and see your holdings across all demat accounts.`,
  },
  {
    id: 5,
    question:
      "Can I dematerialize shares held by a single owner in a joint demat account with AC Agarwal?",
    answer: `No, SEBI has mandated that the name on the share certificate must match the name on the AC Agarwal demat account. Hence, you can not dematerialize shares held by a single owner in a joint demat account with AC Agarwal.`,
    answer1: `To dematerialize shares held in a joint demat account, the names on the AC Agarwal demat account must match the sequence on the share certificates. In this case, you can dematerialize the shares in a single demat account opened in the name of the share certificate owner. If the share certificates are jointly held, they can only be dematerialized into a joint demat account.`,
  },
  {
    id: 6,
    question:
      "I want to gift some shares to my children/relatives. How can I do this with AC Agarwal?",
    answer: `NA`,
  },
  {
    id: 7,
    question:
      "What is the stamp duty applicable on share transfer? Where do I get these stamps?",
    answer: `Stamp duty is a fee levied on the share transfer between two demat accounts. The stamp duty applicable on share transfer is at 0.25% of the market value on the date of execution of the share transfer deed. You can obtain the share transfer stamps from the authorized stamp vendors, or you can contact AC Agarwal to obtain these stamps.`,
  },
  {
    id: 8,
    question:
      "Where should I send the shares for transfer? Can I hand them over at your Branch Office?",
    answer: `(Need Info From ACA)`,
  },
  {
    id: 9,
    question:
      "How do I ensure that the Transfer Deed is complete before sending it to the Company?",
    answer: `You can ensure all the details in the transfer deed are correct before sending it to the company. When you receive the transfer deed, please ensure all the details, such as folio number, certificate number, name of the holder(s) and witness, distinctive number, etc., are correct. Please also ensure that the Transfer Deed is signed by the transferor(s) (signatures of all holders in case of joint holding) and the witness.`,
    answer1: `Fill in all the columns of the transfer deed and affix share transfer stamps at 0.25% of the market value on the date of execution of the transfer deed. Afterward, you can send the transfer deed to the company.`,
  },
  {
    id: 10,
    question:
      "My shares are transferred to the Company’s Unclaimed Suspense Account. What is the procedure to claim the shares and the accrued dividend?",
    answer: `NA`,
  },
  {
    id: 11,
    question:
      "Once my shares are dematted, can I ever get them converted into physical shares?",
    answer: `NA`,
  },
  {
    id: 12,
    question:
      "In case of joint holdings, in the event of the death of one shareholder, how do the surviving shareholders get the shares in their names?",
    answer: `In the unfortunate event of the death of a shareholder, the surviving shareholder in the joint account is the legal heir to receive the ownership of the shares. The surviving shareholders must submit a request letter to AC Agarwal with a self-attested copy of the PAN card of all surviving holders and an attested copy of the Death Certificate of the deceased shareholder.`,
    answer1: `Once AC Agarwal receives all the documents, we will delete the name of the deceased shareholder from our records and the demat account, and the surviving shareholders will get the ownership of the held shares.`,
  },
  {
    id: 13,
    question:
      "I hold more than one folio in the same name. Can I consolidate these folios?",
    answer: `When investing in a new mutual fund scheme, mentioning your existing folio number is important to ensure you get the fresh units under the same folio. However, if you fail to mention the folio number, you get the mutual fund units in a fresh folio, which can increase the number of folios overall. However, you can merge all folios into one folio on AC Agarwal to get a consolidated view of all the investments.`,
    answer1: `If you wish to consolidate or merge all your folios into one folio, you can send a written request to AC Agarwal. You can find the application format on the mutual fund website. You must mention all the folios held in the application and the target folio into which you want to merge all the other folios. You/unit holder(s) must sign the application. Once you send the application, AC Agarwal will give you an acknowledgment slip and, after verification, will merge the folios into the target folio.`,
    answer2: `Note: The names of the holders and the holding pattern of investments must be the same in all folios, along with the address, PAN, and signature.`,
  },
  {
    id: 14,
    question:
      "Can I claim old dividends relating to past years that I have not received?",
    answer: `Yes, you are fully entitled to receive dividends that you have not claimed in the previous years. Once you know you have unclaimed dividends, follow the below process to receive the unclaimed dividend:`,
    answer1: `Step 1: Visit the IEPF website, click on the Claim Refund tab from the drop-down menu of the Services section, and click on the Upload eForms link.`,
    answer2: `Step 2: You will be redirected to the MCA portal, where you will need to log in and click on MCA Services, followed by IEPF-5.`,
    answer3: `Step 3: Fill out the IEPF refund claim form with all the required details along with attaching the required documents such as PAN Card, cancelled cheque, and any other relevant document.`,
    answer4: `Step 4: Submit the form to get the SRN acknowledgment, which you can use to track the status of your application.`,
    answer5: `Step 5: Take the printout of the form, attach all the supporting documents, and send the form to the Nodal Officer of the company duly signed.`,
    answer6: `Step 6: The Nodal Officer will verify the form and documents and send it for approval to the IEPF authority. After verification by IEPF, you will get an approval email.`,
    answer7: `Step 7: The IEPF will initiate the refund process, and you will receive the unclaimed dividend account in your mentioned bank account.`,
  },
  {
    id: 15,
    question:
      "What is the procedure for deletion of name on death of joint shareholder?",
    answer: `In the case of a joint demat account, the surviving demat account holder(s) can delete the name of joint shareholder(s) in case of death. The surviving shareholders must submit a request letter to AC Agarwal with a self-attested copy of the PAN card of all surviving holders and an attested copy of the Death Certificate of the deceased shareholder.`,
    answer1: `Once AC Agarwal receives all the documents, we will open a new account for the surviving shareholder(s) and will get transfer the ownership of the held shares.`,
  },
  {
    id: 16,
    question:
      "Who are the participants while transferring shares from one Demat account to another?",
    answer: `There are four parties involved while transferring shares from one Demat account to another. These are:`,
    answer1: `1. The Investor`,
    answer2: `2. The current Broker`,
    answer3: `3. The New Broker`,
    answer4: `4. The Central Depository (NSDL or CDSL)`,
  },
  {
    id: 17,
    question:
      "Can I transfer shares from one demat account to another manually? What is the process?",
    answer: `Yes, you can transfer shares from one demat account to another manually. You need to get a Delivery Instruction Slip (DIS) from your current broker. Fill in the details such as beneficiary broker ID, ISIN, and mode of transfer. Sign the DIS form and submit it to AC Agarwal, and you will receive an acknowledgment slip. Once you have paid the share transfer charges and post verification, you will receive the shares in your AC Agarwal demat account in 3-5 days. Furthermore, you need to complete the OTP by the seller and the share transfer is completed within 5-10 minutes.`,
  },
  {
    id: 18,
    question: "How much time does AC Agarwal takes for the transfer of shares?",
    answer: `If the Demat account status is active, the client ledger is in credit status, and the client successfully authenticates it through OTP, the shares will be transferred on the same day. In other cases, AC Agarwal typically takes 3-5 days for the transfer of shares. If you have any queries regarding the status of your share transfer, you can contact AC Agarwal's customer service. We would be happy to assist you!`,
  },
  {
    id: 19,
    question:
      "Are there any tax implications for share transfer for the shareholders?",
    answer: `No, there are no tax implications when you transfer shares from one demat to another, as the ownership remains the same. However, if you sell the shares after they have been credited to your new demat account, there may be short-term or long-term capital gains that are taxable.`,
  },
  {
    id: 20,
    question:
      "I have transferred my shares from another broker, how do I adjust my average buy price?",
    answer: `Follow the below steps to adjust your average buy price after you have transferred shares from another broker:`,
    answer1: `Step 1: Log in to your demat account on the Bloom app or the AC Agarwal website.`,
    answer2: `Step 2: Navigate to the Holding section, click on View Discrepancy, and select the stock with a discrepancy.`,
    answer3: `Step 3: Enter the purchase date, price, and quantity, and click on Add. The purchase date should be on or before the demat credit date.`,
    answer4: `Step 4: AC Agarwal will update the buy average price within a day based on the First In First Out (FIFO) method.`,
  },
  {
    id: 21,
    question:
      "Can NRI transfer shares similar to the process as others on AC Agarwal?",
    answer: `Yes, NRIs with an operational demat account can transfer shares similar to the process as others on AC Agarwal.`,
  },
];

const ShareTransfer = () => {
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

export default ShareTransfer;
