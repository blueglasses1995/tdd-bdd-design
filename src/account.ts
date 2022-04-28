export class Account {
  constructor(private readonly _id: string) {}

  get id() {
    return this._id;
  }
}
