import { Router } from 'express'
import { CounterController } from '../controllers/CounterController.js'

export const counterRoute = Router()

counterRoute.get('/', CounterController.GetCounter)
counterRoute.post('/like', CounterController.SaveLike)
counterRoute.post('/dislike', CounterController.SaveDislike)
