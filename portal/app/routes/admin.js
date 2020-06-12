module.exports = (app) => {
  app.get('/formulario', (req, res) => {
    res.render('admin/form_add_noticia', {validacao: {}, noticia: {} })
  })

  app.post('/noticias/salvar', (req, res) => {
    let noticia = req.body;

    req.assert('titulo', 'Título é obrigatório!').notEmpty()
    req.assert('autor', 'Autor é obrigatório!').notEmpty()
    req.assert('noticia', 'Notícia é obrigatória!').notEmpty()
    req.assert('noticia', 'Notícia deve ter no mínimo 10 letras!').len(10, 100)

    let erros = req.validationErrors()

    if(erros) {
      res.render('admin/form_add_noticia', { validacao: erros, noticia: noticia})
      return
    }

    let connection = app.config.dbConnection()
    let noticiasDao = new app.app.models.noticiasDAO(connection)
    
    noticiasDao.salvarNoticia(noticia, (error, result) => {
      if(error) throw error;
      res.redirect('/noticias');
    })
  })
}