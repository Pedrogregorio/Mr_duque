const app = require('./config/config')
let port = process.env.PORT || 8080

app.listen(port, function(){
    console.log('serve on')
})