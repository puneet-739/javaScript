// console.log("Fetch API::");
// let search = prompt("search any song:");
// let baseJioSaavn = fetch(`https://www.jiosaavn.com/api.php?__call=autocomplete.get&_format=json&_marker=0&cc=in&includeMetaTags=1&query=${search}`);
// baseJioSaavn.then((result) => {
//     console.log(result);
// })

// fetch('https://dogapi.dog/api/facts')
//       .then(response => response.json())
//       .then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/posts/2').then(res=> res.json()).then(res => console.log(res))

let getFun = async () => {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
      console.log(`response: ${JSON.stringify(response)}`);
      let res = await response.json();
      console.log(`res: ${JSON.stringify(res)}`);
      return res;
}

getFun();