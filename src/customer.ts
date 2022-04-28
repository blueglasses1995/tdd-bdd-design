export class Customer {
  constructor(private readonly _id: string) {}

  get id(): string {
    return this._id;
  }
}
