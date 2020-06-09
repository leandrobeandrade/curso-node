module.exports = (app) => {
    app.get('/noticia/:id', (req, res) => {
      let connection = app.config.dbConnection()
      let id = req.params

      //anteriormente
      // connection.query(`select * from noticias where id_noticias = ${id}`, (error, result) => {
      //   if(error) throw error;
      //   res.render('noticias/noticia', { noticia: result });
      // });

      // agora
      let noticiasDao = new app.app.models.noticiasDAO(connection)
      noticiasDao.getNoticia(id, (error, result) => {
        if(error) throw error;
        // res.send(result)   // Angular
        res.render('noticias/noticia', { noticia: result });
      })
  })
}
