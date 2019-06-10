class Ogloszenie {
    constructor(id, tytul, tresc, cena, lokalizacja) {
        this.id = id;
        this.tytul = tytul;
        this.tresc = tresc;
        this.cenna = cena;
        this.lokalizacja = lokalizacja;

    }

    wyswietl() {
        document.write(
            `Ogloszenie nr ${this.id}<br>
            Tytuł: ${this.tytul}<br>
            Cena: ${this.cena}<br>
            Lokalizacja: ${this.lokalizacja}
            `
        )
    }
}

const ogloszenie1 = new Ogloszenie(
    0000000123456,
    'Sprzedam kota',
    'Sprawny, mlody kociak, lubiacy sie bawic pilka',
    120,
    'Warszawa'
)

ogloszenie1.wyswietl();

        const ogloszenie2 = new Ogloszenie(
            0003472779,
            'Sprzedam działkę pod Warszawą',
            'Bardzo zielona, odrolniona działka bez sad=siadow obok',
            400000,
            'Otwock'
        )
            
            
        ogloszenie2.wyswietl();
