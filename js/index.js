let entrada = prompt("¡Bienvenido/a a Calculá tu viaje! ¿Su destino será en el interior o exterior?");

while (entrada != "ESC") {
    switch (entrada) {
        case "interior":
            alert("Bienvenido/a, a continuación podrá calcular su viaje en el interior")
            break;

        case "exterior":
            alert("Bienvenido/a, a continuación podrá calcular su viaje en el exterior")
            break;

        default:
            alert("ingrese la palabra INTERIOR, si desea realizar su viaje en el país o EXTERIOR si desea realizar su viaje en el exterior")
            break;
    }

    alert ("Comenzemos")

let holidaysCalc = document.getElementsByClassName("holydaysCalc")
    holidaysCalc.addEventListener("submit", calcExpenses)

    function getValues() {
        let destiny = document.getElementsByClassName("destiny").value;
        let budget = document.getElementsByClassName("budget").value;
        let accomodation = document.getElementsByClassName("accomdation").value;
        let transport = document.getElementsByClassName("transport").value;
        let food = document.getElementsByClassName("food").value;
        let extra = document.getElementsByClassName("extra").value;

        return { destiny, budget, accomodation, transport, food, extra }
    }


    function calcExpenses(e) {
        e.preventDefault();

        const { destiny, budget, accomodation, transport, food, extra } = getValues();

        let expenses = parseInt(accomodation) + parseInt(transport) + parseInt(food) + parseInt(extra)
        let balance = budget - expenses

        UI(destiny, budget, balance);
    }

    function UI(destiny, budget, balance) {
        let result = document.getElementsByClassName("result")
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
        document.getElementsByClassName("holydaysCalc").reset()
    }
}
