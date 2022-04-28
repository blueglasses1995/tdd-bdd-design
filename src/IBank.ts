import { Account } from './account';
import { Balance } from './balandce';

export interface IBank {
  balanceOfAccount(account: Account): Balance | null;
}
