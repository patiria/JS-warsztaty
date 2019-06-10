
let panstwa = ['Portugalia', 'Argentyna', 'Dominikana', 'Kongo'];
// let simpleType = 15;

//dodaje na koncu 3 panstwa
panstwa.push('Indie', 'Nepal', 'Panama');

//usuwam ostatni indeks z tablicy
panstwa.pop();

//dodamy 2 panstwa

panstwa.unshift('Polska', 'Słowacja');

//usuwam z początku tablicy element
const deletedCountry = panstwa.shift();

console.log(panstwa);
console.log(`Wlasnie usunelam z tablicy element ${deletedCountry}`);


console.log(`Moja tablica sklada sie z ${panstwa.length} elementów`);

// reverse
console.log(panstwa.reverse());



//join

console.log(panstwa.join('-------??------'));

//indexOf (wylapuje dane panstwo) II includes ES6 (okresla czy true czy false)
console.log(panstwa.indexOf('Dominikana'));
// jesli: console.log(panstwa.indexOf('Dominikana AAA')); w konsoli wyswietli sie blad jako -1

console.log(panstwa.includes('Dominikana'));
//wyswietli sie wtedy "true", jednak gdy wpiszemy wartosc 'Dominikana bbb' - wysiwetli "false"

//isArray - sprawdza czy zmienna jest tablicą
// console.log(Array.isArray(simpleType));
//jesli na poczatku wskazemy liczbe simpleType=15 - t wtedy false
console.log(Array.isArray(panstwa));

//toString - zmenia tablicę na string. Separatorem jest ,

console.log(panstwa.toString());

//łączenie tablic 

let panstwaAfryki = ['RPA', 'Egipt', 'Nigeria'];
let zbiorPanstw = panstwaAfryki.concat(panstwa);
console.log(zbiorPanstw);

//łączenie tablic ES6 spread operator - to trudniejszy zapis (ciekawostka)
let zbiorPanstwSpread = [...panstwaAfryki, ...panstwa];
console.log(zbiorPanstwSpread);

//usuwanie elementow ze srodka tablicy

// panstwaAfryki.splice(0,1);
// console.log(panstwaAfryki);

//w nawiasie zaczynamy od momentu usuwania czyli w tym przypadku od poczatku, a dalsza cyfra swiadczy
//o liczbie usuwanych krajow
panstwaAfryki.splice(0,2, 'Sudan', 'Etipia');
console.log(panstwaAfryki);