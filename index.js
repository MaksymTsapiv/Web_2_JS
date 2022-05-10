/* YOUR CODE HERE! */

var box = document.getElementById("box");
var mouse = document.getElementById("mouse");

mouse.addEventListener("click", function(e) {
    box.style.left = e.clientX + "px";
    box.style.top = e.clientY + "px";
});
