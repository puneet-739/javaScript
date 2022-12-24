console.log("pSet7"); 
// Q 4 continue...


// Q 1.............

document.body.childNodes[1].firstElementChild.style.backgroundColor = 'red'; // first method

let home = document.getElementsByClassName('menu'); // second method
home[0].firstElementChild.style.backgroundColor = 'green';


// Q 2.............

// No need to write code.


// Q 3.............

document.body.childNodes[7].firstElementChild.style.color = 'green';
document.body.childNodes[7].lastElementChild.style.color = 'green';


// Q 4............

let menuList = document.querySelectorAll('li');
menuList.forEach(element => {
    element.style.backgroundColor = 'green';
});
