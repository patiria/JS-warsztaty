
let wyplata = 4800;
let premia = 1400;
let calkowityDochod;

console.log(typeof wyplata); //numer
console.log(typeof calkowityDochod); // undefined

calkowityDochod = wyplata + premia;
console.log(calkowityDochod);


//przyklad ktory tez wyjdzie gdy jest uzyty string
// let wyplata = '4800';
// let premia = '1400';
// let calkowityDochod;

// console.log(typeof wyplata); //string
// console.log(typeof calkowityDochod); // undefined

// calkowityDochod = Number(wyplata) + Number(premia);
// console.log(calkowityDochod);


//typ boolean
const slonce = true;
console.log('=======================');
console.log(typeof slonce);

if(slonce == true) {
       console.log('Dzis jest ladna pogoda');
}
else {
    console.log('Dzis jest brzydka pogoda');
}

//typ null
const btn = document.querySelector('button');
console.log(typeof btn);

console.log('=======================');

// template string
const imie = 'Asia';
const text = `
        Nazywam 
        się 
        ${imie}`;
console.log(text); 
//można rozbić text i konsola czyta to w akapicie