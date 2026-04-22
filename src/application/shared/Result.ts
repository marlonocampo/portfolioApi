
export class Result<T> {
  private constructor (
    public readonly isSuccess: boolean,
    public readonly code: number,
    public readonly value?: T,
    public readonly error?: string
  ) {}

  static ok<U> (code: number, value: U): Result<U> {
    return new Result<U>(true, code, value)
  }

  static fail<U> (code: number, error: string, value?: U): Result<U> {
    return new Result<U>(false, code, value, error)
  }
}
