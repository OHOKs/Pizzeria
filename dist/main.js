"use strict";

class Etel {
    constructor(nev, kaloriaSzam) {
        this.nev = nev;
        if (kaloriaSzam >= 0){
            this._kaloriaSzam = kaloriaSzam;
        } else {
            this._kaloriaSzam = 0;
        }
        this._fogyaszthato = true;
    }

    get kaloriaSzam() {
        return this._kaloriaSzam;
    }

    set kaloriaSzam(ertek) {
        if (ertek >= 0) {
            this._kaloriaSzam = ertek;
        } else {
            this._kaloriaSzam = 0;
        }
    }

    get fogyaszthato() {
        return this._fogyaszthato;
    }

    set fogyaszthato(ertek) {
        if (typeof ertek === 'boolean') {
            this._fogyaszthato = ertek;
        } else {
            this._fogyaszthato = false;
        }
    }

    info() {
        const fogyaszthato_szoveg = this._fogyaszthato ? "igen" : "nem";
        return `${this.nev} (${this._kaloriaSzam} kaloria), fogyaszthato: ${fogyaszthato_szoveg}!`;
    }
}

const app = () => {
    console.log("Hello World!");
};
