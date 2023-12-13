import * as pizza from "./pizza.js";
import * as cookie from "./services/cookie.js";
import * as register from "./services/register.js";
import * as login from "./services/login.js";
import * as index from "./services/index.js";
import * as managePizza from "./services/managePizza.js";
class Main {
    constructor() {
        this._c = new cookie.Cookie;
        this._p = new managePizza.ManagePizza;
        this._r = new register.Register(this._c);
        this._l = new login.Login(this._c);
        this._i = new index.Index(this._c);
    }
    get managePizza() {
        return this._p;
    }
    get cookie() {
        return this._c;
    }
    get login() {
        return this._l;
    }
    get register() {
        return this._r;
    }
    get index() {
        return this._i;
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
