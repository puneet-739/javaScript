let duplicate = () => {
    let hakunaMatata = document.getElementById('hakunaMatata');
    let h1 = document.createElement('h1');
    h1.innerHTML = 'HAKUNA MATATA';
    hakunaMatata.append(h1);
};

let remove = () => {
let hakunaMatata = document.getElementById('hakunaMatata');
    if(hakunaMatata != null) {
        hakunaMatata.lastChild.remove();
    }
}

let changeMode = () => {
    let mainBody = document.getElementById('mainBody');
    mainBody.classList.toggle('darkMode');
}
 

let first = document.getElementById('first');
let a = first.getAttribute('class');
console.log(a);
console.log(first.hasAttribute('class'));
console.log(first.hasAttribute('style'));
// first.setAttribute('hidden', 'true')
// first.removeAttribute('class');
console.log(first.attributes);

let second = document.getElementById('second');
console.log(second.dataset);

let three = document.getElementById("three");
// three.setAttribute('hidden', 'true');

let A = document.getElementsByTagName('div')[2];
console.log(A);
A.innerHTML = A.innerHTML + '<h1> helllo Worlddd </h1>';

let div = document.createElement('div');
div.setAttribute('id', 'hakunaMatata');
div.innerHTML = '<h1> HAKUNA MATATA </h1>'
// document.body.prepend(div);
A.after(div);


 
let haha = document.getElementById('haha');

// ADJACENT POSITIONS TO INSERT ELEMENTS.
// 
// haha.insertAdjacentHTML('beforebegin', '<div class="test"> beforebegin</div>');
// haha.insertAdjacentHTML('beforeend', '<div class="test"> beforeend</div>');
// haha.insertAdjacentHTML('afterbegin', '<div class="test"> afterbegin</div>');
// haha.insertAdjacentHTML('afterend', '<div class="test"> afterend</div>');