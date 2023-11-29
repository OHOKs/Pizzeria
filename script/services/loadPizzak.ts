import {Pizza} from "../pizza.js";

interface LoadPizzakInterface {
    getAllPizza(): Array<Pizza>
}

class LoadPizzak implements LoadPizzakInterface {
    private pizzaList: Pizza[];

    constructor() {
        this.pizzaList = [];
        this.generatePizzas()
    }

    getAllPizza(): Array<Pizza> {
        return this.pizzaList;
    }

    generatePizzas(): void {
        this.pizzaList.push(new Pizza("Hawaii pizza", 1500, 3000))
        this.pizzaList.push(new Pizza("Husimado pizza", 2500, 4000))
        this.pizzaList.push(new Pizza("Sonkas pizza", 1250, 2500))
    }

}

export {LoadPizzakInterface, LoadPizzak}