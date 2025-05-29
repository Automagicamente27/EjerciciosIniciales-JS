const leer = require("prompt-sync")();

function main() {
    const objLiteral = {
        prop1: 1
    }

    objLiteral.propNueva2 = 7; // se crea una nueva propiedad
    objLiteral.propNueva3 = -9; // se crea una nueva propiedad
    objLiteral.propNueva4 = 1; // se crea una nueva propiedad

    console.log(objLiteral);
}

main();