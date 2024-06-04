import React, { useEffect, useState, useRef } from "react";
import {
  Navbar,
  Hero,
  Twitter,
  PricingCalc,
  RecentNews,
  Partner,
  Cta,
  Footer,
} from "../componet";
import {
  filledChecked,
  dropDownArr,
  supportBg,
  supportBg2,
  blueTick,
  blueTick2,
  customerSupport,
  openArr,
} from "../assets/Images";
import AccountOpening from "../componet/SupportFaq/AccountOpening";
import {
  AddingFunds,
  Api,
  BackOffice,
  CustomerService,
  Edis,
  Ipo,
  Margin,
  MarginTradingFacility,
  ShareTransfer,
  TradingAndInvesting,
} from "../componet/SupportFaq";
import {
  ContactSupport,
  CustomerSupportAndTable,
  Welcome,
} from "../componet/SupportComp";

const Support = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isMobile = window.innerWidth <= 768;
  const backColor = isMobile ? "bg-[#f8f8f8]" : "bg-[#fcfdfe]";
  const navColor = isMobile ? "bg-[#F7F9FA99]" : "bg-[#FCFDFE]";

  const sectionRef = useRef(null); // Add this line

  // Account Openning FAQs
  const accountOpeningFaqs = [
    {
      question: "What is a Demat account and why do I need it?",
      answer:
        "A demat account, also known as a ‘Dematerialized Account’, is an investment account opened by various stock brokers for investors and traders to hold and manage securities such as stocks, bonds, mutual funds, exchange-traded funds (ETFs), government securities, etc., electronically. Any investor and trader wanting to invest or trade in the Indian stock market need to open a demat account with a registered stock broker. After opening the demat account, the securities you buy are credited to your Demat account, and when you sell them, they are debited from the same account electronically.",
    },
    {
      question:
        "What is the process of opening a Demat account with AC Agarwal?",
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
      question:
        "What are CDSL and NSDL? Which DP is AC Agarwal integrated with?",
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
        "Can we transfer shares from other brokers? What is the process to transfer shares?",
      answer:
        "If your shares are held in a depository with CDSL, you have the flexibility to transfer shares using both online and offline procedures. ",
      answer2:
        "For the online process, you can simply register on the CDSL Easiest website and initiate the transfer. ",
      answer3:
        "On the other hand, for the offline process, you'll need to fill out a DIS (Delivery Instruction Slip) and attach the client master of the other company to which the shares are being transferred.",
      answer4:
        "However, if your shares are held in a depository with NSDL, the transfer process is limited to offline procedures.",
    },
    {
      question:
        "Can I open a Trading Account when I already have a Demat Account and vice versa?",
      answer:
        "When you register with AC Agarwal for account opening, upon a successful registration and KYC process, AC Agarwal opens both the Demat and trading account as one investment account. Since both Demat and trading accounts are required to trade and invest in the Indian stock exchange, every stockbroker, similar to AC Agarwal, opens both accounts in a single account opening process. Hence, it is not possible to link any other trading account with AC Agarwal’s Demat account or vice versa.       ",
    },
  ];

  // Trading Investion FAQs
  const tradingInvestingFaqs = [
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
      question:
        "How can I trade/invest in derivatives (F&O) using the AC Agarwal demat account?",
      answer:
        'F&O trading stands for "Futures and Options" trading. It is a type of financial trading involving buying and selling derivative contracts known as futures and options contracts. These contracts derive their value from an underlying asset, such as stocks, indices, commodities, currencies, or interest rates.',
      answer2:
        "Like other asset classes, F&Os are listed and traded on the Indian stock exchanges. To start F&O trading, you will need to open a demat and trading account with AC Agarwal and choose F&O as the desired category before completing the account opening process. Once you have opened the demat and trading account, you can transfer funds from your bank account to your trading account and start F&O trading.  It is always advisable that you do prior research on futures and options to ensure effective trading.",
    },
    {
      question:
        "How can I trade/invest in currencies using the AC Agarwal demat account?",
      answer:
        "Currency trading involves the buying and selling of different currencies in the foreign exchange market. The primary objective of currency trading is to profit from the fluctuations in exchange rates between various currency pairs. In India, the National Stock Exchange (NSE) and the Bombay Stock Exchange (BSE) offer currency futures and options that traders and investors can buy and sell to execute currency trading.     ",
      answer2:
        "To start currency trading, you will need to open a demat account with AC Agarwal and select the Currency category before completing the account opening process. Once your account is opened and operational, you can log in to your demat account on AC Agarwal’s website or the Bloom app, transfer the required funds, and buy currency pairs to start trading. ",
    },
    {
      question:
        "Can I invest/trade in penny stocks? What is AC Agarwal’s policy regarding penny stocks?",
      answer:
        "Penny stocks are typically low-priced stocks of small companies that trade at a relatively low market price, often well below Rs 50 per share. These stocks are comparatively high-risk and more volatile than larger, more established companies. Although these stocks are more volatile and risky, they can offer high returns to investors if the investment is made after extensive research.",
      answer2:
        "AC Agarwal's Demat account allows its holders to trade and invest in penny stocks similar to any other type of investment. When you are an AC Agarwal Demat account holder, there are no restrictions to investing in any type of stock, irrespective of their price. However, considering their lack of liquidity and easier exposure to price manipulation, AC Agarwal has created a policy of providing no leverage on penny stocks. This is done to protect its Demat account holders financially.",
      answer3:
        "Additionally, it's important to note that there might be some restrictions imposed by the exchange in the form of Additional Surveillance Measure (ASM) or Graded Surveillance Measure (GSM) or additional margin levies. These measures can affect the trading of certain penny stocks and may require investors to meet specific margin requirements or face trading restrictions as per exchange regulations.",
    },
    {
      question:
        "What are your square-off timings? In case of loss, what is your square-off percentage? ",
      answer: "Here are the segment-wise square-off timings: ",
      answer2: "NSE CASH - 3:20 PM ",
      answer3: "NSE NFO - 3:25 PM",
      answer4: "NSE CDS 4:45 PM ",
      answer5: "NSE CDS cross-currency - 4:45 PM ",
      answer6: "MCX (MAR TO NOV) - 11:15 PM ",
      answer7: "MCX (DEC TO FEB) - 11:40 PM",
      answer8:
        "If MTM losses exceed 80% of the funds in AC Agarwal’s demat account, the position may be squared off. ",
    },
    {
      question:
        "Why is DDPI required? Can I sell shares without a physical DDPI?",
      answer:
        "Demat Debit and Pledge Instruction (DDPI) is a document that legally permits the stockbroker to debit the selected securities from the demat account holder’s account and deliver them to respective stock exchanges. The DDPI facility allows the demat account holders to avoid entering the CDSL T-PIN and the OTP to sell securities. Hence, it is important to opt for the DDPI facility for seamless trading and investing using the AC Agarwal demat account. ",
      answer2:
        "Yes, you can sell shares without a physical DDPI, as you can electronically sign the DDPI form and submit it to AC Agarwal. Furthermore, you can use the e-DIS facility to sell shares. You can read more about the e-DIS facility from our ‘e-DIS Facility on AC Agarwal’ section. ",
    },
    {
      question:
        "What is call-up trading? Can I buy or sell shares by calling up AC Agarwal?",
      answer:
        "Callup trading is a unique feature provided by AC Agarwal to its investors and traders, where they can call AC Agarwal’s investment experts to buy or sell securities on their behalf. The call-up trading facility is beneficial when investors and traders do not have the bandwidth to access their demat accounts but want to place an order. However, it is important that you have submitted the signed DDPI form for executing call-up trade as the form is compulsory to permit AC Agarwal to buy or sell on its demat account holders’ behalf. ",
      answer2:
        "Please find below the deadline desk number on which you can call for call-up trading: 0141-4920999",
    },
    {
      question:
        "What are ASM and GSM? Can I trade in both ASM and GSM category shares?",
      answer: "Here are the definitions of ASM and GSM: ",
      answer2:
        "ASM (Additional Surveillance Measure): ASM is a surveillance measure implemented by SEBI to keep a closer watch on securities deemed at higher risk of price manipulation or excessive speculation. Under ASM, stocks that meet certain criteria (such as high volatility or abnormal price movements) are identified and subjected to additional regulatory scrutiny. In such stocks, the margin is banned at 100% of the traded value, i.e., there will be no intraday leverage (MIS/BO/CO is not allowed), and the shareholders can not pledge the stocks for leverage. ",
      answer3:
        "For AC Agarwal demat account holders, if a stock you have pledged is moved under ASM, you will no longer be offered collateral margins for that stock, as ASM requires a 100 percent margin. The collateral value obtained against that stock will be deducted from the collateral value (visible on the trading terminals). Until the stock is moved out of ASM, you can either un-pledge it or retain it pledged without collateral.",
      answer4:
        "GSM (Graded Surveillance Measure): Similar to ASM, GSM is another surveillance measure implemented by SEBI for investor protection. Under GSM, securities are categorised into various levels based on their risk factors. The categorisation determines the extent of surveillance and regulatory actions that will be applied to those securities",
      answer5:
        "Stage II requires a 50 percent Additional Surveillance Deposit (ASD) of the trade value, which is reflected in your ledger. Stocks in GSM stage 2 or higher will not be available for purchase. Additional Surveillance Deposit (ASD) of 100% of the trading value or more is required for these stocks. Even after you sell the stock, the exchange will keep the ASD margin restricted for at least 3 months. As part of AC Agarwal’s RMS policy, the limits apply only to new purchases. You can sell your GSM stage 2 and higher stock if it is in your account.",
    },
    {
      question:
        "What will happen if I don't square off my Option contract on expiry day?",
      answer:
        "If the options contract is in the money, it will be physically settled. The following is the implication for contracts where physical settlement is not predicated on delivery: ",
      answer2: "If you've purchased options:",
      answer3:
        "STT will be levied on executed contracts at a rate of 0.125 percent of intrinsic value (how much in-the-money the option is) rather than the whole contract value.",
      answer4:
        "OTM option contracts will expire worthless if they are out of the money. You will forfeit your whole premium payment.",
      answer5: "If you have any selections that have been shortened:",
      answer6:
        "STT is only paid on the sell-side for options, which implies you would have paid it when you started the short. As a result, the STT will not affect expiry. You keep the premiums you receive, depending on the moneyness of the option contract.",
    },
    {
      question:
        "What are the exchange and auto-square-off timings for all the segments?",
      answer: "Here are the exchange or market timings: ",
      answer2: "Equity: ",
      answer3: "9 a.m. to 9.15 a.m. – Pre-market trading",
      answer4: "9.15 a.m. to 3.30 p.m. – Regular trading",
      answer5: "3.40 p.m. to 4 p.m. — After-market ",
      answer6:
        "At 10:00 a.m., all new IPOs are listed on the exchange. From 9:00 a.m. to 10:00 a.m., there is a pre-open session.",
      answer7: "Currency: ",
      answer9:
        "9 a.m. to 5 p.m. — Regular trading and cross-currency transactions",
      answer10: "Commodity: ",
      answer11:
        "Non-Agri Commodities with International Reference - 9 a.m. to 11.30 p.m. – during daylight savings time – March to November (9 a.m. to 11.55 p.m. – November to March).",
      answer12:
        "09.00 AM to 09.00 PM - Internationally Referenceable Agri Commodities (Cotton, CPO, & KAPAS).",
      answer13: "09.00 AM to 05.00 PM - All Other Agri Commodities. ",
      answer14: "",
      answer15:
        "Here are the auto-square off timings for open intraday positions: ",
      answer16: "Equity/Cash 3:20 PM ",
      answer17: "Equity Derivatives 3:25 PM ",
      answer18: "Currency Derivatives 4:45 PM ",
      answer19: "Commodities 25 Minutes Before Closing    ",
      answer20:
        "Note: The client is responsible for squaring off the position.   ",
    },
    {
      question:
        "What is the process of delivery and intraday trading on AC Agarwal?",
      answer:
        "In delivery trading, you buy shares of a company and become the part owner, equalling the share percentage of your total purchased stocks. Here, you hold the shares for a longer duration, typically beyond the trading day. However, intraday trading is a trading process where you buy and sell shares within the same trading day. Here, you don't aim to become a shareholder. Instead, you're trying to benefit from price fluctuations within the day.",
      answer2:
        "While the process for both delivery and intraday trading is similar, the key difference lies in the choice of order type. Once you have an operational Demat account with AC Agarwal, you can log in through your choice of front-end applications, which include mobile, web, and desktop. After logging in, you can search for the stock you wish to purchase for delivery or intraday trading and specify the number of shares you want to buy. When placing the order, you will be prompted to choose the order type, either delivery or intraday, and proceed with the order.",
      answer3:
        "Note: You can keep the stocks bought with a delivery order for as long as you want. However, stocks bought with an intraday order must be sold before the closing of the stock market on the same day, or they will get auto-squared off at 3:15 PM. ",
    },
    {
      question:
        "How can I convert a trade from Delivery to Intraday or vice versa?",
      answer:
        "AC Agarwal allows its demat account holder to convert a trade from delivery to intraday or from intraday to delivery in a matter of clicks. Here are the steps to convert the trades: ",
      answer2:
        "Step 1: Log in to your demat account through your choice of front-end applications, which include mobile, web, and desktop",
      answer3:
        "Step 2: Navigate to the dashboard, and your order book and click on the stock you have bought either as a delivery trade or intraday. ",
      answer4:
        "Step 3: Once you have clicked on the stock, you will see an option to convert to delivery or intraday. ",
      answer5:
        "Step 4: Click on the option and change the order type to delivery or intraday and click Submit. The order will change, and the respective rules, such as auto square-off or settlement cycle, will apply.",
    },
    {
      question:
        "Can I place an After-Market-Order (AMO)? What are the timings for various asset classes to place AMO?",
      answer:
        "After-Market Orders (AMOs) are a type of order placement in the stock market that allows traders to place buy or sell orders for securities after regular trading hours. After-market orders extend trading beyond these hours, providing investors with additional flexibility. AMOs can be placed after regular trading hours, which typically occur between 9:15 AM and 3:30 PM (local time) in India for the National Stock Exchange (NSE). ",
      answer2:
        "AMOs can be placed, modified, or cancelled only between these times:",
      answer3: "NSE and BSE Equity: 4:01 PM to 11:30 PM",
      answer4: "Currency: 5:02 PM to 11:30 PM ",
      answer5: "F&O: 4:01 PM to 11:30 PM",
    },
    {
      question:
        "What is a Bracket Order? How does one place a Bracket Order on AC Agarwal?",
      answer:
        "A Bracket Order is a type of advanced trading order that combines multiple orders into a single package. It is designed to help traders manage their risk and potential profit in a more systematic way. ",
      answer2:
        "The order starts with a main or entry order, the initial order to buy or sell a security at a specified price. This could be a market order or a limit order. Once the main order is executed, two additional orders are automatically placed – a target order and a stop-loss order. ",
      answer3:
        "For example, if you want to buy a stock at Rs 200, with a stop loss of Rs 190, and want to book a profit at Rs 210, you can place a buy order at Rs 200 with a stop loss spread of Rs 10 and book profit at Rs 210. ",
      answer4: "Here are the steps to place a Bracket order on AC Agarwal: ",
      answer5:
        "Log in to your AC Agarwal demat account either on the website or the Bloom app, and select the security you want to trade and select it.",
      answer6:
        "Select Bracket Order as the product type, specify the number of units you want to buy, and Set the entry price at which you want the main order to be executed.",
      answer7:
        "Specify the target price at which you want to take your profit along with the stop-loss price at which you want to limit potential losses.",
      answer8:
        "Once you're satisfied with the order details, submit the Bracket Order.",
    },
    {
      question:
        "What is a Slicing Order? How does one place a Slicing Order on AC Agarwal?",
      answer:
        "A slicing order is an order type that allows traders to slice their bulk orders into multiple small orders called child orders. You can place slicing orders in Cash(NSE & BSE) and Futures(NSE). ",
      answer2:
        "For example, if you are placing an order in ‘BANKNIFTY,’ the minimum quantity restriction from exchange is 1200. If you are placing an order for 4000 quantities, you can use slicing orders for various lots to slice your orders into smaller orders. Here, the order can be sliced into four: 1200, 1200, 1200, and 400, and you can execute each of the orders gradually. ",
      answer3: "Here are the steps to place a Slicing order on AC Agarwal: ",
      answer4:
        "Log in to your AC Agarwal demat account either on the website or the Bloom app, and select the security you want to trade and select it. ",
      answer5:
        "Select Slicing Order as the product type, specify the number of units you want to buy, and Set the limit price at which you want the main order to be executed.",
      answer6:
        "Once you're satisfied with the order details, submit the Slicing Order. The moment you select the slicing order type, the order form will get expanded, and you can define the rest of the required units. ",
    },
    {
      question:
        "What are Basket Orders? How does one place Basket Orders on AC Agarwal?",
      answer:
        "Basket orders, also known as basket trades or portfolio trades, are a type of trading order that involves the simultaneous execution of multiple buy or sell orders for a group of securities. Instead of placing individual orders for each security, a basket order allows traders and investors to trade a collection of securities in a single transaction.",
      answer2: "Here are the steps to place a Slicing order on AC Agarwal: ",
      answer3:
        "Log in to your AC Agarwal demat account either on the website or the Bloom app, and select baskets from the product type. ",
      answer4:
        "Select the securities you want to include in your basket. You can select various securities, such as Stocks, ETFs, Futures, and Options in a single basket. ",
      answer5:
        "Once added, you will see the margin requirements for the overall basket as well as the individual securities. You have to maintain the margin requirements in your trading account. ",
      answer6:
        "Once you have created the basket, you can execute the trade as per your convenience, and a single order will execute trades for all the securities added to the basket. ",
    },
    {
      question:
        "What are Bulk Orders? How does one place Bulk Orders on AC Agarwal?",
      answer:
        "Bulk orders, also known as block trades or large trades, refer to trading orders that involve a substantial quantity of shares or contracts of a security. These orders are significantly larger than typical retail trades and are often executed by institutional investors, such as mutual funds, pension funds, hedge funds, and other large financial entities.",
      answer2: "Here is how you can place a bulk order on AC Agarwal:     ",
      answer3:
        "Log in to your AC Agarwal demat account either on the website or the Bloom app, and select bulk from the product type. ",
      answer4:
        "Select the securities you want to include in your bulk order. You can select various securities, such as Stocks, ETFs, Futures, and Options for executing the bulk order.",
      answer5:
        "Maintain the margin requirements in your trading account required for the securities added in the bulk order. ",
      answer6:
        "Before placing the bulk order, you will see a window that will showcase your bulk order being split into multiple orders. ",
      answer7:
        "After reviewing the order details, you can place the bulk order, and it will be executed in a single click",
    },
    {
      question:
        "What are Margin Orders? How can I place Margin Orders on AC Agarwal?",
      answer:
        "Margin orders allow investors and traders to buy securities by borrowing funds from the stockbroker. In such an order, you can borrow funds from the broker to increase your purchasing power. The amount you can borrow is determined by the initial margin requirement set by the broker and regulated by financial authorities. ",
      answer2:
        "For example, if the stockbroker provides 2x margin, and you have put up Rs 50,000 as the initial margin, you can borrow another Rs 50,000 from the broker and buy securities equalling Rs 1 lakh. However, borrowing funds from a broker incurs interest charges.",
      answer3: "Here is how you can place a margin order on AC Agarwal: ",
      answer4:
        "Log in to your AC Agarwal demat account either on the website or the Bloom app, and select margin from the product type. ",
      answer5:
        "Enter the number of units (shares, contracts, etc.) you want to trade and select your margin account as the trading account for the order. ",
      answer6:
        "Once you have entered all the relevant details, click submit, and your margin order will be executed. ",
      answer7:
        "However, it is important to manage your margin requirements in such an order. You'll need to maintain a certain level of equity in your account to avoid margin calls.",
      answer8:
        "It's also essential to consider the square-off time, which signifies the deadline for closing or settling your margin position to avoid potential penalties or automatic square-offs by your broker. The square-off time is 3:20 PM. ",
    },
    {
      question:
        "What is a Delivery Order? How can I place a Delivery Order on AC Agarwal?",
      answer:
        "Delivery orders are stock market orders that allow investors to hold the bought securities for a longer time than intraday, where traders have to sell the bought securities within the same day. Once you buy securities under the delivery orders, you can not sell them on the same day as they get credited at least after the T+1 settlement cycle. Delivery orders are the most common orders placed by investors. ",
      answer2:
        "Once you have an operational demat account with AC Agarwal, you can log in to your demat account on your Bloom app or the AC Agarwal website. Once you have logged in, search for the stock you want to buy and enter the number of shares. When placing the order, choose delivery as the order type and click on place order. Your order will be executed, and you will receive the shares in your AC Agarwal demat account after the applicable trade settlement cycle. ",
    },
    {
      question:
        "What is a SIP Order? How can I place a SIP Order on AC Agarwal?",
      answer:
        "A SIP order is an order type that involves investing a fixed amount of money at regular intervals, typically monthly or quarterly, into a chosen investment fund or stocks. A SIP order ensures that the investors and traders do not have to shell out large amounts at one go to buy stocks or invest in mutual funds but can do so over time by investing a predefined amount at regular intervals. ",
      answer2:
        "At AC Agarwal, you can invest in stocks or mutual funds using a SIP order. You have to log in to your AC Agarwal demat account either on the website or the Bloom app and search for any stock or a mutual fund scheme you want to invest in using SIP. You will see an option to start SIP, which you can select and choose a payment frequency between weekly or monthly, along with the number of shares (if equity SIP) or the amount you want to invest at selected intervals. Once you have entered all the relevant details, you can start the SIP. ",
    },
    {
      question:
        "Can NRIs trade and invest in various asset classes and place special orders on AC Agarwal?",
      answer:
        "Yes, as AC Agarwal allows NRIs to open a demat and trading account, they have access to all the features and special orders similar to other categories of investors. There may be some limits and restrictions as mandated by SEBI, which you can learn more about by contacting AC Agarwal’s customer care.  ",
    },
  ];

  // Adding Funds FAQs
  const addingWithdrawingFundsFaqs = [
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
      answer2:
        "AC Agarwal allows you to change your primary bank account at your convenience. However, you will have to add secondary bank accounts by raising a request by dropping a mail on Care@acagarwal.com through registered mail ID (mentioning your details and attaching a cancelled cheque of the new bank). However, this process will only let you add your bank accounts in your Trading account only. If you wish to make any other bank as your default/primary bank then offline process needs to be followed. To add your new bank as your default bank then a physical modification form is required along with a cancelled cheque. You can get the modification form calling or mailing customer care.",
      answer3: "Please send your modification form on the address given below.",
      answer4: "VADODARA OFFICE",
      answer5: "A C Agarwal Share Brokers Pvt. Ltd.",
      answer6:
        "406, Payal Complex, Near Vadodara Stock Exchange, Sarod, Sayajiganj, Vadodara, Gujarat - 390005. ",
      answer7:
        "All linked and verified accounts to the AC Agarwal demat account can be used to add  money but for withdrawl only primary (Default) bank will be used. However, all the dividends and SEBI payouts will be credited to the primary bank account. ",
    },
    {
      question:
        "Can I transfer funds from a bank account that is not linked to my AC Agarwal demat account?",
      answer:
        "No, SEBI has made it mandatory that all the bank accounts should be verified and linked with the demat account for the process of adding and withdrawing money. Hence, you can not transfer funds from a bank account that is not linked with your AC Agarwal demat account. You can add the bank account as a secondary bank account to your AC Agarwal demat account and then proceed with adding funds. ",
      answer2:
        "Remember that if you have transferred funds from an unlinked bank account to your AC Agarwal demat account, the funds will get auto-refunded to the source bank account within 5-7 business days. ",
    },
    {
      question:
        "Which bank accounts should I use to fund my account with AC Agarwal?",
      answer:
        "There are no restrictions and conditions for using bank accounts of a specific bank or financial institution. You can use any bank account to fund your AC Agarwal demat account. However, the bank account must be with a RBI registered and licensed bank and financial institution. Furthermore, it is compulsory to link the bank account to your AC Agarwal demat account after verification to add or withdraw funds from your AC Agarwal demat account. ",
      answer2:
        "You can add up to five accounts to your demat account and choose one of them to fund your account with AC Agarwal. ",
    },
    {
      question:
        "I added money to my AC Agarwal account, but the same is not reflecting yet. What should I do?",
      answer:
        "When you add the funds it usually takes 15-20 minutes for funds to reflect. It takes some time as the allocation is done by exchange first then it reflects in your Demat ledger and margin is provided. However, the if updation gets delayed and doesn't reflects within 20minutes due to any technical problem you can contact customer care to check.     ",
      answer2:
        "If you have transferred funds through UPI and the transaction fails, you need not worry. Your bank should reverse the funds within 2-3 bank working days. If you have transferred funds from an unlinked bank account to your AC Agarwal demat account, the funds will get auto-refunded to the source bank account within 5-7 business days. ",
      answer3:
        "If the problem still persists, please contact your bank and AC Agarwal’s customer care. We would be happy to help you and get you back to trading and investing as soon as possible.     Contact customer service at 0141-4920999/4049663 or Care@acagarwal.com",
    },
    {
      question:
        "How much time does it take for funds to be transferred from a bank account to AC Agarwal demat account?",
      answer:
        "Generally, the funds are transferred instantly from your bank account to your AC Agarwal demat account. The process is similar to paying online on a daily basis. However, sometimes, the process may take a few hours for the funds to reflect in your demat account. Upon successful debit, AC Agarwal gets an instant confirmation of the transfer of funds from the payment gateway. If the payment is successful, it reflects instantly into your demat account, which you can use to trade or invest. ",
      answer2:
        "In case the transfer of funds fails, the funds get auto-refunded to the source bank account within 5-7 business days. If you have any further queries, you can always contact us at our customer service portal. ",
    },
    {
      question:
        " Do I need to add funds separately for trading in Equity, F&O, and MCX/commodities?",
      answer:
        "AC Agarwal understands that trading and investing in various segments is time-sensitive to ensure you achieve the goals of your investment strategy. Hence, we have made the trading and investing process in such a way that you do not need to add funds separately for trading in Equity, F&O, and MCX/commodities.     ",
      answer2:
        "All you have to do is transfer the desired funds from your bank account to the AC Agarwal demat account, and you can use the funds to invest in any segment. However, it is required that you have chosen the relevant category while opening the demat account with AC Agarwal. ",
      answer3:
        "Furthermore, as per SEBI regulation, you can only use the premium received in options selling from the next trading day to trade or invest in a different segment. ",
    },
    {
      question:
        "What are the different modes of adding funds from my bank account to my AC Agarwal demat account?",
      answer:
        "Adding funds from your bank account to your demat account typically involves transferring money for purchasing securities, settling trades, and paying fees or charges. The modes available can vary based on the depository participant (DP), broker, and financial institution you're working with. Here are some common modes of adding funds to your demat account:",
      answer2: "- Online Bank Transfers or Net Banking ",
      answer3:
        "- NEFT (National Electronic Funds Transfer) and RTGS (Real-Time Gross Settlement)",
      answer4: "- UPI (Unified Payments Interface)",
      answer5: "- Cheque or Demand Draft",
      answer6: "- Mobile Banking Apps",
      answer7: "- Automated Payment Instructions",
    },
    {
      question:
        "Are there any charges for transferring money to my AC Agarwal demat account?",
      answer:
        "At AC Agarwal, we have always maintained that we want to offer our unique services to our traders and investors at the lowest possible cost. No charges are applicable when you transfer funds from your bank account to the AC Agarwal demat account. Whatever amount is debited from your bank account is reflected in your demat account, and you can use all of it to trade and invest in the stock market. ",
      answer2:
        "The zero transfer fee is applicable to every mode of money transfer, such as UPI/Netbanking/NEFT/IMPS/RTGS, or through any payment app. ",
    },
    {
      question:
        "What is withdrawable balance? Why are withdrawals only allowed to primary bank account?",
      answer:
        "A withdrawable balance refers to the amount of funds that you can transfer or withdraw from your demat account to your linked bank account. When you sell securities, receive dividends, or any other transaction that results in a credit to your demat account, the associated funds are often held as a cash balance within the demat account until you decide to withdraw or transfer them to your linked bank account. The amount you can withdraw is called withdrawable balance.    ",
      answer2:
        "SEBI has made it mandatory under its set guidelines for compliance, and it is AC Agarwal’s internal policy that the balance or the money you withdraw from your demat account is directly credited to your selected primary account. You can add five bank accounts in total and select one of them as your primary bank account to receive funds. ",
    },
    {
      question:
        "What is the process of withdrawing funds from my AC Agarwal demat account to my bank account? ",
      answer:
        "The process of withdrawing funds from your AC Agarwal demat account is simple and quick. You just have to log in to your demat account and navigate to the ‘Funds’ section. You will see a section to withdraw funds from your demat account with the withdrawable balance. You can click on the ‘Withdraw Funds’ button and enter the amount you want to withdraw and submit. ",
      answer2:
        "NOTE:- Make sure you raise a request before 3pm in order to receive the funds on the same day else it will be processed the next working day evening.",
      answer3:
        "Your withdrawal request will be credited to your bank account within 24 hours of being processed. On all trading days, except Saturdays and holidays, withdrawals are processed.     ",
    },
    {
      question:
        "What is the fund settlement policy of AC Agarwal? What happens to funds in my account if not used",
      answer:
        "SEBI has recently revised the fund settlement policy for all the stockbrokers in India with respect to the demat account holders’ funds lying with stockbrokers. As per SEBI, AC Agarwal or any other broker should settle running demat accounts of customers after considering the end-of-the-day obligation of funds as on the date of settlement across all the exchanges on the first Friday of the quarter. ",
      answer2:
        " There are 2 settlements :- 30 days and 90 days. If the account holder doesn't trade within 30 days, the free cash will be settled and sent back to account holder's bank. 90 days settlement is amndatory as per SEBI's law, free cash lying in holder's account will be sent back to holder's account. Clients will receive their funds on the first Friday of every month. If the first Friday is a trading holiday, AC Agarwal settles the funds on the previous trading day.",
    },
    {
      question:
        "Can I put in a request for instant withdrawal? Are there any charges?",
      answer:
        "AC Agarwal provides its Demat account holders with the convenience of requesting instant withdrawals from your choice of front-end applications, which include mobile, web, and desktope. Here's a straightforward guide:",
      answer2: "Log in to your Demat account. ",
      answer3: "Navigate to the Funds section.",
      answer4: 'Within the Funds section, find the "Withdraw Funds" option.',
      answer5:
        "Here, you will see the available amount for instant withdrawal.",
      answer6:
        "Click on the 'withdraw' button, specify the desired withdrawal amount, and confirm your request.",
      answer7:
        "Notably, making a request for instant withdrawal from your AC Agarwal Demat account is entirely free of charge. However, please be aware that you can only submit one request for instant withdrawal every 24 hours.",
      answer8:
        "Furthermore, it's essential to understand the withdrawal processing timeline. AC Agarwal processes payout requests for its account holders by the end of the same day if the request is raised before 3 PM. If a request is submitted after 3 PM, it will be processed on the next working day in the evening. This ensures efficient and timely handling of withdrawal requests.",
    },
    {
      question:
        "I am unable to withdraw the full amount from the available funds section. Is there any reason for this?",
      answer:
        "The only reason for you to be unable to withdraw the full amount from your AC Agarwal demat account is when you have unsettled dues in your demat account. For more clarity, you can navigate to the funds sections in your demat account and view the total margin available for trading, the withdrawable amount, and the unsettled dues.     ",
      answer2:
        "If you have settled your dues and the problem still persists, feel free to contact AC Agarwal at our customer service section, and we would be happy to provide you with an instant solution. ",
    },
    {
      question:
        "My fund balance is showing negative. What does it mean? What should I do?    ",
      answer:
        "There are a few reasons for your demat account to show you a negative fund balance. The reason can be any of the following: ",
      answer2:
        "Your trade position has incurred a loss and run into negative. In this case, you may have to deposit additional funds to your AC Agarwal demat account. ",
      answer3:
        "Your daily trading positions have been marked to market losses. ",
      answer4:
        "You have unsettled charges or dues, which may include DP charges, interest charges, brokerage, or any other type of charges. You can have better clarity about such charges in your financial ledger and contract notes.",
      answer5:
        "If your fund balance is showing negative, it is advisable that you immediately deposit additional funds to avoid system position square-off, penalties, or account blockage.",
    },
    {
      question:
        "Why haven't I received my money after submitting a withdrawal request 24 hours ago?",
      answer:
        "On Saturdays & Sundays (or public holidays), withdrawal requests take longer than 24 hours to process. Funds are credited within 24 hours on weekdays after equity withdrawal requests are processed at 8:30 p.m. (8 a.m. for commodities) on the day they are submitted. ",
      answer2:
        "Withdrawal requests are processed at 5 p.m. on Saturdays. Saturday payments may not appear on Trading portals; however, they will be updated and accessible for trading on Trading portals. By Monday EOD, these transfers will be reflected in your primary bank account.     ",
    },
    {
      question:
        "If I sell my shares or close my positions today, when will I be able to withdraw my funds?",
      answer:
        "Any equity-based trades, such as stock sales from Demat, BTST, or intraday, are settled on a T+1 basis. As a result, on T+1, the Money will be ready for withdrawal.",
      answer2:
        "Because all F&O transactions are settled on a T+1 basis, money will be available for withdrawal on a T+1 basis. After the corresponding settlement cycle, the proceeds from the sale will be available in your Withdrawal balance.",
    },
    {
      question:
        "I received funds in my bank account but I had not placed a fund withdrawal request. What should I do? ",
      answer:
        "If you have received funds in your primary bank account without placing a withdrawal request, it is because of the SEBI-mandated fund settlement policy. As per your monthly or quarterly opted fund settlement cycle, AC Agarwal transfers funds lying unused to the primary bank account mapped to your Trading account. ",
      answer2:
        "Hence, you will see such credit on a regular pre-defined basis, and there is no need to worry about receiving funds without placing a withdrawal request. ",
    },
    {
      question:
        "Can NRIs follow the same process as others to add and withdraw funds to and from their AC Agarwal demat account? ",
      answer:
        "Yes, once NRIs have an operational AC Agarwal demat account, they have the same trading app and trading platform. The process of withdrawing funds for NRIs is exactly similar to the process of withdrawing funds for any other category of investors and traders with an AC Agarwal demat account. ",
    },
  ];

  // Margins FAQs
  const marginsFaqs = [
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
      question:
        "How can I keep track of any possible margin shortfall and ensure that there is no penalty?",
      answer:
        "The best way to keep track of any potential margin shortfall is to regularly monitor the margin requirement and deposit money into your AC Agarwal trading account in case your current margin amount falls short. You can log in to your AC Agarwal Demat account and navigate to the margin requirement section to view the required margin and your current margin.",
      answer2:
        "Additionally, AC Agarwal informs its demat account holders about margin shortfalls through various channels and notifications such as app notifications, phone calls, email etc. It is essential to keep a close watch on the required margin throughout the trading day until the markets are closed",
    },
    {
      question: "What is a Margin Call? When and how will I receive it?",
      answer:
        "A margin call is a situation where the stockbroker demands that an investor deposit additional funds into their trading account to meet the minimum margin requirement. The margin requirement is the minimum amount of capital that must be maintained in a trading account when using leverage to trade financial instruments like stocks, commodities, or derivatives.",
      answer2:
        "A margin call occurs when the value of the assets in the investor's trading account falls below a certain level, often referred to as the maintenance margin or margin maintenance level. The broker sets this level as a way to mitigate the risk of potential losses. If the value of the investor's positions declines and the account equity (the value of the assets minus any borrowed money) falls below the maintenance margin level, the broker will issue a margin call.",
      answe3:
        "AC Agarwal sends margin statements daily and sends an email to the investor along with a Bloom app notification asking to add additional margin to the trading account. If the investor or trader fails to do so, it can lead to margin shortfall penalties. ",
    },
    {
      question: "How can I pledge my shares and mutual funds with AC Agarwal?",
      answer:
        " You can pledge your shares, Exchange Traded Funds (ETFs), and Mutual Funds in favour of AC Agarwal to get leverage under the collateral margin facility. AC Agarwal provides the collateral margin for any exchange approved collateral. The collaterals will attract haircust as decided by the exchange and if needed extra haircut will be charged by the broker. You can dowload the latest haircut file from the following link____________________________________________ . Furthermore, you can look at the pledge circular from the following pledge circular number................................................... ",
      answer2:
        "Log in to your demat account on AC Agarwal’s website or through your mobile app.",
      answer3:
        "Navigate to the ‘Pledge’ section, select the share or the mutual fund scheme you want to pledge, and click on ‘Pledge Now’. ",
      answer4: "Select the segment and quantity and tap on Pledge.",
      answer5: "Enter the OTP and verify. ",
      answer6:
        "Note: Pledging activity at ACA is done in batches , if you have requested to pledge your collateral upto 5:00 PM on the T-DAY then you will recive the margin agaisnt it on T+1 DAY if you have requested to pledge your collateral on T- DAY post 5:00 PM then you will recieve margins agaisnt your collateral on T+2 DAY. ",
    },
    {
      question:
        "How can I un-pledge my shares and mutual funds with AC Agarwal?",
      answer:
        "To un-pledge your pledged shares or mutual funds, you must raise an un-pledging ticket by logging into your back office through the Bloom app or the AC Agarwal’s website. Furthermore, contact our customer service or email us at customercare@acagarwal.com by EOD to know the status. Ensure you provide the following details: scrip name and quantity for un-pledging.",
    },
    {
      question:
        "How can I avail myself of hedge margin? Will I get Hedge margin benefit only for overnight position trades?",
      answer:
        "Hedge margin, in trading, refers to the amount of money or collateral required by a broker or exchange to maintain an open locked position. Hedging involves taking offsetting positions in different assets or markets to reduce risk. This strategy helps protect against potential losses in one position with gains in another.",
      answer2:
        "As of June 1, 2020, NSE has significantly reduced the margin requirements for several hedged options strategies with the least risk potential, reducing them to nearly 70% of the previously required amount.",
      answer3:
        "To benefit from hedge margin, you can log in to your Demat account, purchase both offsetting positions, and implement your hedging strategy. It's crucial to place these orders as margin orders to avail of the hedge margin benefit. For more information about hedge margin, feel free to reach out to AC Agarwal's customer service.",
      answer4:
        "AC Agarwal offers hedge margin benefits for both overnight position trades and intraday trade positions, providing traders with valuable risk management tools.",
    },
    {
      question: "What is the difference between Haircut and VAR margin?",
      answer: "Here is the difference between Haircut and VAR margin: ",
      answer2:
        "Haircut: A haircut is a percentage reduction applied to the market value of an asset when determining its collateral value for margin purposes. The purpose of a haircut is to provide a buffer against potential losses that might occur if the value of the asset drops suddenly. A haircut is meant to protect the interest of the stockbrokers, who may incur losses on the collateral amount provided to the traders if the asset’s value falls. ",
      answer3:
        "Value At Risk (VAR) Margin: VAR margin is the amount of margin required to cover potential losses based on the calculated VAR of a portfolio or position. It's a way of determining the margin requirement by considering the historical volatility and potential market movements of the assets in the portfolio. VAR margins are covered for a single day for liquid securities and three days for illiquid securities.",
    },
    {
      question:
        "Can I pledge my shares without DDPI to get the collateral margin?",
      answer:
        "No, you cannot pledge your shares without DDPI to get the collateral margin. The ratio of cash margin and collateral margin should be 50:50. ",
      answer2:
        "DDPI is a document that allows a broker to debit the securities from the client's demat account and deliver them to the exchange. The client does not have to enter the CDSL T-PIN and OTP to sell shares once the DDPI is submitted.",
    },
    {
      question:
        "Is the process of utilising margin same for NRIs as others on AC Agarwal?",
      answer:
        "For NRIs who wish to trade in the Indian stock market, AC Agarwal offers similar services and facilities as it does for other categories of demat account holders. They can utilize margin and trade effectively in most segments.",
      answer2:
        "However, it's important to note that if NRIs want to engage in trading in the Futures and Options (F&O) segment, the process differs from other categories of demat account holders. In this case, NRIs are typically required to pledge their securities in favor of the clearing member with a CP code.",
    },
    {
      question: "What is the haircut for Gsec when used as a collateral ",
      answer:
        "Presently, the minimum haircut for all types of G-secs when used as collateral is 10 percent.",
    },
    {
      question: "Can I use FD as a collateral",
      answer:
        "Certainly, AC Agarwal does provide the option to use Fixed Deposits (FD) as collateral for margin requirements. However, it's essential to be aware that there are terms and conditions associated with this. For detailed information on the terms and conditions regarding the use of FD as collateral, please refer to the provided link: Terms and Conditions.",
      answer2:
        "The provided limits on FDs are created in favour of AC Agarwal Share Brokers.",
    },
    {
      question:
        "What is the haircut for stocks and cash equivalants at AC Agarwal ?",
      answer:
        "The haircut for stocks and cash equivalents at AC Agarwal is ascertained as per the Exchange File. You can view the exchange file from the below link:",
    },
    {
      question:
        "Is it mandatory to keep 50% margin as cash/cash equivalanet ? what are the charges levied if a client fails to mainatin 50% margin as cahs/cash equivalant ",
      answer:
        "Yes, as mentioned above, it is mandatory to keep a 50% margin as cash/cash equivalent. If the client fails to maintain the required margin in cash/cash equivalant AC Agarwal will fulfil the required margins and charge 9%PA on the shortfall amount. The charges will be same in case of intraday of carry forward trade. ",
    },
    {
      question: "How do I check my overall margin allocation on AC Agarwal?",
      answer:
        "You can access information about your available margin by logging into your AC Agarwal demat account through various applications such as SOIL, BLOOM, and ACAMATH. These applications should provide you with real-time data on your margin allocation.",
      answer2:
        "If you prefer a more direct approach or need additional assistance, you can get in touch with AC Agarwal's Risk Management System (RMS) department. They will be able to provide you with information on your margin allocation. You can find the contact details for the RMS department on the AC Agarwal website.",
      answe3:
        "You can also reach out to Mr. Hasan directly through the number available on the website to inquire about your margin allocation. Mr. Hasan should be able to assist you with any questions or concerns you may have regarding your account.",
    },
  ];

  // Margins Facility FAQs
  const marginTradingFacilityFaqs = [
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

  // IPO FAQs
  const ipoFaqs = [
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

  // Share Transfer FAQs
  const shareTransferFaqs = [
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
      question:
        "How much time does AC Agarwal takes for the transfer of shares?",
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

  // Edis FAQs
  const edisFaqs = [
    {
      question: "What is e-DIS facility? Is it available on AC Agarwal?",
      answer:
        "e-DIS or Electronic Delivery Instruction Slip is an online facility provided by various stockbrokers to their demat account holders to allow selling shares without submitting the DDPI (previously POA). You can sell shares held in your demat account using the facility.",
      answer2:
        "AC Agarwal allows its demat account holders who have not submitted DDPI to sell shares using the e-DIS facility.",
    },
    {
      question: "Who can avail e-DIS facility on AC Agarwal?",
      answer:
        "AC Agarwal allows individuals, NRIs, and joint account holders to avail the e-DIS facility. However, you should ensure that you have revoked your DDPI to avail the e-DIS facility if you are a current registered DDPI user.",
    },
    {
      question:
        "What are the charges applicable for using e-DIS facility on AC Agarwal?",
      answer:
        "No, AC Agarwal does not charge any fee for using the e-DIS facility. It is entirely free of cost.",
    },
    {
      question: "How can I sell my shares using e-DIS facility?",
      answer:
        "Here is the detailed process of selling your shares using the e-DIS facility:",
      answer2: "Step 1: Login to your AC Agarwal demat account.",
      answer3:
        "Step 2: Click on Holdings, e-DIS button, and press Generate e-DIS TPIN.",
      answer4:
        "Step 3: Select the shares you want to sell using the e-DIS facility and enter the generated TPIN on the resulting CDSL website.",
      answer5: "Step 4: Enter the received OTP to confirm the order.",
    },
    {
      question: "Can I sell my shares without DDPI registration?",
      answer:
        "DDPI (previously POA) is not required to sell shares with AC Agarwal. You can sell the shares by opting for the e-DIS facility provided by AC Agarwal.",
      answer2:
        "DDPI is immensely beneficial for traders and investors as it eases the process of trading and investing by allowing to avoid the step of entering an OTP or using the e-DIS facility to place a sell order. The sell orders can be placed directly with AC Agarwal, and our expert team will sell the shares instantly as per your raised request, allowing you to get the best price for your securities.",
    },
    {
      question:
        "Can I revoke my DDPI and use the e-DIS functionality for sell transactions?",
      answer:
        "It is mandatory to revoke the DDPI (previously POA) to use the e-DIS functionality for sell transactions. Hence, you should ensure that you have revoked your DDPI to avail the e-DIS facility if you are a current registered DDPI user.",
    },
    {
      question:
        "Why do I need to take authorization under e-DIS to sell my own shares?",
      answer:
        "AC Agarwal has no control over the shares you hold in your demat account as they are under the management of CDSL. Hence, you will need to take authorization from CDSL to transfer your shares from the demat to the trading account to place a sell order.",
    },
    {
      question:
        "What is the process of generating CDSL TPIN for e-DIS on AC Agarwal?",
      answer:
        "Here is the process of generating CDSL TPIN for e-DIS on AC Agarwal:",
      answer2:
        "Step 1: Login to your AC Agarwal demat account on the Bloom app or the AC Agarwal website.",
      answer3:
        "Step 2: Click on Holdings, e-DIS button, and press Generate e-DIS TPIN.",
      answer4:
        "Step 3: Once you submit the request, you will receive the CDSL TPIN for e-DIS on your registered email and mobile number.",
    },
    {
      question: "What is the timeframe for TPIN validity?",
      answer:
        "Once you have generated the TPIN, it always remains valid. The only way for it to change is when you generate a new TPIN.",
    },
    {
      question: "I forgot my TPIN. How can I retrieve or regenerate it?",
      answer:
        "There is no need to worry if you have lost your TPIN. You can reset the TPIN from the CDSL authorization page while placing an order. Before entering the TPIN, you will get two options to either change the TPIN or retrieve it by clicking Forget TPIN.",
    },
    {
      question:
        "Do I need to generate TPIN every time for authorization on AC Agarwal?",
      answer:
        "No, as mentioned above, the TPIN remains valid indefinitely until you change it manually. Hence, you do not have to generate a TPIN every time and can use the same TPIN to authorize your sell orders on AC Agarwal.",
    },
    {
      question: "Can I do BTST with e-DIS on AC Agarwal?",
      answer:
        'BTST, or "Buy Today, Sell Tomorrow," refers to a trading strategy in which an investor buys shares of a stock and then sells them the next trading day. However, SEBI has mandated that investors or traders can not do BTST orders with e-DIS. Hence, you can not do BTST orders with e-DIS on AC Agarwal.',
    },
    {
      question:
        "Is there any limit to selling value via e-DIS per day on AC Agarwal?",
      answer:
        "AC Agarwal has always strived to provide the most effective services to its demat account holders across all segments. When you use the e-DIS facility, there is no limit to selling value, and you can make as many orders with any value you want per day on AC Agarwal.",
    },
    {
      question:
        "Can I do e-DIS authorization during off-market hours on AC Agarwal?",
      answer:
        "Unfortunately, SEBI does not allow e-DIS authorization during off-market hours on AC Agarwal. For using the e-DIS, you can only seek authorization during trading hours.",
    },
    {
      question: "Is e-DIS applicable for intraday transactions as well?",
      answer:
        "No, SEBI has mandated that investors and traders can only use the e-DIS facility for delivery trades and not for intraday transactions.",
    },
    {
      question:
        "What is BOID/Demat account number and where can I find mine on Agarwal?",
      answer:
        "BOID or the Beneficiary Owner Identification Number refers to a 16-digit identification number linked to your demat account, which is unique to every demat account holder. It is a mix of the first 8 digits, which are the Depository Participant ID, and the last 8 digits, which are the client ID with the DP.",
      answer2:
        "You can find the BOID on the e-DIS authorization screen on the AC Agarwal web portal as well as the Bloom mobile app.",
    },
    {
      question: "Can NRIs use e-DIS facility similar to others on AC Agarwal?",
      answer:
        "Yes, AC Agarwal has designed its e-DIS facility in such a way that NRIs can use it with ease and with a similar process as used by other categories of investors and traders on AC Agarwal.",
    },
  ];

  // BackOffice FAQs
  const backOfficeFaqs = [
    {
      question:
        "Where can I check my PNL report and financial ledger on AC Agarwal?",
      answer:
        "AC Agarwal has created its web portal and trading apps and tools to ensure you have all the necessary information available in a matter of clicks. You can check your PNL report and financial ledger by accessing the back office of AC Agarwal or client's back office 'Tradeweb' directly through website.",
      answer2:
        "Here is the link for the back office of AC Agarwal: [AC Agarwal Back Office](https://backoffice.acagarwal.com:8092/login.aspx?ReturnUrl=%2fdefault.aspx)",
    },
    {
      question:
        "How do I log-in to the back office and its overview on AC Agarwal?",
      answer:
        "Logging in to AC Agarwal’s back office is fairly simple. All you need is your Login ID and the Password. The Login ID is the same as your AC Agarwal Client Code. The password was sent to you when you opened the demat account with AC Agarwal. You can also click on Get Password if you have forgotten your password. Once you have logged in, you can view the overview and all the information about your trading activities.",
    },
    {
      question:
        "How to check the buy price of the holding and positions on AC Agarwal?",
      answer:
        "You can check the buy price of all your holdings by logging into your demat account on the AC Agarwal website or any of trading apps and navigating to the ‘Holdings’ section.",
      answer2:
        "However, if you want to check the average buy/sell price for the derivative segment, you can log in to AC Agarwal’s back office and navigate to trade confirmation, contract note or the net positions section.",
    },
    {
      question:
        "How can I download contract notes from AC Agarwal's back office?",
      answer:
        "Downloading contract notes from AC Agarwal is a simple and straightforward process that takes only a few minutes. To download the contract notes, follow the below process:",
      answer2:
        "Step 1: Navigate to the Login section, click on the Back Office tab, and select Client Login.",
      answer3:
        "Step 2: Click on 'Digital Documents' then click on second dropdown and select 'Combine Contract' and Choose the time period for which you want to view the contract note.",
      answer4:
        "Step 3: Click on View, and you can see the contract note. Click on the download tab, and it will start downloading the contract note.",
    },
    {
      question:
        "Can you give a brief overview for back-office options like what is the ledger balance, less margin, and net balance?",
      answer:
        "You can enjoy numerous options when you log in to the AC Agarwal back office. Some of these are:",
      answer2:
        "Ledger Balance: A ledger balance in a demat account refers to the total amount of securities or financial instruments held in the account at a specific point in time, excluding the trade amount.",
      answer3:
        "Less Margin: The less margin is the total amount that you are using in your cash/derivatives positions.",
      answer4:
        "Net Balance: Net balance is the total amount left after subtracting the ledger balance and the less margin.",
      answer5: "Net Balance = (Ledger Balance - Less Margin)",
    },
    {
      question:
        "How to figure out how many shares are pledged of a particular scrip using AC Agarwal's back office?",
      answer:
        "AC Agarwal allows you to see how many shares are currently pledged of a particular scrip. You can log in to AC Agarwal’s back office using your Client ID and Password and navigate to the Demat Holdings section. The section allows you to see an overview of DP details such as pledge stocks, pledge value, and DP lock stocks.",
      answer2:
        "If you want to check your pledged margin, you can navigate to the Limit section and see Collaterals or MF Collaterals in your mobile or web app.",
    },
    {
      question: "Where do you check ledger balance and the available limit?",
      answer:
        "You can check the ledger balance from AC Agarwal’s Back Office ledger. However, you can calculate the available limit by adding the above ledger balance and the pledge value (collateral value).",
    },
    {
      question:
        "How to update the buying price of transferred shares using AC Agarwal's back office?",
      answer:
        "If you have transferred shares from a different demat account to the AC Agarwal demat account, we cannot know the buy price at which you originally bought the transferred shares. However, AC Agarwal has created an easy system for you to update the buying price of the transferred shares so that you have transparency on the PNL and your current holdings.",
      answer2:
        "Client just needs to e-mail us the ISIN of the scrip, quantities, and the buying price of that scrip. AC Agarwal will update the same in your account manually within 2-3 working days.",
      answer3:
        "Your P&L will then be updated and calculated according to the details provided by you.",
      answer4: "You can share the details on Care@acagarwal.com.",
    },
    {
      question: "How to do E-voting in CDSL through AC Agarwal's back office?",
      answer:
        "Unfortunately, AC Agarwal does not provide an e-voting facility to the demat account holders. You can e-vote by visiting the CDSL website.",
    },
    {
      question:
        "Can NRIs use a similar process as others to use AC Agarwal's back office?",
      answer:
        "Yes, there is no difference in the usage of AC Agarwal’s back office for NRIs, and they can use the same process as others to use AC Agarwal’s back office.",
    },
  ];

  // API FAQs
  const apisFaqs = [
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

  // CustomerService FAQs
  const customerServiceFaqs = [
    {
      question:
        "What is the best way to contact Customer Service for AC Agarwal?",
      answer:
        "AC Agarwal is committed to providing exceptional customer service to its Demat account holders. For support, visit the AC Agarwal website or the AC Agarwal-designed applications, click on 'SUPPORT' in the 'Get in Touch' section, and you'll find our contact details:",
      answer2: "Email: care@acagarwal.com",
      answer3: "Phone: 0141-4920999 / 4049663",
    },
    {
      question:
        "Are there any charges to call the customer care for AC Agarwal?",
      answer:
        "No, there are no charges to call customer care for AC Agarwal from our side. Contacting us is fully free of cost, and you can do so unlimited times. However, your service provider may charge you with the standard calling or data charges.",
    },
    {
      question:
        "Where do I find answers to my questions related to the AC Agarwal account?",
      answer:
        "At AC Agarwal, we have always tried to make our platform and trading apps as user-friendly and self-explanatory as possible. You can find most of the answers with the web portal or the trading apps.",
      answer2:
        "However, if you have any queries regarding the AC Agarwal demat account along with trading and investing, you can contact AC Agarwal's customer care, and we would be happy to help you.",
      answer3: "You can contact us at:",
      answer4: "Email: care@acagarwal.com",
      answer5: "Phone: 0141-4920999 / 4049663",
    },
    {
      question:
        "What information is required while calling the customer care support of AC Agarwal?",
      answer:
        "Although we would love to assist you as long as it takes, we value your time when you call AC Agarwal’s customer care. To ensure that we can assist you as fast as possible, we request you to keep in handy your Client code (provided at the time of account opening).",
    },
    {
      question: "What are the timings for customer care support of AC Agarwal?",
      answer: "You can contact us between 9 AM to 6 PM.",
    },
    {
      question:
        "How long does it usually take for the AC Agarwal team to resolve my issues?",
      answer:
        "AC Agarwal is highly committed to resolving every issue for its demat account holders instantly. However, sometimes, some issues may require a little more time from our side to ensure the resolution is satisfactory. However, most issues get resolved within 24 hours. If not, our customer care executives communicate a deadline for the resolution of the issue.",
    },
    {
      question:
        "How can I reach out to the customer support team on AC Agarwal’s Social Media handles?",
      answer:
        "AC Agarwal understands the need for social channels to resolve queries or to hold relevant discussions. Hence, we have created our presence across social media channels. Here are the links for all our social media channels:",
      answer2: "Facebook: https://www.facebook.com/acagarwalsharebrokers",
      answer3:
        "Instagram: https://www.instagram.com/acagarwalofficial/?igshid=YmMyMTA2M2Y%3D",
      answer4: "Twitter: https://twitter.com/acagarwal_in?s=09",
      answer5:
        "LinkedIn: https://www.linkedin.com/company/ac-agarwal-share-brokers/",
    },
    {
      question:
        "What is the email address to contact Customer Service for AC Agarwal?",
      answer: "You can email AC Agarwal’s customer care at: care@acagarwal.com",
    },
    {
      question: "What is the customer care helpline number for AC Agarwal?",
      answer:
        "The customer care helpline for AC Agarwal is: 0141-4920999 / 4049663",
    },
    {
      question: "I have feedback for the AC Agarwal team, how do I share it?",
      answer:
        "We always value what our demat account holders have to say about our services and how we can make them better. Hence, we would love to have your feedback and work towards incorporating them across all our services.",
      answer2:
        "You can send your feedback to care@acagarwal.com or contact us at any of our social media channels. You can also call us at 0141-4920999 to talk to us and give us direct feedback.",
    },
    {
      question: "What is the escalation matrix of customer service?",
      answer:
        "You can check the escalation Matrix by opening the AC Agarwal website and navigating to the 'Annexure A Escalation Matrix' section by clicking on SUPPORT.",
    },
  ];

  const componentMap = {
    "Account Opening on AC Agarwal": {
      component: AccountOpening,
      props: { faqs: accountOpeningFaqs },
      q1: "What is a Demat account and why do I need it?",
      q2: "What is the process of opening a Demat account with AC Agarwal?",
      q3: "How much time does it take to open a Demat Account on AC Agarwal?",
      q4: "What is the Demat account opening fee for AC Agarwal?",
      q5: "What are Annual Maintenance Charges (AMC)? What are the AMC Charges for AC Agarwal?",
      q6: "What benefits can I avail on account opening with AC Agarwal?",
      q7: "What are the documents required to complete the KYC process for opening a Demat account with AC Agarwal?",
      q8: "Can I open multiple Demat accounts with AC Agarwal?",
      q9: "What is Demat Debit and Pledge Instruction (DDPI), and why is it needed while opening a Demat account with AC Agarwal?",
      q10: "Can NRIs open a Demat account with AC Agarwal?",
      q11: "Which investment products are available to invest/trade in using AC Agarwal’s Demat account?",
      q12: "Can I open a Demat and trading account jointly with AC Agarwal?",
      q13: "Which entities can open a Demat account with AC Agarwal?",
      q14: "What are nominees, and how can I add nominees to my AC Agarwal Demat account?",
      q15: "What is FATCA declaration form and why do I need to fill it for opening an account with AC Agarwal?",
      q16: "Can I open an online account if my current mobile number is not registered with Aadhaar?",
      q17: "What is In-Person Verification (IPV) and why it is needed?",
      q18: "What are CDSL and NSDL? Which DP is AC Agarwal integrated with?",
      q19: "How to close a Demat & Trading account online on AC Agarwal?",
      q20: "Can we transfer shares from other brokers? What is the process to transfer shares?",
      q21: "Can I open a Trading Account when I already have a Demat Account and vice versa?",
    },

    "Trading/ Investing on AC Agarwal": {
      component: TradingAndInvesting,
      props: { faqs: tradingInvestingFaqs },
      q1: "How can I trade/invest in equities using the AC Agarwal demat account?",
      q2: "How can I trade/invest in commodities using the AC Agarwal demat account?",
      q3: "How can I trade/invest in derivatives (F&O) using the AC Agarwal demat account?",
      q4: "How can I trade/invest in currencies using the AC Agarwal demat account?",
      q5: "Can I invest /trade in penny stocks? What is AC Agarwal’s policy regarding penny stocks?",
      q6: "What are your square-off timings? In case of loss, what is your square-off percentage?",
      q7: "Why is DDPI required? Can I sell shares without a physical DDPI?",
      q8: "What is call-up trading? Can I buy or sell shares by calling up AC Agarwal?",
      q9: "What are ASM and GSM? Can I trade in both ASM and GSM category shares?",
      q10: "What will happen if I don't square off my Option contract on expiry day?",
      q11: "What are the exchange and auto-square-off timings for all the segments?",
      q12: "What is the process of delivery and intraday trading on AC Agarwal?",
      q13: "How can I convert a trade from Delivery to Intraday or vice versa?",
      q14: "Can I place an After-Market-Order (AMO)? What are the timings for various asset classes to place AMO?",
      q15: "What is a Bracket Order? How does one place a Bracket Order on AC Agarwal?",
      q16: "What is a Slicing Order? How does one place a Slicing Order on AC Agarwal?",
      q17: "What are Basket Orders? How does one place Basket Orders on AC Agarwal?",
      q18: "What are Bulk Orders? How does one place Bulk Orders on AC Agarwal?",
      q19: "What are Margin Orders? How can I place Margin Orders on AC Agarwal?",
      q20: "What is a Delivery Order? How can I place a Delivery Order on AC Agarwal?",
      q21: "What is a SIP Order? How can I place a SIP Order on AC Agarwal?",
      q22: "Can NRIs trade and invest in various asset classes and place special orders on AC Agarwal?",
    },

    "Adding and withdrawing Funds on AC Agarwal": {
      component: AddingFunds,
      props: { faqs: addingWithdrawingFundsFaqs },
      q1: "How can I add my bank account for transferring funds to my AC Agarwal demat account?",
      q2: "How many banks account can I add to my AC Agarwal demat account? Is there a limit?",
      q3: "What is the maximum amount that I can add to my AC Agarwal demat Account in a single transfer?",
      q4: "What is a primary bank account? Can I change the primary bank account on AC Agarwal?",
      q5: "Can I transfer funds from a bank account that is not linked to my AC Agarwal demat account?",
      q6: "Which bank accounts should I use to fund my account with AC Agarwal?",
      q7: "I added money to my AC Agarwal account, but the same is not reflecting yet. What should I do?",
      q8: "How much time does it take for funds to be transferred from a bank account to AC Agarwal demat account?",
      q9: "Do I need to add funds separately for trading in Equity, F&O, and MCX/commodities?",
      q10: "What are the different modes of adding funds from my bank account to my AC Agarwal demat account?",
      q11: "Are there any charges for transferring money to my AC Agarwal demat account?",
      q12: "What is withdrawable balance? Why are withdrawals only allowed to primary bank account?",
      q13: "What is the process of withdrawing funds from my AC Agarwal demat account to my bank account?",
      q14: "What is the fund settlement policy of AC Agarwal? What happens to funds in my account if not used",
      q15: "Can I put in a request for instant withdrawal? Are there any charges?",
      q16: "I am unable to withdraw the full amount from the available funds section. Is there any reason for this?",
      q17: "My fund balance is showing negative. What does it mean? What should I do?",
      q18: "Why haven't I received my money after submitting a withdrawal request 24 hours ago?",
      q19: "If I sell my shares or close my positions today, when will I be able to withdraw my funds?",
      q20: "I received funds in my bank account but I had not placed a fund withdrawal request. What should I do?",
      q21: "Can NRIs follow the same process as others to add and withdraw funds to and from their AC Agarwal demat account?",
    },

    "Margins on AC Agarwal": {
      component: Margin,
      props: { faqs: marginsFaqs },
      q1: "What is Margin? How much margin does AC Agarwal provide to its demat account holders?",
      q2: "What are the costs and interest charged by AC Agarwal for providing the leverage facility?",
      q3: "How much leverage does AC Agarwal provide to its demat account holders for all segments?",
      q4: "Which financial products qualify for trading/investing using margin on AC Agarwal?",
      q5: "What will happen if I do not maintain a sufficient margin?",
      q6: "How do I check for margin requirements on every trade/order on AC Agarwal?",
      q7: "Why is the higher-than-usual margin blocked for my F&O trades close to expiry?",
      q8: "What is Margin Penalty? When is it levied by AC Agarwal?",
      q9: "How can I keep track of any possible margin shortfall and ensure that there is no penalty?",
      q10: "What is a Margin Call? When and how will I receive it?",
      q11: "How can I pledge my shares and mutual funds with AC Agarwal?",
      q12: "How can I un-pledge my shares and mutual funds with AC Agarwal?",
      q13: "How can I avail myself of hedge margin? Will I get Hedge margin benefit only for overnight position trades?",
      q14: "What is the difference between Haircut and VAR margin?",
      q15: "Can I pledge my shares without DDPI to get the collateral margin?",
      q16: "Is the process of utilising margin same for NRIs as others on AC Agarwal?",
      q17: "What is the haircut for Gsec when used as a collateral",
      q18: "Can I use FD as a collateral",
      q19: "what is the haircut for stocks and cash equivalants at AC Agarwal ?",
      q20: "Is it mandatory to keep 50% margin as cash/cash equivalanet ? what are the charges levied if a client fails to mainatin 50% margin as cahs/cash equivalant ",
      q21: "How do I check my overall margin allocation on AC Agarwal? ",
    },

    "Margin Trading Facility on AC Agarwal": {
      component: MarginTradingFacility,
      props: { faqs: marginTradingFacilityFaqs },
      q1: "What is Margin Trading Facility, and how can I trade with MTF on AC Agarwal?",
      q2: "What Can be Used as Collateral for Margin Trading Facility?",
      q3: "How Long Can I Hold My Margin Funding Stocks?",
      q4: "What is the Interest Rate Charged on Margin Trading Facility by AC Agarwal?",
      q5: "How Does Pledging of Shares for MTF Work? What are the cut-off timings?",
      q6: "What Happens If I do not pledge my MTF holdings?",
      q7: "How to Exit Positions Bought Using Margin Trading Facility?",
      q8: "What are the Charges for Pledging/Un-Pledging Stocks on AC Agarwal?",
      q9: "Can I do a BTST (Buy Today, Sell Tomorrow) trade using MTF on AC Agarwal?",
      q10: "What are the benefits and risks associated with trading/investing through MTF?",
      q11: "Under What Circumstances will RMS liquidate My MTF Holdings?",
      q12: "How is MTM Coverage calculated?",
      q13: "Which Shares are Eligible for Margin Trading Facility on AC Agarwal?",
      q14: "Can NRIs use the Margin Trading Facility on AC Agarwal with the same process as others?",
    },

    "Initial Public Offering (IPO) on AC Agarwal": {
      component: Ipo,
      props: { faqs: ipoFaqs },
      q1: "What is an Initial Public Offering (IPO) and how can I apply for it through AC Agarwal?",
      q2: "Are there any charges to apply for an IPO through AC Agarwal?",
      q3: "What is the process to withdraw/delete my IPO application after I have applied?",
      q4: "Can I pre-apply for an IPO on AC Agarwal?",
      q5: "When can I start pre applying for upcoming IPOs?",
      q6: "How will I make payment for the IPO or will my funds get blocked for ,PO?",
      q7: "What is ASBA? How can I apply for an IPO using ASBA?",
      q8: "Can I cancel my IPO bid once the application process has closed?",
      q9: "How do I check the IPO allotment status on AC Agarwal?",
      q10: "Can I apply for an IPO in other categories apart from retail on AC Agarwal?",
      q11: "What is the IPO mandate? When will I receive it?",
      q12: "When will I see the IPO shares reflect in my AC Agarwal demat account?",
      q13: "Why it is showing as payment pending even though I have approved the payment mandate?",
      q14: "What happens to my blocked amount if I do not receive the IPO shares?",
      q15: "Can I apply SME IPO on AC Agarwal?",
      q16: "Can NRIs invest in IPOs and SME IPOs on AC Agarwal with the same process as others?",
    },

    "Share Transfer on AC Agarwal": {
      component: ShareTransfer,
      props: { faqs: shareTransferFaqs },
      q1: "What is re-materialization? What is the process of re-materialization of shares on AC Agarwal?",
      q2: "What is the process of transferring shares from another demat account to AC Agarwal demat account?",
      q3: "Are there any charges for converting physical shares into Demat with AC Agarwal?",
      q4: "If I have multiple demat accounts with different brokers, how do I see my holdings across the 3 brokers on CDSL easiest platform?",
      q5: "Can I dematerialize shares held by a single owner in a joint demat account with AC Agarwal?",
      q6: "I want to gift some shares to my children/relatives. How can I do this with AC Agarwal?",
      q7: "What is the stamp duty applicable on share transfer? Where do I get these stamps?",
      q8: "Where should I send the shares for transfer? Can I hand them over at your Branch Office?",
      q9: "How do I ensure that the Transfer Deed is complete before sending it to the Company?",
      q10: "My shares are transferred to the Company’s Unclaimed Suspense Account. What is the procedure to claim the shares and the accrued dividend?",
      q11: "Once my shares are dematted, can I ever get them converted into physical shares?",
      q12: "In case of joint holdings, in the event of the death of one shareholder, how do the surviving shareholders get the shares in their names?",
      q13: "I hold more than one folio in the same name. Can I consolidate these folios?",
      q14: "Can I claim old dividends relating to past years that I have not received?",
      q15: "What is the procedure for deletion of name on death of joint shareholder?",
      q16: "Who are the participants while transferring shares from one Demat account to another?",
      q17: "Can I transfer shares from one demat account to another manually? What is the process?",
      q18: "How much time does AC Agarwal takes for the transfer of shares?",
      q19: "Are there any tax implications for share transfer for the shareholders?",
      q20: "I have transferred my shares from another broker, how do I adjust my average buy price?",
      q21: "Can NRI transfer shares similar to the process as others on AC Agarwal?",
    },

    "e-DIS on AC Agarwal": {
      component: Edis,
      props: { faqs: edisFaqs },
      q1: "What is e-DIS facility? Is it available on AC Agarwal?",
      q2: "Who can avail e-DIS facility on AC Agarwal?",
      q3: "What are the charges applicable for using e-DIS facility on AC Agarwal?",
      q4: "How can I sell my shares using e-DIS facility?",
      q5: "Can I sell my shares without DDPI registration?",
      q6: "Can I revoke my DDPI and use the e-DIS functionality for sell transactions?",
      q7: "Why do I need to take authorization under e-DIS to sell my own shares?",
      q8: "What is the process of generating CDSL TPIN for e-DIS on AC Agarwal?",
      q9: "What is the timeframe for TPIN validity?",
      q10: "I forgot my TPIN. How can I retrieve or regenerate it?",
      q11: "Do I need to generate TPIN every time for authorization on AC Agarwal?",
      q12: "Can I do BTST with e-DIS on AC Agarwal?",
      q13: "Is there any limit to selling value via e-DIS per day on AC Agarwal?",
      q14: "Can I do e-DIS authorization during off-market hours on AC Agarwal?",
      q15: "Is e-DIS applicable for intraday transactions as well?",
      q16: "What is BOID/Demat account number and where can I find mine on Agarwal?",
      q17: "Can NRIs use e-DIS facility similar to others on AC Agarwal?",
    },

    "Back Office on AC Agarwal": {
      component: BackOffice,
      props: { faqs: backOfficeFaqs },
      q1: "Where can I check my PNL report and financial ledger on AC Agarwal?",
      q2: "How do I log-in to the back office and its overview on AC Agarwal?",
      q3: "How to check the buy price of the holding and positions on AC Agarwal?",
      q4: "How can I download contract notes from AC Agarwal's back office?",
      q5: "Can you give a brief overview for back-office options like what is the ledger balance, less margin, and net balance?",
      q6: "How to figure out how many shares are pledged of a particular scrip using AC Agarwal's back office?",
      q7: "Where do you check ledger balance and the available limit?",
      q8: "How to update the buying price of transferred shares using AC Agarwal's back office?",
      q9: "How to do E-voting in CDSL through AC Agarwal's back office?",
      q10: "Can NRIs use a similar process as others to use AC Agarwal's back office?",
    },

    "APIs on AC Agarwal": {
      component: Api,
      props: { faqs: apisFaqs },
      q1: "What is a Trading API? How does it help in trading?",
      q2: "What are the APIs provided by AC Agarwal for its investors and traders?",
      q3: "What are the charges for using various APIs provided by AC Agarwal?",
      q4: "What are the benefits of using AC Agarwal APIs?",
      q5: "How to generate or get an API key?",
      q6: "How long does it take to activate an API subscription on AC Agarwal?",
      q7: "What are all the asset classes where I can place orders using AC Agarwal's APIs?",
      q8: "Are bracket and cover orders available in AC Agarwal's APIs?",
      q9: "What is the difference between 'Interactive APIs' and 'Market Data APIs'?",
      q10: "What type of historical data I can check in APIs and how to fetch it?",
      q11: "Can orders be modified using APIs?",
      q12: "For how many days can I place an order using the access token or is there any validity for the access token?",
      q13: "How can I check if my orders have been successfully executed or not from the Response Details?",
      q14: "Can NRIs invest in IPOs and SME IPOs on AC Agarwal with the same process as others?",
    },

    "Customer Service on AC Agarwal": {
      component: CustomerService,
      props: { faqs: customerServiceFaqs },
      q1: "What is the best way to contact Customer Service for AC Agarwal?",
      q2: "Are there any charges to call the customer care for AC Agarwal?",
      q3: "Where do I find answers to my questions related to the AC Agarwal account?",
      q4: "What information is required while calling the customer care support of AC Agarwal?",
      q5: "What are the timings for customer care support of AC Agarwal?",
      q6: "How long does it usually take for the AC Agarwal team to resolve my issues?",
      q7: "How can I reach out to the customer support team on AC Agarwal’s Social Media handles?",
      q8: "What is the email address to contact Customer Service for AC Agarwal?",
      q9: "What is the customer care helpline number for AC Agarwal?",
      q10: "I have feedback for the AC Agarwal team, how do I share it?",
      q11: "What is the escalation matrix of customer service?",
    },
  };

  // const handleSearchInputChange = (event) => {
  //   setSearchQuery(event.target.value);
  //   setActiveComponent(null); // Reset active component when search query changes
  // };

  // const filteredComponents = Object.keys(componentMap).filter((title) => {
  //   return title.toLowerCase().includes(searchQuery.toLowerCase());
  // });

  const [searchQuery, setSearchQuery] = useState("");
  const [activeComponent, setActiveComponent] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [tempQuery, setTempQuery] = useState("");

  const toggleComponentVisibility = (title) => {
    setActiveComponent(title);
  };

  const handleInputChange = (event) => {
    const query = event.target.value;
    setTempQuery(query);

    if (query) {
      const matchingSuggestions = [];

      Object.keys(componentMap).forEach((title) => {
        const questions = Object.keys(componentMap[title])
          .filter((key) => key.startsWith("q"))
          .map((key) => componentMap[title][key]);

        questions.forEach((question) => {
          if (question.toLowerCase().includes(query.toLowerCase())) {
            matchingSuggestions.push(question);
          }
        });
      });

      setSuggestions(matchingSuggestions.slice(0, 5)); // Limit to top 5 suggestions
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = () => {
    setSearchQuery(tempQuery);
    setSuggestions([]); // Clear suggestions on search

    const matchingComponents = Object.keys(componentMap).filter((title) => {
      const questions = Object.keys(componentMap[title])
        .filter((key) => key.startsWith("q"))
        .map((key) => componentMap[title][key]);

      const titleMatches = title
        .toLowerCase()
        .includes(tempQuery.toLowerCase());
      const questionsMatch = questions.some((question) =>
        question.toLowerCase().includes(tempQuery.toLowerCase())
      );

      return titleMatches || questionsMatch;
    });

    if (matchingComponents.length > 0) {
      setActiveComponent(matchingComponents[0]); // Set the first matching component as active
    } else {
      setActiveComponent(null); // Reset if no matching component found
    }

    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" }); // Add this line
    }
  };

  const filteredComponents = Object.keys(componentMap).filter((title) => {
    const component = componentMap[title];
    const questions = Object.keys(component)
      .filter((key) => key.startsWith("q"))
      .map((key) => component[key]);

    const titleMatches = title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const questionsMatch = questions.some((question) =>
      question.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return titleMatches || questionsMatch;
  });

  return (
    <div>
      <Navbar navColor={navColor} />
      <div className="">
        <div className="max-container">
          <section>
            <div className="flex flex-col items-center justify-center lg:pt-32 pt-20 pb-28">
              <h1 className="font-medium text-[32px] text-center w-[90%] lg:w-auto lg:text-[52px] leading-[48px] tracking-tight font-poppins text-[#161C2DCC] ">
                Welcome To Support
              </h1>
              <p className="text-[15px] lg:text-[28px] leading-[26px] lg:leading-[28px] text-center tracking-tight font-poppins text-[#161c2ddc] opacity-80 lg:mt-7 mt-2">
                Type your query or browse the FAQ section below
              </p>

              <div className="relative w-[90%] lg:w-[50%] h-[78px] mt-14">
                <input
                  type="text"
                  placeholder="Type here"
                  value={tempQuery}
                  onChange={handleInputChange}
                  className="w-[100%] bg-[#FCFDFE] h-[78px] rounded-[60px] border line-clamp-1 font-dmSans text-[18px] lg:pl-8 pl-5 pr-40 outline-none"
                />
                <button
                  className="lg:w-[134px] w-[114px] h-[55px] rounded-[56px] bg-[#244896] hover:bg-[#5b76af] font-medium font-dmSans text-[18px] text-white absolute top-3 right-4"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>

              {suggestions.length > 0 && (
                <div className="w-[90%] lg:w-[50%] mt-2 bg-white border rounded-lg shadow-lg z-10">
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => {
                        setTempQuery(suggestion);
                        setSuggestions([]);
                      }}
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-start lg:items-center justify-center text-center lg:space-x-2 w-[70%] lg:mt-6 mt-6">
                <img
                  src={filledChecked}
                  alt=""
                  className="lg:ml-0 ml-2 lg:mt-0 mt-1"
                />
                <p className="font-poppins lg:text-[16px] text-[15px] text-[#161C2DCC] opacity-80">
                  Questions related to corporate terminology and work.
                </p>
              </div>
            </div>
          </section>

          <section className="FAQ px-5 w-full lg:px-20 lg:pb-40 pb-28" ref={sectionRef}>
            {filteredComponents.map((title, index) => {
              const Component = componentMap[title].component;
              const componentProps = componentMap[title].props;

              // Get all questions dynamically
              const questions = Object.keys(componentMap[title])
                .filter((key) => key.startsWith("q"))
                .map((key) => componentMap[title][key]);

              const matchingQuestions = questions.filter((question) =>
                question.toLowerCase().includes(searchQuery.toLowerCase())
              ).length;

              return (
                <div
                  key={index}
                  className={`rounded-3xl px-0 py-0 my-5 ${
                    activeComponent === title
                      ? "bg-[#fcfdfe] border"
                      : "bg-[#fcfdfe]"
                  }`}
                >
                  <div
                    className={`w-[100%] bg-transparent h-[120px] rounded-[18px] px-5 lg:px-20 ${
                      activeComponent === title ? "" : "border py-8"
                    } flex items-center justify-between cursor-pointer`}
                    onClick={() => toggleComponentVisibility(title)}
                  >
                    <div className="">
                      <p className="font-semibold lg:text-[26px] text-[20px] leading-[35px] text-[#161c2ddc] font-poppins">
                        {title}
                      </p>
                      {/*{matchingQuestions > 0 && (
                        <p className="text-[#161C2DCC] opacity-80 font-poppins lg:text-[16px] text-[15px] leading-[35px]">
                          {matchingQuestions} matching questions
                        </p>
                      )}*/}
                    </div>
                    <div>
                      <img
                        src={openArr} // Assuming you have dropDownArr defined
                        alt=""
                        className="cursor-pointer min-w-5"
                        onClick={() => toggleComponentVisibility(title)}
                      />
                    </div>
                  </div>
                  {activeComponent === title && (
                    <Component {...componentProps} searchQuery={searchQuery} />
                  )}
                </div>
              );
            })}
          </section>
        </div>
        <ContactSupport />
        <CustomerSupportAndTable />
      </div>
      <Footer backColor={backColor} />
    </div>
  );
};

export default Support;
