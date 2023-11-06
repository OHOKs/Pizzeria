class Login {
    constructor(c) {
        this.cookie = c;
    }
    loginUser(username, password) {
        let cuser = this.cookie.getCookie("username");
        let cpass = this.cookie.getCookie("password");
        console.log(username, cuser, password, cpass);
        if (cuser == username && cpass == password) {
            this.cookie.setCookie("auth", "true");
        }
    }
}
export { Login };
