const xhr = new XMLHttpRequest();
    var lote = []
    let json = {}
    var cont = 0

    function addUsuario(){
        var nome = document.getElementById("cliente").value
        var protocolo = document.getElementById("protocolo").value
        json.cliente = nome
        json.protocolo = protocolo
        
        lote[cont] = json
        cont++

        console.log(lote)
        json = {}

        document.getElementById("cliente").value = ""
        
    }
    

    function addLote() {
        
        let loteView = []
        
        for (let i = 0; i < lote.length; i++) {
            loteView[i] = lote[i].cliente
        }

        if(confirm('serao adicionados os usuarios: '+ loteView)){
            var url = '/criarLote'
            xhr.onloadend = function() {
                if (this.readyState == 4 && this.status == 200){
                    document.getElementById("f").innerHTML = xhr.responseText   
                }
            }
            let dateinput = document.getElementById("data_envio").value
            let date = dateinput.split('-').reverse().join('/')

            xhr.open('POST', url);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.send(JSON.stringify({lote, date: date}))
            lote = []
            cont = 0
        
        }else{
            alert('Pocessso cancelado!')
        }
    }
    function fecharTabela() {
        document.getElementById("tabela").innerHTML = ""
    }

    function showLote(data_lote) {
        let url = '/lote_clientes'
        xhr.onloadend = function() {
            if (this.readyState == 4 && this.status == 200){
                document.getElementById("tabela").innerHTML = xhr.responseText   
                // alert('ok')
            }
        }
        xhr.open('POST', url)
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
        xhr.send(JSON.stringify({data: data_lote}))
    }

    function acharLote() {
        var id_cliente = document.getElementById('pesquisa').value
        let url = '/achar_lote'
        xhr.onloadend = function() {
            if (this.readyState == 4 && this.status == 200){
                document.getElementById("acharLote").innerHTML = xhr.responseText   
                // alert('ok')
            }
        }
        xhr.open('POST', url)
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
        xhr.send(JSON.stringify({id: id_cliente}))
    }