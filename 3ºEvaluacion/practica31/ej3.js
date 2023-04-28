const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
const appDiv = document.querySelector('.app');
appDiv.classList.add(randomColor);

if (randomColor === 'yellow' || randomColor === 'pink' || randomColor === 'purple') {
  appDiv.classList.add('medium');
} else if (randomColor === 'orange') {
  appDiv.classList.add('large');
} else {
  appDiv.classList.add('small');
}
appDiv.textContent = 'Soy un cuadrado en el centro';