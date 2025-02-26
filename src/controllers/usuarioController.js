const usuarioService = require("../services/usuarioService");

const usuarioController = {
    
    //req → Contiene la información de la solicitud del cliente.
    //res → Es el objeto de respuesta que enviará el servido

    // Obtener todos los usuarios
    //(NO usa req.body porque no necesita datos del cliente)
    obtenerUsuarios: async (req, res) => {//permiten manejar funciones asíncronas
        try {
            const usuarios = await usuarioService.obtenerUsuarios();
            //console.log("Usuarios obtenidos:", usuarios); //TD Log para ver si llega la data
            res.json(usuarios);
        } catch (error) {
            console.error("Error obteniendo usuarios:", error); // TD Log para errore
            res.status(500).json({ error: error.message });
        }
    },
   

    //(SÍ usa req.body porque recibe datos del cliente)
    // Agregar un nuevo usuario
    agregarUsuario: async (req, res) => {
        try {
            const { nombre, email } = req.body;//datos enviados por el cliente en formato JSON.
            const usuario = await usuarioService.agregarUsuario(nombre, email);//esperar respuesta antes de continuer ejecucion
            res.json(usuario);//ageragdo en formato json
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Actualizar usuario por ID
    actualizarUsuario: async (req, res) => {
        try {
            const { id } = req.params;
            const { nombre, email } = req.body;
            const resultado = await usuarioService.actualizarUsuario(id, nombre, email);
            res.json(resultado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Eliminar usuario por ID
    eliminarUsuario: async (req, res) => {
        try {
            const { id } = req.params;
            const resultado = await usuarioService.eliminarUsuario(id);
            res.json(resultado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = usuarioController;


//node src/controller/db.js

/*obtenerUsuarios: async (req, res) => {
        try {
            // `await` espera la respuesta de usuarioService.obtenerUsuarios()
            const usuarios = await usuarioService.obtenerUsuarios();
            
            // Cuando la Promesa se resuelve, enviamos la respuesta en JSON
            res.json(usuarios);
        } catch (error) {
            // Capturamos cualquier error y enviamos un mensaje de error
            res.status(500).json({ error: error.message });
        }
    },

*/