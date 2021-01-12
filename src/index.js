const express = require('express')
const consign = require('consign')
const expressSession = require('express-session')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')
app.set('views', './app/views')

app.use(express.static('./app/public'))
app.use(bodyParser.urlencoded({ extended:true }))
app.use(expressSession({
    secret: '04259a2b4584100b53697b0fc14fdfad',
    resave: false,
    saveUninitialized: false
}))

consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .then('src/dbConfig.js')
    .into(app);

app.listen(process.env.PORT || 8080)

module.exports = app