module.exports = function(app) {
    
    // Adm
    // app.use('/dashboardAdm', function(req, res, next) {
    //     if(req.session.tipo == 2){
    //         res.redirect('/dashboard')
    //     }
    //     next()
    // })

    app.get('/dashboardAdm', function(req, res) {
        app.app.controllers.usuarioAdm.iniciaPage(app, req, res)
    })
    
    app.get('/dashboard/cadastra_usuario', function(req, res) {
        res.redirect('/dashboard')
    })

    app.post('/dashboard/cadastra_usuario', function(req, res) {
        app.app.controllers.usuarioAdm.cadastraCliente(app, req, res)
    })

    app.post('/consulta', function(req, res) {
        app.app.controllers.usuarioAdm.tabela(app, req, res)
    })

    app.get('/deletar_cliente', function(req, res) {
        app.app.controllers.usuarioAdm.deletarCliente(app, req, res)
    })
    
    app.post('/conAjax', function(req, res) {
        app.app.controllers.usuarioAdm.conAjax(app, req, res)
    })

    app.get('/historico', function(req, res) {
        app.app.controllers.usuarioAdm.historico(app, req, res)
    })

    app.get('/editarClientes', function (req, res) {
        app.app.controllers.usuarioAdm.editar(app, req, res)    
    })

    app.post('/atualizaCliente', function(req, res) {
        app.app.controllers.usuarioAdm.editarClientes(app, req, res)
    })

    app.post('/cadastrarLog', function(req, res) {
        app.app.controllers.usuarioAdm.cadastrarLog(app, req, res)
    })

    app.post('/cadastrarUsuario', function(req, res) {
        app.app.controllers.usuarioAdm.cadastrarUsuario(app, req, res)        
    })

    app.post('/cadastrarStatus', function(req, res) {
        app.app.controllers.usuarioAdm.cadastrarStatus(app, req, res)
    })

    app.get('/deletar_usuario', function(req, res) {
        app.app.controllers.usuarioAdm.deletarUsuario(app, req, res)
    })

    app.get('/deletar_agente', function(req, res) {
        app.app.controllers.usuarioAdm.deletarAgente(app, req, res)
    })

    app.get('/deletar_status', function(req, res) {
        app.app.controllers.usuarioAdm.deletarStatus(app, req, res)
    })
    
    app.get('/manager', function(req, res) {
        app.app.controllers.usuarioAdm.manager(app, req, res)
    })

    app.get('/prioridadeVerde', function(req, res) {
        app.app.controllers.usuarioAdm.prioridadeVerde(app, req, res)
    })
    app.get('/prioridadeVermelho', function(req, res) {
        app.app.controllers.usuarioAdm.prioridadeVermelho(app, req, res)
    })
    app.get('/prioridadeLaranja', function(req, res) {
        app.app.controllers.usuarioAdm.prioridadeLaranja(app, req, res)
    })
}