const crypto = require('crypto')
function indexDAO(conn){
    this._connection = conn()
}

indexDAO.prototype.autenticar = function (dadosForm, callback) {
    const passCrypito = crypto.createHash('md5').update(dadosForm.senha).digest('hex')
    const query = 'SELECT * FROM `tb_usuarios` where nome_usuario = "'+ dadosForm.nome +'" and senha_usuario = "'+ passCrypito+'"'
    this._connection.query(query, callback)
}

module.exports = function() {
    return indexDAO;
}