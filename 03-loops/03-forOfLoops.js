// for of loops 

// the for...of statement creates a loop iterating over iterable objects, meaning it can numerically look over these items 
let student ={name: 'peter', awesome: true, degree: 'JavaScript', week: 1};
for ( item of student){
    console.log(item);
}
//student is not iterable
// looping for an array use for of 
//looping for index use for in
let catArray= ['tabby','british shorthair','burmese','maine coon','rag doll'];
for (cat of catarray){
    console.log(cat)
}
for (cat in catArray){
    console.log(cat);
}