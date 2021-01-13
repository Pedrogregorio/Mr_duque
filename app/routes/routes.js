const { check } = require('express-validator')
module.exports = function(app) {
    
    app.get('/', function(req, res) {    
        res.render('index', {validacao:{}})
    })

    app.post('/validacao', 
	[
		check('nome', 'Preencha o campo Nome ').not().isEmpty(),
		check('senha', 'Preencha o campo Senha ').not().isEmpty()
	],
    function(req, res) {
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
    })
    app.get('/validacao', function(req, res) {
        
        res.redirect('/')
    })

    app.get('/sair', function(req, res) {
        req.session.destroy((err) => {
            res.render('index', {validacao:{}})
        })
    })

    /*
        A parte de rotas sera dividida em Adm e Norm

    */
   


}