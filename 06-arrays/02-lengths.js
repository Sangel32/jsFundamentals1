let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length);

let colors = ["blue", "red", "green", "purple"];

console.log(colors.length);
//converting array into a string
console.log(colors.toString());


colors.forEach(i => {
    console.log(i);
})


//Challenge 

let arr = [1,2,3,4,5]

function checkflip (arr){
    if (arr instanceof Array === true){
        let revArr = arr.reverse ()
        //
        revArr.forEach(item ==> { console.log(item) } )
    };
