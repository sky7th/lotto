import LottoNumberLessThanMinError from "../error/LottoNumberLessThanMinError";
import LottoNumberGreaterThanMinError from "../error/LottoNumberGreaterThanMinError";

export default class LottoNumber {

  public static readonly MIN: number = 1;
  public static readonly MAX: number = 45;

  private _number: number;
  private _isWin: boolean;

  constructor(number: number) {
    this._number = number;
    this._isWin = false;
  }

  static of(number: number) {
    if (number < LottoNumber.MIN) {
      throw new LottoNumberLessThanMinError(number);
    }
    if (number > LottoNumber.MAX) {
      throw new LottoNumberGreaterThanMinError(number);
    }

    return new LottoNumber(number);
  }

  get number() {
    return this._number;
  }

  get isWin() {
    return this._isWin;
  }

  win() {
    this._isWin = true;
  }
}