import { ICounter } from '../interfaces/ICounter.js'
import { CounterRepository } from '../database/repository/CounterRepository.js'
import { IErrorResponse } from '../interfaces/IErrorResponse.js'

export class CounterServices {
  static async getCounter (): Promise<number | IErrorResponse> {
    const counterRepo = new CounterRepository()
    return await counterRepo.getAll()
  };

  static async saveLike (): Promise<ICounter | IErrorResponse> {
    const counterRepo = new CounterRepository()
    return await counterRepo.save({ isCount: true })
  }

  static async saveDislike (): Promise<ICounter | IErrorResponse> {
    const counterRepo = new CounterRepository()
    return await counterRepo.save({ isCount: false })
  }
}
