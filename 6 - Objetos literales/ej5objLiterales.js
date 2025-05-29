const leer = require("prompt-sync")();

function main() {
    const objLiteral = {
        prop1: false,
        prop2: true,
        prop3: true,
    }
    let auxProp = "def prop";

    auxProp = objLiteral.prop1;//guardo el valor de la primer propiedad
    objLiteral.prop1 = objLiteral.prop3; 
    objLiteral.prop3 = auxProp;
    console.log(objLiteral);
}

main();