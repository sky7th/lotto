import ManualLottoTicket from "./ManualLottoTicket";
import RandomUtils from "../utils/RandomUtils";
import AutoLottoGenerator from "./AutoLottoGenerator";
import Lotto from "./Lotto";
import LottoNumber from "./LottoNumber";
import ManualLottoGenerator from "./ManualLottoGenerator";

describe('generate 정적 메서드', () => {
  it('인자값으로 받은 6개의 로또 번호를 가진 로또 객체를 반환한다.', () => {
    const lotto: Lotto = ManualLottoGenerator.generate([1,2,3,4,5,6]);
    expect(lotto.lottoNumbers.length).toStrictEqual(Lotto.TOTAL_LOTTO_NUMBER);
  });
});