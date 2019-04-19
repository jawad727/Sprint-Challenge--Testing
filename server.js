const express = require('express')


const gameRouter = require('./games-router')

const server = express();



server.use(express.json())

//sanity check
server.get('/', (req, res) => {
   res.status(200).json({ api: 'up' })
})



//Routes
server.use('/api/games', gameRouter)


module.exports = server;


