const express = require('express')
const app = express()

const rest = require('./data')

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.render('homepage.ejs')
})
app.get('/resturaunts', (req, res) => {
    res.render('all-resturaunts.ejs', { rest })
})


app.get('/resturaunts/:id', (req, res) => {

    const foundRest = rest.find((oneRest) => {
        return oneRest.id === Number(req.params.id)
    })

    console.log(foundRest)
    res.render('resturaunts-details.ejs',  resta = foundRest )
})


app.listen('3000', () => { console.log('App Works!') })