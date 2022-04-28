import { Account } from './account';
import { Balance } from './balandce';
import { IBank } from './IBank';

export class Bank implements IBank {
  private readonly balances: Array<Balance> = [new Balance('1', 1000)];

  balanceOfAccount(account: Account): Balance | null {
    const data = this.balances.find(
      ({ accountId }) => accountId === account.id,
    );
    return data || null;
  }
}
