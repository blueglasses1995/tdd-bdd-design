import { Customer } from './customer';

class Bank {}
export class Atm {
  constructor(private bank: Bank) {}

  balance(customer: Customer): number {
    this.bank.balanceOfCustomer(customer.id);
    return 0;
  }

  withdraw(number: number, customer: Customer): void {}
}
