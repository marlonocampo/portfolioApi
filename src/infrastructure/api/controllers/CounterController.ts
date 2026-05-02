import { Request, Response } from 'express-serve-static-core'
import { CounterUseCaseContract } from '../../../application/use-cases/contracts/CounterUseCaseContract.js'

export class CounterController {
  constructor (private counterUseCase: CounterUseCaseContract) {}
  public async getAll (_req: Request, res: Response): Promise<Response> {
    const counter = await this.counterUseCase.getAll()
    return res.status(counter.code).json(counter)
  }

  public async saveLike (_req: Request, res: Response): Promise<Response> {
    const response = await this.counterUseCase.saveLike()
    return res.status(response.code).json(response)
  }

  public async saveDislike (_req: Request, res: Response): Promise<Response> {
    const response = await this.counterUseCase.saveDislike()
    return res.status(response.code).json(response)
  }
}
