import {CookieInterface} from "./cookie";

interface LoginInterface {
    loginUser(username: string, password: string): void,
}

class Login implements LoginInterface {
    private cookie: CookieInterface

    constructor(c:CookieInterface) {
        this.cookie = c
    }
    loginUser(username: string, password: string): void {
        let cuser = this.cookie.getCookie("username");
        let cpass = this.cookie.getCookie("password");

        console.log(username, cuser, password, cpass)

        if (cuser == username && cpass == password) {
            this.cookie.setCookie("auth", "true")
        }
    }
}


export {LoginInterface, Login}