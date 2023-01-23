let alarmTime = '';
let dt;
let stopBtn = document.getElementById('stopBtn');

const fetchTime = () => {
    dt = new Date().toString();
    let currentT = document.getElementById('currentTime');
    currentT.innerHTML = dt;
}

const alarmMachine = () => {
    let currentTList = dt.split(' ');
    let HrMMSsList = currentTList[4].split(':');
    let hr = HrMMSsList[0];
    let mnt = HrMMSsList[1];
    let sec = HrMMSsList[2];

    let alarmTimeList = alarmTime.split(':');
    let hrA = alarmTimeList[0];
    let mnA = alarmTimeList[1];

    if((hr === hrA) && (mnt === mnA)) {
        let audio = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav');
        audio.play();
        stopBtn.style.display = 'block';
    }
}


setInterval(() => {
    fetchTime();
    alarmMachine();
}, 1000)

const setAlarm = () => {
    let timePicker = document.getElementById('timePicker');
    if(timePicker.value === '') {
        console.log("time is empty.");
    } 
    else {
        alarmTime = timePicker.value;
        let message = document.getElementById('message');
        message.innerHTML = `Alarm Time: ${alarmTime}`;
        alert(`Alarm has been set to ${alarmTime}`);
    }
}

let alarmBtn = document.getElementById('alarmBtn');


alarmBtn.addEventListener('click', setAlarm);
stopBtn.addEventListener('click', () => {
    alarmTime = '';
    alert('alarm has been stopped.');
    stopBtn.style.display = 'none';
    
});





