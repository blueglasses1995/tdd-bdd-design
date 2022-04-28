import { AccountRegistry } from './accountRegistry';
import { Bank } from './bank';
import { Customer } from './customer';

export class Atm {
  constructor(private bank: Bank, private accountRegistry: AccountRegistry) {}

  balance(customer: Customer): number {
    const account = this.accountRegistry.findByCustomerId(customer.id);
    this.bank.balanceOfAccount(account);
    return 0;
  }

  withdraw(number: number, customer: Customer): void {}
}
