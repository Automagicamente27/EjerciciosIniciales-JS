const leer = require("prompt-sync")();

function main() {
    let aux = "def aux";
    const caracteres = ["A", "B", "C"];
    aux = caracteres[0];
    caracteres[0] = caracteres[2];
    caracteres[2] = aux;

    console.log(caracteres);
}

main();