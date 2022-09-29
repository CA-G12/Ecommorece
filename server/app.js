const { join } = require('path')

const express = require('express')
const compression = require('compression')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const router = require('./routes')
const { clearConfigCache } = require('prettier')

const app = express()

app.set('port', process.env.PORT || 3001)

app.use(compression())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(join(__dirname, '..', 'client', 'build')))

app.use(router)

app.get("*", (req, res) => {
    res.sendFile(join(__dirname, "..", "client", "build", "index.html"))
})

// eslint-disable-next-line no-unused-vars
app.get((req, res, next)=>{
    res.status(404).json({msg: "NOT FOUND"})
})
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next)=>{
    console.log(err);
    res.status(500).json({msg: "inernal server error"})
})
module.exports = app
