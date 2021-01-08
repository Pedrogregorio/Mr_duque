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
  const usuarioAdmDAO = new app.app.models.usuarioAdmDAO(conn)
  usuarioAdmDAO.getAgente(function(err, agente) {  agente_banco = agente })
  usuarioAdmDAO.getStatus(function(err, status) { status_banco = status })
  usuarioAdmDAO.iniciaPage(function(err, result) {
      if (err) {
         res.send('error')
      }else{
         res.render('dashboardAdm/dash', {nome:usuario, dados:result, agente:agente_banco, status: status_banco, menu:'./template/menu.ejs', page: './template/page.ejs'})        
      }
   })  
}

module.exports.cadastraCliente = function(app, req, res) {
    const data = new Date
    const dadosForm = req.body
    dadosForm.responsavel = req.session.nome
    dadosForm.id_responsavel = req.session._id
    const conn = app.config.dbConfig
    const usuarioAdmDAO = new app.app.models.usuarioAdmDAO(conn)
    usuarioAdmDAO.cadastraCliente(dadosForm, function(err, result){
      dadosForm.id = result.insertId
      usuarioAdmDAO.inserirHistorico(dadosForm, function() {
         if (err) {
            res.send(err)
         }else if (result[0] != undefined){
            res.redirect('/dashboardAdm?msg=cliente_cadastrado')
         } else {
            res.redirect('/dashboardAdm?msg=cliente_nao_cadastrado')
         }
      })
   })
}

module.exports.historico = function(app, req, res) {
    
  autenticarUsuario(req, res)

   const usuario = req.session.nome
   const query = req.query
   const id = query.id
   const conn = app.config.dbConfig
   const usuarioAdmDAO = new app.app.models.usuarioAdmDAO(conn)
   usuarioAdmDAO.historico(id, function(err, result) {
      if (err) {
         res.send(err)
      }else if(result[0] != undefined) {
         res.render('dashboardAdm/dash', {nome:usuario, dados: result, notificacao: 12, page: './template/historico.ejs', menu:'./template/menu.ejs'}) 
      } else{
         res.redirect('/dashboardAdm?msg=cliente_sem_historico')
      }
   })
}

module.exports.editarClientes = function(app, req, res) {
   const dadosForm = req.body
   const conn = app.config.dbConfig
   const usuarioAdmDAO = new app.app.models.usuarioAdmDAO(conn)
   usuarioAdmDAO.editarClientes(dadosForm, function(err, result) {
      usuarioAdmDAO.inserirHistorico(dadosForm, function(error, resultado) {  
         console.log(result)
         if (err) {
            res.send('error')
         }else{
            res.redirect('/dashboardAdm?msg=cliente_editado')
         }
      })
   })
}

module.exports.cadastrarLog = function(app, req, res) {
   const dadosForm = req.body
   const conn = app.config.dbConfig
   const usuarioAdmDAO = new app.app.models.usuarioAdmDAO(conn)
   usuarioAdmDAO.cadastrarLog(dadosForm, function(err, result) {
      if (err) {
         res.send(err)
      }else if(result[0] != undefined){
         res.redirect('/dashboardAdm?msg=log_cadastrado')
      } else{
         res.redirect('/dashboardAdm?msg=log_nao_cadastrado')
      }
   })
}

module.exports.cadastrarUsuario = function(app, req, res) {
  const dadosForm = req.body
  const conn = app.config.dbConfig
  const usuarioAdmDAO =  new app.app.models.usuarioAdmDAO(conn)
  usuarioAdmDAO.cadastrarUsuario(dadosForm, function (err, result) { 
      if (err) {
         res.send(err)
      }else if(result != undefined){
         res.redirect('/dashboardAdm?msg=usuario_cadastrado') 
      }else{
         res.redirect('/dashboardAdm?msg=usuario_nao_cadastrado')
      }
   })  
}

module.exports.manager = function (app, req, res) {
  
  autenticarUsuario(req, res)

  const conn = app.config.dbConfig
  const usuarioAdmDAO =  new app.app.models.usuarioAdmDAO(conn)
  const usuario = req.session.nome
  
  usuarioAdmDAO.getUsuario(function(err, result) { usuario_banco = result })
  usuarioAdmDAO.getStatus(function(err, result) { status_banco = result })
  usuarioAdmDAO.getAgente(function(err, result) { 
     
      agente_banco = result 
      res.render('dashboardAdm/template/maneger', {status_maneger: status_banco, usuario_maneger: usuario_banco, agente_maneger: agente_banco})
   })
}

module.exports.cadastrarStatus = function(app, req, res) {
   const dadosForm = req.body
   const conn = app.config.dbConfig
   const usuarioAdmDAO = new app.app.models.usuarioAdmDAO(conn)
   usuarioAdmDAO.cadastrarStatus(dadosForm, function(err, result) {
      if (err) {
         res.send(err)
      }else if(result[0] != undefined){
         res.redirect('/dashboardAdm?msg=status_cadastrado')
      } else {
         res.redirect('/dashboardAdm?msg=status_nao_cadastrado')
      }
   })
}

