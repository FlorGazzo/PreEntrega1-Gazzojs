let entrada = prompt("Ingresar la sede de su institucion");

switch (entrada) {
    case "sede general pacheco":
        alert("Bienvenido a la sede de gral. Pacheco")
        break;

    case "sede belgrano":
        alert("Bienvenido a la sede de belgrano")
        break;

    case "sede martinez":
        alert("Bienvenido a la sede martinez")
        break;

    default:
        alert("ingrese correctamente la sede de la institucion a la que pertenece")
        break;
}

alert= ("Continuemos")

let saludo = "Bienvenido/a";
let nombre = "Ingrese su nombre";
let mensaje =(`${saludo} ${nombre} a nuestra plataforma institucional `);

alert(mensaje);

let respuesta = prompt ("ciclo escolar")
if (respuesta ("inicial") ) {
    console.log("corresponde a ciclo inicial");
} else if(respuesta ("primaria")) {
    console.log("corresponde al ciclo de primaria");
} else if (respuesta ("secundaria")){
    console.log("corresponde al ciclo de secundaria");
} else{
    console.log("los datos ingresados son incorrectos");
}
