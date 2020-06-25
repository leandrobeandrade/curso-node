function JogoDAO(connection) {
  this.connection = connection
}

JogoDAO.prototype.acao = function(acoes, callback) {
  let dados = acoes.body
  dados.id_jogador = acoes.session.usuario.id_jogador
  // this.connection.query('insert into acoes set ?', dados, callback)
}

module.exports = () => JogoDAO