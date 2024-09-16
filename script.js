// variables
//primitive values
let userName = "mariami" //string
let userAge = 21; //number
let userStatus = false; //boolean
let x = null; //null
let y; //undefined


console.log(typeof x);

// 
let number1 = 10;
let number2 = '20';

let sum = number1 - number2;
console.log(sum);

// 
let number3 = 5;
number3 += 4; //number3 = number3 + 4
console.log(number3);


// 
console.log(1 + "2" + "2"); //122

// 
let item1 = true;

console.log(!item1); //false


// && - და
//|| - ან

console.log(true && false); //false
console.log(true && true); //true
console.log(true && 'hello'); //hello

console.log(true || false); //true
console.log(false || false); //false


//false values:
//false "" undefined 0 null NaN
console.log(undefined && 'hello'); //undefined


// explicit conversion
let el1 = String(10);
let el2 = (15).toString();
let el3 = String(true);

console.log(typeof el1);
console.log(typeof el2);
console.log(el3);
console.log(typeof el3);
console.log(el3.length);


// 
let el4 = Number('5');
console.log(typeof el4);


let el5 = Number(false);
let el6 = Number(true);
let el7 = Number(null);
let el8 = Number('hello');

console.log(el5); //0
console.log(el6); //1
console.log(el7); //0
console.log(el8); //NaN



// implicit

let numberNew1 = 10;
let numberNew2 = '20';

let result = numberNew1 + numberNew2;
console.log(result);
console.log(typeof result);


//if statement
let numberItem = 15;

if (numberItem > 20) {
    console.log('hello1');  
} else if (numberItem > 16) {
    console.log('hello2');
} else if (numberItem >= 16) {
    console.log('hello3');
} else if (numberItem > 20) {
    console.log('hello4');
} else {
    console.log('error');
    
}













