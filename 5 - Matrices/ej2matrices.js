const leer = require("prompt-sync")();

function main() {
    const matriz = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];

    console.log( matriz[0][1] );
    console.log( matriz[1][0] );
    console.log( matriz[2][2] );
    
}

main();