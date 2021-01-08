let agente_banco = {}
let status_banco = {}
let usuario_banco = {}

function autenticarUsuario(req, res) {
  if(req.session.autorizado !== true){
      var validacao = [{msg:"Usuario Nao Logado"}]
      res.render('index', {validacao})
      return;
  }
}

module.exports.iniciaPage = function(app, req, res) {

  autenticarUsuario(req, res)
  var msg = ""
    if(req.query.msg !== ""){
      msg = req.query.msg
    }
  const usuario = req.session.nome
  const conn = app.config.dbConfig
  const usuarioNormalDAO = new app.app.models.usuarioNormalDAO(conn)
  usuarioNormalDAO.getAgente(function(err, agente) {  agente_banco = agente })
  usuarioNormalDAO.getStatus(function(err, status) { status_banco = status })
  usuarioNormalDAO.iniciaPage(usuario, function(err, result) {
      if (err) {
         res.send('error')
      }else{
            res.render('dashboardNorm/dashNorm', {nome:usuario, dados:result, agente:agente_banco, status: status_banco, menu:'./template/menu.ejs', page: './template/page.ejs'})              
      }
   })  
}

module.exports.cadastraCliente = function(app, req, res) {
    const data = new Date
    const dadosForm = req.body
    dadosForm.responsavel = req.session.nome
    dadosForm.id_responsavel = req.session._id
    const conn = app.config.dbConfig
    const usuarioNormalDAO = new app.app.models.usuarioNormalDAO(conn)
    usuarioNormalDAO.cadastraCliente(dadosForm, function(err, result){
        dadosForm.id = result.insertId
        usuarioNormalDAO.inserirHistorico(dadosForm, function() {})
        if (err) {
            res.send(err)
        }else if (result != undefined){
            res.redirect('/dashboard?msg=cliente_cadastrado')
        } else {
            res.redirect('/dashboard?msg=cliente_nao_cadastrado')
        }
   })
}
module.exports.listaConsulta = function(app, req, res) {
    
    autenticarUsuario(req, res)

    const dadosForm = req.body
    dadosForm.responsavel = req.session.nome
    const usuario = req.session.nome
    const conn = app.config.dbConfig
    const clientesDAO = new app.app.models.usuarioNormalDAO(conn)
    clientesDAO.consultarClientes(dadosForm, function(err, result) {
        if (err) {
            console.log(err)
        }else if (result[0] != undefined){
            res.render('dashboardNorm/dashNorm', {nome:usuario, dados:result, agente:agente_banco, status: status_banco, menu:'./template/menu.ejs', page: './template/page.ejs'})              
        }else{
            res.redirect('/dashboard?msg=cliente_nao_encontrado')
        }
    })
 }


 module.exports.historico = function(app, req, res) {
    
  autenticarUsuario(req, res)

   const usuario = req.session.nome
   const query = req.query
   const id = query.id
   const conn = app.config.dbConfig
   const usuarioNormalDAO = new app.app.models.usuarioNormalDAO(conn)
   usuarioNormalDAO.historico(id, function(err, result) {
      if (err) {
         res.send(err)
      }else if(result[0] != undefined) {
         res.render('dashboardNorm/dashNorm', {nome:usuario, dados: result, page: './template/historico.ejs', menu:'./template/menu.ejs'}) 
      } else{
         res.redirect('/dashboard?msg=cliente_sem_historico')
      }
   })
}
 
