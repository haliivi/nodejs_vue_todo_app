
require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use('/', express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT)