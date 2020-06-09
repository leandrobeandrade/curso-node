let express = require('express')
let consign = require('consign')
let body_pa = require('body-parser')
let exp_val = require('express-validator')

let app = express()                             // executa o express

app.set('view engine', 'ejs')                   // seta o ejs
app.set('views', './app/views')                 // seta os caminhos

/*midlewares*/
app.use(body_pa.urlencoded({extended: true}))   // usa o body-parser - url decodificados
app.use(exp_val())                              // usa o express-validator

/*usa arquivos estáticos*/
app.use(express.static('./assets'))             // usa css e imagens

/*habilita cors - angular*/
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-XSRF-TOKEN, Content-Type, Accept');
    next();
})

consign()
.include('app/routes')                          // inclui todas as rotas
.then('config/dbConnection.js')                 // inclui a conexão com o banco
.then('app/models')                             // inclui os models
.into(app)

module.exports = app
