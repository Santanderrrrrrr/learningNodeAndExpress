const express = require('express')

const app = express()

// console.dir(app)

// app.use((req, res)=>{
//     console.log('A request has been made')
//     res.send("Request received, here's a response!")
// })

app.get('/something', (req, res)=>{
    // console.dir(req)
    res.send(`<h1 style="color: blue">This is definitely something!</h1>`)
})
app.get('/', (req, res)=>{
    res.send(`<h1 style="color: green">This is the homepage!</h1>`)
})

app.get('/something/:extension', (req, res)=>{
    console.log(req.params)
    const { extension } = req.params;
    res.send(`<h1 style="color: turquoise">In this instance, the unprecedented extension is <b style="color: #222">${extension}</b></h1>`)
})

app.get('/:specific/:extension', (req, res)=>{
    console.log(req.params)
    const { specific, extension } = req.params;
    res.send(`<h1 style="color: turquoise">In this instance, the unprecedented extension to <i style="color: #222">${specific}</i> is <b style="color: #222">${extension}</b></h1>`)
})

app.get('/search', (req, res)=>{
    console.log(req.query)
    if(req.query.length){    
        res.send(`<h1 style="color: turquoise">Your query was: ${req.query[Object.keys(req.query)[0]]}</h1>`)
    }else{
        res.send(`<h1 style="color: turquoise">You need to actually have a query!</h1>`)
    }
})


app.get('*', (req, res)=>{
    res.send(`<h1 style="color: red">Route not specified!</h1>`)
})

app.listen(3001, ()=>{
    console.log('listening on http://localhost:3001')
}) 