module.exports.prioridadeVerde = function(app, req, res) {
    var dados = []
    var j = 0
    const conn = app.config.dbConfig
    const usuarioNormalDAO = new app.app.models.usuarioNormalDAO(conn)
    const responsavel = req.session.nome
    usuarioNormalDAO.conAjax(responsavel, function(err, result){
      if (result[0] != undefined) {
       for (let i = 0; i < result.length; i++) {
          var date = new Date()
          var data_banco = result[i].data_modificacao
          function datarest(date, data_formatada) {
              var utc1 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
              var utc2 = Date.UTC(data_formatada.getFullYear(), data_formatada.getMonth(), data_formatada.getDate());
              return Math.floor((utc1 - utc2) / ( 1000 * 60 * 60 * 24) );
          }
          var cont = datarest(date, data_banco)
          if(cont <= 2){ 
            dados[j] = result[i]
            j++
          }
   }
     res.render('dashboardNorm/template/clientes', {dados:dados})  
       }else{
          res.redirect('/dashboar?msg=erroVerde')
      }
   })
 }
 
 
 module.exports.prioridadeVermelho = function(app, req, res) {
    var dados = []
    var j = 0
    const conn = app.config.dbConfig
    const usuarioNormalDAO = new app.app.models.usuarioNormalDAO(conn)
    const responsavel = req.session.nome
    usuarioNormalDAO.conAjax(responsavel, function(err, result){
      if (result[0] != undefined) {
         
       for (let i = 0; i < result.length; i++) {
              var date = new Date()
              var data_banco = result[i].data_modificacao
              function datarest(date, data_formatada) {
                  var utc1 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
                  var utc2 = Date.UTC(data_formatada.getFullYear(), data_formatada.getMonth(), data_formatada.getDate());
                  return Math.floor((utc1 - utc2) / ( 1000 * 60 * 60 * 24) );
              }
              var cont = datarest(date, data_banco)
              if(cont >= 4){ 
                dados[j] = result[i]
                j++
              }
       }
         res.render('dashboardNorm/template/clientes', {dados:dados})
         
       }else{
          res.redirect('/dashboard?msg=erroVermelho')
       }
   })
 }
 
 module.exports.deletarCliente = function(app, req, res) {
   const dadosForm = req.query
   const _id = dadosForm.id
   const conn = app.config.dbConfig
   const usuarioNormalDAO = new app.app.models.usuarioNormalDAO(conn)
   usuarioNormalDAO.delHistoricoClientes(_id, function(erro, resultado) {
      usuarioNormalDAO.delClientes(_id, function(err, result){
         if (result != undefined) {
            res.redirect('/dashboard?msg=Usuario_del')
         }else{
            res.redirect('/dashboard?msg=erro_del_usuario')
         }
      }) 
   })
}

 module.exports.prioridadeLaranja = function(app, req, res) {   
    var dados = []
    var j = 0
    const conn = app.config.dbConfig
    const usuarioNormalDAO = new app.app.models.usuarioNormalDAO(conn)
    const responsavel = req.session.nome
    usuarioNormalDAO.conAjax(responsavel, function(err, result){
      if (result[0] != undefined) {
       for (let i = 0; i < result.length; i++) {
              var date = new Date()
              var data_banco = result[i].data_modificacao
              function datarest(date, data_formatada) {
                  var utc1 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
                  var utc2 = Date.UTC(data_formatada.getFullYear(), data_formatada.getMonth(), data_formatada.getDate());
                  return Math.floor((utc1 - utc2) / ( 1000 * 60 * 60 * 24) );
              }
              var cont = datarest(date, data_banco)
              if(cont == 3){ 
                dados[j] = result[i]
                j++
              }
       }
         res.render('dashboardNorm/template/clientes', {dados:dados})
      }else{
       res.redirect('/dashboard?msg=erroLaranja')
      }
   })
 }

 module.exports.allNorm = function(app, req, res) {
    
    autenticarUsuario(req, res)
 
    const conn = app.config.dbConfig
    const usuarioNormalDAO = new app.app.models.usuarioNormalDAO(conn)
    const responsavel = req.session.nome
    usuarioNormalDAO.conAjax(responsavel, function(err, result) {
      if (err) {
         res.send(err)
      }else if (result[0] != undefined){
         
            res.render('dashboardNorm/template/clientes', {dados:result})
         
      }else{
         res.redirect('/dashboard?msg=cliente_nao_encontrado')
      }
   })
 }
 
