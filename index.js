// 1. Importar o módulo 'http'
const http = require("http");

// 2. Definir a porta
const port = 3000;

// 3. Criar o servidor
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Olá, Mundo");
  } else if (req.url === "/sobre") {
    res.end("Esta é a página sobre");
  } else {
    res.end("Página não encontrada");
  }
});

// 4. Iniciar o servidor e fazê-lo "ouvir" na porta
server.listen(port, () => {
  // (Adicionei este console.log como um bônus)
  // É uma boa prática nos avisar no terminal que o servidor está no ar.
  console.log(`Servidor rodando na porta ${port}`);
});
