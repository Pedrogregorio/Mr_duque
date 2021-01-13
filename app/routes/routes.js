const { check } = require('express-validator')
module.exports = function(app) {
    
    app.get('/', function(req, res) {    
        res.render('index', {validacao:{}})
    })

    app.post('/validacao', function(req, res) {
        app.app.controllers.index.validacao(app, req, res)
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