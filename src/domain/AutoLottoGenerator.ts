import Lotto from "./Lotto";
import LottoNumber from "./LottoNumber";
import RandomUtils from "../utils/RandomUtils";

export default class AutoLottoGenerator {

  static generate (): Lotto {
    return new Lotto(AutoLottoGenerator.makeRandomLottoNumbers());
  }

  private static makeRandomLottoNumbers() {
    var lottoNumbers: number[] = [];
    while (lottoNumbers.length < 6) {
        let randomLottoNumber = RandomUtils.getRandomLottoNumber();
        if (!lottoNumbers.includes(randomLottoNumber)) {
          lottoNumbers.push(randomLottoNumber);
        }
    }
    return lottoNumbers.sort().map(lottoNumber => LottoNumber.of(lottoNumber));
  }
}