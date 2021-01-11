const crypto = require('crypto')
function usuarioAdmDAO(conn){
    this._connection = conn()
}

usuarioAdmDAO.prototype.getAgente = function(callback) {
    const query = 'SELECT * FROM `tb_agente` ORDER BY banco'
    this._connection.query(query, callback)
}

usuarioAdmDAO.prototype.getStatus = function(callback) {
    const query = 'SELECT * FROM `tb_status_proposta` ORDER BY banco'
    this._connection.query(query, callback)
}

usuarioAdmDAO.prototype.iniciaPage = function(callback) {
    const query = "SELECT tb_cliente.id, tb_cliente.banco_portado, tb_cliente.responsavel, max(tb_historico_cliente.data_modificacao) as data_modificacao, tb_cliente.nome_cliente, tb_cliente.cpf_cliente, tb_cliente.numero_proposta, tb_cliente.valor_proposta, tb_cliente.parcela_proposta, tb_cliente.data_inclusao, tb_agente.nome_agente, tb_status_proposta.nome_status FROM `tb_cliente` JOIN `tb_agente` ON tb_cliente.id_agente_banco = tb_agente.id_agente_banco JOIN `tb_historico_cliente` ON tb_historico_cliente.id_cliente = tb_cliente.id JOIN `tb_status_proposta` on tb_cliente.id_status_proposta = tb_status_proposta.id_status_proposta GROUP BY ID ORDER BY tb_historico_cliente.data_modificacao"
    this._connection.query(query, callback)
}

usuarioAdmDAO.prototype.cadastraCliente = function (dadosForm, callback) {
    const query = 'INSERT INTO `tb_cliente`(`nome_cliente`, `cpf_cliente`, `numero_proposta`, `valor_proposta`, `parcela_proposta`, `banco_portado`, `data_inclusao`, `responsavel`, `id_agente_banco`, `id_status_proposta`) VALUES ("'+dadosForm.nome_cliente+'", "'+dadosForm.cpf_cliente+'", "'+dadosForm.numero_proposta+'", "'+dadosForm.valor_proposta+'", "'+dadosForm.valor_parcela+'", "'+dadosForm.banco_portado+'", "'+dadosForm.data_inclusao+'", "'+dadosForm.responsavel+'", '+dadosForm.id_agente_banco+', '+dadosForm.id_status_proposta+');'
    this._connection.query(query, callback)
}

usuarioAdmDAO.prototype.inserirHistorico = function (dadosForm, callback) {
    const query = 'INSERT INTO `tb_historico_cliente`(`id_cliente`, `id_status_proposta`) VALUES ('+ dadosForm.id +', '+ dadosForm.id_status_proposta +')'
    this._connection.query(query, callback)
}

usuarioAdmDAO.prototype.editarClientes = function(dadosForm, callback) {
    const query = 'UPDATE `tb_cliente` SET `nome_cliente`="'+ dadosForm.nome_cliente +'",`cpf_cliente`="'+ dadosForm.cpf_cliente +'",`numero_proposta`="'+ dadosForm.numero_proposta +'",`valor_proposta`="'+ dadosForm.valor_proposta +'",`parcela_proposta`="'+ dadosForm.valor_parcela +'",`banco_portado`="'+ dadosForm.banco_portado +'",`data_inclusao`="'+ dadosForm.data_inclusao +'",`id_agente_banco`='+ dadosForm.id_agente_banco +',`id_status_proposta`='+ dadosForm.id_status_proposta +' WHERE id = '+dadosForm.id
    this._connection.query(query, callback)
}

usuarioAdmDAO.prototype.cadastrarStatus = function(dadosForm, callback) {
    const query = 'INSERT INTO `tb_status_proposta` (`nome_status`,`banco`) VALUES("'+dadosForm.nome_agente+'", "'+dadosForm.banco+'")'
    this._connection.query(query, callback)
}

usuarioAdmDAO.prototype.cadastrarLog = function(dadosForm, callback) {
    const query = 'INSERT INTO `tb_agente` (`nome_agente`,`banco`) VALUES("'+dadosForm.nome_agente+'", "'+dadosForm.banco+'")'
    this._connection.query(query, callback)
}

usuarioAdmDAO.prototype.delHistoricoClientes = function (_id, callback) {
    const query = 'DELETE FROM `tb_historico_cliente` WHERE id_cliente = '+ _id
    this._connection.query(query, callback)
}

usuarioAdmDAO.prototype.cadastrarUsuario = function (dadosForm, callback) {
    const passCrypito = crypto.createHash('md5').update(dadosForm.senha).digest('hex')
    const query = 'INSERT INTO `tb_usuarios` (nome_usuario, senha_usuario, tipo) VALUES ("'+ dadosForm.nome_usuario +'", "'+ passCrypito +'", '+ dadosForm.tipo +')'
    this._connection.query(query, callback)

}

