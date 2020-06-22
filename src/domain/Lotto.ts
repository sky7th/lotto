import LottoNumber from "./LottoNumber";
import { LottoType } from "./LottoType";

export default class Lotto {

  public static readonly TOTAL_LOTTO_NUMBER = 6;
  public static readonly MAX_TO_PURCHASE = 20;
  public static readonly MIN_TO_PURCHASE = 1;

  private _lottoNumbers: LottoNumber[];
  private _lottoType: LottoType;

  constructor(lottoNumbers: LottoNumber[], lottoType: LottoType = LottoType.AUTO) {
    this._lottoNumbers = lottoNumbers;
    this._lottoType = lottoType;
  }

  get lottoNumbers() {
    return this._lottoNumbers;
  }

  get lottoType() {
    return this._lottoType;
  }

  includes(lottoNumber: LottoNumber) {
    return this._lottoNumbers.map(lottoNumber => lottoNumber.number)
      .includes(lottoNumber.number);
  }
}