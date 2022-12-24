let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        alert("hey there I am using Whatsapp.");
    }, 2000);
    resolve(true);
});

p1.then((value) => {
    console.log("hey! promise has been resloved.");
})

p1.then((value) => {
    console.log("hey! there I am using Instagram.");
});