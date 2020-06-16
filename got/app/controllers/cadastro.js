module.exports.cadastro = (application, req, res) => {
  res.render('cadastro', { validacao: {}, dadosForm: {} })
}

module.exports.cadastrar = (application, req, res) => {
  let dadosForm = req.body
  
  req.assert('nome', 'Nome é obrigatório!').notEmpty()
  req.assert('usuario', 'Usuário é obrigatório!').notEmpty()
  req.assert('senha', 'Senha é obrigatório!').notEmpty()
  req.assert('casa', 'Casa é obrigatório!').notEmpty()

  let erros = req.validationErrors()
  console.log(erros)

  if(erros) {
    res.render('cadastro', { validacao: erros, dadosForm: dadosForm })
    return
  }

  let connection = application.config.dbConnection()
  let usuariosDAO = new application.app.models.usuariosDAO(connection)

  usuariosDAO.inserirUsuario(dadosForm, (error, result) => {
    if(error) throw error
  })
}
