import { AccountRegistry } from './accountRegistry';
import { Balance } from './balandce';
import { Bank } from './bank';
import { Customer } from './customer';

export class Atm {
  constructor(private bank: Bank, private accountRegistry: AccountRegistry) {}

  balance(customer: Customer): Balance {
    const account = this.accountRegistry.findByCustomerId(customer.id);

    if (account === null) {
      throw new Error('Account not found');
    }

    const balance = this.bank.balanceOfAccount(account);

    if (balance === null) {
      throw new Error('Balance not found');
    }

    return balance;
  }

  withdraw(number: number, customer: Customer): void {}
}
