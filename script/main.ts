import * as etel from "./etel.js"
import * as pizza from "./pizza.js"

const app = (): void => {
    console.log("Hello World!");
};

const test = (): void => {
    const pizzaClass = new pizza.Pizza("Pepperoni", 22);
    pizzaClass.feltetetFelvesz({ nev: "Sajt", kaloria: 332 });
    console.log(pizzaClass.ar);
    console.log(pizzaClass.feltetek);
    console.log(pizzaClass.fogyaszthato);
    console.log(pizzaClass.kaloriaSzam);

}

export { app, test } 