let express = require('express')
let bodyParser = require('body-parser')
let mysql = require('mysql')

let app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let port = 3000

app.listen(port, () => console.log('SERVIDOR RODANDO....'))