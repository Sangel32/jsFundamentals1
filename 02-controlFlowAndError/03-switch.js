//switch

let friend = 'Sebastian';
switch (friend) {
    case "Tom":
    console.log('Hey Tom, when are you going rock climbing');
    break;
    case "Ken":
    console.log('hey Kenn, want to play Catan');
    break;
    case "Carolyn":
    console.log('Hey Carolyn, when are we playing DnD?');
    break;
    default: // always need this to display 
    console.log(`I'm sorry, ${friend}, but do i know you?`);
}

//string inerpolation allows to create a place holder for the value of a variable that we choose to assign 

let dessert = 'Flan';
switch (dessert) {
    case "Pie" :
    console.log('Pie, pie, me oh my!');
    break;
    case "Cake" :
    console.log('Cake is great!');
    break;
    case "ice cream":
    console.log('I scream for ice cream!')
    break;
    default:
    console.log(`I'm sorry, ${dessert}, is not on the menu.`)
}


let yep = -8

switch (true) {
    case (yep< 0 && yep> -10):
        console.log('worked')
        break; 
    case yep >= 0 || yep <= -10:
console.log('worked!') 
    break;
    default:
    console.log('didnt work'); 
}