let entrada = prompt("¡Bienvenido/a a Calculá tu viaje! ¿Su destino será en el interior o exterior?");
let holidaysCalc = document.getElementById("holidaysCalc");
let flag;

do{
    switch (entrada) {
        case "interior":
            alert("Bienvenido/a, a continuación podrá calcular su viaje en el interior")
            alert ("Comenzemos")
            flag = false;
            break;
        case "exterior":
            alert("Bienvenido/a, a continuación podrá calcular su viaje en el exterior")
            alert ("Comenzemos")
            flag = false;
            break;
        default:
            alert("ingrese la palabra INTERIOR, si desea realizar su viaje en el país o EXTERIOR si desea realizar su viaje en el exterior")
            break;
    } 
}while (flag) {

    holidaysCalc.addEventListener("submit", (e) => {
        e.preventDefault();
        calcExpenses()
    } )

    function getValues() {
        let destiny = document.getElementById("destiny").value;
        let budget = document.getElementById("budget").value;
        let accomodation = document.getElementById("accomodation").value;
        let transport = document.getElementById("transport").value;
        let food = document.getElementById("food").value;
        let extra = document.getElementById("extra").value;

        return { destiny, budget, accomodation, transport, food, extra }
    }


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
}
