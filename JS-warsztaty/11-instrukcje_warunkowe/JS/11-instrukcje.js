let cenaChlebaZabrze = 2.3;
let cenaChlebaPoznan = 2.45;

if(cenaChlebaZabrze > cenaChlebaPoznan) {
    document.write(`Chleb z Zabrza jest droższy od chleba w Poznaniu`);
}
else if(cenaChlebaZabrze < cenaChlebaPoznan) {
    document.write(`Chleb w Zabrzu jest tańszy od chleba w Poznaniu`);
}
else {
    document.write(`Chleb w Zabrzy kosztuje tyle samo co w Poznaniu`);
}
//else na koncu jest opcjonalny ale wtedy nie zobaczymy wyniku rownania

//switch
const weekDay = new Date().getDay();
switch(weekDay) {
    case 1:
        console.log(`Poniedziałek`);
        break;
    case 2:
            console.log(`Wtorek`);
            break;  
    case 3:
            console.log(`Środa`);
            break;
    case 4:
            console.log(`Czwartek`);
                    break;

                    case 5:
            console.log(`Piątek`);
            break;

            case 6:
            console.log(`Sobota`);
            break;

            case 7:
            console.log(`Niedziela`);
            break;

            //default jest ocpjonwalny i nie musi posiadac instrukcji choc moze
            default:
                console.log('Nie mam pojęcia jaki jest dziś dzień')
}

//tydzien w tablicy - 2 opcja

const week = ['Pon', 'Wt', 'Sr', 'Czw', 'Piat', 'Sob', 'Niedz'];
console.log(week[weekDay-1])