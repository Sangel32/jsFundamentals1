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
