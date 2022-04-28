import { Customer } from './customer';

class Bank {
  private balances: Array<{ accountId: string; balance: number }> = [];

  balanceOfAccount(account: Account) {
    const data = this.balances.find(({ accountId }) => {
      accountId === account.id;
    });
    return data.balance;
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
