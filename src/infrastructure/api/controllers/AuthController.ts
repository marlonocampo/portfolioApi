import { Request, Response } from 'express'
import { AuthAppUseCase } from '../../../application/use-cases/authAppValidation/AuthAppUseCase.js'

export class AuthController {
  constructor (private validationAppTokenUseCase: AuthAppUseCase) { }

  public async Sign (req: Request, res: Response) {
    const iss = req.body.iss
    const result = this.validationAppTokenUseCase.sign({ iss })
    return res.status(result.code).json(result)
  }
}