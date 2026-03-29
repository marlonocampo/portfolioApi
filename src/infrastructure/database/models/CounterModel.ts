import { model, Schema } from 'mongoose'

const CounterSchema = new Schema({
  date: { type: Date, required: true, unique: false },
  isCount: { type: Boolean, required: true, unique: false }
})

// Is a Collection in MongoDB
export const CounterModel = model('Counter', CounterSchema)
