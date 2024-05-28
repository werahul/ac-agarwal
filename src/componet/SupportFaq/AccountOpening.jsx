import React, { useState } from "react";
import { dropDownArr, openArr, openWhiteArr } from "../../assets/Images";

const faqs = [
  {
    question: "What is a Demat account and why do I need it?",
    answer:
      "A demat account, also known as a ‘Dematerialized Account’, is an investment account opened by various stock brokers for investors and traders to hold and manage securities such as stocks, bonds, mutual funds, exchange-traded funds (ETFs), government securities, etc., electronically. Any investor and trader wanting to invest or trade in the Indian stock market need to open a demat account with a registered stock broker. After opening the demat account, the securities you buy are credited to your Demat account, and when you sell them, they are debited from the same account electronically.",
  },
  {
    question: "What is the process of opening a Demat account with AC Agarwal?",
    answer:
      "AC Agarwal has created its trading and investing platform to ensure a hassle-free and quick Demat account opening process. All you have to do is visit the official website of AC Agarwal and scroll down to the ‘create Account’ section. Once you have clicked on the button, follow the below steps to open a Demat account with AC Agarwal:",
    answer2:
      "Step 1: Enter your mobile number and select the correct self-dependency. If you are opening the Demat account for yourself, select ‘Self’ from the drop-down menu. If you are opening the Demat account for someone else, select the relevant category.",
    answer3:
      "Step 2: Enter the OTP sent to your entered mobile number and click ‘Continue’",
    answer4:
      "Step 3: Enter your valid and accessible email account, select the correct category from the self-dependency section, and click ‘Continue’. You can sign in directly from your Google account.",
    answer5: "Step 4: Enter your correct PAN Number and click ‘Continue’.",
    answer6:
      "Step 5: Give access to the digilocker section needed to e-verify your KYC. You will have to enter your Aadhar number and enter the OTP sent to the mobile number linked with your Aadhar Card.",
    answer7:
      "Step 6: Choose the segments you want to trade or invest in among cash, futures and options, cash derivatives, and commodity.",
    answer8:
      "Step 7: Select your date of birth and gender, marital status, occupation, income and enter your father’s and mother’s name, and check the ‘I am not a Politically Exposed Person or related to one’ box and click ‘Continue’.",
    answer9:
      "Step 8: Enter your bank’s IFSC Code and bank account number and click ‘Continue’.",
    answer10:
      "STEP 9 Enter your Nominee's PAN card number and other details and click 'Continue'",
    answer11:
      "Step 10: Upload your PAN Card and in next step upload a photo of your signature as per your PAN Card on white paper.",
    answer12:
      "Step 11: If on step 8 after entering your IFSC details pennydrop was successful, you don't need to upload cheque details. If not, then a cheque's image (with your name printed on it) /passbook's first page image with details. NOTE:- If you have opted for F&O/MCX and other segment then latest 6 months' bank statement or latest ITR needs to be uploaded. STEP 12: In this step you have to click a LIVE photo- start your camera, allow permissions and click your picture with a clear background. Step 12: You will get an option to choose for XTS (Algo trading) or Regular trading (SKIP), choose the suitable option. STEP 13: You will get a pop to opt/opt out for DDPI (POA), choose suitable option.  Step 14: Click on equity e-sign> proceed to esign> Enter Aadhar card number and tick on checkbox and send OTP>Enter OTP>Verify OTP. Please follow the same process again for KRA esign. Once done, your account opening process will be completed and go to KYC team for a review.",
  },
  {
    question:
      "How much time does it take to open a Demat Account on AC Agarwal?",
    answer:
      "AC Agarwal has designed the Demat account opening process to allow investors and traders to get started in the stock market as quickly as possible. The account opening process on AC Agarwal takes only a few minutes, and you only need a mobile number and email ID to get started with the process. With the use of Digilocker, your KYC process gets completed within minutes on AC Agarwal, but it may take 1-2 days for the stock exchanges to verify your account.",
    answer2:
      "Once all your details are verified, post KYC process, and onboarding on AC Agarwal, your Demat account will be opened today, and you can start trading and investing on the next trading day. Sometimes, the exchanges may take T+2 days for verification.",
  },
  {
    question: "What is the Demat account opening fee for AC Agarwal?  ",
    answer: "1): POA (If opted) Rs. 140  ",
    answer2: "2). KRA charges -Rs. 50.  These are one time charges. ",
    answer3:
      "3). AMC charges- Rs. 250 plus 18% GST = Rs. 295 at the end of the year.",
  },
  {
    question:
      "What are Annual Maintenance Charges (AMC)? What are the AMC Charges for AC Agarwal?",
    answer:
      "AMC charges, or Annual Maintenance Charges, are fees levied by the Depository Participant (DP) or the financial institution that provides and maintains your Demat account. These charges are typically incurred annually and cover maintaining and servicing your Demat account. The AMC charges for Demat accounts on AC Agarwal are Rs 250+18% GST. ",
  },
  {
    question: "What benefits can I avail on account opening with AC Agarwal?",
    answer:
      "AC Agarwal, with an industry experience of over 20 years, has designed its Demat account to offer extensive features and benefits to its investors and traders for seamless trading and investing experience. With an AC Agarwal Demat account, you get the following features and benefits: ",
    answer2:
      "A host of Investment Products: AC Agarwal’s Demat account allows you to trade and invest in a host of investment products such as stocks, mutual funds, IPOs, futures and options, etc. All you have to do is select the desired asset classes while opening the Demat account. ",
    answer3:
      "Brokerage: When you open a Demat account with AC Agarwal, you can choose from various customised brokerage plans as per your trading and investing needs. ",
    answer4:
      "Technology: You can access the Demat account and trade and invest in the stock market through advanced technology and algorithm-based features such as powerful charts, personalised data points, live updates, etc. ",
  },
  {
    question:
      "What are the documents required to complete the KYC process for opening a Demat account with AC Agarwal?",
    answer:
      "The documents required for opening a Demat account with AC Agarwal can be divided into two categories: EKYC (Electronic Know Your Customer) and Physical account opening. Here are the documents needed for each:",
    answer2: "For EKYC (Online Account Opening):",
    answer3: "1. Proof of Identity and Verification: PAN Card",
    answer4: "2. Address Proof: Aadhaar Card",
    answer5: "3. Bank Verification:",
    answer6:
      "Electronic penny drop verification or bank passbook,  Cancelled cheque (with your name printed). The Bank account holder’s name, branch address, IFSC code, and account number must be clearly visible.",
    answer7:
      "4. Nominee Details: PAN, Aadhar, Email, Mobile and Relationship with the applicant",
    answer8:
      "5. Income Proof: Last six months' bank statement, ITR acknowledgment and Form 16 (for salaried individuals), A live photo",
    answer9: "A photo of your signature as per your PAN Card on white paper",
    answer10: "For Offline Account Opening (Physical Form):",
    answer11:
      "In addition to the documents required for EKYC, you'll need to provide:",
    answer12: "Two Passport Size Photographs",
  },
  {
    question: "Can I open multiple Demat accounts with AC Agarwal? ",
    answer:
      "No, as per the rules set by the Securities and Exchange Board of India (SEBI), an individual can only open one Demat account with a stockbroker. Since you will submit your mobile number, email ID and other government-issued IDs such as PAN and Aadhar with AC Agarwal, you can only open one Demat account with your KYC. ",
  },
  {
    question:
      "What is Demat Debit and Pledge Instruction (DDPI), and why is it needed while opening a Demat account with AC Agarwal?",
    answer:
      "Demat Debit and Pledge Instruction (DDPI) is a document that legally permits the stockbroker to debit the selected securities from the Demat account holder’s account and deliver them to respective stock exchanges. The DDPI facility allows the Demat account holders to avoid entering the CDSL T-PIN and the OTP to sell securities. The DDPI facility was previously called the Power of Attorney (POA) facility but was renamed to DDPI by SEBI on 19th November 2022 with amendments and improvements. ",
    answer2:
      "To avoid misuse of the DDPI facility by the stockbrokers, SEBI has made it mandatory for the stockbrokers to only debit securities from the Demat account holder’s account if the account holder has placed a sell trade.     ",
  },
  {
    question: "Can NRIs open a Demat account with AC Agarwal?",
    answer:
      "Yes, AC Agarwal allows NRIs to open a Demat account and trade and invest in the Indian stock market. The NRIs willing to open a Demat account with AC Agarwal are required to link their Non-Resident Ordinary (NRO) or Non-Resident External (NRE) savings bank account to Bloom (the trading and investing app from AC Agarwal).",

    answer2:
      "However, the NRIs must submit a Portfolio Investment Scheme (PIS) approval letter from the Reserve Bank of India. If you have an NRO or NRE account with a bank, it will assist you in obtaining the PIS approval letter. Afterwards, you must submit the account opening form and the relevant supporting documents to AC Agarwal listed below:",
    answer3:
      "Copy of PIS permission letter (You can link your NRO savings bank account to open a non-PIS account).",
    answer4: "The copy of the FEMA Declaration.    ",
    answer5:
      "Overseas address proof — a copy of a driver's licence or foreign passport, utility bills, or bank statements (within the last two months), or a notarised copy of a rent agreement, lease & licence agreement, or sales deed.",
    answer6: "Copy of PAN Card.",
    answer7: "Indian address proof, if any.",
    answer8: "Passport-size photograph.",
    answer9:
      "A copy of the valid passport with India as the place of birth and a copy of the valid visa in the case of an Indian passport.",
    answer10:
      "A copy of the valid passport and a copy of the PIO/OCI card in the case of a foreign passport.",
    answer11:
      "(PIO is a person of Indian Origin. He/ She can open an account in NRI capacity.    A citizen of any country (other than a citizen of Bangladesh or Pakistan) is deemed to be a Person Of Indian Origin (PIO), if,",
    answer12: "- He, at any time, held an Indian passport, or",
    answer13:
      "- He or either of his parents or any of his grandparents was a citizen of India by virtue of the Constitution of India or Citizenship Act, 1955, or",
    answer14:
      "- A spouse (not being a citizen of Bangladesh or Pakistan or Sri Lanka) of an Indian citizen or of a person of Indian origin is also deemed to be PIO.)",
    answer15:
      "Proof of bank account (a cancelled cheque leaf from your NRE or NRO savings bank account) and P.O. Box declaration in your home country.",
    answer16:
      "Client Details Form for the Foreign Account Tax Compliance Act (FATCA) to confirm all of the information provided in the application.",
    answer17: "- ·         Please Note:",
    answer18:
      "*All the above documents need to be self-attested and to be provided in two sets. A copy of the NRI's PAN card, passport, and proof of foreign address must be self-attested and notarised by the Indian embassy or another competent authority, such as authorised officials of scheduled commercial banks registered in India, public notaries, court magistrates, judges, or the Indian embassy/consulate general in the country where the NRI resides.",
    answer19:
      "If you add a nominee to your account, you must provide ID proof for the nominee. Any kind of identification, such as an Aadhaar, voter ID, or driver's licence, will qualify.",
    answer20:
      'The attesting authority shall stamp the documents with a "confirmed with original" stamp, as well as their name, designation, signature, and date.',
  },
  {
    question:
      "Which investment products are available to invest/trade in using AC Agarwal’s Demat account?",
    answer:
      "AC  Agarwal’s Demat account is designed to be a one-stop solution for all our customers' trading and investing needs. Once you have opened a Demat account with AC Agarwal, you can trade and invest in the below-mentioned exchange segments and investment products: ",

    answer2: "Equities from the Cash Segment ",
    answer3: "Exchange Traded Funds (ETFs) from the Cash Segment ",
    answer4: "Futures and Options from the Derivatives Segment ",
    answer5: "Commodities ",
    answer6: "Mutual Funds ",
    answer7: "IPOs ",
    answer8: "Currencies ",
    answer9: "Insurance Policies ",
  },
  {
    question:
      "Can I open a Demat and trading account jointly with AC Agarwal? ",
    answer:
      "Currently, individuals can open single occupancy demat account both offline and online and joint Demat and Trading accounts through the offline process. This means you can choose to open an account solely in your name or opt for a joint account to manage investments collectively with another party. AC Agarwal accommodates both types of accounts to cater to your specific preferences and needs",
  },
  {
    question: "Which entities can open a Demat account with AC Agarwal? ",
    answer:
      "AC Agarwal, a renowned stockbroker in India with over 20 years of industry experience, offers accessible Demat account opening for the following entities: ",
    answer2: "Retail Investors",
    answer3: "Companies",
    answer4: "Partnerships",
    answer5: "Hindu Undivided Families (HUF)",
    answer6: "Limited Liability Partnerships (LLP)",
  },
  {
    question:
      "What are nominees, and how can I add nominees to my AC Agarwal Demat account? ",
    answer:
      "A nominee refers to an individual who is designated by the account holder to receive the ownership rights and benefits of the securities held in the Demat account in the event of the account holder's death. The nominee acts as a recipient of the securities and other assets held in the account and ensures a smoother transfer of ownership and management in case of the account holder's demise. SEBI has made adding nominees to all the current Demat accounts mandatory by 30 September 2023.",
    answer2:
      "You can add nominees to your AC Agarwal Demat account either by clicking on the following link and logging in: kyc.acagarwal.com/ACAgarwal/rekyc/diy or the Bloom app. Once you have logged in or accessed the provided link, navigate to the 'profile' section. You will find an option named 'Add Nominee.' Click on the option and enter all the required details of the nominee/nominees you want to add.",
  },
  {
    question:
      "What is FATCA declaration form and why do I need to fill it for opening an account with AC Agarwal? ",
    answer:
      "The Foreign Account Tax Compliance Act (FATCA) is a United States federal law enacted in 2010 to combat tax evasion by U.S. citizens and residents holding financial accounts and assets outside of the United States. The FATCA declaration form is a vital part of the account opening process, which is made mandatory by SEBI under the deal signed by the Indian government with the US government to exchange financial data between the two nations. Hence, all Demat account holders are required by law to fill out the FATCA declaration form.     ",
  },
  {
    question:
      "Can I open an online account if my current mobile number is not registered with Aadhaar?",
    answer:
      "No, unfortunately, a mobile number registered with your Aadhaar Card is required to open a Demat account with AC Agarwal. The Indian government and SEBI have made it mandatory to complete KYC through an Aadhar-based OTP, which requires linking Aadhar and the mobile number. If you do not have your mobile number linked with your Aadhar card, you can open your Demat account with AC Agarwal through the offline process. ",
    answer2:
      "You need to take a print out of the form, sign it and send it to our registered address. ",
    answer3:
      "Address: 406, Payal Complex, Near Vadodara Stock Exchange, Sarod, Sayajiganj, Vadodara, Gujarat 390005. ",
  },
  {
    question: "What is In-Person Verification (IPV) and why it is needed?",
    answer:
      "When an individual opens a Demat account with a Depository Participant (DP) or a broker, they need to go through a verification process to prove their identity and provide relevant documentation. In-person verification involves physically verifying the individual's identity by capturing a live photo with clear background (in account opening process)",
    answer2:
      "IPV is mandatory for non-KRA customers for opening a Demat account with AC Agarwal. KRA (KYC Registration Agency) is a SEBI-registered agency that holds and maintains KYC records of investors. However, presently, IPV is done online using a webcam, where the customers show all the relevant documents to the representative over the camera. ",
  },
  {
    question: "What are CDSL and NSDL? Which DP is AC Agarwal integrated with?",
    answer:
      "CDSL (Central Depository Services Limited) and NSDL (National Securities Depository Limited) are the two principal depositories in India. CDSL and NSDL facilitate the Dematerialisation of securities, enabling investors to electronically hold and manage various financial instruments, including shares, bonds, government securities, and mutual fund units. They act as intermediaries, connecting investors, depository participants (DPs), and securities issuers.",
    answer2:
      "AC Agarwal is registered with CDSL (Central Depository Services Limited). ",
  },
  {
    question: "How to close a Demat & Trading account online on AC Agarwal? ",
    answer:
      "Closing your Demat and trading account with AC Agarwal must be done offline and follows a simple process:",
    answer2: "Fill out the Trading and Demat closure forms.    ",
    answer3:
      "  Send the physical copies of these forms to our office, along with your PAN and Aadhar card.  ",
    answer4:
      "  Ensure that your Dr./Cr. balance and holdings, if any, are cleared before initiating the closure. ",
    answer5: "You may send the copies to the following registered address. ",
    answer6:
      "Address: 406, Payal Complex, Near Vadodara Stock Exchange, Sarod, Sayajiganj, Vadodara, Gujarat 390005. ",
  },
  {
    question:
      "Can we transfer shares from other brokers. What is the process to transfer shares?",
    answer:
      "If your shares are held in a depository with CDSL, you have the flexibility to transfer shares using both online and offline procedures. ",
    answer2:
      "For the online process, you can simply register on the CDSL Easiest website and initiate the transfer. ",
    answer3:
      "On the other hand, for the offline process, you'll need to fill out a DIS (Delivery Instruction Slip) and attach the client master of the other company to which the shares are being transferred.",
    answer4:
      "However, if your shares are held in a depository with NSDL, the transfer process is limited to offline procedures.",
  },
];

const AccountOpening = () => {
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

export default AccountOpening;
