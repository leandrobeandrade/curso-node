let mysql = require('mysql');

let connectMySQL = () => {
  return mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'portal_noticias',
  })
}

module.exports = () => {
  return connectMySQL;
}

// rodar mysql => mysql -u localhost -u root -p
