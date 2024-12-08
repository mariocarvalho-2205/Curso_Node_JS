const app = require('./app')
const request = require('supertest')


test('GET /hello retorna Hello Word', async () => {
    const res = await request(app).get('/hello')

    expect(res.statusCode).toBe(200)
    expect(res.text).toBe('Hello Word!')
})
