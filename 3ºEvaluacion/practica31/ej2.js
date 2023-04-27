const imageUrl= "https://via.placeholder.com/150";
const altImage="Imagen de ejemplo.";

const appDiv=document.querySelector(".app");
const img = document.createElement("img");
img.setAttribute("src",imageUrl);
img.setAttribute("alt", altImage);
appDiv.append(img);

