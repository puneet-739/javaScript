
async function harry() {
    let song = new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("song downloaded");
        },4000)
    })
    let movie = new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("movie downloaded");
        },5000)
    })
    let mySong = await song;
    let myMovie = await movie;
    return [mySong, myMovie];
}

harry().then((val)=> {
    console.log(val);
})
console.log(harry());