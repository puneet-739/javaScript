export const myFunction = () => {
    console.log('imported successfully');
}
export const myFunction2 = () => {
    console.log('fun 2 imported successfully');
}

const specialFun = () => {
    console.log("this is a special function.");
}
const specialFun2 = () => {
    console.log("this is a special function 2.");
}

export default {specialFun, specialFun2};
