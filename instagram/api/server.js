let express = require('express')
let mysql = require('mysql')
let bodyParser = require('body-parser')
let multiparty = require('connect-multiparty')
let fileSystem = require('fs')
let app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(multiparty())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-XSRF-TOKEN, Content-Type, Accept');
  next();
})

let port = 3000

let connectMySQL = () => {
  return mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'instagram',
  })
}
let connection = connectMySQL()

app.listen(port, () => console.log('SERVIDOR RODANDO....'))

app.get('/', (req, res) => {
  let resposta = { mgs: 'Olá'}
  res.send(resposta)  
})

app.post('/user', (req, res) => {                // insere um registro no banco
  let dados = req.body
  res.send(dados)

  connection.query('insert into usuarios set ?', dados, (err, result, fields) => {
    if(err) throw err
    console.log('RESULTS: ', result)
  })
})

app.get('/users', (req, res) => {                 // busca todos registros no banco
  connection.query('select * from usuarios', (err, result) => {
    if(err) throw err
    res.send(result)
  })
})

app.get('/users/:nome/:senha', (req, res) => {              // busca um registro no banco
  let user = req.params                                     // pelo nome e pela senha (login)

  connection.query(`select * from usuarios where nome = "${user.nome}" and senha = "${user.senha}"`, (err, result) => {
    if(err) throw err
    console.log(result)
    res.send(result)
  })
})

app.get('/api/:id', (req, res) => {               // busca um registro no banco
  let id = req.params

  connection.query(`select * from postagens where id = "${id.id}"`, (err, result) => {
    if(err) throw err
    if(result.length > 0) res.status(200).send(result)
    if(result.length == 0) res.status(400).send('BAD Request :(')
  })
})

app.put('/api/:id', (req, res) => {             // atualiza um campo no banco
  let id = req.params
  let dados = req.body

  connection.query(`update postagens set titulo = "${dados.titulo}" where id = "${id.id}"`, (err, result) => {
    if(err) throw err
    res.send(result)
  })
})

app.delete('/api/:id', (req, res) => {            // deleta um registro no banco
  let id = req.params

  connection.query(`delete from postagens where id = "${id.id}"`, (err, result) => {
    if(err) throw err
    res.send(result)
  })
})

/* Exemplo de inserção de postagem */
/* app.post('/api', (req, res) => {
  let date = new Date()
  time_stamp = date.getTime()

  let url_imagem = time_stsmp +'_'+ req.files.arqs.originalFileName

  let path_orig = req.files.arqs.path
  let path_dest = './uploads/' + url_imagem

  fs.rename(path_orig, path_dest, (err) => {
    if(err) res.status(500).send(err)
  })

  let posts = {
    url_imagem: url_imagem,
    titulo: req.body.titulo
  }

  connection.query('insert into postagens set ?', dados, (err, result, fields) => {
    if(err) throw err
    console.log('RESULTS: ', result)
  })
}) */