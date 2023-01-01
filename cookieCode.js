console.log(document.cookie);
document.cookie = 'name=puneet1234567';
document.cookie = 'name2=pushpender1234567';
document.cookie = 'name=puneet7654321;'
let key = prompt("enter key ::");
let value = prompt("enter value ::");
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
console.log(document.cookie);


let a = 'hello world%38+:';
let b = encodeURIComponent(a);
console.log(b);

window.onstorage = () => {
    alert("changed.");
}