import { Schema } from 'mongoose'

export const CounterSchema = new Schema({
  date: { type: Date, required: true, unique: false },
  isCount: { type: Boolean, required: true, unique: false }
})
