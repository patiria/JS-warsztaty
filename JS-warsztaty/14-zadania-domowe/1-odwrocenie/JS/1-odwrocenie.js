let letters = ['A', 'k', 'a', 'd', 'e', 'm', 'i', 'a', '1', '0', '8'];
console.log(letters);
console.log(letters.toString());
console.log(letters.reverse());

//sortowanie

letters.sort();
console.log(letters);

//działania na cyfrach: dodawanie i mnożenie

function superSum() {
    let result = 0;
    for (let i=0; i<arguments.length; i++) {
        result += arguments[i];
    }
    console.log(result);
}

superSum(1, 2, 3, 4, 5, 6);

let numbers = [1, 2, 3, 4, 5, 6];
let multiplyNumbers = multiply;

// let numbers = [1, 2, 3, 4, 5, 6];
// console.log (numbers);
// numbers.forEach( function(multiply, numbers)) {
//     console.log(multiplyNumbers());
//   };




// let numbers [1, 2, 3, 4, 5, 6];
// numbers.forEach( function(multiply, numbers)) {
//   console.log('multiplyNumbers: ' + numbers + ' ma wartość ' + multiply );)
// }
// function addNumbers(1, 2, 3, 4, 5, 6) {
//     let result = 1 + 2 + 3 + 4 + 5 + 6;
//     return result;
//   }
//   let sum = addNumbers(1,2,3,4,5,6);