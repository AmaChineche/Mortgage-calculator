let mortgageAmount = parseFloat(document.getElementsByClassName("Amount"));
let MortgageTerm =parseFloat( document.getElementsByClassName("Year"));
let interestRate=parseFloat( document.getElementsByClassName("interest"));
let calRepaymentBtn = parseFloat(document.getElementsByClassName("cal-repayment-button"));
let resultShow = parseFloat(document.getElementsByClassName("result"));


function calculateMortgage(mortgageAmount, MortgageTerm, interestRate) {
    // Convert annual interest rate to monthly interest rate
    const monthlyInterestRate = interestRate / 12 / 100;
  
    // Calculate the number of monthly payments
    const numberOfPayments =  MortgageTerm * 12;
  
    // Calculate the monthly mortgage payment
    const monthlyPayment = (mortgageAmount* monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
                           (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
  
    return monthlyPayment.toFixed(2); // Return the result rounded to two decimal places
  }



function amountMortgage(){
    if (isNaN(mortgageAmount) || isNaN(MortgageTerm) || isNaN(interestRate)){
      invalid.innerHTML = "please insert valid value";
      return false
    }else {
        invalid.innerHTML="successful"
    }
}
amountMortgage();



let invalid = document.getElementsByClassName("cal-repayment");
let red = document.createElement("p");
red.innerHTML= "";
invalid.appendChild(red);

function amount(){

 if(mortgageAmount){

    console.log("excute")
 }
}
amount();

// const calMortgage=(mortgageAmount, Term, interestRate)=>{
//     const MortgageTerm =+/12/100;
//     return MortgageTerm;

// }
// calMortgage();