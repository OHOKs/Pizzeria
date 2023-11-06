interface CookieInterface {
    setCookie(cname: string, cvalue: string): void
    getCookie(cname: string): string
    checkCookies(cnames: Array<string>): boolean
    checkIfAuthed(): boolean
}

class Cookie implements CookieInterface {
    checkCookies(cnames: Array<string>): boolean {
        let value = true
        for (const c in cnames) {
            if (this.getCookie(c) == "") {
                value = false;
            }
        }
        return true;
    }

    checkIfAuthed(): boolean {
        let c = this.getCookie("auth")
        return (c == 'true');
    }

    getCookie(cname: string): string {
        let decodedCookie = decodeURIComponent(document.cookie)
        let ca = decodedCookie.split(';')
        for (let c of ca) {
            while (c.charAt(0) == ' ') {
                c = c.substring(1)
            }
            if (c.indexOf(`${cname}=`) == 0) {
                return c.substring(cname.length + 1, c.length)
            }
        }
        return "";
    }

    setCookie(cname: string, cvalue: string): void {
        document.cookie = `${cname}=${cvalue};path=/`
    }

}

export {Cookie, CookieInterface}