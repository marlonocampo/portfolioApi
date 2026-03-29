import { Router } from 'express'
import { CounterController } from '../../api/controllers/CounterController.js'
import { MongoCounterRepository } from '../../database/MongoCounterRepository.js'
import { CounterUseCase } from '../../../application/use-cases/counter/CounterUseCase.js'

export const counterRoute = () => {
  const router = Router()
  //counter controller
  const repository = new MongoCounterRepository()
  const counterUseCases = new CounterUseCase(repository)
  const controller = new CounterController(counterUseCases)


  //counter routes
  router.get('/', controller.getAll.bind(controller))
  router.post('/', controller.saveLike.bind(controller))
  router.post('/saveDislike', controller.saveDislike.bind(controller))
  return router
}
