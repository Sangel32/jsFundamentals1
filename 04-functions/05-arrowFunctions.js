//Arrow Functions

//Normal 
function coffee() {
    console.log('coffee is good');
}

//Fat arrow
let coffee = () => {
    console.log('fat arrow coffee');
}
coffee(); 
//concise body 
//concise bodies do not parantheses, unless you have more than one parameter 
// return is impled
let apples = x => console.log('There are ${x} apples and ${y} pears.');
apples(10,5)

//blocks body  curly braces create 
let apples = (x) => {console.log('there are ${x} apples.'); }
apples(10);