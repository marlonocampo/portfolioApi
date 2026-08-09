import { Router } from 'express'
import { EmailController } from '../../api/controllers/EmailController.js'
import { EmailUseCase } from '../../../application/use-cases/email/EmailUseCase.js'
import { NodeMailerService } from '../../email/NodeMailerService.js'

export const emailRoutes = () => {
  const router = Router()
  const service = new NodeMailerService()
  const emailUseCase = new EmailUseCase(service)
  const controller = new EmailController(emailUseCase)

  router.post('/send', controller.sendMail.bind(controller))

  return router
}