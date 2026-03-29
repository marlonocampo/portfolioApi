import { Result } from '../../shared/Result.js'
import { Counter } from '../../../domain/entities/Counter.js'

export interface CounterUseCaseContract {
  getAll: () => Promise<Result<Counter[]>>
  saveLike: () => Promise<Result<Counter>>
  saveDislike: () => Promise<Result<Counter>>
}