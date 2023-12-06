import { Main } from '../main.js';
const loginButton = document.getElementById("loginButton");
const main = new Main();
const getAndLoginUser = (event) => {
    const user = document.getElementById("usernameField");
    const pass = document.getElementById("passwordField");
    if (user && pass != null) {
        main.login.loginUser(user === null || user === void 0 ? void 0 : user.value, pass === null || pass === void 0 ? void 0 : pass.value);
    }
    window.location.href = '../';
};
loginButton === null || loginButton === void 0 ? void 0 : loginButton.addEventListener("click", getAndLoginUser);
