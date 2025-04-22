const leer = require("prompt-sync")();

function main() {
    let limiteRango = 0;
    let numeroAleatorio = 0;
    console.log("Ingresa el rango maximo para el numero generado aleatoriamente");
    limiteRango = Number(leer());
    numeroAleatorio = azar(limiteRango);
    console.log("El numero aleatorio es:" + numeroAleatorio);
}
main();

function azar(max) {
    return Math.floor(Math.random() * (max +1));
}