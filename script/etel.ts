interface EtelInterface {
    _kaloriaSzam: number;
    _fogyaszthato: boolean;
    nev: string;

    get kaloriaSzam(): number;
    get fogyaszthato(): boolean;

    set kaloriaSzam(value: number);
    set fogyaszthato(value: boolean);

    info(): string;
}

class Etel implements EtelInterface {
    _kaloriaSzam: number;
    _fogyaszthato: boolean;
    nev: string;

    constructor(nev: string, kaloriaSzam: number) {
        this.nev = nev;
        if (kaloriaSzam >= 0) {
            this._kaloriaSzam = kaloriaSzam;
        } else {
            this._kaloriaSzam = 0;
        }
        this._fogyaszthato = true;
    }

    get kaloriaSzam(): number {
        return this._kaloriaSzam;
    }

    set kaloriaSzam(ertek: number) {
        if (ertek >= 0) {
            this._kaloriaSzam = ertek;
        } else {
            this._kaloriaSzam = 0;
        }
    }

    get fogyaszthato(): boolean {
        return this._fogyaszthato;
    }

    set fogyaszthato(ertek: boolean) {
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

export { Etel, EtelInterface }