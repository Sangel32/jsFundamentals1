//if else syntax
if (condition){
    logic
    console.log(logic)
}  else {
    console.log(error)
} 

 weather = 75;
 if (weather < 70) {
  console.log('wear a jacket')
 }
 else {
   console.log('no jacket necessary!')
}; 

// Challenge

let Name = "Sebastian" 

if (Name == 'Sebastian'){
 console.log("Hello, my name is", Name)
} else{
    console.log("Hello, what is your name?")
}

let myName = "sebastiAn"
let str = 'Sebastian'
if (str[0] === str[0].toUpperCase()) {
  let firstLetter = str[0] + str.slice(1).toLowerCase()
  console.log(firstLetter)
} else {
  let otherLetters = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  console.log(otherLetters)
}


let name ='sEbastian'
if (name == 'seBastian'){
    console.log ('capatilize fist letter of name')
} else {
    console.log('Sebastian')
}
/* 
Challenge:
Set a variable age and give it an age of your choice
Set an else if statement that convey the following:
If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
If the age is at least 18, console.log 'Yay! You can vote!'
If the age is at least 21, console.log 'Yay! You can drink!'
If the age is at least 25, console.log 'Yay! You can rent a car!'
*/



let age =  25
let young = "Sorry, youre too young to do anything."
let vote = "Yay! you can vote!"
let drink = "Yay! you can drink!"
let rent = "Yay! you can rent a car!"

if (age >= 30 && age < 120) {
    console.log(rent, drink, vote)
} else if (age >=21) {
    console.log(drink,vote)
}  else if (age >=18){
    console.log(vote)
} else {
    console.log(young) } 


 (age >25) ? console.log(rent, drink,vote) : (age >=21)? console.log(drink,vote) : (age >=18)? console.log (vote) : console.log(young)