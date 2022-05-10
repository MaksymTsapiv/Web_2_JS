/* YOUR CODE HERE! */

let box = document.querySelector('.box');
let number = 1;

function changeColor() {
    let colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black'];
    let random = Math.floor(Math.random() * colors.length);
    box.style.backgroundColor = colors[random];
}
box.addEventListener('contextmenu', changeColor);

function changeSize() {
    box.classList.toggle('box-large');
}

box.addEventListener('click', (e) => {
    if (e.shiftKey) changeSize();
})

function addBox(e) {
    number += 1;
    let newBox = e.target.cloneNode(true);
    newBox.textContent = number;
    console.log(e.target.offsetTop, e.target.offsetHeight);
    newBox.style.top = (e.target.offsetTop + e.target.offsetHeight) + 'px';
    newBox.style.left = (e.target.offsetLeft + e.target.offsetWidth) + 'px'
    console.log(newBox.style.top);
    box.appendChild(newBox);
}
function deleteBox(e) {
    if (box.getElementsByTagName('*').length !== 0) {
        box.removeChild(e.target);
    }
}

box.addEventListener('dblclick', (e) => {
    if (e.altKey) deleteBox(e);
    else addBox(e); 
})
