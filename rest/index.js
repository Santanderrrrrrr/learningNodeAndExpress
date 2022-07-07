const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

const app = express();

app.use(express.static(path.join(__dirname, '/public')))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs')

let comments = [
    {
        id: uuidv4(),
        username: 'Todd',
        comment: 'lol that is so funny'
    },
    {
        id: uuidv4(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuidv4(),
        username: 'Sk8erBoi',
        comment: 'plz delete your account, Todd'
    },
    {
        id: uuidv4(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    },
]

//index
app.get('/comments', (req, res)=>{
    res.render('comments/index', {comments})
})

//create new 
// //page with new
app.get('/comments/new', (req, res)=>{
    res.render('comments/new')
})

//create new comment and redirect to index
app.post('/comments', (req, res, next)=>{
    const { username, comment} = req.body;
    comments.push({username, comment, id: uuidv4()})
    res.redirect(302,'/comments')
    // res.send(`
    //     <h1>It worked out well!</h1>
    // `)
    
    console.log(comments[comments.length - 1])
})


//show specific comment
app.get('/comments/:id', (req, res)=>{
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    res.render('comments/show', { comment })
})

//edit a comment
//get the form to edit the comments
app.get('/comments/:id/edit', (req, res)=>{
    console.log(req.params.id)
    const { id } = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/edit', {comment})
})

//patch request to edit the comment
app.patch('/comments/:id', (req, res)=>{
    const { id } = req.params;
    const foundComment = comments.find(comm => comm.id === id)
    const newComment = req.body.comment
    console.log(req.body)
    foundComment.comment = newComment
    res.redirect('/comments')

})


//delete
app.delete('/comments/:id', (req, res)=>{
    const { id } = req.params;
    comments = comments.filter(comm => comm.id !== id)
    res.redirect('/comments')
})




app.listen(3001, function() {
    console.log('server listening on port 3001');
})