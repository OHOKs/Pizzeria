var _a, _b;
import { Vasarlo } from "../vasarlo.js";
import { Main } from "../main.js";
import { Pizza } from "../pizza.js";
const main = new Main();
const getInputElementValue = (id) => {
    const element = document.getElementById(id);
    switch (element) {
        case null:
            return "noInput";
        default:
            return element.value;
    }
};
const getButtonElement = (id) => {
    return document.getElementById(id);
};
let penzKeret = parseInt(getInputElementValue("penzkeret"));
const vasarlo = new Vasarlo(main.cookie.getCookie("username"), penzKeret);
const createDownloadableJSON = () => {
    // a vasarlo.pizzakatListaz() az minden csak nem JSON, na mind1
    return JSON.stringify(vasarlo.pizzakatListaz());
};
const addItem = (event) => {
    penzKeret = parseInt(getInputElementValue("penzkeret"));
    const pizzaNev = getInputElementValue("pizzaNev");
    const pizzaCal = parseInt(getInputElementValue("pizzaCal"));
    const pizzaAr = parseInt(getInputElementValue("pizzaAr"));
    console.log(pizzaNev);
    vasarlo.pizzatRendel(new Pizza(pizzaNev, pizzaCal, pizzaAr));
};
const downloadAll = (event) => {
    const file = new Blob([createDownloadableJSON()], { type: "application/json" });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(file);
    a.download = `${main.cookie.getCookie("username")}_rendelesei.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
};
(_a = getButtonElement('rendelesHozzaadas')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', addItem);
(_b = getButtonElement('rendelesekLetoltese')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', downloadAll);
document.onreadystatechange = (event) => {
    if (document.readyState == 'complete') {
        if (!main.cookie.checkIfAuthed())
            window.location.href = '../';
    }
};
