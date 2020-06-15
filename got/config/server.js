let express = require('express')
let consign = require('consign')
let bParser = require('body-parser')
let eValidt = require('express-validator')
let exp_ses = require('express-session')

let app = express()

app.set('view engine', 'ejs')
app.set('views', './app/views')

app.use(express.static('./app/public'))
app.use(bParser.urlencoded({extended: true}))
app.use(eValidt())
app.use(exp_ses({ 
  secret: '@#a9b8c7#@',              // asssina o cookie da sessão
  resave: false,                     // regrava a cada request se true
  saveUninitialized: true            // cria uma nova sessão quando a mesma for criada se true
}))

consign()
.include('app/routes')
.then('app/controllers')
.then('app/models')
.then('config/dbConnection.js')
.into(app)

module.exports = app