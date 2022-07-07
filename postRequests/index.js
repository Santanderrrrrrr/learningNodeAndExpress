const express = require('express');
const path = require('path');

const app = express()

app.use(express.static(path.join(__dirname, '/public')))
app.use(express.urlencoded({extended: true}))

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')


app.get('/tacos', (req, res) => {
    res.render('tacos')
    
})

app.post('/tacos', (req, res, next) => {
    console.log(req.body)

})




app.listen(3001, function() {
    console.log('App listening on port 3001');
})