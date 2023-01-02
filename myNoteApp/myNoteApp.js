let fetchData = () => {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => response.json())
    .then(res => showData(res));
}

let showData = (res) => {
    let weather = document.getElementById('weather');
    weather.innerHTML = res['bpi']['USD']['symbol'];
}
fetchData();