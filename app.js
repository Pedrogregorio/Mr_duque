const app = require('./config/config')

app.listen(process.env.PORT || 8000, function(){
    console.log('serve on')
})