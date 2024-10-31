import { CounterModel } from '../model/CounterModel.js'
import { ICounter } from '../../interfaces/ICounter.js'
import { IErrorResponse } from '../../interfaces/IErrorResponse.js'
import { ICounterRepository } from './interfaces/ICounterRepository.js'

export class CounterRepository implements ICounterRepository {
  save: ({ isCount }: { isCount: boolean }) => Promise<ICounter | IErrorResponse>
  getAll: () => Promise<number | IErrorResponse>
  static async save ({ isCount }: { isCount: boolean }): Promise<ICounter | IErrorResponse> {
    const counter = new CounterModel({
      date: new Date(),
      isCount
    })

    const response = await counter.save()
      .then((response) => {
        console.log(response)
        console.log('->👍🏼 Counter saved!')
        return { isCount: response.isCount, date: response.date, id: response._id }
      }).catch((err) => {
        console.error('->❌Error: ', err.message)
        return { isError: true, message: String(err.message) }
      })

    return response
  }

  static async getAll (): Promise<number | IErrorResponse> {
    const response = await CounterModel.find({}) // get all documents thant are like in aument
      .where({ isCount: true })
      .then((response) => {
        console.log(response)
        console.log('->👍🏼 getting Counters!')
        return response.length
      }).catch((err) => {
        console.error('->❌Error: ', err.message)
        return { isError: true, message: String(err.message) }
      }
      )
    return response
  }
}
