const INGREDIENTE1 = "carne";
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


