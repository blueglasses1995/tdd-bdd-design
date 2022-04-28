import { Customer } from './customer';

class Bank {}

class AccountRegistry {}
export class Atm {
  constructor(private bank: Bank, private accountRegistry: AccountRegistry) {}

  balance(customer: Customer): number {
    const account = this.accountRegistry.findByCustomerId(customer.id);
    this.bank.balanceOfAccount(account);
    return 0;
  }

  withdraw(number: number, customer: Customer): void {}
}
