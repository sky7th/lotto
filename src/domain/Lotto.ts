import LottoNumber from "./LottoNumber";

export default class Lotto {

  public static readonly TOTAL_LOTTO_NUMBER = 6;

  private _lottoNumbers: LottoNumber[];

  constructor(lottoNumbers: LottoNumber[]) {
    this._lottoNumbers = lottoNumbers;
  }

  get lottoNumbers() {
    return this._lottoNumbers;
  }
}