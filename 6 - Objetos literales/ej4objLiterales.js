const leer = require("prompt-sync")();

function main() {
    const objCaracteres = {
        caracteres1: "A",
        caracteres2: "B",
        caracteres3: "C",
    }

    delete objCaracteres.caracteres2;

    console.log(objCaracteres);
}

main();