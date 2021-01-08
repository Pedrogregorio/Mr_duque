const mysql = require('mysql')

const connMysql = function() {
    return connection =  mysql.createConnection({

        host: 'localhost',
		user: 'root',
		password: '',
		database: 'mr_duque'

    })
}

module.exports = function () {
    return connMysql
}