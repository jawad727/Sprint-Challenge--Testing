const request = require('supertest')
const games = require('./games-helper')
const routers = require('./games-router')

const db = require('./dbConfig')


describe('Games helpers', () => {

    it('should run tests', () => {
        expect(process.env.DB_ENV).toBe('testing');
    })


    describe('POST /', () => {
        afterEach(async () => {
            await db('games').truncate()
        })
        it('should post the game i give it', async () => {
            await games.insert({title: 'pacman', genre: 'arcade'})

            const game = await db('games')
            
            expect(game).toHaveLength(1)
        })

        it('Should check for game', async () => {
            let game = await games.insert({title: 'pacman', genre: 'arcade'})
            expect(game.title).toBe('pacman')
        })
    })

  
    describe('GET /', () => {

        it('should get games', () => {
            games.get().then(res => {
                expect.arrayContaining([])
            })
        })
    })



})


