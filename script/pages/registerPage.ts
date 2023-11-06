import {Main} from '../main.js'

const registerButton = document.getElementById("registerButton")
const main = new Main()

const getAndRegisterUserData = (event: any) => {
    console.log("register user")
    const user = document.getElementById("usernameField") as HTMLInputElement | null
    const pass = document.getElementById("passwordField") as HTMLInputElement | null
    const passConf = document.getElementById("passwordField2") as HTMLInputElement | null


    if (user && pass && passConf != null) {
        if (pass?.value != passConf?.value) return
        main.register.registerUser(user?.value, pass?.value)
    }
    console.log(document.cookie)
    window.location.href = '../login'
}

registerButton?.addEventListener("click", getAndRegisterUserData)
