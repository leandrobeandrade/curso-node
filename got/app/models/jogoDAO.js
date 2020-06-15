function JogoDAO(connection) {
  this.connection = connection
}

JogoDAO.prototype.gerarParametros = function(usuario, callback) {
  this.connection.query('insert into jogo set ?', usuario, callback)
}