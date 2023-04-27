const edad = 16;

function calcularMayoriaEdad(edad) {
    if (edad >= 18) {
        console.log("Eres mayor de edad");
    } else {
        console.log("Eres menor de edad");
    }
}

calcularMayoriaEdad(edad);

function saludar(){
    console.log("Antes del return");
    return "Hola";
    console.log("Despues del return");
}

console.log(saludar());