import { AccountRegistry } from './accountRegistry';
import { Atm } from './atm';
import { Balance } from './balandce';
import { Bank } from './bank';
import { Customer } from './customer';

describe(Atm, () => {
  let customer: Customer;
  let fakeBank: Bank;

  beforeEach(() => {
    customer = new Customer('1');
    fakeBank = new Bank();
  });

  it('は<Given>特定顧客のバランスが0円の時、<When>特定顧客のバランスを問い合わせると、<Then>バランスが0円返ってくる', () => {
    fakeBank.balances = [new Balance('1', 0)];
    const atm = new Atm(fakeBank, new AccountRegistry());
    expect(atm.balance(customer)).toEqual(new Balance('1', 0));
  });

  it('は<Given>特定顧客のバランスが1000円の時、<When>特定顧客のバランスを問い合わせると、<Then>バランスが1000円返ってくる', () => {
    fakeBank.balances = [new Balance('1', 1000)];
    const atm = new Atm(fakeBank, new AccountRegistry());
    expect(atm.balance(customer)).toEqual(new Balance('1', 1000));
  });

  it('は<Given>顧客が存在しない時、<When>その顧客のバランスを問い合わせると、<Then>エラーが返される', () => {
    const atm = new Atm(new Bank(), new AccountRegistry());
    const customer = new Customer('0');
    expect(() => atm.balance(customer)).toThrowError();
  });

  it('は特定顧客の口座から出金できる', () => {
    const atm = new Atm(new Bank(), new AccountRegistry());
    expect(() => atm.withdraw(1000, customer)).not.toThrowError();
  });
});
