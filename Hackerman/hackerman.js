let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Initializing Hack Program...");
    }, 2000)
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hacking Puneet_739...");
    }, 3000)
});
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Username found Puneet_739...");
    }, 5000)
});
let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Connecting to Instagram...");
    }, 7000)
});

let run = async() => {
    let data1 = await p1;
    addElement(data1);
    let data2 = await p2;
    addElement(data2);
    let data3 = await p3;
    addElement(data3);
    let data4 = await p4;
    addElement(data4);
    p4.then((value) => {
        setInterval(() => {
            addElement("HACKED.")
        }, 300
        )
    })
    // let data = await Promise.all([p1, p2, p3, p4]);
}

let addElement = (string) => {
    let container = document.getElementById("container");
    let div = document.createElement('div');
    div.innerHTML = string;
    container.appendChild(div);
}   

run();