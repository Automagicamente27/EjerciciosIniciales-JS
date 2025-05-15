const leer = require("prompt-sync")();

function main() {
    const numeros = [1];
    numeros.push(7);
    numeros[numeros.length] = 7;
    numeros[3]=7;
    console.log(numeros);
}

main();