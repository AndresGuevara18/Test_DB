const usuarioService = require("../services/usuarioService");

const usuarioController = {
    //(NO usa req.body porque no necesita datos del cliente)
    obtenerUsuarios: (req, res) => { //req: Representa la solicitud del cliente res: Es la respuesta que enviará el servidor
        usuarioService.obtenerUsuarios((err, usuarios) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(usuarios);
        });
    },
    //(SÍ usa req.body porque recibe datos del cliente)
    agregarUsuario: (req, res) => {
        const { nombre, email } = req.body;
        usuarioService.agregarUsuario(nombre, email, (err, usuario) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(usuario);
        });
    },

    actualizarUsuario: (req, res) => {
        const { id } = req.params;
        const { nombre, email } = req.body;
        usuarioService.actualizarUsuario(id, nombre, email, (err, resultado) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ mensaje: "Usuario actualizado correctamente" });
        });
    },

    eliminarUsuario: (req, res) => {
        const { id } = req.params;
        usuarioService.eliminarUsuario(id, (err, resultado) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ mensaje: "Usuario eliminado correctamente" });
        });
    }
};

//thunder client
module.exports = usuarioController;
