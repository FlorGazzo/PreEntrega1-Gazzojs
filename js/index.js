let holidaysCalc = document.getElementById("holidaysCalc");

holidaysCalc.addEventListener("submit", (e) => {
    e.preventDefault();
    calcExpenses()
})

let destiny = []
    budget = []
    accomodation = []
    transport = []
    food = []
    extra = [];

let elementBtnCalculate = document.querySelector(".btn");

elementBtnCalculate.addEventListener("click", getValues)

function getValues() {

    let destiny = document.querySelector("destiny").value;
    let budget = document.querySelector("budget").value;
    let accomodation = document.querySelector("accomodation").value;
    let transport = document.querySelector("transport").value;
    let food = document.querySelector("food").value;
    let extra = document.querySelector("extra").value;

    destiny.push(destiny);
    budget.push(budget);
    accomodation.push(accomodation);
    transport.push(transport);
    food.push(food);
    extra.push(extra);

    localStorage.setItem("destiny", JSON.stringify(destiny));
    localStorage.setItem("budget", JSON.stringify(budget));
    localStorage.setItem("accomodation", JSON.stringify(accomodation));
    localStorage.setItem("transport", JSON.stringify(transport));
    localStorage.setItem("food", JSON.stringify(food));
    localStorage.setItem("extra", JSON.stringify(extra));

    }  
//return { destiny, budget, accomodation, transport, food, extra }

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

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));