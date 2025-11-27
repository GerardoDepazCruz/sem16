const express = require("express");
const app = express();

app.get("/", (req, res) => {
res.send("Hola desde Node.js dentro de un contenedor Docker");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
console.log("Servidor ejecutándose en puerto" + PORT);
});