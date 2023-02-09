    results();

    function results(){
        let div = document.querySelector("#results div");

        div.innerHTML = ` `;

        let destiny = JSON.parse(localStorage.getItem("destiny"));
            budget= JSON.parse(localStorage.getItem("budget"));
            accomodation= JSON.parse(localStorage.getItem("accomodation"));
            transport = JSON.parse(localStorage.getItem("transport"));
            food = JSON.parse(localStorage.getItem("food"));
            extra = JSON.parse(localStorage.getItem("extra"));

        let listaDeViaje = destiny.length;

        for( let i = 0; i < listaDeViaje; i++) {

            let fila = document.createElement("tr");

            let celdaDestiny = document.createElement("td");
            let celdaBudget = document.createElement("td");
            let celdaAccomodation = document.createElement("td");
            let celdaTransport = document.createElement("td");
            let celdaFood = document.createElement("td");
            let celdaExtra = document.createElement("td");

            let textDestiny= document.createTextNode(destiny[i]);
            let textBudget= document.createTextNode(budget[i]);
            let textAccomodation= document.createTextNode(accomodation[i]);
            let textTransport= document.createTextNode(transport[i]);
            let texFood= document.createTextNode(food[i]);
            let textAExtra= document.createTextNode(extra[i]);

            fila.appendChild(celdaDestiny.appendChild(textDestiny));
            fila.appendChild(celdaBudget.appendChild(textBudget));
            fila.appendChild(celdaAccomodation.appendChild(textAccomodation));
            fila.appendChild(celdaTransport.appendChild(textTransport));
            fila.appendChild(celdaFood.appendChild(texFood));
            fila.appendChild(celdaExtra.appendChild(textAExtra));

            div.appendChild(fila);

        }

    }