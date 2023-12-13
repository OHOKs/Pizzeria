import {Main} from "../main.js";

const main = new Main()

const addEvent = (id: string, func: (event: any) => any, eventType: string = 'click') => {
    document.getElementById(id)?.addEventListener(eventType, func)
}

const getValue = (id: string): string => {
    const element: HTMLInputElement = document.getElementById(id) as HTMLInputElement
    return element.value;
}


const save = () => {
    const pizzaName = getValue("pizzaName")
    const pizzaCalorie = getValue("pizzaCalorie")
    const pizzaPrice = getValue("pizzaPrice")
    const pizzaFeltetek = getValue("pizzaFeltetek")
    const pizzaMeret = getValue("pizzaMeret")

    const pizza = main.managePizza.generatePizza(
        pizzaName,
        parseInt(pizzaCalorie),
        parseFloat(pizzaPrice),
        pizzaFeltetek.split(','),
        parseInt(pizzaMeret));

    main.managePizza.addNewPizzaToLocalStorage(pizza)
}

addEvent("submit", save)