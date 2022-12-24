let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 2000);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3);
    }, 3000);
});

let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("this is a promise error."));
    }, 3000);
});

// p1.then((value) => {
//     console.log(value);
// });
// p2.then((value) => {
//     console.log(value);
// });
// p3.then((value) => {
//     console.log(value);
// });

let allPromises = Promise.all([p1, p2, p3]);
allPromises.then((value) => {
    console.log(value);
})

let promiseRace = Promise.race([p1, p2, p3]);
promiseRace.then((value) => {
    console.log("winner is "+value);
})

let allSettledPromises = Promise.allSettled([p1, p2, p3, p4]);
allSettledPromises.then((value) => {
    console.log(value);
    console.log(value[0]['value']);
})

