import { model } from 'mongoose'
import { CounterSchema } from '../schema/Counter.js'
// Is a Collection in MongoDB
export const CounterModel = model('Counter', CounterSchema)
