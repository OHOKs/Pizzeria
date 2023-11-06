import * as pizza from "./pizza.js";
import * as cookie from "./services/cookie.js";
import * as register from "./services/register.js";
import * as login from "./services/login.js";
import * as index from "./services/index.js";
class Main {
    constructor() {
        this.c = new cookie.Cookie;
        this.r = new register.Register(this.c);
        this.l = new login.Login(this.c);
        this.i = new index.Index(this.c);
    }
    get cookie() {
        return this.c;
    }
    get login() {
        return this.l;
    }
    get register() {
        return this.r;
    }
    get index() {
        return this.i;
    }
}
const app = () => {
    console.log("Hello World!");
};
const test = () => {
    const pizzaClass = new pizza.Pizza("Pepperoni", 22);
    pizzaClass.feltetetFelvesz({ nev: "Sajt", kaloria: 332 });
    console.log(pizzaClass.ar);
    console.log(pizzaClass.feltetek);
    console.log(pizzaClass.fogyaszthato);
    console.log(pizzaClass.kaloriaSzam);
};
export { app, test, Main };
