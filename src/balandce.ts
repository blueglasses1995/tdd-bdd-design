export class Balance {
  constructor(
    private readonly _accountId: string,
    private readonly _balance: number,
  ) {}

  get accountId() {
    return this._accountId;
  }

  get balance() {
    return this._balance;
  }
}
