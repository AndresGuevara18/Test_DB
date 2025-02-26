const db = require("../config/db");
const Usuario = require("../models/usuario");

const usuarioService = {
    obtenerUsuarios: (callback) => {//Función que se ejecuta cuando la consulta termina.
        db.query("SELECT * FROM usuarios", (err, results) => {//ejecuta consulta
            if (err) return callback(err, null);
            //mapea cada fila resultado instancia de clase usuario
            const usuarios = results.map(row => new Usuario(row.id, row.nombre, row.email));
            callback(null, usuarios);//retonar clista de usaurios
        });
    },

    agregarUsuario: (nombre, email, callback) => {
        db.query("INSERT INTO usuarios (nombre, email) VALUES (?, ?)", [nombre, email], (err, result) => {
            if (err) return callback(err, null);
            callback(null, new Usuario(result.insertId, nombre, email));//posible error y lo que se recibe
        });
    },

    actualizarUsuario: (id, nombre, email, callback) => {
        db.query("UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?", [nombre, email, id], (err, result) => {
            if (err) return callback(err, null);
            callback(null, result);
        });
    },

    eliminarUsuario: (id, callback) => {
        db.query("DELETE FROM usuarios WHERE id = ?", [id], (err, result) => {
            if (err) return callback(err, null);
            callback(null, result);
        });
    }
    
};

/*if (require.main === module) {
    usuarioService.obtenerUsuarios((err, usuarios) => {
        if (err) {
            console.error("Error obteniendo usuarios:", err);
        } else {
            console.log("Usuarios obtenidos:", usuarios);
        }
    });
}*/

//node src/services/usuarioService.js

module.exports = usuarioService;
