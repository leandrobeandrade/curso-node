let mysql = require('mysql');

let connectMySQL = () => {
  return mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'jogo',
  })
}

module.exports = () => connectMySQL;

// rodar mysql => mysql -u localhost -u root -p
