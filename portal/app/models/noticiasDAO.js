function noticiasDAO(connection) {
  this.connection = connection
}

noticiasDAO.prototype.getNoticias = function(callback) {
  this.connection.query('select * from noticias', callback)
}

noticiasDAO.prototype.getNoticia = function(id, callback) {
  this.connection.query('select * from noticias where id_noticias ='+ id.id, callback)
}

noticiasDAO.prototype.salvarNoticia = function(noticia, callback) {
  this.connection.query('insert into noticias set ?', noticia, callback)
}

module.exports = () => {
  return noticiasDAO
}


// Antes
// module.exports = function() {
//   this.getNoticias = function(connection, callback) {
//     connection.query('select * from noticias', callback)
//   }

//   this.getNoticia = function(connection, callback) {
//     connection.query('select * from noticias where id_noticias = 2', callback)
//   }

//   this.salvarNoticia = function(noticia, connection, callback) {
//     connection.query('insert into noticias set ?', noticia, callback)     // ? usado ao inves de (...)values('...')
//   }                                                                       // mas os campos tem que ter os mesmos nomes
//   return this                                                             // tanto no Json quanto na tabela
// }