module.exports.editar = function(app, req, res) {
  
  autenticarUsuario(req, res)
  
  const dadosForm = req.query
   const id = dadosForm.id
   const usuario = req.session.nome
   const conn = app.config.dbConfig
   const usuarioAdmDAO = new app.app.models.usuarioAdmDAO(conn)
   usuarioAdmDAO.consultaEdit(id, function(err, result) {
      if (err) {
         res.send(err)
      }else if(result[0] != undefined){

            res.render('dashboardAdm/dash', {nome:usuario, dados:result, agente: agente_banco, status: status_banco, notificacao: 12, page: './template/edit.ejs', menu:'./template/menu.ejs'})
         
      }else {
         res.redirect('/dashboardAdm?msg=cliente_nao_encontrado')
      }
   })
}


module.exports.conAjax = function(app, req, res) {
    
   autenticarUsuario(req, res)

   const conn = app.config.dbConfig
   const usuarioAdmDAO = new app.app.models.usuarioAdmDAO(conn)
   usuarioAdmDAO.conAjax(function(err, result) {
     if (err) {
        res.send(err)
     }else if (result[0] != undefined){
        
           res.render('dashboardAdm/template/clientes', {dados:result})
        
     }else{
        res.redirect('/dashboardAdm?msg=cliente_nao_encontrado')
     }
  })
}

module.exports.tabela = function(app, req, res) {
    
   autenticarUsuario(req, res)
   
   const dadosForm = req.body
   const usuario = req.session.nome
   const conn = app.config.dbConfig
   const usuarioAdmDAO = new app.app.models.usuarioAdmDAO(conn)
   usuarioAdmDAO.consultarClientes(dadosForm, function(err, result) {
      if (err) {
         console.log(err)
      }else if (result[0] != undefined){
         res.render('dashboardAdm/dash', {nome:usuario, dados:result, agente: agente_banco, status: status_banco, notificacao: 12, page: './template/page.ejs', menu:'./template/menu.ejs'})
      }else{
         res.redirect('/dashboardAdm?msg=cliente_nao_encontrado')
      }
   })
}

module.exports.deletarCliente = function(app, req, res) {
   const dadosForm = req.query
   const _id = dadosForm.id
   const conn = app.config.dbConfig
   const usuarioAdmDAO = new app.app.models.usuarioAdmDAO(conn)
   usuarioAdmDAO.delHistoricoClientes(_id, function(erro, resultado) {
      usuarioAdmDAO.delClientes(_id, function(err, result){
         if (result[0] != undefined) {
            res.redirect('/dashboardAdm?msg=erro_del_usuario')
         }else{
            res.redirect('/dashboardAdm?msg=Usuario_del')
         }
      }) 
   })
}


module.exports.deletarUsuario = function(app, req, res) {
    const dadosForm = req.query
    const _id = dadosForm.id
    const conn = app.config.dbConfig
    const usuarioAdmDAO = new app.app.models.usuarioAdmDAO(conn)
   usuarioAdmDAO.deletarUsuario(_id, function(err, result){
      if (result[0] != undefined) {
         res.redirect('/dashboardAdm?msg=erro_del_usuario')
      }else{
         res.redirect('/dashboardAdm?msg=Usuario_del')
      }
   })
}

module.exports.deletarAgente = function(app, req, res) {
   const dadosForm = req.query
   const _id = dadosForm.id
   const conn = app.config.dbConfig
   const usuarioAdmDAO = new app.app.models.usuarioAdmDAO(conn)
  usuarioAdmDAO.deletarAgente(_id, function(err, result){
      if (result[0] != undefined) {
         res.redirect('/dashboardAdm?msg=erro_del_agente')
      }else{
          res.redirect('/dashboardAdm?msg=Agente_del')
      }   
   }) 
}

module.exports.deletarStatus = function(app, req, res) {
    const dadosForm = req.query
    const _id = dadosForm.id
    const conn = app.config.dbConfig
    const usuarioAdmDAO = new app.app.models.usuarioAdmDAO(conn)
   usuarioAdmDAO.deletarStatus(_id, function(err, result){
      if (result[0] != undefined) {
         res.redirect('/dashboardAdm?msg=erro_del_status')
      }else{
         res.redirect('/dashboardAdm?msg=Status_del')
      }
   })
}

module.exports.prioridadeVerde = function(app, req, res) {
   var dados = []
   var j = 0
   const conn = app.config.dbConfig
   const usuarioAdmDAO = new app.app.models.usuarioAdmDAO(conn)
  usuarioAdmDAO.conAjax(function(err, result){
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
    res.render('dashboardAdm/template/clientes', {dados:dados})  
      }else{
         res.redirect('/dashboardAdm?msg=erroVerde')
     }
  })
}


module.exports.prioridadeVermelho = function(app, req, res) {
   var dados = []
   var j = 0
   const conn = app.config.dbConfig
   const usuarioAdmDAO = new app.app.models.usuarioAdmDAO(conn)
  usuarioAdmDAO.conAjax(function(err, result){
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
        res.render('dashboardAdm/template/clientes', {dados:dados})
        
      }else{
         res.redirect('/dashboardAdm?msg=erroVermelho')
      }
  })
}



module.exports.prioridadeLaranja = function(app, req, res) {   
   var dados = []
   var j = 0
   const conn = app.config.dbConfig
   const usuarioAdmDAO = new app.app.models.usuarioAdmDAO(conn)
  usuarioAdmDAO.conAjax(function(err, result){
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
        res.render('dashboardAdm/template/clientes', {dados:dados})
     }else{
      res.redirect('/dashboardAdm?msg=erroLaranja')
     }
  })
}
