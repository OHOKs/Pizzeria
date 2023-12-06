import { Pizza } from "../pizza.js";
class LoadPizzak {
    constructor() {
        this.pizzaList = [];
        this.generatePizzas();
    }
    getAllPizza() {
        return this.pizzaList;
    }
    generatePizzas() {
        this.pizzaList.push(new Pizza("Hawaii pizza", 1500, 3000));
        this.pizzaList.push(new Pizza("Husimado pizza", 2500, 4000));
        this.pizzaList.push(new Pizza("Sonkas pizza", 1250, 2500));
    }
}
export { LoadPizzak };
