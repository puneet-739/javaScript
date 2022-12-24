console.log('hi');

let insideFxn = () => {
    console.log("inside inside fxn");
}

let outsideFxn = () => {
    console.log("outside inside fxn");
}
let mainFxn = (callback) => {
    console.log('inside main function');
    callback();
}
mainFxn(outsideFxn);

mainFxn(()=> {
    console.log('this is a callBack.');
})