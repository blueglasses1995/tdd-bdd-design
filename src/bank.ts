import { Account } from './account';
import { Balance } from './balandce';

export class Bank {
  private readonly balances: Array<Balance> = [new Balance('1', 1000)];

  balanceOfAccount(account: Account) {
    const data = this.balances.find(
      ({ accountId }) => accountId === account.id,
    );
    return data || null;
  }
}
