import { Customer } from './customer';

class Balance {
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

class Bank {
  private readonly balances: Array<Balance> = [];

  balanceOfAccount(account: Account) {
    const data = this.balances.find(({ accountId }) => {
      accountId === account.id;
    });
    return data || null;
  }
}

class Account {
  constructor(private readonly _id: string) {}

  get id() {
    return this._id;
  }
}

class AccountRegistry {
  findByCustomerId(id: string): Account | null {
    return null;
  }
}
export class Atm {
  constructor(private bank: Bank, private accountRegistry: AccountRegistry) {}

  balance(customer: Customer): number {
    const account = this.accountRegistry.findByCustomerId(customer.id);
    this.bank.balanceOfAccount(account);
    return 0;
  }

  withdraw(number: number, customer: Customer): void {}
}
