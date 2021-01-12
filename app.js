const app = require('./config/index')


app.listen(process.env.PORT || 8080, function() {
    console.log('serve on')
})