//Iterating

let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hotdog'];

food.forEach(f => {
    console.log(f);
})

//OR

food.forEach(function(i, index) {
    console.log(i, index);
})

// Challenge 

let movies = ['Titanic','Avengers','Avatar','Star Wars'];

function arr(arr) {
    arr.forEach(function(i) {
        console.log(i);
    })

    arr.push("Scarface");
    arr.splice(1,4, "Forrest Gump");
    console.log(arr);
    arr.forEach()
}


let number = [];

function checkAndFlip (arr) {

} 