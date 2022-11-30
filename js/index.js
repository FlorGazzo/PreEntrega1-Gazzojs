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
