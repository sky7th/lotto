import WinningLotto from "./WinningLotto";
import Lotto from "./Lotto";
import { LottoPrize } from "./LottoPrize";

export default class LottoCheckingMachine {

  static checkSameNumber(lotto: Lotto, winningLotto: WinningLotto) {
    lotto.lottoNumbers.forEach(lottoNumber => {
      if (winningLotto.winningLotto.includes(lottoNumber) || lottoNumber.number === winningLotto.number) {
        lottoNumber.win();
      }
    });
  }

  static setLottoPrize(lotto: Lotto, winningLotto: WinningLotto) {
    let matchedBonus: boolean = false;
    if (lotto.winLottoNumbers.length === Lotto.TOTAL_LOTTO_NUMBER) {
      matchedBonus = lotto.lottoNumbers.some(lottoNumber => lottoNumber.number === winningLotto.number);
    }
    lotto.lottoPrize = LottoPrize.valueOf(lotto.winLottoNumbers.length, matchedBonus);
  }

  static calculateTotalLottoPrize(lottos: Lotto[]) {
    return lottos.reduce((acc, it) => acc + it.lottoPrize.reward, 0);
  }
}