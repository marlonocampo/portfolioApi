import { ICounter } from '../interfaces/ICounter.js'

export class CounterServices {
  static async getCounter (): Promise<number> {
    return 0
  };

  static async saveLike (): Promise<ICounter> {
    return { saved: true }
  }

  static async saveDislike (): Promise<ICounter> {
    return { saved: true }
  }
}
