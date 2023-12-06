import {Main} from "../main.js";

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
        displayData(jsonData);
    };

    reader.readAsText(file);
}

function displayData(data: any) {
    const tbody = document.querySelector('#output tbody');
    if (tbody == null) return
    tbody.innerHTML = '';

    data.forEach((item: { nev: string | null; _kaloriaSzam: string | null; _ar: string | null; }) => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const calorieCell = document.createElement('td');
        const typeCell = document.createElement('td');

        nameCell.textContent = item.nev;
        calorieCell.textContent = item._kaloriaSzam;
        typeCell.textContent = item._ar

        row.appendChild(nameCell);
        row.appendChild(calorieCell);
        row.appendChild(typeCell);

        tbody.appendChild(row);
    });
}

const uploadButton = document.getElementById("uploadButton")
uploadButton?.addEventListener('click', handleFile)

document.onreadystatechange = () => {
    displayData(main.loadPizzak.getAllPizzaFromLocalStorage())
};
