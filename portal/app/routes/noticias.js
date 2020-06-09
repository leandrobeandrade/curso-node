// let dbconnection = require('../../config/db-connection');      antes do consign

module.exports = (app) => {
  app.get('/noticias', (req, res) => {
    let connection = app.config.dbConnection()
    
    /*  anteriormente                      
    connection.query('select * from noticias', (error, result) => {
      if(error) throw error;
      res.render('noticias/noticias', { noticias: result });
    }); */

    // agora
    let noticiasDao = new app.app.models.noticiasDAO(connection)
    noticiasDao.getNoticias((error, result) => {
      if(error) throw error;
      // res.send(result)  // Angular
      res.render('noticias/noticias', { noticias: result });
    })

  });
};
