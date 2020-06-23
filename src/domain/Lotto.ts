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

  includes(lottoNumber: LottoNumber) {
    return this._lottoNumbers.map(lottoNumber => lottoNumber.number)
      .includes(lottoNumber.number);
  }

  get winLottoNumbers(): LottoNumber[] {
    const winLottoNumbers:LottoNumber[] = [];
    this._lottoNumbers.forEach(lottoNumber => {
      if (lottoNumber.isWin) {
        winLottoNumbers.push(lottoNumber);
      }
    });

    return winLottoNumbers;
  }
}