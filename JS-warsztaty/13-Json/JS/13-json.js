let jsonOsoby = {
    "osoby": [
        {
            imie: "Krystian", 
            nazwisko: "Dziopa", 
            wzrost: 180, 
            oczy: "niebieskie", 
            zainteresowania: [ 
                { nazwa: "podroze" }, 
                { nazwa: "gotowanie" }
            ] 
        },
        {
            imie: "Dominik",
            nazwisko: "Gomuła",
            wzrost: 170,
            oczy: "brązowe",
            zainteresowania: [
                { nazwa: "gotowanie" },
                { nazwa: "języki" }
            ]
        },
        {
            imie: "Claudia",
            nazwisko: "Żelazowska",
            wzrost: 167,
            oczy: "brązowe",
            zainteresowania: [
                { nazwa: "programowanie" },
                { nazwa: "podroze" },
                { nazwa: "języki" }
            ]
            
        }
    ]
}
console.log(jsonOsoby);

//nieuzywane zmienne swieca sie jasnym kolorem szarym 
jsonOsoby.osoby.forEach(
    (value, index) => {
        const textContent = `imie: ${value.imie} | nazwisko: ${value.nazwisko} | wzrost: ${value.wzrost}<br>`;
        document.write(textContent);
    }
    )

    //xml trudniejszy system od jsona, ale mozna sie z nim zapoznac