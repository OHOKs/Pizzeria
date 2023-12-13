import {Pizza, PizzaInterface} from "../pizza.js";

interface LoadPizzakInterface {
    getAllPizza(): Array<Pizza>

    generatePizzas(): void;

    getAllPizzaFromLocalStorage(): Array<Pizza>
}

class ManagePizza implements LoadPizzakInterface {
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

    generatePizza(pizzaName: string, pizzaCalorie: number, pizzaPrice?: number, feltetekList?: string[], meret?: number): Pizza {
        return new Pizza(pizzaName, pizzaCalorie, pizzaPrice, feltetekList, meret)
    }

    addNewPizzaToLocalStorage(pizza: PizzaInterface): void {
        const existingPizzas = this.getAllPizzaFromLocalStorage();
        // Workaround for Array.includes() to work

        const existingPizzasString = existingPizzas.map(e => JSON.stringify(e))
        const pizzaString = JSON.stringify(pizza)

        if (!existingPizzasString.includes(pizzaString)) {
            window.localStorage.setItem(this.counter.toString(), JSON.stringify(pizza));
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
        for (let i = 1; i < localStorage.length; i++) {
            const pizzaString = localStorage.getItem(i.toString());
            if (pizzaString != null) {
                let pizzaObj = JSON.parse(pizzaString);
                let pizzaClass = new Pizza(
                    pizzaObj.nev,
                    pizzaObj._kaloriaSzam,
                    pizzaObj._ar,
                    pizzaObj.feltetekList,
                    pizzaObj._meret)
                pizzas.push(pizzaClass);
            }
        }
        return pizzas;
    }

    countUp(): void {
        this._counter++;
        window.localStorage.setItem("0", this._counter.toString())
    }


}

export {LoadPizzakInterface, ManagePizza}
