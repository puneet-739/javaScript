// ______________________PROTOTYPE____________________________
// let p = {
//     name: 'puneet',
//     occupation: 'developer',
//     detail: () => {
//         console.log(`${p.name} ${p.occupation}`);
//     }
// }

// console.log(p);

// let a = {
//     wish: () => {
//         alert("hello world!");
//     }
// }
// p.__proto__ = a;

// p.detail();
// p.wish();
// ____________________________________________________________


class HelloWorld {
    constructor(value) {
        console.log(`this is a constructor with value ${value}`);
    }
    HelloWorld() {
        console.log("this is something weird.?");
    }
    show() {
        alert('hello world!');
    }
    hide() {
        console.log("hello world!");
    }
    value(name, v) {
        this.name = name;
        this.v = v;
        console.log(`you have entered ${this.name} with value ${this.v}`);
    }
}

class World extends HelloWorld {
    constructor(value) {
        super(value)
        console.log("this is world's constructor.");
    }
    worldDetails(){
        console.log('this is the world!!!');
    }
    hide() {
        super.hide();
        super.show();
        console.log("hello universe!!");
    }
}

// let obj = new HelloWorld(5);

// obj.show();
// obj.hide();
// obj.value("Wednesday", 7);
// obj.HelloWorld();
// new HelloWorld(11).HelloWorld();

myWorld = new World(10);
myWorld.worldDetails();
myWorld.value('earth', 3);
myWorld.hide();
