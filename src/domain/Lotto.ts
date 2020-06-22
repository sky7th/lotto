import LottoNumber from "./LottoNumber";
import { LottoType } from "./LottoType";

export default class Lotto {

  public static readonly TOTAL_LOTTO_NUMBER = 6;

  private _lottoNumbers: LottoNumber[];
  private _lottoType: LottoType;

  constructor(lottoNumbers: LottoNumber[], lottoType: LottoType) {
    this._lottoNumbers = lottoNumbers;
    this._lottoType = lottoType;
  }

  get lottoNumbers() {
    return this._lottoNumbers;
  }

  get lottoType() {
    return this._lottoType;
  }
}