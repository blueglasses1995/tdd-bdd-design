import { Customer } from './customer';

export class Atm {
  balance(customer: Customer): number {
    return 0;
  }

  withdraw(number: number, customer: Customer): void {}
}
