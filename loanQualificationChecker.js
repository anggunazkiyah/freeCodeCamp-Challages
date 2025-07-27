// Minimum requirements for different loan types
const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  if(creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
    return "You qualify for a duplex, condo, and car loan."
  } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
    return "You qualify for a condo and car loan."
  } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
    return "You qualify for a car loan."
  } else {
    return "You don't qualify for any loans."
  }
}

// Test cases
const duplexLoanMsg = (getLoanMessage(85000, 850));
console.log(duplexLoanMsg); // Output: You qualify for a duplex, condo, and car loan.

const condoLoanMsg = (getLoanMessage(65000, 690));
console.log(condoLoanMsg); // Output: You qualify for a condo and car loan.

const carLoanMsg = (getLoanMessage(45000, 660));
console.log(carLoanMsg); // Output: You qualify for a car loan.

const noLoanMsg = (getLoanMessage(25000, 550));
console.log(noLoanMsg);// Output: You don't qualify for any loans.
