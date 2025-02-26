const express = require("express");
const usuarioController = require("../controllers/usuarioController");

const router = express.Router();

router.get("/", usuarioController.obtenerUsuarios);
router.post("/", usuarioController.agregarUsuario);
router.put("/:id", usuarioController.actualizarUsuario);// ruta con valores dinámicos.
router.delete("/:id", usuarioController.eliminarUsuario);

module.exports = router;
