import { Pizza } from "../pizza.js";
// IMPORTANT THIS WILL CLEAR THE LOCALSTORAGE EVERYTIME THE PAGE RELOADS
class LoadPizzak {
    constructor() {
        this._counter = 0;
        this.pizzaList = [];
        // TODO change this
        this.clearLocalStorage();
        this.generatePizzas();
        this.addPizzasToLocalStorage();
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
    // TODO this will blindly rewrite the whole localstorage, this is bad behaviour, it should CHECK what pizzas
    //  already exit in it and only add the ones that aren't present
    addPizzasToLocalStorage() {
        for (const pizzaListElement of this.pizzaList) {
            window.localStorage.setItem(this._counter.toString(), JSON.stringify(pizzaListElement));
            this.countUp();
        }
    }
    // TODO make a version of this, that will sanitize the localstorage, to remove duplicate elements just to be safe
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
    }
}
export { LoadPizzak };
