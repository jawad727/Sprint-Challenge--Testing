
const router = require('express').Router();

const gamesDB = require('./games-helper')



router.get('/', (req,res) => {

    gamesDB
       .get()
       .then(game => {
           res.status(200).json(game)
       })
       .catch(error => {
           res.status(422).json({
               error: "couldnt get the game by name"
           })
       })
})



router.post('/', (req, res) => {
    let user = req.body

    gamesDB
    .insert(user)
    .then(saved => res.status(200).json(saved))
    .catch(error => res.status(422).json(error))
  })

  



module.exports = router;