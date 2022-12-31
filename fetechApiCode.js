// console.log("Fetch API::");
// let search = prompt("search any song:");
// let baseJioSaavn = fetch(`https://www.jiosaavn.com/api.php?__call=autocomplete.get&_format=json&_marker=0&cc=in&includeMetaTags=1&query=${search}`);
// baseJioSaavn.then((result) => {
//     console.log(result);
// })

fetch('https://dogapi.dog/api/facts')
      .then(response => response.json())
      .then(json => console.log(json))