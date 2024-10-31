import { Router } from 'express'
import { CounterController } from '../controllers/CounterController.js'

export const counterRoute = Router()

counterRoute.get('/', CounterController.GetCounter)
counterRoute.get('/like', CounterController.SaveLike)
counterRoute.get('/dislike', CounterController.SaveDislike)
