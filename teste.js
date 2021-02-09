const lote = 
    {
        lote:
        [
            {cliente: "1", protocolo:"131112211"},
            {cliente: "2", protocolo:"131112211"},
            {cliente: "3", protocolo:"131112211"}
        ],
        date: "07/02/2021"
    }

    let valueSql = ''; // irá armazenar a estrutura do VALUE dentro do loop
    let newArrayExemplo = []; // array que ira armazenar os múltiplos registros
    lote.lote.forEach(item => {
        valueSql = "(" + String(item.cliente) + ", " + String(item.protocolo) + ", " + String(lote.date) + ")"
        newArrayExemplo.push(valueSql)
    })
    
    let query = newArrayExemplo.toString()
    console.log(query)
    