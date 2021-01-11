const crypto = require('crypto')
function usuarioNormalDAO(conn){
    this._connection = conn()
}

usuarioNormalDAO.prototype.iniciaPage = function(responsavel, callback) {
    const query = 'SELECT tb_cliente.id, tb_cliente.parcela_proposta, tb_cliente.responsavel, MAX( tb_historico_cliente.data_modificacao ) AS data_modificacao, tb_cliente.nome_cliente, tb_cliente.cpf_cliente, tb_cliente.banco_portado, tb_cliente.numero_proposta, tb_cliente.valor_proposta, tb_cliente.parcela_proposta, tb_cliente.data_inclusao, tb_agente.nome_agente, tb_status_proposta.nome_status FROM `tb_cliente` JOIN `tb_agente` ON tb_cliente.id_agente_banco = tb_agente.id_agente_banco JOIN `tb_historico_cliente` ON tb_historico_cliente.id_cliente = tb_cliente.id JOIN `tb_status_proposta` ON tb_cliente.id_status_proposta = tb_status_proposta.id_status_proposta WHERE tb_cliente.responsavel = "'+ responsavel +'" GROUP BY ID ORDER BY tb_historico_cliente.data_modificacao'
    this._connection.query(query, callback)
}

usuarioNormalDAO.prototype.getAgente = function(callback) {
    const query = 'SELECT * FROM `tb_agente` ORDER BY banco'
    this._connection.query(query, callback)
}

usuarioNormalDAO.prototype.getStatus = function(callback) {
    const query = 'SELECT * FROM `tb_status_proposta` ORDER BY banco'
    this._connection.query(query, callback)
}

usuarioNormalDAO.prototype.cadastraCliente = function (dadosForm, callback) {
    const query = 'INSERT INTO `tb_cliente`(`nome_cliente`, `cpf_cliente`, `numero_proposta`, `valor_proposta`, `parcela_proposta`, `banco_portado`, `data_inclusao`, `responsavel`, `id_agente_banco`, `id_status_proposta`) VALUES ("'+dadosForm.nome_cliente+'", "'+dadosForm.cpf_cliente+'", "'+dadosForm.numero_proposta+'", "'+dadosForm.valor_proposta+'", "'+dadosForm.valor_parcela+'", "'+dadosForm.banco_portado+'", "'+dadosForm.data_inclusao+'", "'+dadosForm.responsavel+'", '+dadosForm.id_agente_banco+', '+dadosForm.id_status_proposta+');'
    this._connection.query(query, callback)
}

usuarioNormalDAO.prototype.inserirHistorico = function (dadosForm, callback) {
    const query = 'INSERT INTO `tb_historico_cliente`(`id_cliente`, `id_status_proposta`) VALUES ('+ dadosForm.id +', '+ dadosForm.id_status_proposta +')'
    this._connection.query(query, callback)
}

usuarioNormalDAO.prototype.delHistoricoClientes = function (_id, callback) {
    const query = 'DELETE FROM `tb_historico_cliente` WHERE id_cliente = '+ _id
    this._connection.query(query, callback)
}

usuarioNormalDAO.prototype.delClientes = function (_id, callback) {
    const query = 'DELETE FROM `tb_cliente` WHERE id = '+_id
    this._connection.query(query, callback)
}

usuarioNormalDAO.prototype.consultarClientes = function (dadosForm, callback) {
    const query = 'SELECT DISTINCT tb_cliente.id,  tb_cliente.banco_portado, max(tb_historico_cliente.data_modificacao) as data_modificacao, tb_cliente.nome_cliente, tb_cliente.cpf_cliente, tb_cliente.numero_proposta, tb_cliente.valor_proposta, tb_cliente.parcela_proposta, tb_cliente.data_inclusao, tb_agente.nome_agente, tb_status_proposta.nome_status FROM `tb_cliente` JOIN `tb_agente` ON tb_cliente.id_agente_banco = tb_agente.id_agente_banco JOIN `tb_historico_cliente` ON tb_historico_cliente.id_cliente = tb_cliente.id JOIN `tb_status_proposta` on tb_cliente.id_status_proposta = tb_status_proposta.id_status_proposta WHERE nome_cliente LIKE "%'+ dadosForm.nome_cliente +'%" and cpf_cliente LIKE "%'+ dadosForm.cpf_cliente +'%" and tb_cliente.id_agente_banco LIKE "%'+ dadosForm.id_agente_banco +'%" and tb_cliente.responsavel = "'+ dadosForm.responsavel +'" GROUP BY ID'
    this._connection.query(query, callback)
}

usuarioNormalDAO.prototype.historico = function(id, callback) {
    const query = 'SELECT tb_cliente.nome_cliente, tb_status_proposta.nome_status, tb_historico_cliente.data_modificacao FROM `tb_historico_cliente` JOIN `tb_cliente` on tb_historico_cliente.id_cliente = tb_cliente.id JOIN `tb_status_proposta` on tb_historico_cliente.id_status_proposta = tb_status_proposta.id_status_proposta WHERE tb_historico_cliente.id_cliente = '+id
    this._connection.query(query, callback)
}

usuarioNormalDAO.prototype.conAjax = function(responsavel, callback) {
    const query = 'SELECT DISTINCT tb_cliente.id, tb_cliente.banco_portado, max(tb_historico_cliente.data_modificacao) as data_modificacao, tb_cliente.responsavel, tb_cliente.nome_cliente, tb_cliente.cpf_cliente, tb_cliente.numero_proposta, tb_cliente.valor_proposta, tb_cliente.parcela_proposta, tb_cliente.data_inclusao, tb_agente.nome_agente, tb_status_proposta.nome_status FROM `tb_cliente` JOIN `tb_agente` ON tb_cliente.id_agente_banco = tb_agente.id_agente_banco JOIN `tb_historico_cliente` ON tb_historico_cliente.id_cliente = tb_cliente.id JOIN `tb_status_proposta` on tb_cliente.id_status_proposta = tb_status_proposta.id_status_proposta WHERE tb_cliente.responsavel = "'+ responsavel +'" GROUP BY ID'
    this._connection.query(query, callback)
}

module.exports = function() {
    return usuarioNormalDAO;
}

