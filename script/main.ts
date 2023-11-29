import * as etel from "./etel.js"
import * as pizza from "./pizza.js"
import * as cookie from "./services/cookie.js"
import * as register from "./services/register.js"
import * as login from "./services/login.js"
import * as index from "./services/index.js"
import * as loadPizzak from "./services/loadPizzak.js"


class Main {

    private readonly _c: cookie.Cookie
    private readonly _r: register.Register
    private readonly _l: login.Login
    private readonly _i: index.Index
    private readonly _p: loadPizzak.LoadPizzak

    constructor() {
        this._c = new cookie.Cookie
        this._p = new loadPizzak.LoadPizzak

        this._r = new register.Register(this._c)
        this._l = new login.Login(this._c)
        this._i = new index.Index(this._c)
    }

    get loadPizzak(): loadPizzak.LoadPizzak {
        return this._p;
    }

    get cookie(): cookie.Cookie {
        return this._c
    }

    get login(): login.Login {
        return this._l
    }

    get register(): register.Register {
        return this._r
    }

    get index(): index.Index {
        return this._i;
    }

}

const app = (): void => {
    console.log("Hello World!");
};

const test = (): void => {
    const pizzaClass = new pizza.Pizza("Pepperoni", 22);
    pizzaClass.feltetetFelvesz({nev: "Sajt", kaloria: 332});
    console.log(pizzaClass.ar);
    console.log(pizzaClass.feltetek);
    console.log(pizzaClass.fogyaszthato);
    console.log(pizzaClass.kaloriaSzam);

}
export {app, test, Main}