const leer = require("prompt-sync")();

function main() {
    let numeroSumar = 0;
    let resultado = 0;

    for (let i = 0; i < 3; i++) {
        console.log("Ingresa un numero");
        numeroSumar = Number(leer());
        resultado = resultado + numeroSumar;
        console.log("Resultado actual: "+resultado);
    }
}

main();