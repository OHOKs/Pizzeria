import {Pizza} from "../pizza.js";

interface LoadPizzakInterface {
    getAllPizza(): Array<Pizza>
}

// IMPORTANT THIS WILL CLEAR THE LOCALSTORAGE EVERYTIME THE PAGE RELOADS
class LoadPizzak implements LoadPizzakInterface {
    private pizzaList: Pizza[];

    constructor() {
        this._counter = 0;
        this.pizzaList = [];
        // TODO change this
        this.clearLocalStorage()
        this.generatePizzas()
        this.addPizzasToLocalStorage()
    }

    private _counter: number;

    get counter(): number {
        return this._counter;
    }

    set counter(value: number) {
        this._counter = value;
    }

    // Deprecated
    getAllPizza(): Array<Pizza> {
        return this.pizzaList;
    }

    generatePizzas(): void {
        this.pizzaList.push(new Pizza("Hawaii pizza", 1500, 3000))
        this.pizzaList.push(new Pizza("Husimado pizza", 2500, 4000))
        this.pizzaList.push(new Pizza("Sonkas pizza", 1250, 2500))
    }

    // TODO this will blindly rewrite the whole localstorage, this is bad behaviour, it should CHECK what pizzas
    //  already exit in it and only add the ones that aren't present
    addPizzasToLocalStorage(): void {
        for (const pizzaListElement of this.pizzaList) {
            window.localStorage.setItem(this._counter.toString(), JSON.stringify(pizzaListElement));
            this.countUp()
        }
    }

    // TODO make a version of this, that will sanitize the localstorage, to remove duplicate elements just to be safe
    clearLocalStorage(): void {
        window.localStorage.clear()
    }

    // if the Pizza Class changes this WILL break
    getAllPizzaFromLocalStorage(): Array<Pizza> {
        const pizzas: Array<Pizza> = [];
        for (let i = 0; i < localStorage.length; i++) {
            const pizzaString = localStorage.getItem(i.toString());
            if (pizzaString != null) {
                let pizzaObj = JSON.parse(pizzaString) as Pizza;
                pizzas.push(pizzaObj);
            }
        }
        return pizzas;
    }

    countUp(): void {
        this._counter++;
    }


}

export {LoadPizzakInterface, LoadPizzak}
