import express from 'express'
import cors from 'cors'
import { appRoutes } from './appRoutes.js'

export function createApp () {
  const app = express()
  // app.use(corsMiddlewares)
  app.use(express.json())
  app.use(cors({
    // origin: 'http://localhost:3000'
  }))
  app.use('/api', appRoutes())
  
  return app
}


