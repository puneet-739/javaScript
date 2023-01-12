console.log("Practice Set 12");

// Q. 1...............................
// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("hello");
//         resolve(1);
//     }, 2000);
// });

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("world");
//         resolve(2);
//     }, 4000);
   
// });

// (async() => {
//     let first = await p;
//     // console.log(first);
//     let second = await p2;
//     // console.log(second);
// }) ();

// Q. 2...............................
// let marks = [12, 32, 43, 64, 22, 54, 34, 98, 43, 65, 57, 78];

// const average = (...arr) => {
//     let marksList = [...arr];
//     let sum = marksList.reduce((x, y) => x + y);
//     return sum / marksList.length;
// }

// console.log(average(...marks));

// Q. 3...............................

// let n = prompt("enter seconds");
// (async (n) => {
//     let p = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Promise has been resolved");
//         }, n)
//     });
//     p.then(value => console.log(value));
// }) (n*1000);


// Q. 4...............................

// let principle = prompt("Enter Principle:");
// let rate = prompt("Enter rate:");
// let time = prompt("Enter time(in years):");
// principle = Number.parseFloat(principle);
// rate = Number.parseFloat(rate);
// time = Number.parseFloat(time);
// const simpleInt = (p, r, t) => {
//     let simpleint = p * r * t / 100;
//     let amount = simpleint + p;
//     console.log(`Simple interest ${simpleint}`);
//     console.log(`final amount ${amount}`);
// }

// simpleInt(principle, rate, time);
