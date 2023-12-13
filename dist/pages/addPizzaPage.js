import { Main } from "../main.js";
const main = new Main();
const addEvent = (id, func, eventType = 'click') => {
    var _a;
    (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.addEventListener(eventType, func);
};
const getValue = (id) => {
    const element = document.getElementById(id);
    return element.value;
};
const save = () => {
    const pizzaName = getValue("pizzaName");
    const pizzaCalorie = getValue("pizzaCalorie");
    const pizzaPrice = getValue("pizzaPrice");
    const pizzaFeltetek = getValue("pizzaFeltetek");
    const pizzaMeret = getValue("pizzaMeret");
    const pizza = main.managePizza.generatePizza(pizzaName, parseInt(pizzaCalorie), parseFloat(pizzaPrice), pizzaFeltetek.split(','), parseInt(pizzaMeret));
    main.managePizza.addNewPizzaToLocalStorage(pizza);
};
addEvent("submit", save);
