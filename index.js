const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Olá, Mundo");
});

app.get("/sobre", (req, res) => {
  res.send("Esta é a página sobre");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
