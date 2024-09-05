const request = require('supertest')
const app = require('../src/hello')

describe('route hello', () => {
  test('It should return hello, name', async () => {
    const response = await request(app).get('/hello/Bob')

    expect(response.statusCode).toBe(200)
    expect(response.text).toEqual('Hello, Bob!')
  })
})

describe('route goodbye', () => {
  test('It should return goodbye, name', async () => {
    const response = await request(app).get('/goodbye/Bob')

    expect(response.statusCode).toBe(200)
    expect(response.text).toEqual('Goodbye, Bob!')
  })
})