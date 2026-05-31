const billInput = document.getElementById("bill");
const customTipInput = document.getElementById("customTip");
const peopleInput = document.getElementById("people");

const totalTipOutput = document.getElementById("totalTip");
const grandTotalOutput = document.getElementById("grandTotal");
const perPersonOutput = document.getElementById("perPerson");

const billError = document.getElementById("billError");
const tipError = document.getElementById("tipError");
const peopleError = document.getElementById("peopleError");

const resetBtn = document.getElementById("reset");

const tipButtons = document.querySelectorAll(".tip-btn");

let selectedTip = 0;

tipButtons.forEach(button => {

  button.addEventListener("click", () => {

    tipButtons.forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    selectedTip = parseInt(button.innerText);

    customTipInput.value = "";

    calculate();

  });

});

customTipInput.addEventListener("input", () => {

  selectedTip = Number(customTipInput.value);

  tipButtons.forEach(btn => btn.classList.remove("active"));

  calculate();

});

billInput.addEventListener("input", calculate);
peopleInput.addEventListener("input", calculate);

function calculate(){

  const bill = Number(billInput.value);
  const people = Number(peopleInput.value);

  billError.innerText = "";
  tipError.innerText = "";
  peopleError.innerText = "";

  if(bill <= 0){

    billError.innerText = "Bill must be greater than 0";

    return;

  }

  if(selectedTip < 0 || selectedTip > 100){

    tipError.innerText = "Tip must be between 0 and 100";

    return;

  }

  if(people < 1 || !Number.isInteger(people)){

    peopleError.innerText = "People must be at least 1";

    return;

  }

  const totalTip = bill * (selectedTip / 100);

  const grandTotal = bill + totalTip;

  const perPerson = grandTotal / people;

  totalTipOutput.innerText = totalTip.toFixed(2);

  grandTotalOutput.innerText = grandTotal.toFixed(2);

  perPersonOutput.innerText = perPerson.toFixed(2);

}

resetBtn.addEventListener("click", () => {

  billInput.value = "";
  customTipInput.value = "";
  peopleInput.value = "";

  totalTipOutput.innerText = "0";
  grandTotalOutput.innerText = "0";
  perPersonOutput.innerText = "0";

  billError.innerText = "";
  tipError.innerText = "";
  peopleError.innerText = "";

  tipButtons.forEach(btn => btn.classList.remove("active"));

  selectedTip = 0;

});