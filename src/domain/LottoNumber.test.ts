import LottoNumber from "./LottoNumber";

describe('LottoNumber 객체', () => {
  it(`로또 숫자가 최소 범위 ${LottoNumber.MIN}보다 작으면 예외가 발생한다.`, () => {
    const errorProneFunc = () => LottoNumber.of(0);
    expect(errorProneFunc).toThrow(expect.objectContaining({ name: 'LottoNumberLessThanMinError'}));
  });

  it(`로또 숫자가 최대 범위 ${LottoNumber.MAX}보다 크면 예외가 발생한다.`, () => {
    const errorProneFunc = () => LottoNumber.of(0);
    expect(errorProneFunc).toThrow(expect.objectContaining({ name: 'LottoNumberGreaterThanMinError'}));
  });
});