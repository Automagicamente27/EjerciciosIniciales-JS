const leer = require("prompt-sync")();

function main() {
    const numeros = [1, 2, 3]

    for (let i = 0; i < numeros.length; i++) {
        //console.log("["+numeros[i]+"]");
        process.stdout.write( "["+String(numeros[i])+"]" );
    }

}

main();