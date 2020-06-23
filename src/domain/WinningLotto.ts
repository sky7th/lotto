import LottoNumber from "./LottoNumber";
import Lotto from "./Lotto";
import BonusNumberDuplicateWinningLottoNumberError from "../error/BonusNumberDuplicateWinningLottoNumberError";

export default class WinningLotto {

  private _winningLotto: Lotto;
  private _bonusNumber: LottoNumber;

  constructor(winningLotto: Lotto, bonusNumber: LottoNumber) {
    if (winningLotto.includes(bonusNumber)) {
      throw new BonusNumberDuplicateWinningLottoNumberError(bonusNumber);
    }
    this._winningLotto = winningLotto;
    this._bonusNumber = bonusNumber;
  }

  matchForWinningLottoNumber(targetLotto: Lotto) {
    targetLotto.winLottoNumbers(this._winningLotto, this._bonusNumber);
  }

  isMatchedBonus(targetLotto: Lotto) {
    let matchedBonus: boolean = false;
    if (targetLotto.countOfWinLottoNumbers === Lotto.TOTAL_LOTTO_NUMBER) {
      matchedBonus = targetLotto.includes(this._bonusNumber);
    }
    return matchedBonus;
  }

  get lottoNumbers() {
    return this._winningLotto.lottoNumbers;
  }

  get bonusNumber() {
    return this._bonusNumber;
  }
}