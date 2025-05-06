const leer = require("prompt-sync")();

function main() {
    for (let iterador = 0; iterador < 3; iterador++) {
        console.log("Hola! "+ (iterador+1));
    }
}

main();