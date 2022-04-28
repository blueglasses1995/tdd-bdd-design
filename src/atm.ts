import { Customer } from './customer';

export class Atm {
  balance(customer: Customer): number {
    const balance = getBalanceFromCentral(customer);
    return balance;
  }

  withdraw(number: number, customer: Customer): void {}
}
