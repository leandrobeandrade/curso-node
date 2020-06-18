let express = require('express')
let bodyParser = require('body-parser')
let mysql = require('mysql')
let app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

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

app.post('/api', (req, res) => {                // insere um registro na banco
  let dados = req.body
  res.send(dados)

  connection.query('insert into postagens set ?', dados, (err, result, fields) => {
    if(err) throw err
    console.log('RESULTS: ', result)
  })
})

app.get('/api', (req, res) => {                 // busca todos registros na banco
  connection.query('select * from postagens', (err, result) => {
    if(err) throw err
    res.send(result)
  })
})

app.get('/api/:id', (req, res) => {             // busca um registro na banco
  let id = req.params

  connection.query(`select * from postagens where id = "${id.id}"`, (err, result) => {
    if(err) throw err
    res.send(result)
  })
})

app.put('/api/:id', (req, res) => {
  let id = req.params
  let dados = req.body

  connection.query(`update postagens set titulo = "${dados.titulo}" where id = "${id.id}"`, (err, result) => {
    if(err) throw err
    res.send(result)
  })
})