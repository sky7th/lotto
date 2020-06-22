import Lotto from "./Lotto";
import LottoNumber from "./LottoNumber";

export default class ManualLottoGenerator {

  static generate (lottoNumbers: number[]): Lotto {
    const _lottoNumbers = lottoNumbers.sort().map(lottoNumber => new LottoNumber(lottoNumber));

    return new Lotto(_lottoNumbers);
  }
}