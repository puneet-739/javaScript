// console.log("This programs");
// console.log("demonstrates. How")
try {
    // console.log(hi);
    throw new Error("this is a custom error.")
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.massage);
    console.log(error.stack);
    console.log("error occurs.")
}
// console.log("Hope you")
// console.log("Understand")

finally {
    console.log("this will execute every time.")
}