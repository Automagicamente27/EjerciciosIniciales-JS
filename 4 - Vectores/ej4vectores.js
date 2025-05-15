const leer = require("prompt-sync")();

function main() {
    const caracteres = ["A", "B", "C"];
    caracteres.splice(1, 1)
    console.log(caracteres);
    
}

main();