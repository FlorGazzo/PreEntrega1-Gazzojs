let holidaysCalc = document.getElementsByClassName ("holydaysCalc")
    holidaysCalc.addEventListener ("submit", calcExpenses)

function getValues(){
    let destiny = document.getElementsByClassName ("destiny").value,
        budget = document.getElementsByClassName ("budget").value,
        accomodation = document.getElementsByClassName ("accomdation").value,
        transport = document.getElementsByClassName ("transport").value,
        food = document.getElementsByClassName ("food").value,
        extra = document.getElementsByClassName ("extra").value;

    return {destiny, budget, accomodation, transport, food, extra}
    }


function calcExpenses (e){
    e.preventDefault();

    const {destiny, budget, accomodation, transport, food, extra} = getValues();

    let expenses = parseInt(accomodation) + parseInt(transport) + parseInt(food) + parseInt(extra)
    let balance = budget - expenses

    UI(destiny, budget, balance);
}

function UI (destiny, budget, balance) {
    let result = document.getElementsByClassName ("result")
    let dataPrint = document.createElement ("div")

    dataPrint.innerHTML =`
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
    document.getElementsByClassName ("holydaysCalc").reset()
}
