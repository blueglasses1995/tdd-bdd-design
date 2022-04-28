import { Account } from './account';
import { Balance } from './balandce';

interface IBank {
  balanceOfAccount(account: Account): Balance | null;
}

export class Bank implements IBank {
  private readonly balances: Array<Balance> = [new Balance('1', 1000)];

  balanceOfAccount(account: Account): Balance | null {
    const data = this.balances.find(
      ({ accountId }) => accountId === account.id,
    );
    return data || null;
  }
}
