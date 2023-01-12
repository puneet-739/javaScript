console.log("Practice Set 11");

// Q1. .......................

class ComplexNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
        this.value = `${real} + i${imaginary}`;
    }

    get I() {
        return this.imaginary;
    }
    set I(v) {
        this.imaginary = v;
    }

    get R() {
        return this.real;
    }
    set R(v) {
        this.imaginary = v;
    }
    add(r, i) {
        this.real = this.real + r;
        this.imaginary = this.imaginary + i;
        return `${this.real} + i${this.imaginary }`;
    }
}

let num = new ComplexNumber(2, 3);
console.log(num.value);
console.log(num.I);
console.log(num.R);
console.log(num.add(3, 4));
console.log(num.I);
console.log(num.R);
