import LottoNumber from "./LottoNumber";
import { LottoType } from "./LottoType";
import { LottoPrize } from "./LottoPrize";

export default class Lotto {

  public static readonly TOTAL_LOTTO_NUMBER = 6;
  public static readonly MAX_TO_PURCHASE = 2000;
  public static readonly MIN_TO_PURCHASE = 1;

  constructor(
    private _lottoNumbers: LottoNumber[], 
    private _lottoType: LottoType = LottoType.AUTO,
    private _lottoPrize: LottoPrize = LottoPrize.READY) {
  }

  includes(comparisonTarget: LottoNumber) {
    return this._lottoNumbers.some(lottoNumber => lottoNumber.equals(comparisonTarget));
  }

  winLottoNumbers(targetLotto: Lotto, targetBonusNumber: LottoNumber) {
    this.lottoNumbers.forEach(lottoNumber => {
      if (targetLotto.includes(lottoNumber) || lottoNumber.equals(targetBonusNumber)) {
        lottoNumber.win();
      }
    });
  }

  get countOfWinLottoNumbers(): number {
    return this._lottoNumbers.filter(lottoNumber => lottoNumber.isWin).length;
  }

  get lottoNumbers() {
    return this._lottoNumbers;
  }

  get lottoType() {
    return this._lottoType;
  }

  get lottoPrize() {
    return this._lottoPrize;
  }

  set lottoPrize(lottoPrize: LottoPrize) {
    this._lottoPrize = lottoPrize;
  }
}