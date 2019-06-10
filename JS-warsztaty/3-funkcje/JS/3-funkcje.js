//deklaracja funkcji

function showText() {
console.log('Text z funkcji showText');
}

//wywołanie funkcji

showText();


// deklaracja funkcji z parametrami
function showTextDynamic(userText) {
    console.log(userText);
}

// wywołanie funkcji z parametrami
showTextDynamic('Akademia 108 na dzień dziecka !!!');

showTextDynamic('A jutro niedziela');

showTextDynamic('ABC');

// funkcja któa pobiera dane od usera, dodaje na końcu tekstu 
// 3 wykrzykniki i zwraca wynik do użycia w dalszej części programu

const getUserData = function(textInput) {
const resultText = textInput + '!!!';
// zwracam wynik działania funkcji (resultText)
return resultText;
}


let resultFunction = getUserData('Text użytkownika');
/*
tak się dzieje po wywołaniu funkcji getUserData
let resultFunction = return resulttext;
*/

console.log(resultFunction);


// funkcje strzałkowe - ES6
const multiply = (num1, num2) => {
    const result = num1 * num2;
    return result;
}

let multiplyResult = multiply(2, 5);
console.log(multiplyResult);


const multiplyShort = (num1, num2) => num1 * num2;
/*
 odpowiednik zapisu
const multiply = (num1, num2) => {
       return num1 * num2;
}
 */

let resultShort = multiplyShort(2, 3);
console.log(resultShort);


let numbers = [0, 1, 2];
let sum = 0;
for (i=0; 1 <= numbers.length; i++) {
sum+=numbers[i]
}