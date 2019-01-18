// var box = document.createElement('div');
// document.body.appendChild(box);
// box.innerText = '变量声明';

// interface SquareConfig {
//     color?: string;
//     width?: number;
// }
// function createSquare(config: SquareConfig):{color?: string, width:number} {
//     return {
//         color: config.color,
//         width: config.width
//     };
// }
// let mySquare = createSquare({color: "black"});

// interface Point {
//     x: number;
//     readonly y: number;
// }
// let p1: Point = {x: 10, y: 20};
// p1.x = 20;

// let a,b,c: string[] = ['d', '2'];
// console.log(c)


interface SquareConfig {
    color?: string;
    width: number;
    // [sss: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    return {
        color: 'dd',
        area: 100
    }
}
let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);

class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}
interface NotOkay {
    [x: string]: Animal;

}


function buildName(firstName: string, ...restOfName: string[]) {
    return restOfName
}
  
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

function testObj(obj: {[propName: string]:string;}) {
    console.log(obj)
}
testObj({a: 'dd', b: 11})