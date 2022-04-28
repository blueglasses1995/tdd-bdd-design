class Customer {}

class Atm {
  balance(customer: Customer) {
    return undefined;
  }
}

describe(Atm, () => {
  it('は特定顧客のバランスを問い合わせできる', () => {
    const atm = new Atm();
    const customer = new Customer();
    expect(atm.balance(customer)).toEqual(0);
  });
});
