const leer = require("prompt-sync")();

function main() {
    const objCaracteres = {
        caracteres1: "A",
        caracteres2: "B",
        caracteres3: "C",
    }
    const objNumeros = {
        numero1: 1,
        numero2: 2,
        numero3: 3,
    }
    const objBooleanos = {
        booleano1: false,
        booleano2: true,
        booleano3: false,
    }

    console.log(objCaracteres.caracteres2);
    console.log(objNumeros.numero2);
    console.log(objBooleanos.booleano2);
    
}

main();