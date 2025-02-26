const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin123",
    database: "test_db"
});

db.connect(err => {
    if (err) throw err;
    console.log("✅ Conectado a la base de datos MySQL -->");
});

module.exports = db;


//node src/config/db.js
