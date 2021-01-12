const app = require('./config/config')
const port = 8000

app.listen(process.env.PORT || port, function(){
    console.log('serve on')
})