import React, { useState } from "react";

const ExchangeCharges = () => {
  const datasets = {
    nseCashIntraday: [
      {
        tableHead: "NSE Cash Segment",
      },
      {
        segment: "Intraday Turnover",
        buyValue: "₹5000000",
        sellValue: "₹500000",
      },
      { segment: "SEBI Turnover", buyValue: "₹5", sellValue: "₹5" },
      //   { segment: "PFT Charges", buyValue: "₹5", sellValue: "₹5" },
      { segment: "Stamp Duty", buyValue: "₹150", sellValue: "₹0" },
      { segment: "Transaction CHGS", buyValue: "₹172.5", sellValue: "₹172.5" },
      { segment: "STT", buyValue: "₹0", sellValue: "₹1250" },
      { segment: "GST", buyValue: "₹31.95", sellValue: "₹31.95" },
      {
        totalBuyValue: "₹359.45",
        totalSellValue: "₹1459.45",
        total: "₹1818.9",
      },
    ],
    nseCashDelivery: [
      { tableHead: "NSE Cash Segment" },
      {
        segment: "Delivery Turnover",
        buyValue: "₹5000000",
        sellValue: "₹500000",
      },
      { segment: "SEBI Turnover", buyValue: "₹5", sellValue: "₹5" },
      //   { segment: "PFT Charges", buyValue: "₹10", sellValue: "₹10" },
      { segment: "Stamp Duty", buyValue: "₹750", sellValue: "₹0" },
      { segment: "Transaction CHGS", buyValue: "₹172.5", sellValue: "₹172.5" },
      { segment: "STT", buyValue: "₹5000", sellValue: "₹5000" },
      { segment: "GST", buyValue: "₹31.95", sellValue: "₹31.95" },
      {
        totalBuyValue: "₹5959.45",
        totalSellValue: "₹5959.45",
        total: "₹11168.9",
      },
    ],
    futureTurnover: [
      { tableHead: "Future Segment" },
      {
        segment: "Future Turnover",
        buyValue: "₹5000000",
        sellValue: "₹500000",
      },
      { segment: "SEBI Turnover", buyValue: "₹5", sellValue: "₹5" },
      { segment: "IPFT Charges", buyValue: "₹5", sellValue: "₹5" },
      { segment: "Stamp Duty", buyValue: "₹100", sellValue: "₹0" },
      { segment: "Transaction CHGS", buyValue: "₹110", sellValue: "₹110" },
      { segment: "STT", buyValue: "₹0", sellValue: "₹625" },
      { segment: "GST", buyValue: "₹21.6", sellValue: "₹21.6" },
      {
        totalBuyValue: "₹242",
        totalSellValue: "₹767",
        total: "₹1008.2",
      },
    ],
    optionTurnover: [
      { tableHead: "Option Segment" },
      {
        segment: "Option Turnover",
        buyValue: "₹5000000",
        sellValue: "₹500000",
      },
      { segment: "SEBI Turnover", buyValue: "₹5", sellValue: "₹5" },
      { segment: "IPFT Charges", buyValue: "₹5", sellValue: "₹5" },
      { segment: "Stamp Duty", buyValue: "₹150", sellValue: "₹0" },
      {
        segment: "Transaction CHGS",
        buyValue: "₹2612.5",
        sellValue: "₹2612.5",
      },
      { segment: "STT", buyValue: "₹0", sellValue: "₹3125" },
      { segment: "GST", buyValue: "₹475.65", sellValue: "₹475.65" },
      {
        totalBuyValue: "₹3268",
        totalSellValue: "₹6243",
        total: "₹9511.3",
      },
    ],
    commodityFuture: [
      { tableHead: "Commodity Segment" },
      {
        segment: "Commodity Future",
        buyValue: "₹5000000",
        sellValue: "₹500000",
      },
      { segment: "SEBI Turnover", buyValue: "₹5", sellValue: "₹5" },
      { segment: "IPFT Charges", buyValue: "₹5", sellValue: "₹5" },
      { segment: "Stamp Duty", buyValue: "₹100", sellValue: "₹0" },
      { segment: "Transaction CHGS", buyValue: "₹130", sellValue: "₹130" },
      { segment: "STT", buyValue: "₹0", sellValue: "₹500" },
      { segment: "GST", buyValue: "₹24.3", sellValue: "₹24.3" },
      {
        totalBuyValue: "₹259",
        totalSellValue: "₹659",
        total: "₹918.6",
      },
    ],
    commodityOption: [
      { tableHead: "Commodity Segment" },
      {
        segment: "Commodity Option",
        buyValue: "₹5000000",
        sellValue: "₹500000",
      },
      { segment: "SEBI Turnover", buyValue: "₹5", sellValue: "₹5" },
      { segment: "IPFT Charges", buyValue: "₹25", sellValue: "₹25" },
      { segment: "Stamp Duty", buyValue: "₹150", sellValue: "₹0" },
      {
        segment: "Transaction CHGS",
        buyValue: "₹2612.5",
        sellValue: "₹2612.5",
      },
      { segment: "STT", buyValue: "₹0", sellValue: "₹3125" },
      { segment: "GST", buyValue: "₹475.65", sellValue: "₹475.65" },
      {
        totalBuyValue: "₹3268",
        totalSellValue: "₹6243",
        total: "₹8561.8",
      },
    ],
    CurrencyFutureTurnover: [
      { tableHead: "Currency Segment" },
      {
        segment: "Future Turnover",
        buyValue: "₹5000000",
        sellValue: "₹500000",
      },
      { segment: "SEBI Turnover", buyValue: "₹5", sellValue: "₹5" },
      //   { segment: "PFT Charges", buyValue: "₹10", sellValue: "₹10" },
      { segment: "Stamp Duty", buyValue: "₹5", sellValue: "₹5" },
      { segment: "Transaction CHGS", buyValue: "₹45", sellValue: "₹45" },
      { segment: "STT", buyValue: "₹0", sellValue: "₹0" },
      { segment: "GST", buyValue: "₹9", sellValue: "₹9" },
      {
        totalBuyValue: "₹64",
        totalSellValue: "₹64",
        total: "₹128",
      },
    ],
    CurrencyOptionTurnover: [
      { tableHead: "Currency Segment" },
      {
        segment: "Option Turnover",
        buyValue: "₹5000000",
        sellValue: "₹500000",
      },
      { segment: "SEBI Turnover", buyValue: "₹5", sellValue: "₹5" },
      { segment: "PFT Charges", buyValue: "₹5", sellValue: "₹5" },
      { segment: "Stamp Duty", buyValue: "₹1750", sellValue: "₹1750" },
      { segment: "Transaction CHGS", buyValue: "₹0", sellValue: "₹0" },
      { segment: "STT", buyValue: "₹0", sellValue: "₹1250" },
      { segment: "GST", buyValue: "₹315.9", sellValue: "₹315.9" },
      {
        totalBuyValue: "₹2076",
        totalSellValue: "₹2076",
        total: "₹4151.8",
      },
    ],
  };

  const [currentDataset, setCurrentDataset] = useState(
    datasets.nseCashIntraday
  );
  const [activeButton, setActiveButton] = useState("nseCashIntraday");

  const handleButtonClick = (datasetKey) => {
    setCurrentDataset(datasets[datasetKey]);
    setActiveButton(datasetKey);
  };

  const tableHead = currentDataset[0].tableHead;
  const rows = currentDataset.slice(1, -1);
  const totals = currentDataset[currentDataset.length - 1];

  return (
    <div className="container font-poppins max-container p-4 lg:p-20">
      <h1 className="text-[32px] lg:text-[42px] text-[#161C2DCC] text-center font-medium  mb-16">
        Exchange Charges (Brokerage Excluded)
      </h1>
      <div className="mb-8 flex lg:justify-center overflow-x-auto gap-8">
        <button
          className={`py-4 px-4 text-lg whitespace-nowrap lg:text-xl rounded-2xl ${
            activeButton === "nseCashIntraday"
              ? "bg-[#244896] text-white border border-none"
              : "bg-transparent border border-[#D9DBE9] text-[#161C2D] opacity-60"
          }`}
          onClick={() => handleButtonClick("nseCashIntraday")}
        >
          NSE Cash Intraday Turnover
        </button>
        <button
          className={`py-4 px-4 text-lg whitespace-nowrap lg:text-xl rounded-2xl ${
            activeButton === "nseCashDelivery"
              ? "bg-[#244896] text-white border border-none"
              : "bg-transparent border border-[#D9DBE9] text-[#161C2D] opacity-60"
          }`}
          onClick={() => handleButtonClick("nseCashDelivery")}
        >
          NSE Cash Delivery Turnover
        </button>
        <button
          className={`py-4 px-4 text-lg whitespace-nowrap lg:text-xl rounded-2xl ${
            activeButton === "futureTurnover"
              ? "bg-[#244896] text-white border border-none"
              : "bg-transparent border border-[#D9DBE9] text-[#161C2D] opacity-60"
          }`}
          onClick={() => handleButtonClick("futureTurnover")}
        >
          Future Turnover
        </button>
        <button
          className={`py-4 px-4 text-lg whitespace-nowrap lg:text-xl rounded-2xl ${
            activeButton === "optionTurnover"
              ? "bg-[#244896] text-white border border-none"
              : "bg-transparent border border-[#D9DBE9] text-[#161C2D] opacity-60"
          }`}
          onClick={() => handleButtonClick("optionTurnover")}
        >
          Option Turnover
        </button>
      </div>
      <div className="mb-20 flex overflow-x-auto lg:justify-center  gap-8">
        <button
          className={`py-4 px-4 text-lg whitespace-nowrap lg:text-xl rounded-2xl ${
            activeButton === "commodityFuture"
              ? "bg-[#244896] text-white border border-none"
              : "bg-transparent border border-[#D9DBE9] text-[#161C2D] opacity-60"
          }`}
          onClick={() => handleButtonClick("commodityFuture")}
        >
          Commodity Future
        </button>
        <button
          className={`py-4 px-4 text-lg whitespace-nowrap lg:text-xl rounded-2xl ${
            activeButton === "commodityOption"
              ? "bg-[#244896] text-white border border-none"
              : "bg-transparent border border-[#D9DBE9] text-[#161C2D] opacity-60"
          }`}
          onClick={() => handleButtonClick("commodityOption")}
        >
          Commodity Option
        </button>
        <button
          className={`py-4 px-4 text-lg whitespace-nowrap lg:text-xl rounded-2xl ${
            activeButton === "CurrencyFutureTurnover"
              ? "bg-[#244896] text-white border border-none"
              : "bg-transparent border border-[#D9DBE9] text-[#161C2D] opacity-60"
          }`}
          onClick={() => handleButtonClick("CurrencyFutureTurnover")}
        >
          Currency Future Turnover
        </button>
        <button
          className={`py-4 px-4 text-lg whitespace-nowrap lg:text-xl rounded-2xl ${
            activeButton === "CurrencyOptionTurnover"
              ? "bg-[#244896] text-white border border-none"
              : "bg-transparent border border-[#D9DBE9] text-[#161C2D] opacity-60"
          }`}
          onClick={() => handleButtonClick("CurrencyOptionTurnover")}
        >
          Currency Option Turnover
        </button>
      </div>
      <div className="overflow-x-auto whitespace-nowrap rounded-[24px]">
        <table className="min-w-full bg-white rounded-xl">
          <thead>
            <tr>
              <th className="py-8 bg-[#f3f3f3] text-xl font-semibold text-[#161C2DCC] px-4 border rounded-tl-xl">
                {tableHead}
              </th>
              <th className="py-8 bg-[#f3f3f3] text-xl font-semibold text-[#161C2DCC] px-4 border">
                Buy Value
              </th>
              <th className="py-8 bg-[#f3f3f3] text-xl font-semibold text-[#161C2DCC] px-4 border rounded-tr-xl">
                Sell Value
              </th>
            </tr>
          </thead>
          <tbody className="text-center text-[14px]">
            {rows.map((charge, index) => (
              <tr
                key={index}
                className={`${index === rows.length - 1 ? "border-b-0" : ""}`}
              >
                <td
                  className={`py-4 px-4 border ${
                    index === rows.length - 1 ? "rounded-bl-xl" : ""
                  }`}
                >
                  {charge.segment}
                </td>
                <td className="py-4 px-4 border">{charge.buyValue}</td>
                <td
                  className={`py-4 px-4 border ${
                    index === rows.length - 1 ? "rounded-br-xl" : ""
                  }`}
                >
                  {charge.sellValue}
                </td>
              </tr>
            ))}
            <tr className="text-[#161C2DCC] bg-[#f3f3f3]">
              <td className="py-6 px-4 border text-center font-semibold text-[20px]">
                Total
              </td>
              <td className="py-6 px-4 border text-center font-semibold text-[20px]">
                {totals.totalBuyValue}
              </td>
              <td className="py-6 px-4 border text-center font-semibold text-[20px]">
                {totals.totalSellValue}
              </td>
            </tr>
            <tr className="bg-[#f3f3f3] text-[#161C2DCC]">
              <td
                colSpan="2"
                className="py-6 px-4 border font-semibold text-[20px] text-center  rounded-b-xl"
              ></td>
              <td className="py-6 px-4 border font-semibold text-[20px] text-center  rounded-b-xl">
                {totals.total}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExchangeCharges;
