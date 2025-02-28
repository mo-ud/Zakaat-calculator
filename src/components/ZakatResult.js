import React from 'react';

const ZakatResult = ({ zakatDue, breakdown, isEligible }) => {
  // Check if the user is eligible for zakat calculation
  if (!isEligible) {
    return (
      <div className="mt-6 p-4 bg-customGrayLight rounded">
        {/* Message indicating ineligibility for zakat */}
        <h2 className="text-xl font-bold">Your amount does not reach the zakat level.</h2>
      </div>
    );
  }

  return (
    <div className="mt-6 p-4 bg-customGrayLight rounded">
      {/* Display the zakat due amount */}
      <h2 className="text-xl font-bold">Zakat Due: ${zakatDue.toFixed(2)}</h2>
      {/* Section title for breakdown details */}
      <h3 className="text-lg mt-4">Breakdown:</h3>
      {/* Breakdown details of the zakat calculation */}
      <p>Total Income: ${breakdown.totalIncome.toFixed(2)}</p>
      <p>Total Savings: ${breakdown.totalSavings.toFixed(2)}</p>
      <p>Total Investments: ${breakdown.totalInvestments.toFixed(2)}</p>
      <p>Total Liabilities: ${breakdown.totalLiabilities.toFixed(2)}</p>
      <p>Zakat Base: ${breakdown.zakatBase.toFixed(2)}</p>
    </div>
  );
};

export default ZakatResult;
