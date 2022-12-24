console.log("Practice Set 8");

// Q 1............

let firstbtn = () => {
    alert("first button clicked using js script");
}

let secondbtn = () => {
    alert("second button clicked using js script");
}

let thirdbtn = () => {
    alert("third button clicked using js script");
}

// Q 2...........

let addButton = () => {
    let bookmark = document.getElementById("bookmark");
    let bookmarkText = document.getElementById('bookmark-text');
    let a = document.createElement('a');
    let br = document.createElement('br');
    a.innerHTML = bookmarkText.value;
    a.setAttribute('href', 'https://'+a.innerHTML);
    bookmark.append(a);
    bookmark.append(br);
}

// Q 3............

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', addButton);
