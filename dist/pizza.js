import "etel";
const app = () => {
    console.log("Hello World!");
};
class Pizza extends Etel {
    constructor(pizzaName, pizzaCalorie, pizzaPrice = 1500) {
        if (!pizzaName.includes('pizza')) {
            super(pizzaName + " pizza", pizzaCalorie);
        }
        super(pizzaName, pizzaCalorie);
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
            throw new Error("HIBA Nem egy feltet!");
        }
        // TODO finish this check to find out if a feltet already exists
        this.feltetek.filter(alreadyInArrayFeltet => );
        this.feltetek.push(feltet);
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
}
