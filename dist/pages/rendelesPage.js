var _a, _b, _c;
import { Vasarlo } from "../vasarlo.js";
import { Main } from "../main.js";
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
const getSelectElement = (id) => {
    return document.getElementById(id);
};
let penzKeret = parseInt(getInputElementValue("penzkeret"));
const vasarlo = new Vasarlo(main.cookie.getCookie("username"), penzKeret);
const createDownloadableJSON = () => {
    return JSON.stringify(vasarlo.pizzakatListaz());
};
// Dummy data
// its sooo bad i cant even tell u
// TODO xd bad lol
let currentPizza = main.loadPizzak.getAllPizza()[0];
const addItem = (event) => {
    penzKeret = parseInt(getInputElementValue("penzkeret"));
    vasarlo.pizzatRendel(currentPizza);
    console.log(vasarlo.pizzakatListaz());
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
const addAllPizzasToSelect = () => {
    let e = getSelectElement('pizzaDrop');
    if (e == null)
        return;
    e.innerHTML += main.loadPizzak.getAllPizza()
        .map(pizza => `<option value="${pizza.nev}">${pizza.nev}</option>`)
        .join('');
};
// TODO finish this, whenever the user select a pizza it should be added to the object, and that should be downloadable
const addPizza = (e) => {
    const selectedPizza = main.loadPizzak.getAllPizza()
        .map(pizza => { var _a; return ((_a = e.target) === null || _a === void 0 ? void 0 : _a.value) == pizza.nev ? pizza : undefined; })
        .filter(element => {
        return element !== undefined;
    })[0];
    if (selectedPizza == undefined)
        return;
    currentPizza = selectedPizza;
    console.log(selectedPizza);
};
(_a = getSelectElement('pizzaDrop')) === null || _a === void 0 ? void 0 : _a.addEventListener('change', (e) => addPizza(e));
(_b = getButtonElement('rendelesHozzaadas')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', addItem);
(_c = getButtonElement('rendelesekLetoltese')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', downloadAll);
document.onreadystatechange = (event) => {
    if (document.readyState == 'complete') {
        if (!main.cookie.checkIfAuthed())
            window.location.href = '../';
        addAllPizzasToSelect();
    }
};
