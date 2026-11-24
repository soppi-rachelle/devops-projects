const cors = require("cors");
const express = require("express");

const app = express();
app.use(cors({
    origin: "http://192.168.56.10:5173"
}));
const PORT = 5111;

app.use(express.json());

// Route principale
app.get("/", (req, res) => {
    res.json({
        message: "Bienvenue dans le projet DevOps de SOPPI RACHELLE !",
        application: "React + Node.js",
        status: "Running"
    });
});

// Route de santé
app.get("/health", (req, res) => {
    res.json({
        status: "UP"
    });
});

// Démarrage du serveur
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
