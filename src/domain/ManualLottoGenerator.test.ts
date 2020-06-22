import Lotto from "./Lotto";
import ManualLottoGenerator from "./ManualLottoGenerator";

describe('generate 정적 메서드', () => {
  it('인자값으로 받은 6개의 로또 번호를 가진 로또 객체를 생성한다.', () => {
    const lotto: Lotto = ManualLottoGenerator.generate([1,2,3,4,5,6]);
    expect(lotto.lottoNumbers.length).toStrictEqual(Lotto.TOTAL_LOTTO_NUMBER);
  });

  it('인자값으로 받은 6개의 로또 번호를 정렬하여 로또 객체를 생성한다.', () => {
    const lotto: Lotto = ManualLottoGenerator.generate([3,2,1,4,6,5]);
    const lottoNumbers: number[] = lotto.lottoNumbers.map(lottoNumber => lottoNumber.number);
    expect(lottoNumbers).toStrictEqual([1,2,3,4,5,6]);
  });
});