//installed give-me-a-joke
const jokes = require('give-me-a-joke')
const colors = require('colors')

console.log(jokes.getRandomDadJoke((joke)=>{
    console.log(joke.rainbow)
}))



