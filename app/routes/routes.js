const { check } = require('express-validator')
module.exports = function(app) {
    
    app.get('/', function(req, res) {
        app.app.controllers.index.index(app, req, res)
    })

    app.post('/validacao', 
	[
		check('nome', 'Preencha o campo Nome ').not().isEmpty(),
		check('senha', 'Preencha o campo Senha ').not().isEmpty()
	],
    function(req, res) {
        app.app.controllers.index.validacao(app, req, res)
    })
    app.get('/validacao', function(req, res) {
        
        res.redirect('/')
    })

    /*
        A parte de rotas sera dividida em Adm e Norm

    */


}