let holidaysCalc = document.getElementById("holidaysCalc");

holidaysCalc.addEventListener("submit", (e) => {
    e.preventDefault();
    calcExpenses()
})

function getValues() {

    let destiny = document.getElementById ("destiny").value;
    let budget = document.getElementById("budget").value;
    let accomodation = document.getElementById("accomodation").value;
    let transport = document.getElementById("transport").value;
    let food = document.getElementById("food").value;
    let extra = document.getElementById("extra").value;

    return { destiny, budget, accomodation, transport, food, extra }
}  

localStorage.setItem("destiny", JSON.stringify(destiny));
const destinyInLocalStorage = JSON.parse(localStorage.getItem("destiny"))

localStorage.setItem("budget", JSON.stringify(budget));
const budgetInLocalStorage = JSON.parse(localStorage.getItem("budget"))

localStorage.setItem("accomodation", JSON.stringify(accomodation));
const accomodationInLocalStorage = JSON.parse(localStorage.getItem("accomodation"))

localStorage.setItem("transport", JSON.stringify(transport));
const transportInLocalStorage = JSON.parse(localStorage.getItem("accomodation"))

localStorage.setItem("food", JSON.stringify(food));
const foodInLocalStorage = JSON.parse(localStorage.getItem("food"))

localStorage.setItem("extra", JSON.stringify(extra));
const extraInLocalStorage = JSON.parse(localStorage.getItem("extra"))

function calcExpenses() {

    const { destiny, budget, accomodation, transport, food, extra } = getValues();

    let expenses = parseInt(accomodation) + parseInt(transport) + parseInt(food) + parseInt(extra)
    let balance = budget - expenses

    UI(destiny, budget, balance);
}

function UI(destiny, budget, balance) {
    let result = document.getElementById("result")
    let dataPrint = document.createElement("div")

    dataPrint.innerHTML = `
            <div class= "row">
                <div class="col s4">
                    <h6>${destiny}</h6>
                </div>
                <div class="col s4">
                    <h6>${budget}</h6>
                </div>
                <div class="col s4">
                    <h6>${balance}</h6>
                </div>
            </div>
        `

    result.appendChild(dataPrint)

    reset();

}

function reset() {
    holidaysCalc.reset()
}

function balanceColours() {

    const { balance } = getValues()


    if (balance < 0) {
        document.getElementById('balance').classList.add('red')
    }
    else if (balance > 0) {
        document.getElementById('balance').classList.add('green')
    }
}

// let destiny = [];

//fetch("./js/data.json")
    //.then( response => response.json())
    //.then( data => {
        //destiny = data;
        //loadProducts(destiny);
    //})


//const containerProducts = document.querySelector("#container-products");
//const categoryButtons = document.querySelectorAll(".menu-button");
//const titlePrincipal = document.querySelector("#title-principal");
//let buttonAgregar;
//const numberShop = document.querySelector("#numberShop");
