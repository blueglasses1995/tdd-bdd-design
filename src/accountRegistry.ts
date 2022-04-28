import { Account } from './account';

export class AccountRegistry {
  private readonly accounts: Account[] = [new Account('1')];

  findByCustomerId(id: string): Account | null {
    const account = this.accounts.find((account) => account.id === id);
    return account || null;
  }
}
