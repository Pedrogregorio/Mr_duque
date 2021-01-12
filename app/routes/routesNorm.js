// module.exports = function(app) {
    
//     app.use('/dashboard', function(req, res, next) {
//         if(req.session.tipo == 1){
//             res.redirect('/dashboardAdm')
//         }
//         next()
//     })

//     app.get('/dashboard', function(req, res) {
//         app.app.controllers.usuarioNormal.iniciaPage(app, req, res)
//     })

//     app.get('/historicoNorm', function(req, res) {
//         app.app.controllers.usuarioNormal.historico(app, req, res)
//     })

//     app.post('/dashboard/norm_cadastra_usuario', function(req, res) {
//         app.app.controllers.usuarioNormal.cadastraCliente(app, req, res)
//     })

//     app.post('/dashboard_consulta', function(req, res) {
//         app.app.controllers.usuarioNormal.listaConsulta(app, req, res)
//     })

//     app.get('/deletar_cliente_norm', function(req, res) {
//         app.app.controllers.usuarioNormal.deletarCliente(app, req, res)
//     })

//     app.get('/prioridadeVerdeNorm', function(req, res) {
//         app.app.controllers.usuarioNormal.prioridadeVerde(app, req, res)
//     })
//     app.get('/prioridadeVermelhoNorm', function(req, res) {
//         app.app.controllers.usuarioNormal.prioridadeVermelho(app, req, res)
//     })
//     app.get('/prioridadeLaranjaNorm', function(req, res) {
//         app.app.controllers.usuarioNormal.prioridadeLaranja(app, req, res)
//     })
//     app.get('/allNorm', function(req, res) {
//         app.app.controllers.usuarioNormal.allNorm(app, req, res)
//     })
// }