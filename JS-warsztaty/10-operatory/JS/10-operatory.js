
let liczba1 = 4;
let liczba2 = 3;

let wynik = liczba1 + liczba2;
//let wynik = liczba1 - liczba2;
//let wynik = liczba1 / liczba2;
//let wynik = liczba1 * liczba2;
//let wynik = liczba1 % liczba2;
//np. modulo (%) 3 % 4 = 4*0+3 = 3

console.log(wynik);

liczba1 =+ 12;
//liczba1 = liczba1+12

//liczba1 -= 12
//liczba1 = liczba1-12

//liczba1 *= 12
//liczba1 = liczba1*12

//liczba1 /= 12
//liczba1 = liczba1/12

//porownanie
if(liczba1 == liczba2) {
    console.log('liczba1 == liczba2');
    }
    else {
        console.log('liczba1 != liczba2');
    }

    if(liczba1 >= liczba2) {
        console.log('liczba1 >= liczba2');
    }
    else {
        console.log('liczba1 < liczba2');
    }

    //operatory logiczne 

    let fileExist = true;
    let fileSize = 85;

    //negacja
console.log(fileExist, !fileExist);

//warunek
if(fileExist == true && fileSize<= 50) {
    console.log('Możesz załadować plik');
}
else {
    console.log('Plik nie istnieje lub jest za duży');
}
//negacja w powyzszym przypadku dodajemy przed nawiasem !

let color1 = 'red';
let color2 = 'blue';

if(color1 == 'yellow' || color2 == 'blue') {
    console.log('Poprawny kolor');
}
else {
    console.log('Niepoprawny kolor');
}

let wynikColor = (color1 == 'black') ? 'kolor red' : 'kolor nie red';
console.log(wynikColor);
//lub console.log(`UWAGA, wynik działania ${color1 == 'red} ? 'kolor red` : 'kolor nie red'}`);





console.log(liczba1);