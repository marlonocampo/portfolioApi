import { Request, Response } from 'express'
import { EmailUseCaseContract } from '../../../application/use-cases/contracts/EmailUseCaseContract.js'
import { EmailDto } from '../../../application/dtos/EmailDto.js'

export class EmailController {
  constructor (private emailUseCase: EmailUseCaseContract) { }
  public async sendMail (req: Request, res: Response) {
    const body: EmailDto = req.body
    const result = await this.emailUseCase.send(body)

    return res.status(result.code).json(result)
  }
}