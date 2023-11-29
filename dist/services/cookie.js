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
    /**
     * Retrieves the value of a cookie by its name.
     *
     * @param {string} cname - The name of the cookie to be retrieved.
     * @return {string} - The value of the cookie with the given name, or an empty string if the cookie doesn't exist.
     */
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
    /**
     * Sets a cookie with the given name and value.
     *
     * @param {string} cname - The name of the cookie.
     * @param {string} cvalue - The value of the cookie.
     * @return {void}
     */
    setCookie(cname, cvalue) {
        document.cookie = `${cname}=${cvalue};path=/`;
    }
}
export { Cookie };
