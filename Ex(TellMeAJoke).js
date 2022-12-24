let jokeArray = ["joke1", "joke2", "joke3", "joke4", "joke5", "joke6", "joke7", "joke8", "joke9", "joke10", "joke11", "joke12", "joke13", "joke14"];
let randomJoke = jokeArray[Math.floor(Math.random()*1000 % jokeArray.length)];
document.getElementsByClassName('joke').innerHtml = randomJoke;
document.body.childNodes[13].innerHTML = randomJoke;
