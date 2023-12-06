import {Main} from '../main.js'

const loginButton = document.getElementById("loginButton")
const main = new Main()

const getAndLoginUser = (event: any) => {
    const user = document.getElementById("usernameField") as HTMLInputElement | null
    const pass = document.getElementById("passwordField") as HTMLInputElement | null

    if (user && pass != null) {

        main.login.loginUser(user?.value, pass?.value)
    }
    window.location.href = '../'
}

loginButton?.addEventListener("click", getAndLoginUser)
