let app = require('./config/server')

// let home = require('./app/routes/home')                       antes
// let form = require('./app/routes/formulario')                   do         
// let noti = require('./app/routes/noticias')                   consign

let msg = require('./module-test')

// home(app)                                                     antes
// form(app)                                                       do
// noti(app)                                                     consign

app.listen(3000, () => {
    console.log(`
    ############################
    ############################

    ${msg()}

    ############################
    ############################
    `)
})

/* process.exit() || process.abort() <= força o encerramento da aplicação */
/* kill 1073 <= mata o processo do mysql */

// MODO ESTÁTICO
/* app.get('/', (req, res) => {
    res.send('<html><body><h1>TESTES</h1></body></html>')
})

app.get('/tecnologia', (req, res) => {
    res.send('<html><body><h1>TECNOLOGIA</h1></body></html>')
})

app.get('/comida', (req, res) => {
    res.end('<html><body><h1>COMIDA</h1></body></html>') // end tbm funciona
}) */