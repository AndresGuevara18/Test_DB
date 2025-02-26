const db = require("../config/db");
const Usuario = require("../models/usuario");

const usuarioService = {
    // Obtener todos los usuarios
    obtenerUsuarios: async () => {//permiten manejar funciones asíncronas
        const [results] = await db.promise().query("SELECT * FROM usuarios"); // Consulta SQL con promesa
        // Mapeo cada fila de la base de datos
        return results.map(row => new Usuario(row.id, row.nombre, row.email)); 
    },

    // Agregar un nuevo usuario
    agregarUsuario: async (nombre, email) => {
        const [result] = await db.promise().query(
            "INSERT INTO usuarios (nombre, email) VALUES (?, ?)",
            [nombre, email]
        );
        return new Usuario(result.insertId, nombre, email); // Retorna el nuevo usuario creado
    },

    // Actualizar usuario por ID
    actualizarUsuario: async (id, nombre, email) => {
        await db.promise().query(
            "UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?",
            [nombre, email, id]
        );
        return { mensaje: "Usuario actualizado correctamente" };
    },

    // Eliminar usuario por ID
    eliminarUsuario: async (id) => {
        await db.promise().query("DELETE FROM usuarios WHERE id = ?", [id]);
        return { mensaje: "Usuario eliminado correctamente" };
    }
};

module.exports = usuarioService;
