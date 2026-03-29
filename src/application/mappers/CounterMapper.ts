import { Counter } from '../../domain/entities/Counter.js'
import { CounterDto } from '../dtos/CounterDto.js'

export class CounterMapper {
  static toDomain (counter: any): Counter {
    return new Counter(counter._id.toString(), counter.date, counter.isCount)
  }

  static toDto (counter: Counter): CounterDto {
    const { id, date, isCount }: CounterDto = counter
    return { id, date, isCount }
  }

  static toPersistence (counter: Counter): any {
    return {
      date: counter.date,
      isCount: counter.isCount
    }
  }
}