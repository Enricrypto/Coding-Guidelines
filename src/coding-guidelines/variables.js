// bad
var a = 1;
var b = 2;

//good
let a =1
let b = 2


// bad
var count = 1;
if (true) {
  count += 1;
}

//good
let count = 1;
if (true) {
  count += 1;
}



// bad
const myFunc = ()=>{
    let a = 1;
    const b = 1;
    var c = 1;
}

console.log(a);
console.log(b);
console.log(c)

//good 
let a, b, c;

const myFunction = () => {
  a = 1;
  b = 1;
  c = 1;
};

myFunc();
console.log(a);
console.log(b);
console.log(c);


//bad - Names
let x = 0;
const numerofitems = 1;

//good

let item = 0;
const numberOfItems = 1;


