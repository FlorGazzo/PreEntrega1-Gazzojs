const DESTINY_NAME = "destinyName";
const TOTAL_BUDGET = "totalBudget";
const TOTAL_EXPENSES = "totalExpenses";

let holidaysExpensesForm = document.getElementById("holidaysExpensesForm");

fetch("./js/data.json")
  .then((response) => response.json())
  .then((holidaysexpenseslist) => {
    console.log(holidaysexpenseslist);

    holidaysexpenseslist.forEach((holidayExpense) => {
      console.log(holidayExpense);

      addResultToResultList(
        holidayExpense.destinyName,
        holidayExpense.totalBudget,
        holidayExpense.totalExpenses
      );
    });
  });

holidaysExpensesForm.addEventListener("submit", (e) => {
  e.preventDefault();

  onSubmitButtonClicked();
});

function onSubmitButtonClicked() {
  const inputValues = getValuesFromFormInputs();

  saveResultsInLocalStorage(
    inputValues.destinyName,
    inputValues.totalBudget,
    inputValues.totalExpenses
  );

  const destinyName = localStorage.getItem(DESTINY_NAME);
  const totalBudget = localStorage.getItem(TOTAL_BUDGET);
  const totalExpenses = localStorage.getItem(TOTAL_EXPENSES);

  addResultToResultList(destinyName, totalBudget, totalExpenses);

  resetFormInputs();
}

function getValuesFromFormInputs() {
  const totalExpenses = calculateExpenses();

  const destinyName = document.getElementById("destinyName").value;

  const totalBudget = document.getElementById("totalBudget").value;

  return { totalExpenses, destinyName, totalBudget };
}

function calculateExpenses() {
  const accomodationExpenses = document.getElementById(
    "accomodationExpenses"
  ).value;

  const transportExpenses = document.getElementById("transportExpenses").value;

  const foodExpenses = document.getElementById("foodExpenses").value;

  const extraExpenses = document.getElementById("extraExpenses").value;

  return (
    parseInt(accomodationExpenses) +
    parseInt(transportExpenses) +
    parseInt(foodExpenses) +
    parseInt(extraExpenses)
  );
}

function saveResultsInLocalStorage(destinyName, totalBudget, totalExpenses) {
  localStorage.setItem(DESTINY_NAME, destinyName);

  console.log(localStorage.getItem(DESTINY_NAME));

  localStorage.setItem(TOTAL_BUDGET, totalBudget);

  console.log(localStorage.getItem(TOTAL_BUDGET));

  localStorage.setItem(TOTAL_EXPENSES, totalExpenses);

  console.log(localStorage.getItem(TOTAL_EXPENSES));
}

function addResultToResultList(destinyName, totalBudget, totalExpenses) {
  let result = document.getElementById("result");

  let dataPrint = document.createElement("div");

  dataPrint.innerHTML = `
            <div class= "row">
                <div class="col s4">
                    <h6>${destinyName}</h6>
                </div>
                <div class="col s4">
                    <h6>${totalBudget}</h6>
                </div>
                <div class="col s4">
                    <h6>${totalExpenses}</h6>
                </div>
            </div>
        `;

  result.appendChild(dataPrint);
}

function resetFormInputs() {
  holidaysExpensesForm.reset();
}
