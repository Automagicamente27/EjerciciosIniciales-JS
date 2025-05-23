const leer = require("prompt-sync")();

function main() {
    const matriz = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];

    matriz[0].splice(1,1);
    matriz[1].splice(0,1);
    matriz[2].splice(2,1);

    console.log(matriz);
    
}

main();