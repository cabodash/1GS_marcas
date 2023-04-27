const parrafos=document.querySelectorAll("p");

parrafos.forEach(element => {
    console.log(element.textContent);
});

const claseParrafo=document.querySelectorAll(".parrafo");
claseParrafo.forEach(element => {
    console.log(element.textContent);
});

claseParrafo.forEach(element => {
    element.textContent="Hola Mundo";
});

claseParrafo.forEach(element => {
    element.innerHTML+="<span> Infiltrado</span>";
});

