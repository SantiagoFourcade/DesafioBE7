class containerMemoria {
    constructor() {
        this.cosas = []
    }

    guardar(cosas) {
        this.cosas.push(cosas)
    }

    recuperar() {
        return this.cosas
    }
}