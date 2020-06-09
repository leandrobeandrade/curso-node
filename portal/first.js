let http = require('http');
let server = http.createServer((req, res) => {
    let url = req.url

    if(url == '/tecnologia') res.end('<html><body>Tecnologia</body></html>')
    if(url == '/comida') res.end('<html><body>Comida</body></html>')
    else res.end('<html><body>Não encontrado!!</body></html>')
})

server.listen(3000)

/* para rodar somente este exemplo acima no terminal => node first */
/* nodemon nome-do-arquivo => sobe o servidor com nodemon (auto start terminal) */

// req     => dados enviados ao servidor
// res     => dados buscados do servidor
// express => camada que cria uma interface para o node dentro de uma estrutura