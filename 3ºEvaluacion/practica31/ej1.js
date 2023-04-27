const ciudades = ["Cuenca", "Granada", "Soria", "Madrid", "Teruel"];
const container=document.querySelector(".container")
const lista= document.createElement("ul");
const itemsLista= ciudades.forEach((itemLista) => {
    const li = document.createElement("li");
    if (itemLista=="Madrid"){
        li.classList.add("gold");
    }
    if (itemLista=="Granada"){
        li.setAttribute("title","Tierra Soñada");
    }
    li.textContent=itemLista;
    lista.append(li);
});
container.append(lista);