usuarioAdmDAO.prototype.delClientes = function (_id, callback) {
    const query = 'DELETE FROM `tb_cliente` WHERE id = '+_id
    this._connection.query(query, callback)
}

usuarioAdmDAO.prototype.deletarStatus = function (_id, callback) {
    const query = 'DELETE FROM `tb_status_proposta` WHERE id_status_proposta = '+_id

    this._connection.query(query, callback)
}

usuarioAdmDAO.prototype.deletarAgente = function (_id, callback) {
    const query = 'DELETE FROM `tb_agente` WHERE id_agente_banco = '+_id
    this._connection.query(query, callback)
}

usuarioAdmDAO.prototype.deletarUsuario = function (_id, callback) {
    const query = 'DELETE FROM `tb_usuarios` WHERE id_usuario = '+_id
    this._connection.query(query, callback)
}

usuarioAdmDAO.prototype.consultarClientes = function(dadosForm, callback){   
    const query = 'SELECT DISTINCT tb_cliente.id, tb_cliente.banco_portado, max(tb_historico_cliente.data_modificacao) as data_modificacao, tb_cliente.responsavel, tb_cliente.nome_cliente, tb_cliente.cpf_cliente, tb_cliente.numero_proposta, tb_cliente.valor_proposta, tb_cliente.parcela_proposta, tb_cliente.data_inclusao, tb_agente.nome_agente, tb_status_proposta.nome_status FROM `tb_cliente` JOIN `tb_agente` ON tb_cliente.id_agente_banco = tb_agente.id_agente_banco JOIN `tb_historico_cliente` ON tb_historico_cliente.id_cliente = tb_cliente.id JOIN `tb_status_proposta` on tb_cliente.id_status_proposta = tb_status_proposta.id_status_proposta WHERE nome_cliente LIKE "%'+ dadosForm.nome_cliente +'%" and cpf_cliente LIKE "%'+ dadosForm.cpf_cliente +'%" and tb_cliente.id_agente_banco LIKE "%'+ dadosForm.id_agente_banco +'%" GROUP BY ID'    
    this._connection.query(query, callback)
}

usuarioAdmDAO.prototype.conAjax = function(callback) {
    const query = 'SELECT DISTINCT tb_cliente.id, tb_cliente.banco_portado, max(tb_historico_cliente.data_modificacao) as data_modificacao, tb_cliente.responsavel, tb_cliente.nome_cliente, tb_cliente.cpf_cliente, tb_cliente.numero_proposta, tb_cliente.valor_proposta, tb_cliente.parcela_proposta, tb_cliente.data_inclusao, tb_agente.nome_agente, tb_status_proposta.nome_status FROM `tb_cliente` JOIN `tb_agente` ON tb_cliente.id_agente_banco = tb_agente.id_agente_banco JOIN `tb_historico_cliente` ON tb_historico_cliente.id_cliente = tb_cliente.id JOIN `tb_status_proposta` on tb_cliente.id_status_proposta = tb_status_proposta.id_status_proposta GROUP BY ID'

    this._connection.query(query, callback)
}

usuarioAdmDAO.prototype.getUsuario = function(callback) {
    const query = 'SELECT * FROM `tb_usuarios`'
    this._connection.query(query, callback)
}

usuarioAdmDAO.prototype.consultaEdit = function(id, callback) {
    const query = 'SELECT tb_cliente.id, tb_cliente.nome_cliente, tb_cliente.cpf_cliente, tb_cliente.numero_proposta, tb_cliente.valor_proposta, tb_cliente.parcela_proposta, tb_cliente.banco_portado, tb_cliente.data_inclusao, tb_cliente.responsavel, tb_cliente.id_agente_banco, tb_cliente.id_status_proposta, tb_status_proposta.nome_status, tb_agente.nome_agente FROM `tb_cliente` JOIN `tb_agente` ON tb_cliente.id_agente_banco = tb_agente.id_agente_banco JOIN `tb_status_proposta` ON tb_cliente.id_status_proposta = tb_status_proposta.id_status_proposta WHERE tb_cliente.id = '+id
    this._connection.query(query, callback)
}

usuarioAdmDAO.prototype.historico = function(id, callback) {
    const query = 'SELECT tb_cliente.nome_cliente, tb_status_proposta.nome_status, tb_historico_cliente.data_modificacao FROM `tb_historico_cliente` JOIN `tb_cliente` on tb_historico_cliente.id_cliente = tb_cliente.id JOIN `tb_status_proposta` on tb_historico_cliente.id_status_proposta = tb_status_proposta.id_status_proposta WHERE tb_historico_cliente.id_cliente = '+id
    this._connection.query(query, callback)
}

module.exports = function() {
    return usuarioAdmDAO;
}