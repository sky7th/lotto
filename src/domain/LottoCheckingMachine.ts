import WinningLotto from "./WinningLotto";
import Lotto from "./Lotto";
import { LottoPrize } from "./LottoPrize";

export default class LottoCheckingMachine {

  static match(lotto: Lotto, winningLotto: WinningLotto) {
    winningLotto.matchForWinningLottoNumber(lotto);
    const matchedBonus: boolean = winningLotto.isMatchedBonus(lotto);
    lotto.lottoPrize = LottoPrize.valueOf(lotto.countOfWinLottoNumbers, matchedBonus);
    
    return lotto;
  }

  static calculateTotalLottoPrize(lottos: Lotto[]) {
    return lottos.reduce((acc, it) => acc + it.lottoPrize.reward, 0);
  }
}