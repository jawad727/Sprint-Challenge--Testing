const routers = require('./games-router')
const request = require('supertest')
  
describe('POST /', () => {
    it('should post', () => {
        request(routers)
        .post('/')
        .then(res => {
                expect(res.type).toBe('application/json')
                expect(res.status).toBe(200)
            })
        .catch(err => {
                expect(res.status).toBe(422)
        })
    })
})

describe('GET /', () => {

    it('should get stuff', () => {
        request(routers)
        .get('/')
        .then(res => {
            expect(res.status).toBe(200)
        })
        .catch(err => {
            expect(res.status).toBe(422)
        })
    })
    
})
