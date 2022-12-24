// console.log('hi');

// let p1 = new Promise((resolve, reject) => {
//     console.log('promise is pending');
//     setTimeout(() => {
//         alert('I am a promise and I am fulfilled');
//         resolve(true);
//     }, 5000)
// });

// let p2 = new Promise((resolve, reject) => {
//     console.log('promise is pending');
//     setTimeout(() => {
//         alert('I am a promise and I am rejected');
//         reject(Error('I am an error'));
//     }, 5000)
// });

// p1.then((value) => {
//     console.log(value);
// })

// p2.then((value) => {
//     console.log(value);
// })
// p2.catch((error) => {
//     console.log(error);
// })


// console.log(p1);
// console.log(p2);

let p3 = new Promise((resolve, reject) => {
    console.log("hi I am in promise");
    // reject("promise Unsuccessful");
    resolve("promise successfull");
})

p3.then((value) => {
    console.log(value);
},
(error) => {
    console.log(error);
})