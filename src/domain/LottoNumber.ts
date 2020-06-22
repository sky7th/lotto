import LottoNumberLessThanMinError from "../error/LottoNumberLessThanMinError";
import LottoNumberGreaterThanMinError from "../error/LottoNumberGreaterThanMinError";

export default class LottoNumber {

  public static readonly MIN = 1;
  public static readonly MAX = 45;

  private _number: number;

  private constructor(number: number) {
    this._number = number;
  }

  public static of(number: number) {
    if (number < LottoNumber.MIN) {
      throw new LottoNumberLessThanMinError(number);
    }
    if (number < LottoNumber.MAX) {
      throw new LottoNumberGreaterThanMinError(number);
    }

    return new LottoNumber(number);
  }

  get number() {
    return this._number;
  }
}