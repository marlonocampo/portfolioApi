import { Router } from 'express'
import { counterRoute } from './routes/counterRoute.js'

export function appRoutes () {
  const router = Router()
  router.use('/counter', counterRoute())
  return router
} 
