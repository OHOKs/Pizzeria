import {Vasarlo} from "../vasarlo.js";
import {Main} from "../main.js";
import {Pizza} from "../pizza.js";
import {resolveNaptr} from "node:dns";

const main: Main = new Main()
const getInputElementValue = (id: string) => {
    const element = document.getElementById(id) as HTMLInputElement | null
    switch (element) {
        case null:
            return "noInput"
        default:
            return element.value
    }
}

const getButtonElement = (id: string) => {
    return document.getElementById(id) as HTMLButtonElement | null
}
const getSelectElement = (id: string) => {
    return document.getElementById(id) as HTMLSelectElement | null
}

let penzKeret = parseInt(getInputElementValue("penzkeret"))

const vasarlo: Vasarlo = new Vasarlo(main.cookie.getCookie("username"), penzKeret)

const createDownloadableJSON = (): string => {
    return JSON.stringify(vasarlo.pizzakatListaz())
};

// Dummy data
// its sooo bad i cant even tell u
// TODO xd bad lol
let currentPizza: Pizza = main.loadPizzak.getAllPizza()[0]

const addItem = (event: any) => {
    penzKeret = parseInt(getInputElementValue("penzkeret"))

    vasarlo.pizzatRendel(currentPizza)
    console.log(vasarlo.pizzakatListaz())
}

const downloadAll = (event: any) => {
    const file = new Blob([createDownloadableJSON()], {type: "application/json"})
    const a = document.createElement('a')
    a.href = URL.createObjectURL(file)
    a.download = `${main.cookie.getCookie("username")}_rendelesei.json`
    document.body.appendChild(a)
    a.click()
    a.remove()
}

const addAllPizzasToSelect = () => {
    let e = getSelectElement('pizzaDrop')
    if (e == null) return
    e.innerHTML += main.loadPizzak.getAllPizza()
        .map(pizza => `<option value="${pizza.nev}">${pizza.nev}</option>`)
        .join('')
}

// TODO finish this, whenever the user select a pizza it should be added to the object, and that should be downloadable
const addPizza = (e: any) => {
    const selectedPizza = main.loadPizzak.getAllPizza()
        .map(pizza => e.target?.value == pizza.nev ? pizza : undefined)
        .filter(element => {
            return element !== undefined;
        })[0]

    if (selectedPizza == undefined) return

    currentPizza = selectedPizza
    console.log(selectedPizza)
};

getSelectElement('pizzaDrop')?.addEventListener('change', (e) => addPizza(e))
getButtonElement('rendelesHozzaadas')?.addEventListener('click', addItem)
getButtonElement('rendelesekLetoltese')?.addEventListener('click', downloadAll)

document.onreadystatechange = (event) => {
    if (document.readyState == 'complete') {
        if (!main.cookie.checkIfAuthed()) window.location.href = '../'
        addAllPizzasToSelect()
    }
}