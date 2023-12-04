import {Pizza, PizzaInterface} from "./pizza.js";

class Vasarlo {
    private vnev: string
    private vpenz: number
    private rendelesek: any[]

    constructor(n: string, p: number) {
        this.vnev = n;
        this.vpenz = p;
        this.rendelesek = [];
    }

    pizzatRendel(pizza: PizzaInterface): void {
        console.log(pizza)
        if (!(pizza instanceof Pizza)) {
            console.log('HIBA! Nem pizza!');
            return;
        }

        if (!pizza.fogyaszthato) {
            console.log('HIBA! Nem eheto pizza!');
            return;
        }

        if (this.vpenz < pizza.ar) {
            console.log('HIBA! Nincs eleg penz!');
            return;
        }

        this.vpenz -= pizza.ar;
        this.rendelesek.push(pizza);
        console.log('Sikeres rendeles!');
    }

    pizzakatListaz(): Pizza[] {
        // NOTE: i DONT GIVE A SHIT ANYMORE
        // if (this.rendelesek.length === 0) {
        //     return 'Nincs rendeles!';
        // }

        const rendelesSzamlalo = [];
        for (const pizza of this.rendelesek) {
            if (!rendelesSzamlalo[pizza]) {
                rendelesSzamlalo[pizza] = 1;
            } else {
                rendelesSzamlalo[pizza]++;
            }
        }

        const rendelesLista = [];
        for (const pizza in rendelesSzamlalo) {
            rendelesLista.push(`${rendelesSzamlalo[pizza]} darab ${pizza.toString()}`);
        }

        return this.rendelesek;
    }
}

export {Vasarlo}

// // Teszt
// const vevok = new Vasarlo('Kovacs Janos', 10000);
// const hawaiiPizza = new Pizza('Hawaii pizza', 1500);
// const margheritaPizza = new Pizza('Margherita pizza', 1200);
// const gyrosPizza = new Pizza('Gyros pizza', 1800);
//
// vevok.pizzatRendel(hawaiiPizza);
// vevok.pizzatRendel(margheritaPizza);
// vevok.pizzatRendel(gyrosPizza);
//
// console.log(vevok.pizzakatListaz());
