import * as etel from "./etel.js"
import * as pizza from "./pizza.js"
import * as cookie from "./services/cookie.js"
import * as register from "./services/register.js"
import * as login from "./services/login.js"
import * as index from "./services/index.js"
import {Index} from "./services/index.js";

class Main {
    private readonly c: cookie.Cookie
    private readonly r: register.Register
    private readonly l: login.Login
    private readonly i: index.Index

    constructor() {
        this.c = new cookie.Cookie

        this.r = new register.Register(this.c)
        this.l = new login.Login(this.c)
        this.i = new index.Index(this.c)
    }

    get cookie(): cookie.Cookie {
        return this.c
    }

    get login(): login.Login {
        return this.l
    }

    get register(): register.Register {
        return this.r
    }

    get index(): Index {
        return this.i;
    }

}
const app = (): void => {
    console.log("Hello World!");
};

const test = (): void => {
    const pizzaClass = new pizza.Pizza("Pepperoni", 22);
    pizzaClass.feltetetFelvesz({ nev: "Sajt", kaloria: 332 });
    console.log(pizzaClass.ar);
    console.log(pizzaClass.feltetek);
    console.log(pizzaClass.fogyaszthato);
    console.log(pizzaClass.kaloriaSzam);

}
export { app, test, Main }