import * as etel from "./etel.js"
import * as pizza from "./pizza.js"

const app = (): void => {
    console.log("Hello World!");
};

const test = (): void => {
    const pizzaClass = new pizza.Pizza("Pepperoni", 22);
    pizzaClass.feltetetFelvesz({ nev: "Sajt", kaloria: 332 });
    console.log(pizzaClass.getAr());
    console.log(pizzaClass.getFeltetek());
    console.log(pizzaClass.getFogyaszthato());
    console.log(pizzaClass.getKaloriaSzam());

}

export { app, test } 