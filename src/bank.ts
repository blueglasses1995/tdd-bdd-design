import { Account } from './account';
import { Balance } from './balandce';
import { IBank } from './IBank';

export class Bank implements IBank {
  balances: Array<Balance> = [];

  balanceOfAccount(account: Account): Balance | null {
    const data = this.balances.find(
      ({ accountId }) => accountId === account.id,
    );
    return data || null;
  }
}
