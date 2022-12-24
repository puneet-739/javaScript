//  Q 1 ....................

let scriptLoader = (src) =>{
    myPromise = new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        document.body.append(script);
        setTimeout(() => {
            resolve(true);
        }, 3000);
    });
}

scriptLoader("AsyncAwait.js");

myPromise.then((result) => {
    alert("Script has been added.")
}).catch((err) => {
    console.log(err);
});