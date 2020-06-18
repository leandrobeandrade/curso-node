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

app.post('/api', (req, res) => {                // insere um registro no banco
  let dados = req.body
  res.send(dados)

  connection.query('insert into postagens set ?', dados, (err, result, fields) => {
    if(err) throw err
    console.log('RESULTS: ', result)
  })
})

app.get('/api', (req, res) => {                 // busca todos registros no banco
  connection.query('select * from postagens', (err, result) => {
    if(err) throw err
    res.send(result)
  })
})

app.get('/api/:id', (req, res) => {             // busca um registro no banco
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