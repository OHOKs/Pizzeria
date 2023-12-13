import {Main} from "../main.js";
import {networkInterfaces} from "node:os";
import {Pizza} from "../pizza";

const main = new Main()

function parseJSON(jsonData: any) {
    try {
        const parsedData = JSON.parse(jsonData);

        if (Array.isArray(parsedData)) {
            return parsedData;
        } else {
            console.error('Érvénytelen JSON formátum (array issue).');
            return null;
        }
    } catch (error) {
        console.error('Hiba történt a fájl olvasása során.', error);
        return null;
    }
}

// TODO change this to: when u upload a file it appends it to window.localstorage then rerenders the whole table
function handleFile() {
    const fileInput = document.getElementById('fileInput');

    if (fileInput == null) return;

    // @ts-ignore
    // TODO figure out whats wrong with this
    const file = fileInput.files[0];

    if (!file) {
        alert('Válassz ki egy JSON fájlt!');
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e: any) {
        if (e == null) return
        const jsonData = parseJSON(e.target.result);
        if (jsonData == null) return
        for (const pizzaObj of jsonData) {
            const pizza = pizzaObj as Pizza
            main.managePizza.addNewPizzaToLocalStorage(pizza)
        }
        displayData(main.managePizza.getAllPizzaFromLocalStorage());
    };

    reader.readAsText(file);
}

function displayData(data: any) {
    const tbody = document.querySelector('#output tbody');
    if (tbody == null) return
    tbody.innerHTML = '';

    data.forEach((item: {
        nev: string | null;
        _kaloriaSzam: string | null;
        _ar: string | null;
        feltetekList: string[] | null;
        _meret: string | null;
    }) => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const calorieCell = document.createElement('td');
        const priceCell = document.createElement('td');
        const feltetekCell = document.createElement('td')
        const meretCell = document.createElement('td')

        nameCell.textContent = item.nev;
        calorieCell.textContent = item._kaloriaSzam;
        priceCell.textContent = item._ar;
        feltetekCell.textContent = item.feltetekList?.join(", ") ?? "Not found";
        meretCell.textContent = item._meret;

        row.appendChild(nameCell);
        row.appendChild(calorieCell);
        row.appendChild(priceCell);
        row.appendChild(feltetekCell);
        row.appendChild(meretCell);

        tbody.appendChild(row);
    });
}

const handleNewPizza = () => {
    window.location.href = "./addPizza"
}

const uploadButton = document.getElementById("uploadButton")
uploadButton?.addEventListener('click', handleFile)
const newPizzaButton = document.getElementById("newPizzaButton")
newPizzaButton?.addEventListener('click', handleNewPizza)

document.onreadystatechange = () => {
    displayData(main.managePizza.getAllPizzaFromLocalStorage())
};
