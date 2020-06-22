import WinningLotto from "./WinningLotto";
import Lotto from "./Lotto";
import LottoNumber from "./LottoNumber";

describe('WinningLotto 객체', () => {
  it('보너스 번호의 값이 당첨 번호의 값과 중복되면 예외가 발생한다.', () => {
    const winningLotto: Lotto = new Lotto([LottoNumber.of(1), LottoNumber.of(2)])
    const bonusLottoNumber: LottoNumber = LottoNumber.of(1);
    const errorProneFunc = () => new WinningLotto(winningLotto, bonusLottoNumber);
    expect(errorProneFunc).toThrow(expect.objectContaining({ name: 'BonusNumberDuplicateWinningLottoNumberError'}));
  });
});