class Index {
    constructor(c) {
        this.cookie = c;
    }
    checkIfLoggedIn() {
        return this.cookie.checkIfAuthed();
    }
    logoutUser() {
        this.cookie.setCookie("auth", "false");
    }
}
export { Index };
