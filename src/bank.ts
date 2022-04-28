import { Account } from './account';
import { Balance } from './balandce';

export class Bank {
  private readonly balances: Array<Balance> = [];

  balanceOfAccount(account: Account) {
    const data = this.balances.find(({ accountId }) => {
      accountId === account.id;
    });
    return data || null;
  }
}
