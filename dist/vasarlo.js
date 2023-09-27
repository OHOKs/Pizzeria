import * as pizza from "./pizza.js"


const ujrendeles = new pizza.Pizza("hawai", 300, 2500)

class Vasarlo {
    constructor(nev, penz) {
      this.nev = nev;
      this.penz = penz;
      this.rendelesek = [];
    }
}

pizzatRendel(pizza); {
    if (!(pizza instanceof Pizza)) {
      console.log('HIBA! Nem pizza!');
      return;
    }

    if (!pizza.fogyaszthato) {
      console.log('HIBA! Nem eheto pizza!');
      return;
    }

    if (this.penz < pizza.ara) {
      console.log('HIBA! Nincs eleg penz!');
      return;
    }

    this.penz -= pizza.ara;
    this.rendelesek.push(pizza.nev);
    console.log('Sikeres rendeles!');
  }

  pizzakatListaz(); {
    if (this.rendelesek.length === 0) {
      return 'Nincs rendeles!';
    }

    const rendelesSzamlalo = {};
    for (const pizza of this.rendelesek) {
      if (!rendelesSzamlalo[pizza]) {
        rendelesSzamlalo[pizza] = 1;
      } else {
        rendelesSzamlalo[pizza]++;
      }
    }

    const rendelesLista = [];
    for (const pizza in rendelesSzamlalo) {
      rendelesLista.push(`${rendelesSzamlalo[pizza]} darab ${pizza}`);
    }

    return rendelesLista.join(', ');
  }


class Pizza {
  constructor(nev, ara, fogyaszthato) {
    this.nev = nev;
    this.ara = ara;
    this.fogyaszthato = fogyaszthato;
  }
}

// Teszt
const vevok = new Vasarlo('Kovacs Janos', 10000);
const hawaiiPizza = new Pizza('Hawaii pizza', 1500, true);
const margheritaPizza = new Pizza('Margherita pizza', 1200, true);
const gyrosPizza = new Pizza('Gyros pizza', 1800, false);

vevok.pizzatRendel(hawaiiPizza);
vevok.pizzatRendel(margheritaPizza);
vevok.pizzatRendel(gyrosPizza);

console.log(vevok.pizzakatListaz());
