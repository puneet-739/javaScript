
let bulbBtn = document.getElementById('bulbBtn');

let BulbOn = () =>{
    bulbBtn.innerHTML == 'off'? bulbBtn.innerHTML = 'on': bulbBtn.innerHTML = 'off';
    let bulbTop = document.getElementById('bulbHead');
    bulbTop.classList.toggle('bulbOn');

}

bulbBtn.addEventListener('click', BulbOn);

