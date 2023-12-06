import {Main} from '../main.js'

const main = new Main()

const logoutUser = (event: any) => {
    main.index.logoutUser()
    location.reload()
}

const displayLogout = () => {
    const button = document.createElement('button')
    const parent = document.getElementById('box')

    button.id = "logoutButton"
    button.innerHTML = "Logout"
    button.addEventListener('click', logoutUser)

    parent?.append(button)
}

const displayRendeles = () => {
    const parent = document.getElementById("box")
    const rendeles = document.createElement("a")

    rendeles.href = "./rendeles"
    rendeles.innerHTML = "Rendeles"

    parent?.append(rendeles)
}

const displayRegister = () => {
    const parent = document.getElementById("box")
    const a = document.createElement('a')

    console.log(parent)

    a.href = "./register"
    a.innerHTML = "Register"

    parent?.append(a)
}

const displayLogin = () => {
    const parent = document.getElementById("box")
    const a = document.createElement('a')

    a.href = "./login"
    a.innerHTML = "Login"

    parent?.append(a)
}

const displayAdminPanel = () => {
    const parent = document.getElementById("box")
    const a = document.createElement('a')

    a.href = "./admin"
    a.innerHTML = "Admin Panel"

    parent?.append(a)
}

const whatToDisplay = () => {
    if (main.index.checkIfLoggedIn()) {
        displayRendeles()
        displayAdminPanel()
        displayLogout()
    } else {
        displayLogin()
        displayRegister()
    }
}

// document.addEventListener("DOMContentLoaded", whatToDisplay);

document.onreadystatechange = (event) => {
    if (document.readyState == 'complete') {
        whatToDisplay()
    }
}

