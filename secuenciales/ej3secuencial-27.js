const leer = require("prompt-sync")();

function main() {
    let numIngresado = 0;
    let resultado = 0;
    console.log("Ingresa un numero a duplicar");
    numIngresado = Number(  leer()  );
    //console.log( typeof numIngresado);
    resultado = numIngresado * 2
    console.log("El doble es: "+ resultado);
}
main();