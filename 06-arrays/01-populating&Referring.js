// Arrays 

// Arrays are an object. They are a container that can hold multiple datatypes.
//has [ ] brackets 
//great for lists 

let students =['Sebastian','Eric','Michael',16, 74, ['Nic','Charles','Ethan']]

//console.log(typeof students);
//console.log(students instanceof Array);
console.log(students[1]);

let food = ['Pecan Pie','Shrimp','Quesadillas','Cheesecake','Hotdog'];

for (f in food) {
    console.log(food[f]);
    console.log(f);
}

food.push('Pizza')s
food.splice(1,1, 'Bananas')
food.splice(2,0 'Sweet Potato Pie')