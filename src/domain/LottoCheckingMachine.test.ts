import Lotto from "./Lotto";
import WinningLotto from "./WinningLotto";
import LottoNumber from "./LottoNumber";
import LottoCheckingMachine from "./LottoCheckingMachine";
import { LottoPrize } from "./LottoPrize";

describe('checkSameNumber 정적 메서드', () => {

  let winningLottoNumbers: LottoNumber[] = [LottoNumber.of(1), LottoNumber.of(2), LottoNumber.of(3), LottoNumber.of(4), LottoNumber.of(5), LottoNumber.of(6)];
  let bonusNumber: LottoNumber = LottoNumber.of(11);

  it('6개의 번호가 모두 (당첨 번호 + 보너스 번호)에 속하고 보너스 번호를 포함하지 않으면 1등이다.', () => {
    const lotto: Lotto = new Lotto(winningLottoNumbers);
    const winningLotto: WinningLotto = new WinningLotto(new Lotto(winningLottoNumbers), bonusNumber);

    LottoCheckingMachine.match(lotto, winningLotto);

    expect(lotto.lottoPrize).toStrictEqual(LottoPrize.FIRST);
  });

  it('6개의 번호가 모두 (당첨 번호 + 보너스 번호)에 속하고 보너스 번호도 포함하면 2등이다.', () => {
    const myLottoNumbers: LottoNumber[] = [LottoNumber.of(1), LottoNumber.of(2), LottoNumber.of(3), LottoNumber.of(4), LottoNumber.of(5), LottoNumber.of(11)];
    const lotto: Lotto = new Lotto(myLottoNumbers);
    const winningLotto: WinningLotto = new WinningLotto(new Lotto(winningLottoNumbers), bonusNumber);
    
    LottoCheckingMachine.match(lotto, winningLotto);

    expect(lotto.lottoPrize).toStrictEqual(LottoPrize.SECOND);
  });
});