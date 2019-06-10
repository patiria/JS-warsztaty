
let samochod = {
    marka: 'Ferrari',
    moc: 415,
    kolor: 'czerwony',
    przedstawSie() {
        return `Nazywam się ${this.marka} i mam moc ${this.moc}KM`; 
    },
    odpal() {
        console.log('Brum brum');
    }
}

const instancjaSamochodu1 = samochod.przedstawSie();
console.log(instancjaSamochodu1);

samochod.marka = 'Fiat';
samochod.moc = 80;
const instancjaSamochodu2 = samochod.przedstawSie();
console.log(instancjaSamochodu2);
//istnieje tez zapis do starsze wersji ES, mozna sprawdzic jesli nie zadziala na tej na ktorej pracujemy
samochod.odpal()