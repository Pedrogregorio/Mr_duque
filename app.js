const app = require('./config/config')
const port = 3000

app.listen(port, ()=>{
    console.log(`app rodando na porta http://localhost:${port}`)
})