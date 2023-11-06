class Cookie {
    checkCookies(cnames) {
        let value = true;
        for (const c in cnames) {
            if (this.getCookie(c) == "") {
                value = false;
            }
        }
        return true;
    }
    checkIfAuthed() {
        let c = this.getCookie("auth");
        return (c == 'true');
    }
    getCookie(cname) {
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let c of ca) {
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(`${cname}=`) == 0) {
                return c.substring(cname.length + 1, c.length);
            }
        }
        return "";
    }
    setCookie(cname, cvalue) {
        document.cookie = `${cname}=${cvalue};path=/`;
    }
}
export { Cookie };
