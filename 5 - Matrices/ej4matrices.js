const leer = require("prompt-sync")();

function main() {
    const matriz = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];

    matriz[1].push(10);

    console.log(matriz);
    
}

main();