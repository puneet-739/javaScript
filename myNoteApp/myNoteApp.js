let fetchData = () => {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => response.json())
    .then(res => showData(res));
}

let showData = (res) => {
    addRow(res, 'USD');
    addRow(res, 'GBP');
    addRow(res, 'EUR');
}

let addRow = (res, bpi) => {
    let tableBody = document.getElementById('tableBody');
    let tr = document.createElement('tr');
    tableBody.appendChild(tr);
    let code = document.createElement('td');
    let symbol = document.createElement('td');
    let rate = document.createElement('td');
    let description = document.createElement('td');
    let rateFloat = document.createElement('td');
    tr.appendChild(code);
    code.innerHTML = res['bpi'][`${bpi}`]['code'];
    tr.appendChild(symbol);
    symbol.innerHTML = res['bpi'][`${bpi}`]['symbol'];
    tr.appendChild(rate);
    rate.innerHTML = res['bpi'][`${bpi}`]['rate'];
    tr.appendChild(description);
    description.innerHTML = res['bpi'][`${bpi}`]['description'];
    tr.appendChild(rateFloat);
    rateFloat.innerHTML = res['bpi'][`${bpi}`]['rate_float'];

}


let addNote = (textTitle, textNote) => {
    let noteContainer = document.getElementById('addNoteContainer');
    let note = document.createElement('p');
    note.innerHTML = `<p> ${textTitle} :${textNote}</p>`;
    localStorage.setItem(textTitle, textNote);
    noteContainer.appendChild(note);
}
fetchData();
let fetchNote = () => {
    if(localStorage.length>0) {
        for(let i=0; i<localStorage.length; i++) {
            addNote(localStorage.key(i), localStorage.getItem(localStorage.key(i)))
        }
    }
}
fetchNote();
let storeText = () => {
    let textTitle = document.getElementById('inputTextTitle').value;
    let textNote = document.getElementById('inputTextNote').value;
    addNote(textTitle, textNote);    
}
let clearLocalStorage = () => {
    localStorage.clear();
}
let addBtn = document.getElementById('addBtn');
let rmvBtn = document.getElementById('rmvBtn');
addBtn.addEventListener('click', storeText);
rmvBtn.addEventListener('click', clearLocalStorage);