import "etel"

const app = (): void => {
    console.log("Hello World!");
}

interface FeltetekInterface {
    nev: string;
    kaloria: number;
}

interface PizzaInterface extends EtelInterface {
    _ar: number;
    feltetek: Array<FeltetekInterface>;

    megromlik(): string;
    feltetetFelvesz(feltet: any): void;
    isAFeltetel(obj: any): obj is FeltetekInterface;

    getAr(): number;
    getFeltetek(): Array<FeltetekInterface>;

    setAr(pizzaPrice: number): void;
    setFeltetek(feltetek: Array<FeltetekInterface>): void;
}

class Pizza extends Etel implements PizzaInterface {
    _ar: number;
    feltetek: FeltetekInterface[];

    constructor(pizzaName: string, pizzaCalorie: number, pizzaPrice: number = 1500) {
        if (!pizzaName.includes('pizza')) {
            super(pizzaName + " pizza", pizzaCalorie);
        }

        super(pizzaName, pizzaCalorie);

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
            throw new Error("HIBA Nem egy feltet!");
        }
        // TODO finish this check to find out if a feltet already exists
        this.feltetek.filter(alreadyInArrayFeltet => )
        this.feltetek.push(feltet);
    }

    isAFeltetel(obj: any): obj is FeltetekInterface {
        return 'nev' in obj && 'kaloria' in obj
    }

    getAr(): number {
        return this._ar
    }

    getFeltetek(): FeltetekInterface[] {
        return this.feltetek
    }

    setAr(pizzaPrice: number): void {
        if (pizzaPrice < 0) {
            this._ar = 1000;
        } else {
            this._ar = pizzaPrice;
        }
    }

    setFeltetek(feltetek: FeltetekInterface[]): void {
        this.feltetek = feltetek
    }
}