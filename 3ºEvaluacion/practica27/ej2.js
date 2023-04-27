var numeros=[0,0,0];
var comentarios=["primer","segundo","tercer"];
for(var i=0;i<numeros.length;i++){
    numeros[i]=prompt("Introduce el "+ comentarios[i] +" número");
}
var numeroMayor=numeros[0];
for(var i=0;i<numeros.length;i++){
    if(numeros[i]>numeroMayor){
        numeroMayor=numeros[i];
    }
}
alert("El numero mayor es "+numeroMayor);
