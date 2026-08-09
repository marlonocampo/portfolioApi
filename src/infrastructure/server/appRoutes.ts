import { Router } from 'express'
import { counterRoute } from './routes/counterRoute.js'
import { emailRoutes } from './routes/emailRoutes.js'

export function appRoutes () {
  const router = Router()
  router.use('/counter', counterRoute())
  router.use('/email', emailRoutes())
  return router
} 
