const clave = [1, 2, 3, 4];
const comentarios = ["primer", "segundo", "tercer", "cuarto"];
let intentoUsuario = [0, 0, 0, 0];
let intentos=4;
let aciertos = 0;
while (intentos > 0 && aciertos < 3) {
    intentos--;
    intentoUsuario = pedirClave();
    if(compararClaves()){
        aciertos++;
        alert("¡Clave acertada!. Aciertos:"+aciertos+"/3. Intentos: "+intentos+"/4");
    }else{
        alert("Clave no acertada.  Aciertos:"+aciertos+"/3. Intentos: "+intentos+"/4");
    }
}

if(aciertos>=3){
    alert("Enhorabuena, acertaste tres veces");
}else{
    alert("Qué pena, no acertaste tres veces");
}

function pedirClave() {
    let result = [0, 0, 0, 0]
    for (let i = 0; i < intentoUsuario.length; i++) {
        result[i] = prompt("Introduce el " + comentarios[i] + " número");
    }
    return result;
}

function compararClaves() {
    for (let i = 0; i < clave.length; i++) {
        if (clave[i] != intentoUsuario[i]) {
            return false;
        }
    }
    return true;
}