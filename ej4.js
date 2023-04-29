/* const INGREDIENTE1 = "carne";
const INGREDIENTE2 = "pollo";


let tipoSopa = prompt ("Elegir que tipo de sopa queres. Carne o Pollo");
let hayVerdura = prompt ("hay verduras? contestar si o no");
let hayAgua = prompt ("hay agua? contestar si o no");
let hayCondimento = prompt ("Hay condimentos? contestar si o no");
let hayCaldo = prompt ("Hay caldo? contestar si o no");

if ((tipoSopa == INGREDIENTE1) && (hayVerdura == "si") && (hayAgua == "si") && (hayCondimento == "si")) {
    document.write ("El robot le a preparado una sopa de carne con condimentos");
}else if ((tipoSopa == INGREDIENTE2) && (hayVerdura == "si") && (hayAgua == "si") && (hayCondimento == "si")) {
    document.write ("El robot le a preparado una sopa de pollo con condimentos");
}else if (((tipoSopa == INGREDIENTE1) || (tipoSopa == INGREDIENTE2)) && (hayCondimento == "no") && (hayCaldo == "si"))  {
    document.write ("El robot le a preparado una sopa de " + tipoSopa + " con caldo");
}

 */

const titulo = document.querySelector("#titulo");
const ingrediente1 = document.querySelector("#ingrediente1");
const ingrediente2 = document.querySelector("#ingrediente2");
const ingrediente3 = document.querySelector("#ingrediente3");
const ingrediente4 = document.querySelector("#ingrediente4");
const ingrediente5 = document.querySelector("#ingrediente5");
const ingrediente6 = document.querySelector("#ingrediente6");
const robot = document.querySelector("#robot");

titulo.innerHTML = "Ingrese V para afirmativo, F para falso";

function sopa() {
if (((ingrediente1.value == "v") && (ingrediente2.value == "v")) && ((ingrediente3.value == "v") || (ingrediente4.value == "v")) && ((ingrediente5.value == "v") || (ingrediente6.value == "v"))) {
    robot.innerHTML = "EL ROBOT PUEDE PREARARLO"
} else { robot.innerHTML = "EL ROBOT NO PUEDE PREPARARLO"
    
}
}