const leer = require("prompt-sync")();

function main() {
    let numIngresadoA = 0;
    let numIngresadoB = 0;

    console.log("Ingrese un numero a sumar");
    numIngresadoA = Number(leer());
    console.log("Ingrese otro numero a sumar");
    numIngresadoB = Number(leer());

    console.log("La suma entre "+numIngresadoA+" y "+numIngresadoB+" es: "+ (numIngresadoA + numIngresadoB));
}
main();