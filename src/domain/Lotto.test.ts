import Lotto from "./Lotto";
import LottoNumber from "./LottoNumber";
import { LottoType } from "./LottoType";

describe('Lotto 객체', () => {
  it('객체를 생성한다.', () => {
    const lottoType = LottoType.MANUAL;
    const lottoNumbers = [];
    for (let i = 0; i < 6; i++) {
      lottoNumbers.push(LottoNumber.of(i));
    }
    const lotto: Lotto = new Lotto(lottoNumbers, lottoType)
    expect(lotto).toBeInstanceOf(Lotto);
  });
});