class Atm {
  balance(customer: Customer) {
    return undefined;
  }
}

describe(Atm, () => {
  it('は特定顧客のバランスを問い合わせできる', () => {
    let atm = new Atm();
    expect(atm.balance(customer)).toEqual(0);
  });
});
