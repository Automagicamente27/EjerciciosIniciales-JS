const leer = require("prompt-sync")();

function main() {
    const matriz = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];

    matriz[0][1]=null;
    matriz[1][0]=null;
    matriz[2][2]=null;

    console.log(matriz);
    
}

main();