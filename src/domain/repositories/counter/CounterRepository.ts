import { Counter } from '../../entities/Counter.js'

export interface CounterRepository {
  save: ({ isCount }: { isCount: boolean }) => Promise<Counter>
  getAll: () => Promise<Counter[]>
  delete: ({ id }: { id: string }) => Promise<Counter>
}
