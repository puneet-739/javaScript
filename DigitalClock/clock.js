console.log('hi');
// GOT CLOCK OBJECT TO SET INNER HTML
let clock = document.getElementById('clock');
let time = 0;
clock.innerHTML = time;

// TIMER FUNCTION 
let timer = () => {
    time++;
    clock.innerHTML = time;
}

let intervalId;
let timerInterval = () => {
    intervalId = setInterval(timer, 1000);
}

// START BUTTON WORKING CODE
let start = document.getElementById('start');
start.addEventListener('click', timerInterval);

// RESET ME FUCNTION
let resetMe = () => {
    time = 0;
    clock.innerHTML = time;
    clearInterval(intervalId);    
}

let stopMe = () => {
    clock.innerHTML = time;
    clearInterval(intervalId);    
} 

// RESET BUTTON WORKING CODE
let reset = document.getElementById('reset');
reset.addEventListener('click', resetMe);

let stop = document.getElementById('stop');
stop.addEventListener('click', stopMe);