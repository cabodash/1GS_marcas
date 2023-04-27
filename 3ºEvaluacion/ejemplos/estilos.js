//RApido y facil, no recomendable
const paquito = document.querySelector("h1");
paquito.style.color="blue";
paquito.style.backgroundColor="lightgrey";



console.log(paquito.style.cssText);



    //La mejor opcion es con className
//vemos que clases tiene asignado el elemento
console.log(paquito.className); 

//Elimina las clases que ya tiene
paquito.className="ruby";
paquito.classList.add("bigger");
console.log(paquito.className);

//Toggle, permite añadir o quitar una clase, dependiendo de si en ese momento la tiene o no.
paquito.classList.toggle("bigger");
console.log(paquito.className);
paquito.classList.toggle("bigger");
console.log(paquito.className);
paquito.classList.toggle("bigger");
console.log(paquito.className);
paquito.classList.toggle("bigger");
console.log(paquito.className);