const leer = require("prompt-sync")();

function main() {
    const numeros = [1];
    numeros.push( numeros[numeros.length-1]+1 );
    numeros.push( numeros[numeros.length-1]+1 );
    numeros.push( numeros[numeros.length-1]+1 );
    console.log(numeros);
}

main();