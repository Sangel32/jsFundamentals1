//Returns
//used to return a value to the code that called the function 

function capitalizeName(name) {
    let capName = '';
    for (let l in name) {
        if (l == 0) {
          capName += name[l].toUpperCase();
        } else{
            capName += name[l].toLowerCase();
        }  
    }
   // console.log(capName)
    return capName
}

const myName = capitalizeName ('Sebastian')

console.log(myName + ' how are you doing?')

//challenges 

function tipCalc(bill) {
  let tip = (bill * 0.2);
  return tip.toFixed(2);
}

let totalTip = tipCalc(19.88);
console.log(totalTip);