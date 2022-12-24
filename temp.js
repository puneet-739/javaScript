console.log("hi");
let hahaha = document.getElementById("haha");
hahaha.setAttribute('class', 'tempClass');
console.dir(hahaha);
console.dir(hahaha.outerHTML);
console.log(hahaha.attributes);

let arr = Array.from(hahaha.attributes);
console.log(arr);
arr.forEach((x) => {console.log(x)});