const leer = require("prompt-sync")();

function main() {
    const objLiteral = {
        prop1:1,
        prop2:"B",
        prop3:false,
        prop4:"D31",
        prop5:"Enter",
        prop6:true,
        prop7:3.4
    }

    objLiteral.prop1 = true;
    objLiteral.prop4 =  9.3;
    objLiteral.prop7 = "Hello world";

    console.log(objLiteral );
    
}

main();