function UsuariosDAO(connection) {
  this.connection = connection
}

UsuariosDAO.prototype.inserirUsuario = function(usuario, callback) {
  this.connection.query('insert into usuarios set ?', usuario, callback)
}

UsuariosDAO.prototype.autenticar = function(usuario, callback) {
  this.connection.query(`select * from usuarios where usuario = "${usuario.usuario}" and senha = "${usuario.senha}"`, callback)
}

module.exports = () => UsuariosDAO