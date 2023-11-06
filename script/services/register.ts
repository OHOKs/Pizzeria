import {CookieInterface} from "./cookie";

interface RegisterInterface {
    registerUser(username: string, password: string): void,
}

class Register implements RegisterInterface {
    private cookie: CookieInterface

    constructor(c:CookieInterface) {
        this.cookie = c
    }
    registerUser(username: string, password: string): void {
        this.cookie.setCookie("username", username)
        this.cookie.setCookie("password", password)
        this.cookie.setCookie("auth", "false")
    }

}


export {RegisterInterface, Register}