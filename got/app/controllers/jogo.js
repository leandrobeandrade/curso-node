module.exports.jogo = (application, req, res) => {
  if(req.session.autorizado) res.render('jogo', {img_casa: req.session.casa })
  else res.send('Erro de autenticação! Obrigatório fazer login.')
}

module.exports.sair = (application, req, res) => {
  req.session.destroy((error) => res.render('index', { validacao: {} }))
}