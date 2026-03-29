import { MongoCounterRepository } from '../../../infrastructure/database/MongoCounterRepository.js'
import { CounterUseCaseContract } from '../contracts/CounterUseCaseContract.js'
import { Result } from '../../shared/Result.js'
import { Counter } from '../../../domain/entities/Counter.js'

export class CounterUseCase implements CounterUseCaseContract {
  constructor (private repository: MongoCounterRepository) {}
  
  async getAll (): Promise<Result<Counter[]>> {
    try {
      const result = await this.repository.getAll()
      return Result.ok<Counter[]>(0, result)
    } catch (error: Error | any) {
      return Result.fail<Counter[]>(500, `Error: ${error.message}`)
    }
  };

  async saveLike (): Promise<Result<Counter>> {
    try {
      const result = await this.repository.save({ isCount: true })
      return Result.ok<Counter>(0, result)
    } catch (error: Error | any) {
      return Result.fail<Counter>(500, `Error: ${error.message}`)
    }
  }
  
  async saveDislike (): Promise<Result<Counter>> {
    try {
      const result = await this.repository.save({ isCount: false })
      return Result.ok<Counter>(0, result)
    } catch (error: Error | any) {
      return Result.fail<Counter>(500, `Error: ${error.message}`)
    }
  }
}
