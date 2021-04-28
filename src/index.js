const { sortAndFill } = require('./algorithm');

let array            = [];
let arrayElements    = 100000;
let maxElementNumber = 100000;

for(let i = 0; i < arrayElements; i++ ){
  array.push( Math.ceil( Math.random()  * maxElementNumber ) ) 
}
  
let output = sortAndFill(array)

console.log(output)