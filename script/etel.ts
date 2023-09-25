interface EtelInterface {
    _kaloriaSzam: number;
    _fogyaszthato: boolean;
    nev: string;

    getKaloriaSzam(): number;
    getFogyaszthato(): boolean;

    setKaloriaSzam(value: number): void;
    setFogyaszthato(value: boolean): void;

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

    getKaloriaSzam(): number {
        return this._kaloriaSzam;
    }

    setKaloriaSzam(ertek: number): void {
        if (ertek >= 0) {
            this._kaloriaSzam = ertek;
        } else {
            this._kaloriaSzam = 0;
        }
    }

    getFogyaszthato(): boolean {
        return this._fogyaszthato;
    }

    setFogyaszthato(ertek: boolean): void {
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
