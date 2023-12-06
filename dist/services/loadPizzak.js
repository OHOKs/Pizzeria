import { Pizza } from "../pizza.js";
class LoadPizzak {
    constructor() {
        var _a;
        this._counter = parseInt((_a = window.localStorage.getItem("0")) !== null && _a !== void 0 ? _a : "0");
        this.pizzaList = [];
        this.generatePizzas();
        for (const pizzaListElement of this.pizzaList) {
            this.addNewPizzaToLocalStorage(pizzaListElement);
        }
        console.log(this._counter);
    }
    get counter() {
        return this._counter;
    }
    set counter(value) {
        this._counter = value;
    }
    // Deprecated
    getAllPizza() {
        return this.pizzaList;
    }
    generatePizzas() {
        this.pizzaList.push(new Pizza("Hawaii pizza", 1500, 3000));
        this.pizzaList.push(new Pizza("Husimado pizza", 2500, 4000));
        this.pizzaList.push(new Pizza("Sonkas pizza", 1250, 2500));
    }
    addNewPizzaToLocalStorage(pizza) {
        const existingPizzas = this.getAllPizzaFromLocalStorage();
        // Workaround for Array.includes() to work
        const existingPizzasString = existingPizzas.map(e => JSON.stringify(e));
        const pizzaString = JSON.stringify(pizza);
        if (!existingPizzasString.includes(pizzaString)) {
            window.localStorage.setItem(this._counter.toString(), JSON.stringify(pizza));
            this.countUp();
        }
    }
    // TODO make a button for this, so everything can be cleared
    clearLocalStorage() {
        window.localStorage.clear();
    }
    // if the Pizza Class changes this WILL break
    getAllPizzaFromLocalStorage() {
        const pizzas = [];
        for (let i = 0; i < localStorage.length; i++) {
            const pizzaString = localStorage.getItem(i.toString());
            if (pizzaString != null) {
                let pizzaObj = JSON.parse(pizzaString);
                pizzas.push(pizzaObj);
            }
        }
        return pizzas;
    }
    countUp() {
        this._counter++;
        window.localStorage.setItem("0", this._counter.toString());
    }
}
export { LoadPizzak };
