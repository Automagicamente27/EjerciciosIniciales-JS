const leer = require("prompt-sync")();

function main() {
    const caracteres = ["A","B","C","D","E","F","G"];

    console.log( caracteres[0] );
    console.log( caracteres[3] );
    //console.log( caracteres[6] );// 7 - 1
    console.log( caracteres[ caracteres.length -1 ] );// 7 - 1
}

main();