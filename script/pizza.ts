import * as etel from "./etel.js"

interface FeltetekInterface {
    nev: string;
    kaloria: number;
}

interface PizzaInterface extends etel.EtelInterface {
    _ar: number;
    feltetek: Array<string>;

    megromlik(): string;
    feltetetFelvesz(feltet: any): void;
    isAFeltetel(obj: any): obj is FeltetekInterface;

    getAr(): number;
    getFeltetek(): Array<string>;

    setAr(pizzaPrice: number): void;
    setFeltetek(feltetek: Array<string>): void;
}

class Pizza extends etel.Etel implements PizzaInterface {
    _ar: number;
    feltetek: string[];

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

        this.feltetek = [];
    }

    megromlik(): string {
        this._fogyaszthato = false;
        return "A pizza megromlott"
    }

    feltetetFelvesz(feltet: any): void {
        if (!this.isAFeltetel(feltet)) {
            console.log("HIBA Nem egy feltet!");
        }

        for (const felvettFeltet of this.feltetek) {
            if (felvettFeltet === feltet.nev) {
                console.log("HIBA Mar van ilyen feltet!");
                return;
            }
        }

        this.feltetek.push(feltet.nev);
        this._kaloriaSzam += feltet.kaloria;

        console.log("A felvetel sikeres!");
    }

    isAFeltetel(obj: any): obj is FeltetekInterface {
        return 'nev' in obj && 'kaloria' in obj
    }

    getAr(): number {
        return this._ar
    }

    getFeltetek(): string[] {
        return this.feltetek
    }

    setAr(pizzaPrice: number): void {
        if (pizzaPrice < 0) {
            this._ar = 1000;
        } else {
            this._ar = pizzaPrice;
        }
    }

    setFeltetek(feltetek: string[]): void {
        this.feltetek = feltetek
    }

    info(): string {
        return `${this.nev} (${this._kaloriaSzam} kaloria),  fogyaszthato: ${this._fogyaszthato ? "igen" : "nem"}, ar: ${this._ar} forint, feltetek: ${this.feltetek},`
    }
}

export { Pizza }