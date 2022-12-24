console.log('hi');
alert("hello world");

// TO EXECUTE SOMETHING AFTER SOME TIME.
let a = setTimeout( function() {
    alert("hello universe")
}, 3000);

console.log("i am inside the console");
let ch = confirm("do you want to see next prompt");
if(!ch) {
    clearTimeout(a);
}
console.log(a);

let sum = () => {
    let a = prompt("enter value of a ");
    let b = prompt("enter value of b ");
    if(a==0 && b==0) {
        stopAB();
    }    
    a = Number.parseInt(a);
    b = Number.parseInt(b);
    alert(`the sum of ${a} and ${b} is ${a+b}`);
    console.log(`sum is = ${a} + ${b} = ${a+b}`);
}

let b = setTimeout(sum, 3000, 3, 4);
console.log(b);

let abID = setInterval(sum, 10000)

let stopAB = () => {
    clearInterval(abID);
};
// setInterval(function() {
//     prompt("did you see the trailer of ant man and the wasp quantumaina");
// }, 5000);
