
// przestrzeń globalna
// zmienne stworzone w tym zasięgu "widoczne" sa wszędzie

let number = 426;
console.log(number);

const addNuber = () => {
    /*
    wchodząc do bloku kodu, czyli w przestrzeń między {a}
    wchodzimy w zasięg lokalny.
    */

    console.log(number);
    let localNumber = 1026;
    console.log(localNumber);
    /**
     mienne zadeklarowane w przestrzeni lokalnej
     nie są widoczne w przestrzeni globalnej 
     */
}

addNuber();
console.log(localNumber);