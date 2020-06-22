import Lotto from "./Lotto";
import LottoNumber from "./LottoNumber";
import { LottoType } from "./LottoType";

export default class WinningLottoGenerator {

  static generate (lottoNumbers: number[]): Lotto {
    const _lottoNumbers = lottoNumbers.sort((a, b) => a - b)
      .map(lottoNumber => LottoNumber.of(lottoNumber));

    return new Lotto(_lottoNumbers, LottoType.WINNING);
  }
}