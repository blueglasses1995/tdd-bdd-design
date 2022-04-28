import { Atm } from './atm';
import { Customer } from './customer';

describe(Atm, () => {
  it('は特定顧客のバランスを問い合わせできる', () => {
    const atm = new Atm();
    const customer = new Customer();
    expect(atm.balance(customer)).toEqual(0);
  });

  it('は特定顧客の口座から出金できる', () => {
    const atm = new Atm();
    const customer = new Customer();
    expect(() => atm.withdraw(1000, customer)).not.toThrowError();
  });
});
