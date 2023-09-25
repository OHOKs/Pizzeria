import * as etel from "./etel.js";
class Pizza extends etel.Etel {
    constructor(pizzaName, pizzaCalorie, pizzaPrice = 1500) {
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
        this.feltetek = [];
    }
    megromlik() {
        this._fogyaszthato = false;
        return "A pizza megromlott";
    }
    feltetetFelvesz(feltet) {
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
    isAFeltetel(obj) {
        return 'nev' in obj && 'kaloria' in obj;
    }
    getAr() {
        return this._ar;
    }
    getFeltetek() {
        return this.feltetek;
    }
    setAr(pizzaPrice) {
        if (pizzaPrice < 0) {
            this._ar = 1000;
        }
        else {
            this._ar = pizzaPrice;
        }
    }
    setFeltetek(feltetek) {
        this.feltetek = feltetek;
    }
    info() {
        return `${this.nev} (${this._kaloriaSzam} kaloria),  fogyaszthato: ${this._fogyaszthato ? "igen" : "nem"}, ar: ${this._ar} forint, feltetek: ${this.feltetek},`;
    }
}
export { Pizza };
