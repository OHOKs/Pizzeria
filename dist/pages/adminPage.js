import { Main } from "../main.js";
const main = new Main();
function parseJSON(jsonData) {
    try {
        const parsedData = JSON.parse(jsonData);
        if (Array.isArray(parsedData)) {
            return parsedData;
        }
        else {
            console.error('Érvénytelen JSON formátum (array issue).');
            return null;
        }
    }
    catch (error) {
        console.error('Hiba történt a fájl olvasása során.', error);
        return null;
    }
}
function handleFile() {
    const fileInput = document.getElementById('fileInput');
    if (fileInput == null)
        return;
    // @ts-ignore
    // TODO figure out whats wrong with this
    const file = fileInput.files[0];
    if (!file) {
        alert('Válassz ki egy JSON fájlt!');
        return;
    }
    const reader = new FileReader();
    reader.onload = function (e) {
        if (e == null)
            return;
        const jsonData = parseJSON(e.target.result);
        displayData(jsonData);
    };
    reader.readAsText(file);
}
function displayData(data) {
    const tbody = document.querySelector('#output tbody');
    if (tbody == null)
        return;
    tbody.innerHTML = '';
    data.forEach((item) => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const calorieCell = document.createElement('td');
        const typeCell = document.createElement('td');
        nameCell.textContent = item.name;
        calorieCell.textContent = item.calorie;
        typeCell.textContent = item.price;
        row.appendChild(nameCell);
        row.appendChild(calorieCell);
        row.appendChild(typeCell);
        tbody.appendChild(row);
    });
}
const uploadButton = document.getElementById("uploadButton");
uploadButton === null || uploadButton === void 0 ? void 0 : uploadButton.addEventListener('click', handleFile);
