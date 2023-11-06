class Register {
    constructor(c) {
        this.cookie = c;
    }
    registerUser(username, password) {
        this.cookie.setCookie("username", username);
        this.cookie.setCookie("password", password);
        this.cookie.setCookie("auth", "false");
    }
}
export { Register };
