import { model } from 'mongoose'
import { CounterSchema } from '../schema/Counter.js'

export const CounterModel = model('Counter', CounterSchema)
