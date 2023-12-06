import * as etel from "./etel.js";
// TODO
//  - cleanup needed
//  - also MAKE THE GOD DAMN NAMES UNIFORM EVERYWHERE
class Pizza extends etel.Etel {
    constructor(pizzaName, pizzaCalorie, pizzaPrice = 1500, feltetekList = []) {
        if (!pizzaName.includes('pizza')) {
            super(pizzaName + " pizza", pizzaCalorie);
        }
        else {
            super(pizzaName, pizzaCalorie);
        }
        if (pizzaPrice < 0) {
            this._ar = 1000;
        }
        else {
            this._ar = pizzaPrice;
        }
        this.feltetekList = feltetekList;
        this._meret = 0;
    }
    get meret() {
        return 0;
    }
    set meret(meret) {
    }
    get ar() {
        return this._ar;
    }
    set ar(pizzaPrice) {
        if (pizzaPrice < 0) {
            this._ar = 1000;
        }
        else {
            this._ar = pizzaPrice;
        }
    }
    get feltetek() {
        return this.feltetekList;
    }
    set feltetek(feltetek) {
        this.feltetekList = feltetek;
    }
    megromlik() {
        this._fogyaszthato = false;
        return "A pizza megromlott";
    }
    feltetetFelvesz(feltet) {
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
    isAFeltetel(obj) {
        return 'nev' in obj && 'kaloria' in obj;
    }
    info() {
        return `${this.nev} (${this._kaloriaSzam} kaloria),  fogyaszthato: ${this._fogyaszthato ? "igen" : "nem"}, ar: ${this._ar} forint, feltetek: ${this.feltetekList},`;
    }
}
export { Pizza };
