// For loops 

/*
a loop is a programming tool that repeats a set of instructions until a specified condition is met
*/

const vacationSpots = ['Florence','Copenhagen','Istanbul'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

//Types of Loops
/* 
For statement 
do while statements 
while statements 
labled statement
break statement 
continue statement 
for in statement 
for of statement
*/

// for loop structure 
for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 0; i <=20; i +=2){
    console.log(i)
}

for (let i =10; i > -1;i --) { 
    console.log(i)
}

// challenge usuing a for loop count from 0 going down by 2s to -24

for (let i = 0; i >= -24;i -=2 ){
    console.log(i)
}

// challenge using a for loop go through a name and display each letter indiviually 

let str = "Sebastian"

for (let i = 0; i < str.length; i++){
    console.log(str.charAt(i))
}
 // challenge make a for loop where you add up all the numbers from 1 to 50 (should equal 1275)
// i is indicating your starting at 1 and youre going all the way up to 50 and adding them all up ++
//then use the addition assigment 
 let sum = 0;
 for (let i = 1 ; i <= 50; i++) {
    sum += i
 }
 console.log(sum)
;
 