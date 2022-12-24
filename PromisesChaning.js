let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("resolved after 2 sec")
    }, 2000);
    resolve(true);
})

p1.then((value) => {
    console.log(value);
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("p2 resolved after 2 sec.");
        })
        resolve("p2 reslove...")
    })
    return p2;
}).then((value) => {
    console.log(value);
    return 1;
}).then((value) => {
    console.log(value);
})