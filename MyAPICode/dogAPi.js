console.log("Hi Dog.");

let fetchDogData = () => {
    let dogFact = fetch("https://dogapi.dog/api/facts");
dogFact.then(response => response.json())
.then(response => {
    fillFact(response['facts'][0])
});
}

fetchDogData();


let fillFact = (res) => {
    let fact = document.getElementById('fact');
    fact.innerHTML = res;
}
let button = document.getElementById('button');
    button.addEventListener('click', fetchDogData);

