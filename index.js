/* YOUR CODE HERE! */

let boxContainer = document.getElementsByClassName('box-container')[0];
let box = document.querySelector('.box');
let number = 1;

function changeColor(e) {
    let box = e.target;
    let colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black'];
    let random = Math.floor(Math.random() * colors.length);
    box.style.backgroundColor = colors[random];
}
boxContainer.addEventListener('contextmenu', (e) => changeColor(e));

function changeSize(e) {
    let box = e.target;
    box.classList.toggle('box-large');
}

boxContainer.addEventListener('click', (e) => {
    if (e.shiftKey) changeSize(e);
})

function addBox(e) {
    number += 1;
    let newBox = e.target.cloneNode(true);
    newBox.textContent = number;
    newBox.style.top = (e.target.offsetTop + e.target.offsetHeight) + 'px';
    newBox.style.left = (e.target.offsetLeft + e.target.offsetWidth) + 'px';
    boxContainer.appendChild(newBox);
}
function deleteBox(e) {
    if (boxContainer.getElementsByTagName('*').length !== 1) {
        boxContainer.removeChild(e.target);
    }
}

boxContainer.addEventListener('dblclick', (e) => {
    if (e.altKey) deleteBox(e);
    else addBox(e); 
})

dragElement(document.getElementsByClassName('box')[0]);

function dragElement(el) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(el.id + "header")) {
        document.getElementById(el.id + "header").onmousedown = dragMouseDown;
    } else {
        el.onmousedown = dragMouseDown;
    }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    el.style.top = (el.offsetTop - pos2) + "px";
    el.style.left = (el.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

boxContainer.addEventListener('click', (e) => dragElement(e.target));
