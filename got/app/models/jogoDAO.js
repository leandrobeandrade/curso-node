function JogoDAO(connection) {
  this.connection = connection
}

JogoDAO.prototype.acao = function(acoes, callback) {
  let dados = acoes.body
  dados.id_jogador = acoes.session.usuario.id_jogador
  this.connection.query('insert into acoes set ?', dados, callback)
}

JogoDAO.prototype.getAcoes = function(dados, callback) {
  this.connection.query(`select acao, quantidade, unix_timestamp(termina_acao) as tempo from acoes inner join usuarios on acoes.id_jogador = usuarios.id where nome = "${dados.usuario.nome}"`, callback)
}

module.exports = () => JogoDAO