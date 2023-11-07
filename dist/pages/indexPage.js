import { Main } from '../main.js';
const main = new Main();
const logoutUser = (event) => {
    main.index.logoutUser();
    location.reload();
};
const displayLogout = () => {
    const button = document.createElement('button');
    const div = document.createElement('div');
    const rendeles = document.createElement("a");
    button.value = "Logout";
    button.name = "logoutButton";
    button.id = "logoutButton";
    button.innerText = "Logout";
    button.addEventListener('click', logoutUser);
    rendeles.href = "./rendeles";
    rendeles.innerHTML = "Rendeles";
    div.append(rendeles);
    document.body.append(div);
    document.body.append(button);
};
const displayLogin = () => {
    const div = document.createElement('div');
    const a = document.createElement('a');
    a.href = "./login";
    a.innerHTML = "Login";
    div.append(a);
    document.body.append(div);
};
const whatToDisplay = () => {
    if (main.index.checkIfLoggedIn()) {
        displayLogout();
    }
    else {
        displayLogin();
    }
};
// document.addEventListener("DOMContentLoaded", whatToDisplay);
document.onreadystatechange = (event) => {
    if (document.readyState == 'complete') {
        whatToDisplay();
    }
};
