let express = require('express')
let consign = require('consign')
let bParser = require('body-parser')
let eValidt = require('express-validator')

let app = express()

app.set('view engine', 'ejs')
app.set('views', './app/views')

app.use(express.static('./app/public'))
app.use(bParser.urlencoded({extended: true}))
app.use(eValidt())

consign()
.include('app/routes')
.then('app/controllers')
.into(app)

module.exports = app