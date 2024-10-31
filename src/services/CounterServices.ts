import { ICounter } from '../interfaces/ICounter.js'
import { CounterRepository } from '../database/repository/CounterRepository.js'
import { IErrorResponse } from '../interfaces/IErrorResponse.js'

export class CounterServices {
  static async getCounter (): Promise<number | IErrorResponse> {
    return await CounterRepository.getAll()
  };

  static async saveLike (): Promise<ICounter | IErrorResponse> {
    return await CounterRepository.save({ isCount: true })
  }

  static async saveDislike (): Promise<Object> {
    return await CounterRepository.save({ isCount: false })
  }
}
