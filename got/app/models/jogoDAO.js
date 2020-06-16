function JogoDAO(connection) {
  this.connection = connection
}

JogoDAO.prototype.acao = function(acoes, callback) {
  console.log('Acoes: ', acoes)
  // this.connection.query('select * from usuarios', usuario, callback)
}

module.exports = () => JogoDAO