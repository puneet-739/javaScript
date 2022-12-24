console.log("hi");

let x = function(e) {
    console.log(e);
    alert('hello world');
}

let y = function(e) {
    console.log(e);
    alert('hello world 2');
}

let changeMode = document.getElementById("changeMode");

changeMode.addEventListener('click', x);
changeMode.addEventListener('click', y);

let ch = prompt("enter your choice:");
if(ch==1) {
    changeMode.removeEventListener('click', x);
}