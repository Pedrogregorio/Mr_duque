const express = require('express')
const load = require('express-load')
const expressSession = require('express-session')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')
app.set('views', './app/views')

app.use(bodyParser.urlencoded({ extended:true }))
app.use(express.static('./app/public'))
app.set('trust proxy', 1)
app.use(expressSession({
    secret: '04259a2b4584100b53697b0fc14fdfad',
    saveUninitialized: true,
    resave: false
}))

load()
    .then('./app/routes')
    .then('./app/models')
    .then('./app/controllers')
    .then('./config/dbConfig.js')
    .into(app)

app.listen(process.env.PORT || 8080, function() {
    console.log('serve on')
})