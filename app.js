//Submitted amounts
let checkTtl = document.getElementById("checkTtl");
let tipPercent = document.getElementById("tipPercent");
let numberPpl = document.getElementById("numberPpl");
let tipAmount = document.querySelector("#tipAmount");
let totalAmount = document.querySelector("#totalAmount");
let dividedAmount = document.querySelector("#dividedAmount");

document.querySelector("#clear").addEventListener("click", function (e) {
  event.preventDefault();
  checkTtl.value = "";
  tipPercent.value = "";
  numberPpl.value = "";
});

let clicksCounter = 0;

document.querySelector("#submit").addEventListener("click", function (e) {
  event.preventDefault();

  clicksCounter++;

  //CALCULATE PERCENTAGE AMOUNT
  let tipCalc = ((tipPercent.valueAsNumber / 100) * checkTtl.value).toFixed(2);
  let tipAmountNumber = document.createElement("li");
  tipAmountNumber.textContent = clicksCounter + ") " + tipCalc;
  tipAmount.appendChild(tipAmountNumber);

  // CALCULATE TOTAL AND TIP TOGETHER
  let tipTotalCalc = +tipCalc + +checkTtl.valueAsNumber;
  let tipTotalAmountNumber = document.createElement("li");
  tipTotalAmountNumber.textContent = clicksCounter + ") " + tipTotalCalc;
  totalAmount.appendChild(tipTotalAmountNumber);

  // CALCULATE DIVIDED INTO AMOUNT OF PEOPLE
  let dividedAmountCalc = (tipTotalCalc / numberPpl.value).toFixed(2);
  let dividedTotalAmount = document.createElement("li");
  dividedTotalAmount.textContent = clicksCounter + ") " + dividedAmountCalc;
  dividedAmount.appendChild(dividedTotalAmount);
});

