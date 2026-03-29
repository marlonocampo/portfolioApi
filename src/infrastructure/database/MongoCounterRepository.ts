import { CounterModel } from './models/CounterModel.js'
import { CounterRepository } from '../../domain/repositories/counter/CounterRepository.js'
import { Counter } from '../../domain/entities/Counter.js'

export class MongoCounterRepository implements CounterRepository {
  async save ({ isCount }: { isCount: boolean }): Promise<Counter> {
    const counter = new CounterModel({
      date: new Date(),
      isCount
    })

    const response = await counter.save()
      .then((response) => {
        const date = new Date()
        console.log(`-> counter saved. ${date}`)
        return { isCount: response.isCount, date: response.date, id: response._id.toString() }
      }).catch((err) => {
        console.error('->❌Error: ', err.message)
        throw Error(err.message)
      })

    return response
  }

  async getAll (): Promise<Counter[]> {
    const response = await CounterModel.find({}) // get all documents thant are like in aument
      .where({ isCount: true })
      .then((response) => {
        const date = new Date()
        console.log(`-> getting Counters. ${date}`)
        return response.map((counter) => new Counter(counter._id.toString(), counter.date, counter.isCount))
      }).catch((err) => {
        console.error('->❌Error: ', err.message)
        throw Error(err.message)

      }
      )
    return response
  }

  async delete ({ id }: { id: string }): Promise<Counter> {
    id = id + 1
    console.log('->🗑️ Deleting counter with id: ', id)
    throw Error('Method not implement!')
  }
}
