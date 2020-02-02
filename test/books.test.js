
const app = require('../server/server')
const supertest = require('supertest')
const request = supertest(app)
const { testSetup } = require('./setup')

testSetup()

var id = null

it('Endpoint: /api/v1/books', async (done) => {
  const res = await request.post('/api/v1/books').send({
    title: "Book's title (Teste)",
    author: "Book author (Teste)"
  })
  id = res.body.data.id
  expect(res.status).toBe(201)
  expect(res.body.data.title).toBeTruthy()
  expect(res.body.data.author).toBeTruthy()
  done()
})

it('Endpoint: /api/v1/books/{id}', async done => {
  const res = await request.get('/api/v1/books/' + id).send()
  expect(res.status).toBe(200)
  expect(res.body.data.title).toBe("Book's title (Teste)")
  done()
})


