import { Main } from '../main.js';
const registerButton = document.getElementById("registerButton");
const main = new Main();
const getAndRegisterUserData = (event) => {
    console.log("register user");
    const user = document.getElementById("usernameField");
    const pass = document.getElementById("passwordField");
    const passConf = document.getElementById("passwordField2");
    if (user && pass && passConf != null) {
        if ((pass === null || pass === void 0 ? void 0 : pass.value) != (passConf === null || passConf === void 0 ? void 0 : passConf.value))
            return;
        main.register.registerUser(user === null || user === void 0 ? void 0 : user.value, pass === null || pass === void 0 ? void 0 : pass.value);
    }
    console.log(document.cookie);
    window.location.href = '../login';
};
registerButton === null || registerButton === void 0 ? void 0 : registerButton.addEventListener("click", getAndRegisterUserData);
