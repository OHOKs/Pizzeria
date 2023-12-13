import * as etel from "./etel.js"

interface FeltetekInterface {
    nev: string;
    kaloria: number;
}

interface PizzaInterface extends etel.EtelInterface {
    _ar: number;
    feltetekList: Array<string>;
    _meret: number;
    _kaloriaSzam: number;

    megromlik(): string;

    feltetetFelvesz(feltet: any): void;

    isAFeltetel(obj: any): obj is FeltetekInterface;

    get ar(): number;

    get feltetek(): Array<string>;

    get meret(): number;

    get kaloriaSzam(): number;

    set ar(pizzaPrice: number);

    set feltetek(feltetek: Array<string>);

    set meret(meret: Number);

    set kaloriSzam(kaloriaSzam: number);

}

// TODO
//  - cleanup needed
//  - also MAKE THE GOD DAMN NAMES UNIFORM EVERYWHERE
class Pizza extends etel.Etel implements PizzaInterface {
    feltetekList: string[];
    _kaloriaSzam: number;

    constructor(pizzaName: string, pizzaCalorie: number, pizzaPrice: number = 1500, feltetekList: string[] = [], meret: number = 24) {
        if (!pizzaName.includes('pizza')) {
            super(pizzaName + " pizza", pizzaCalorie);
        } else {
            super(pizzaName, pizzaCalorie);
        }

        if (pizzaPrice < 0) {
            this._ar = 1000;
        } else {
            this._ar = pizzaPrice;
        }

        this._kaloriaSzam = pizzaCalorie;
        this.feltetekList = feltetekList;
        this._meret = meret;
    }

    _meret: number;

    get meret(): number {
        return 0;
    }

    set meret(meret: Number) {
    }

    _ar: number;

    get ar(): number {
        return this._ar
    }

    set ar(pizzaPrice: number) {
        if (pizzaPrice < 0) {
            this._ar = 1000;
        } else {
            this._ar = pizzaPrice;
        }
    }

    get feltetek(): string[] {
        return this.feltetekList
    }

    set feltetek(feltetek: string[]) {
        this.feltetekList = feltetek
    }

    set kaloriSzam(kaloriaSzam: number) {
    }

    megromlik(): string {
        this._fogyaszthato = false;
        return "A pizza megromlott"
    }

    feltetetFelvesz(feltet: any): void {
        if (!this.isAFeltetel(feltet)) {
            console.log("HIBA Nem egy feltet!");
        }

        for (const felvettFeltet of this.feltetekList) {
            if (felvettFeltet === feltet.nev) {
                console.log("HIBA Mar van ilyen feltet!");
                return;
            }
        }

        this.feltetekList.push(feltet.nev);
        this._kaloriaSzam += feltet.kaloria;

        console.log("A felvetel sikeres!");
    }

    isAFeltetel(obj: any): obj is FeltetekInterface {
        return 'nev' in obj && 'kaloria' in obj
    }

    info(): string {
        return `${this.nev} (${this._kaloriaSzam} kaloria),  fogyaszthato: ${this._fogyaszthato ? "igen" : "nem"}, ar: ${this._ar} forint, feltetek: ${this.feltetekList},`
    }
}

export {Pizza, PizzaInterface}