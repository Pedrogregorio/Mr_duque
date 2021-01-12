module.exports.validacao = function(app, req, res) {
    const { check, validationResult } = require('express-validator')
    const dadosForm = req.body
    const errors = validationResult(req);
    const validacao = errors.array() 
    if (!errors.isEmpty()) {
        res.render('index', {validacao, dadosForm: dadosForm })
    }else{
         const conn = app.config.dbConfig
         const indexDAO = new app.app.models.indexDAO(conn)
         indexDAO.autenticar(dadosForm, function(err, result) {
            if(result[0] != undefined){
                req.session.autorizado = true
                req.session.nome = result[0].nome_usuario
                req.session._id = result[0].id_usuario 
                req.session.tipo = result[0].tipo 
                
                if(req.session.tipo == 1){ 
                    res.redirect('/dashboardAdm')
                }else if (req.session.tipo == 2){
                    res.redirect('/dashboard')
                }
            }
            else{
                res.render('index', {
                    validacao:[
                        {msg:'Erro: Usuario ou Senha incorretos'}
                    ]
                })
            }   
        });
    }
}