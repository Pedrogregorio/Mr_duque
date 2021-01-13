const mysql = require('mysql')

const connMysql = function(err) {
    console.log('entrou na connexao')
    const connection =  mysql.createConnection({
        host: 'mr-duque.herokuapp.com',
		user: 'teren671_pedro',
		password: 'BctR20m4b8',
		database: 'teren671_mr_duque'

    })
    // connection.on('error', err => {
    //     if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    //         // db error reconnect
    //         connMysql();
    //     } else {
    //         throw err;
    //     }
    // }) 
    
    return connection    
}

module.exports = function () {
    return connMysql
}