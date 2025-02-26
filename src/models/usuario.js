class Usuario {
    constructor(id, nombre, email) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
    }

    getId() {
        return this.id;
    }

    getNombre() {
        return this.nombre;
    }

    getEmail() {
        return this.email;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    setEmail(email) {
        this.email = email;
    }
}

module.exports = Usuario;
