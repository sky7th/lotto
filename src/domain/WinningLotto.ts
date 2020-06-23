import LottoNumber from "./LottoNumber";
import Lotto from "./Lotto";
import BonusNumberDuplicateWinningLottoNumberError from "../error/BonusNumberDuplicateWinningLottoNumberError";

export default class WinningLotto {

  private _winningLotto: Lotto;
  private _bonusNumber: LottoNumber;

  constructor(winningLotto: Lotto, bonusNumber: LottoNumber) {
    if (winningLotto.includes(bonusNumber)) {
      throw new BonusNumberDuplicateWinningLottoNumberError(bonusNumber.number);
    }
    this._winningLotto = winningLotto;
    this._bonusNumber = bonusNumber;
  }

  get winningLotto() {
    return this._winningLotto;
  }

  get lottoNumbers() {
    return this._winningLotto.lottoNumbers;
  }

  get number() {
    return this._bonusNumber.number;
  }

  get bonusNumber() {
    return this._bonusNumber;
  }
}