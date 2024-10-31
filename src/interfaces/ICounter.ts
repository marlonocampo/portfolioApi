import { Types } from 'mongoose'

export interface ICounter {
  id: Types.ObjectId
  date: Date
  isCount: boolean
}
