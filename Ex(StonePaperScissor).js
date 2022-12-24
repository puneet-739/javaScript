
// console.log(ranNum);
do {
console.log('Stone Paper Scissor');
alert("Welcome to Stone Paper Scissor Game");
alert("This game consists of 5 rounds: \n The game is bewteen you and the computer \n Select 's' for stone, 'p' for paper, 'x' for scissor");
let comScore = 0;
let userScor = 0;
let i = 1;
while(i <= 5) 
{
    let userCh = prompt("Enter your choice:\n Select 's' for stone, 'p' for paper, 'x' for scissor");
    let ranNum = Number.parseInt(Math.random() * 10) % 3;
    if((userCh == 's' && ranNum == 0) || (userCh == 'p' && ranNum == 1) || (userCh == 'x' && ranNum == 2)) 
    {
        console.log(userCh+ranNum);
        alert(` You Selected ${userCh == 's'? 'Stone': (userCh == 'p'? 'paper': 'scissor')} and the computer Selected ${ranNum == 0? 'stone': (ranNum == 1? 'paper' : 'scissor')}. \n Draw.`);
    }
    else if((userCh == 's' && ranNum == 2) || (userCh == 'p' && ranNum == 0) || (userCh == 'x' && ranNum == 1))
    {
        console.log(userCh+ranNum);
        alert(` You Selected ${userCh == 's'? 'Stone': (userCh == 'p'? 'paper': 'scissor')} and the computer Selected ${ranNum == 0? 'stone': (ranNum == 1? 'paper' : 'scissor')}. \n you won this round.`);
        userScor++;
    }
    else
    {
        console.log(userCh+ranNum);
        alert(` You Selected ${userCh == 's'? 'Stone': (userCh == 'p'? 'paper': 'scissor')} and the computer Selected ${ranNum == 0? 'stone': (ranNum == 1? 'paper' : 'scissor')}. \n computer won this round.`);
        comScore++;
    }
    i++;
}
alert(`your score: ${userScor} \n computer score: ${comScore}`);
if(userScor > comScore)
{
    alert("congratulations you won this game.");
}
else if ( userScor < comScore) {
    alert("computer won this game better luck next time.");
}
else
{
   alert("The game ended in a draw.");
}
ch = confirm("Do you want to play agian?");
}
while(ch == true);
