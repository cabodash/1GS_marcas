//Ej 1
var colores = ["amarillo","rojo","azul","verde","naranja"];
console.log(colores[0],  colores[colores.length-1]);

//Ej 2
var nCiudades=parseInt(prompt("Introduce cuantas ciudades añadirás"));
var ciudades=[];

for(var i=0;i<nCiudades;i++){
ciudades.push(prompt("Ciudad Nº "+(i+1)));
}

for(var i=0;i<nCiudades;i++){
    alert(ciudades[i]);
}

//Ej 3
const likes=[];
function recibeLikes(array){
    if(array.length==0){
        console.log("Nadie ha dado like");
    }else if(array.length==1){
        console.log(array[0] + " ha dado like");
    }else if(array.length==2){
        console.log(array[0] + ", " + array[0]+" han dado like");
    }else{
        console.log(array[0] + ", " + array[0] +" y "+ array.length +" más han dado like");
    }
}
recibeLikes(likes);

//Ej 4
const users = [
    {
    name: "Juan",
    age: 25,
    city: "Madrid",
    hobby: "fútbol"
    },
    {
    name: "María",
    age: 30,
    city: "Barcelona",
    hobby: "leer"
    },
    {
    name: "Pedro",
    age: 20,
    city: "Madrid",
    hobby: "programar"
    },
    {
    name: "Laura",
    age: 35,
    city: "Barcelona",
    hobby: "programar"
    },
    {
    name: "Pablo",
    age: 27,
    city: "Madrid",
    hobby: "poker"
    },
    ];

const personasMadrid= users.filter((user) =>user.city === "Madrid"
);

const personasMas25Anios= users.filter((user) =>user.age >25
);

const primerProgramador= users.find((user) =>user.hobby == "programar"
);
console.log(personasMadrid)
console.log(personasMas25Anios)
console.log(primerProgramador)



