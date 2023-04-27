const personajes=[
    {id:1,nombre:"Jaime",familia:"Lanister",edad:34},
    {id:1,nombre:"Arya",familia:"Stark",edad:11},
    {id:1,nombre:"Sansa",familia:"Stark",edad:13},
    {id:1,nombre:"Jon",familia:"Snow",edad:25},
    {id:1,nombre:"Cesei",familia:"Lanister",edad:34}
];

console.log(personajes);

const lanister = personajes.filter(function(personaje){
    return personaje.familia === "Lanister";
});

console.log(lanister);

const lanister2 = personajes.filter((personaje) => personaje.familia==="Lanister");
console.log(lanister2);


const numeros=[1,2,3,4,5,6];
const encontrarelementos= numeros.find((numero)=> numero>3);
console.log(encontrarelementos);

const doble = (numero) => numero*2;
const numerosDobles = numeros.map(doble);
console.log(numerosDobles)




