import {Pizza} from "../pizza.js";

interface LoadPizzakInterface {
    getAllPizza(): Array<Pizza>
}

class LoadPizzak implements LoadPizzakInterface {
    // This is Deprecated
    private pizzaList: Pizza[];

    constructor() {
        this._counter = parseInt(window.localStorage.getItem("0") ?? "0");
        this.pizzaList = [];
        this.generatePizzas()
        for (const pizzaListElement of this.pizzaList) {
            this.addNewPizzaToLocalStorage(pizzaListElement)
        }
        console.log(this._counter)
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

    addNewPizzaToLocalStorage(pizza: Pizza): void {
        const existingPizzas = this.getAllPizzaFromLocalStorage();

        // Workaround for Array.includes() to work
        const existingPizzasString = existingPizzas.map(e => JSON.stringify(e))
        const pizzaString = JSON.stringify(pizza)

        if (!existingPizzasString.includes(pizzaString)) {
            window.localStorage.setItem(this._counter.toString(), JSON.stringify(pizza));
            this.countUp()
        }
    }

    // TODO make a button for this, so everything can be cleared
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
        window.localStorage.setItem("0", this._counter.toString())
    }


}

export {LoadPizzakInterface, LoadPizzak}
