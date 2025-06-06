const leer = require("prompt-sync")();

function main() {
    let segundos = -1;

    console.log("Ingresa el segundo desde donde iniciara la cuenta regresiva");
    segundos = Number(leer());

    cuentaRegresivaDesde(segundos);
}


main();




















/**
 * Inicia una cuenta regresiva desde el segundo recibidos
 * @param {Number} segundosInicial a usar para la cuenta regresiva (inclusive)
 */
function cuentaRegresivaDesde(segundosInicial) {
    console.log("\t### Iniciando cuenta regresiva... ###\n");
    console.log(segundosInicial);
    const idInterval = setInterval(() => {
        segundosInicial--;
        console.log(segundosInicial);
        if (segundosInicial <= 0) {
            clearInterval(idInterval);
        }
    }, 1000);
}