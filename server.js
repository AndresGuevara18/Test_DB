const express = require("express");
const cors = require("cors");
const path = require("path");
const usuarioRoutes = require("./src/routes/usuarioRoutes");


const app = express();
app.use(express.json());
app.use(cors());

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));


// Usar las rutas de usuarios
app.use("/usuarios", usuarioRoutes);

app.get("/usuario", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "usuario.html"));
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));


//node server.js