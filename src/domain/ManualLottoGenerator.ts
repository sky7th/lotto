import Lotto from "./Lotto";
import LottoNumber from "./LottoNumber";
import { LottoType } from "./LottoType";

export default class ManualLottoGenerator {

  static generate (lottoNumbers: number[]): Lotto {
    const _lottoNumbers = lottoNumbers.sort().map(lottoNumber => LottoNumber.of(lottoNumber));

    return new Lotto(_lottoNumbers, LottoType.MANUAL);
  }
}