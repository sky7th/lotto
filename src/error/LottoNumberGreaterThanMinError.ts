import { StringUtils } from "../utils/StringUtils";
import LottoNumber from "../domain/LottoNumber";

export default class LottoNumberGreaterThanMinError extends Error {
  
  private static readonly ERROR_MESSAGE: string = `로또 번호의 값은 ${LottoNumber.MAX}보다 클 수 없습니다. (입력한 값: {0})`;

  constructor(lottoNumber: number) {
    super(StringUtils.format(LottoNumberGreaterThanMinError.ERROR_MESSAGE, lottoNumber));
    this.name = 'LottoNumberGreaterThanMinError';
  }
}