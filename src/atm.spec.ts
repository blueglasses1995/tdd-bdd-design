import { Atm } from './atm';
import { Customer } from './customer';

describe(Atm, () => {
  it('は<Given>特定顧客のバランスが0円の時、<When>特定顧客のバランスを問い合わせると、<Then>バランスが0円返ってくる', () => {
    const atm = new Atm();
    const customer = new Customer();
    expect(atm.balance(customer)).toEqual(0);
  });

  it('は<Given>特定顧客のバランスが1000円の時、<When>特定顧客のバランスを問い合わせると、<Then>バランスが1000円返ってくる', () => {
    const atm = new Atm();
    const customer = new Customer();
    expect(atm.balance(customer)).toEqual(1000);
  });

  it('は特定顧客の口座から出金できる', () => {
    const atm = new Atm();
    const customer = new Customer();
    expect(() => atm.withdraw(1000, customer)).not.toThrowError();
  });
});
