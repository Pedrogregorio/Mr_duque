const mysql = require('mysql')

const connMysql = function(err) {
    const connection =  mysql.createConnection({

        host: 'https://mr-duque.herokuapp.com/',
		user: 'teren671_pedro',
		password: 'BctR20m4b8',
		database: 'teren671_mr_duque'

    })
    connection.on('error', err => {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            // db error reconnect
            connMysql();
        } else {
            throw err;
        }
    });
    connection.connect(function(err) {
        if (err) {
          console.error('error connecting pohhhhhhhhhhha: ' + err.stack);
          return;
        }else{
            console.log('Conectado Birr')
        }
      })
      return connection    
}

module.exports = function () {
    return connMysql
}