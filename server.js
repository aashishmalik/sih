const express = require('express')
const logger = require('morgan')
const path = require('path')
const fs = require('fs')
const admZip = require('adm-zip');
const bodyParser = require('body-parser')
const minifyJs = require('./middleware/minifyJs')
const minifyCss = require('./middleware/minifyCss')
const minifyHtml = require('./middleware/minifyHtml')
const app = express()

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(express.static(path.join(__dirname, 'public')))
app.use(logger('dev'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})
app.post('/api', (req, res) => {
    res.send('send')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
    console.log(`server running ${PORT}`)
})