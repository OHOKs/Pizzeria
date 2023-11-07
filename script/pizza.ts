import * as etel from "./etel.js"

interface FeltetekInterface {
    nev: string;
    kaloria: number;
}

interface PizzaInterface extends etel.EtelInterface {
    _ar: number;
    feltetekList: Array<string>;

    megromlik(): string;

    feltetetFelvesz(feltet: any): void;

    isAFeltetel(obj: any): obj is FeltetekInterface;

    get ar(): number;

    get feltetek(): Array<string>;

    set ar(pizzaPrice: number);

    set feltetek(feltetek: Array<string>);
}

class Pizza extends etel.Etel implements PizzaInterface {
    feltetekList: string[];

    constructor(pizzaName: string, pizzaCalorie: number, pizzaPrice: number = 1500) {
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

        this.feltetekList = [];
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