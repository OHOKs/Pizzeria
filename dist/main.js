import * as pizza from "./pizza.js";
const app = () => {
    console.log("Hello World!");
};
const test = () => {
    const pizzaClass = new pizza.Pizza("Pepperoni", 22);
    pizzaClass.feltetetFelvesz({ nev: "Sajt", kaloria: 332 });
    console.log(pizzaClass.getAr());
    console.log(pizzaClass.getFeltetek());
    console.log(pizzaClass.getFogyaszthato());
    console.log(pizzaClass.getKaloriaSzam());
};
export { app, test };
