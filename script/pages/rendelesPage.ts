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

let penzKeret = parseInt(getInputElementValue("penzkeret"))


const vasarlo: Vasarlo = new Vasarlo(main.cookie.getCookie("username"), penzKeret)

const createDownloadableJSON = (): string => {
    // a vasarlo.pizzakatListaz() az minden csak nem JSON, na mind1
    return JSON.stringify(vasarlo.pizzakatListaz())
};

const addItem = (event: any) => {
    penzKeret = parseInt(getInputElementValue("penzkeret"))
    const pizzaNev = getInputElementValue("pizzaNev")
    const pizzaCal = parseInt(getInputElementValue("pizzaCal"))
    const pizzaAr = parseInt(getInputElementValue("pizzaAr"))
    console.log(pizzaNev)
    vasarlo.pizzatRendel(new Pizza(pizzaNev, pizzaCal, pizzaAr))
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

getButtonElement('rendelesHozzaadas')?.addEventListener('click', addItem)
getButtonElement('rendelesekLetoltese')?.addEventListener('click', downloadAll)

document.onreadystatechange = (event) => {
    if (document.readyState == 'complete') {
        if (!main.cookie.checkIfAuthed()) window.location.href = '../'
    }
}