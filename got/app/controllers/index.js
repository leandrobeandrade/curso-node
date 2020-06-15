module.exports.index = (application, req, res) => res.render('index', { validacao: {} })

module.exports.autenticar = (application, req, res) => {
  let dadosForm = req.body

  req.assert('usuario', 'Usuário é obrigatório!').notEmpty()
  req.assert('senha', 'Senha é obrigatória!').notEmpty()

  let erros = req.validationErrors()

  if(erros) {
    res.render('index', { validacao: erros })
    return
  }

  let connection = application.config.dbConnection()
  let usuariosDAO = new application.app.models.usuariosDAO(connection)

  usuariosDAO.autenticar(dadosForm, (error, result) => {
    if(error) throw error

    console.log(result)

    if(result.length > 0) {
      req.session.autorizado = true

      req.session.usuario = result[0].usuario
      req.session.casa = result[0].casa
    }
    if(req.session.autorizado) res.redirect('jogo')
    else res.render('index', { validacao: {} })
  })
}