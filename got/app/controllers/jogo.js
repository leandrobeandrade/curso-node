module.exports.jogo = (application, req, res) => {
  if(req.session.autorizado !== true) { 
    res.send('Erro de autenticação! Obrigatório fazer login.')
    return
  }

  let comando_invalido = 'N'
  if(req.query.comando_invalido == 'S') comando_invalido = 'S'

  req.session.comando = comando_invalido

  res.render('jogo', { 
    img_casa: req.session.casa, 
    usuario: req.session.usuario,
    comando: req.session.comando
  })
}

module.exports.sair = (application, req, res) => {
  req.session.destroy((error) => res.render('index', { validacao: {} }))
}

module.exports.suditos = (application, req, res) => {
  if(req.session.autorizado !== true) { 
    res.send('Erro de autenticação! Obrigatório fazer login.')
    return
  }
  res.render('aldeoes', { validacao: {} })
}

module.exports.pergaminhos = (application, req, res) => {
  if(req.session.autorizado !== true) { 
    res.send('Erro de autenticação! Obrigatório fazer login.')
    return
  }
  res.render('pergaminhos', { validacao: {} })
}

module.exports.ordenarAcaoSudito = (application, req, res) => {
  if(req.session.autorizado !== true) { 
    res.send('Erro de autenticação! Obrigatório fazer login.')
    return
  }

  let dados = req
  
  req.assert('acao', 'Ação deve ser informada!').notEmpty()
  req.assert('quantidade', 'Quantidade deve ser informada!').notEmpty()

  let erros = req.validationErrors()

  if(erros) {
    res.redirect('jogo?comando_invalido=S')
    return
  }

  let connection = application.config.dbConnection()
  let jogoDAO = new application.app.models.jogoDAO(connection)

  jogoDAO.acao(dados, (error, result) => {
    if(error) {
      console.log(error)
      return
    }
  })

  res.redirect('jogo?comando_invalido=N')
}