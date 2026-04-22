import express from 'express'
import { appRoutes } from './appRoutes.js'
import { corsMiddleware } from '../api/config/cors.js'
import { authMiddleware } from '../api/middlewares/authMiddleware.js'
import { authRoutes } from './routes/authRoutes.js'

export function createApp () {
  const app = express()
  // app.use(corsMiddlewares)
  app.use(express.json())
  app.use(corsMiddleware())
  app.use('/token', authRoutes())
  app.use('/api', authMiddleware, appRoutes())
  
  return app
}


