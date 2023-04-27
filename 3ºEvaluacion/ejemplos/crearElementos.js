const paquito = document.querySelector(".board");
const container = document.createElement("div");
/* const item1 = document.createElement("p");
const item2 = document.createElement("p");

item1.textContent = "Como están los máquinas";
item2.textContent = " lo primero de todo";

container.append(item1, item2);
paquito.append(container);*/

const items = ["item 1", "item 2","item 3","item 4","item 5","item 6","item 7","item 8"];
paquito.append(container);
items.forEach((element) => {
    const pElement = document.createElement("p");
    pElement.textContent=element;
    container.append(pElement);
});