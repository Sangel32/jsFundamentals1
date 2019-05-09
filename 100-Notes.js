// Assignment


let x = 1;
let y = true;
let z = 'string';

console.log(typeof x)
console.log(typeof y)
console.log(typeof z)

// if else
let x = 1;

if (typeof x === 'boolean' ) {
   console.log('hey that is a boolean')
} else if (typeof x === 'number') {
   console.log('hey that is a number')
} else {
   console.log('hey that is a string')
}

//


// tertiaries
x = 1;
(typeof x === 'boolean' ) ? console.log('thats a booboo ') : (typeof x === 'number') ? console.log('thats a number') : console.log('string')


// switch


let conditionExample = 'booboo';

switch (typeof conditionExample) {

   case 'number':
   console.log('Hey, that is a number.');
   break;

   case 'string':
   console.log('Hey, that is a string');
   break;

   case 'boolean':
   console.log('Hey, that is a boolean')
   break;

   case false:
   console.log('Hey, that is a boolean')
   break;

   default:
   console.log('Uh, your input is broken.')
}


//challenge 
write an if statement that evaluates if a string is the same backwards and forward.
 If it is the same, return the word back out. If it is not the same, return 'This is not a palindrone'. 
 Use the function scafold provided

 let count = 0;
for ( ;  count < 9; ++count ) {
  console.log(count);
}
//

 
function palindrome(name) {
    let words = name.split('').reverse().join('');
    if (words.toUpperCase() === name.toUpperCase()) {
     console.log('This is a palindrome.');
       return true;
      } else {
        console.log('This is not a palindrome.');
        return false;
      }
  }
  
  palindrome('racecar');
  

/*
Challenge:
Write a for loop running between the numbers 0 - 100
For multiples of 3, instead of the number, console.log "Fizz"
For multiples of 5 console.log "Buzz";
For numbers which are multiples of BOTH 3 and 5, console.log "FizzBuzz".
For any other number, console.log the value
*/

//IF ELSE SOLUTION
for (i = 0; i <= 100; i++) {
   if(i % 3 == 0 && i % 5 == 0) {
     console.log('FizzBuzz');
   } else if (i % 3 == 0) {
     console.log('Fizz');
   } else if (i % 5 == 0) {
     console.log('Buzz');
   } else {
     console.log(i)
   }
 }
 
 //SWITCH SOLUTION
 for (i = 0; i <= 100; i++) {
   switch(true){
     case (i % 5 == 0 && i % 3 == 0):
       console.log('FizzBuzz');
     break;
     case (i % 5 == 0) :
       console.log('Buzz');
     break;
     case (i % 3 == 0):
       console.log('Fizz');
     break;
     default:
       console.log(i)
   }
 }
 
 
 //TERNARY SOLUTION
 for (i = 0; i < 101; i++) {(i % 3 == 0 && i % 5 == 0) ? console.log('FizzBuzz') : (i % 3 == 0) ? console.log('Fizz') : (i % 5 == 0) ? console.log('Buzz') : console.log(i) }