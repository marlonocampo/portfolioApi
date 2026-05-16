import request from 'supertest'
import { createApp } from '../../src/infrastructure/server/app.js'
import dotenv from 'dotenv'

dotenv.config({
  path: '.env.test'
})

const app = createApp()
const clientId = process.env.CLIENT_ID

describe('Authentication app', () => {
  it('should authenticate with portfolio api', async () => {
    const response = await request(app)
      .post('/token/sign')
      .send({ iss: clientId })

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('isSuccess', true)
  })
})

describe('Auth E2E', () => {
  it('should return 401 for invalid credentials', async () => {
    const response = await request(app)
      .post('/token/sign')
      .send({ iss: 'invalid_client_id' })
    expect(response.status).toBe(403)
    expect(response.body).toHaveProperty('error', 'Forbidden: Invalid issuer')
  })
})
