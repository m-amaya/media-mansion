
const express = require('express')
const exphbs = require('express-handlebars')

let app = express()

// Create .hbs view engine
const hbs =
    exphbs({
        extname: '.hbs',
        defaultLayout: 'main'
    })

app.engine('hbs', hbs)
app.set('view engine', '.hbs')

app.get('/',
    (req, res) => {
        res.send('Hello, world!')
    })

app.get('/render',
    (req, res) => {
        res.render('index')
    })

app.listen(8000,
    () => {
        console.log('Server running on port \'localhost\':8000')
    })
