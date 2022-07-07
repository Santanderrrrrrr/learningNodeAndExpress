const express = require('express')
const path = require('path')

const redditData = require('./data.json')

const app = express()

app.use(express.static(path.join(__dirname, '/public')))
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

app.get('/r/:extension', (req, res) => {
    const { extension } = req.params;
    const data = redditData[extension]
    if(data){

        res.render('redView', { ...data})
    }else{
        res.render('fourOhFour', { extension })
    }
})

app.get('/', (req, res) => {
    res.render(`home`)
})

app.listen(3001, () => {
    console.log('App is listening on port 3001')
})