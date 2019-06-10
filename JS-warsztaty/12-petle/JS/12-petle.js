for(let i = 10; i <= 18; i=i+1) {
    document.write(`Obrót pętli <b>nr ${i + 1}</b>, wartość zmiennej <b>i = ${i}</b><br>`);
}

//for do chodzenia po tablicach - ciekawostka, mniej uzywane
// const imiona = ['Magda', 'Czeław', 'Lucyna', 'Wiesław'];
// const imionaCount = imiona.length; // 4

// for(let i = 0; i < imionaCount; i++) {
//     console.log(`Imię ${imiona[i]}`);
// }
// //forEach - nie mozna uzyc do obiektow 
// imiona.forEach(
//     (value, index) => {
//         console.log(`Wartość indeksu ${index} tablicy imiona to: ${value}`);
// }
// )

// console.log('=================================');

// //for in - do obiektow
// const samochod = {
//     marka: 'Opel',
//     moc: 78,
//     stan: 'używany'
// }
// for(let i in samochod) {
//     console.log(`Nazwa właściwości obiektu to: ${i}, a jej wartość to: ${samochod[i]}`)
// }
// console.log('=================================');

// //while i do while (łątwo zawiesić przegladarke z nimi, jesli zle ustawimy warunki)

// let item = 15;
// while(item < 10) {
// console.log(`While ==== item = ${item}`);
// item++;
// }

// //do while ZAWSZE wykona sie chociaz raz
// do {
//     console.log(`Do while ==== item = ${item}`);
//     item++;
// } while(item < 10)

// console.log('=============== break i  continue ==================');

// // break i continue - !! nie działa w forEach

// for(let i = 0; i <= 20; i++) {
//     if(i % 2 == 0) {
//         //jesli i jest parzyste zatrzymuje biezaca iteracje i przechodze do nastepnej - continue
//         continue;
//     }

//     //jesli i >= 10 całkowicie zatrzymuje dzialanie teli-break
//     if(i >= 10) {
//         break;
//     }

//     console.log(`Obrot pętli - zmienna i = ${i}`);
// }

//jest jeszcze forOf - do doczytania dla zainteresowanych



