import {CookieInterface} from "./cookie";

interface IndexInterface {
    checkIfLoggedIn(): boolean
    logoutUser(): void
}

class Index implements IndexInterface {
    private cookie: CookieInterface

    constructor(c:CookieInterface) {
        this.cookie = c
    }

    checkIfLoggedIn(): boolean {
        return this.cookie.checkIfAuthed()
    }

    logoutUser(): void {
        this.cookie.setCookie("auth", "false")
    }
}


export {IndexInterface, Index}