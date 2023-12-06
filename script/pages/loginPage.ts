import {Main} from '../main.js'

const loginButton = document.getElementById("loginButton")
const main = new Main()

const getAndLoginUser = (event: any) => {
    console.log("login user")
    const user = document.getElementById("usernameField") as HTMLInputElement | null
    const pass = document.getElementById("passwordField") as HTMLInputElement | null

    if (user && pass != null) {

        main.login.loginUser(user?.value, pass?.value)
    }
    console.log(document.cookie)
    window.location.href = '../'
}

loginButton?.addEventListener("click", getAndLoginUser)
