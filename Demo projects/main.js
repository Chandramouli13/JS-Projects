
const button = document.querySelector('button');
const body = document.querySelector('body');
const color = ['red', 'green', 'blue', 'yellow','orange','pink'];

body.style.backgroundColor = 'wheat';

button.addEventListener('click', changeBg) 

function changeBg() {
    const colorIndex = parseInt(Math.random() * color.length)
    body.style.backgroundColor = color[colorIndex]
}   