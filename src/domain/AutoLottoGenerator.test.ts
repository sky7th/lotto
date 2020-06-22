import AutoLottoGenerator from "./AutoLottoGenerator";
import Lotto from "./Lotto";

describe('generate 정적 메서드', () => {
  it('6개의 랜덤 로또 번호를 가진 로또 객체를 반환한다.', () => {
    const lotto: Lotto = AutoLottoGenerator.generate();
    expect(lotto.lottoNumbers.length).toStrictEqual(Lotto.TOTAL_LOTTO_NUMBER);
  });

  it('6개의 랜덤 로또 번호를 가진 로또 객체에 중복된 숫자가 없어야 한다.', () => {
    const lotto: Lotto = AutoLottoGenerator.generate();
    const lottoNumbers: number[] = lotto.lottoNumbers.map(lottoNumber => lottoNumber.number);
    const noDuplicateLottoNumbers = Array.from(new Set(lottoNumbers));
    expect(lotto.lottoNumbers.length).toEqual(noDuplicateLottoNumbers.length);
  });
});