//For in Loops

//Great for iterating over values in an object 
// The for in statement iterates a specfied variable over all the enumerable properties of an object.

let student = {name: 'peter', awesome: true, degree: "javascript", week:1};
for (item in student){
   // console.log('item =>', item);
    console.log('student[item] =>', student[item]);
}

let dogArray = ['collie', 'pitbull','newfie','st bernard','dachshund'];
for(dog in dogArray){
    console.log(dog)
}

let catArray = ['tabby','british shorthair','burmese','maine coon','rag doll'];
for (cat in catArray){
    console.log(cat[2])
}


// challenge write a for in loop that capitalizes the first letter of a students name

let studentName = 'sebastian';
let capName; 
for (let n in studentName){
    if (n == 0){
        capName = studentName[n].toUpperCase();
    } else {
        capName += studentName[n].toLowerCase()
    }
}
console.log(capName);