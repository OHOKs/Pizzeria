import {Vasarlo} from "../vasarlo.js";
import {Main} from "../main.js";
import {Pizza} from "../pizza.js";

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
    // a vasarlo.pizzakatListaz() az minden csak nem JSON, na mind1
    return JSON.stringify(vasarlo.pizzakatListaz())
};

const addItem = (event: any) => {
    penzKeret = parseInt(getInputElementValue("penzkeret"))

    //vasarlo.pizzatRendel(new Pizza(pizzaNev, pizzaCal, pizzaAr))
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
    e.innerHTML += main.loadPizzak.getAllPizza().map(pizza => `<option value="${pizza.nev}">${pizza.nev}</option>`).join('')
}

// TODO finish this, whenever the user select a pizza it should be added to the object, and that should be downloadable
const addPizza = (e: Event) => {
    console.log(e.target?.value)
}

getSelectElement('pizzaDrop')?.addEventListener('change', (e) => addPizza(e))
getButtonElement('rendelesHozzaadas')?.addEventListener('click', addItem)
getButtonElement('rendelesekLetoltese')?.addEventListener('click', downloadAll)

document.onreadystatechange = (event) => {
    if (document.readyState == 'complete') {
        if (!main.cookie.checkIfAuthed()) window.location.href = '../'
        addAllPizzasToSelect()
    }
}