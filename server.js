
const express = require('express')
const exphbs = require('express-handlebars')
const dao = require('./db/dao')

// Create app and handlebars instance
let app = express()
let hbs = exphbs( { extname: '.hbs', defaultLayout: 'main' } )

// Configure app to use handlebars template engine to render views
app.engine('hbs', hbs)
app.set('view engine', '.hbs')

// Routes
app.get('/',
    (req, res) => {
        res.send('Hello, world!\n')
    })

app.get('/render',
    (req, res) => {
        res.render('index')
    })

// Tell app to listen on port 8000
app.listen(8000,
    () => {
        console.log('Server running on localhost:8000')
    })
