import { CounterServices } from '../../services/CounterServices.js'
import { Request, Response } from 'express-serve-static-core'

export class CounterController {
  static async GetCounter (_req: Request, res: Response): Promise<Response> {
    const counter = await CounterServices.getCounter()
    return res.status(200).json({ counter })
  }

  static async SaveLike (_req: Request, res: Response): Promise<Response> {
    try {
      const response = await CounterServices.saveLike()
      return res.status(201).json(response)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  static async SaveDislike (_req: Request, res: Response): Promise<Response> {
    const isOk = await CounterServices.saveDislike()
    return res.status(201).json(isOk)
  }
}
