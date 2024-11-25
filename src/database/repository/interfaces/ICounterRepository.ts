import { ICounter } from '../../../interfaces/ICounter.js'
import { IErrorResponse } from '../../../interfaces/IErrorResponse.js'

export interface ICounterRepository {
  save: ({ isCount }: { isCount: boolean }) => Promise<ICounter | IErrorResponse>
  getAll: () => Promise<number | IErrorResponse>
  delete: ({ id }: { id: number }) => Promise<ICounter | IErrorResponse>
}
