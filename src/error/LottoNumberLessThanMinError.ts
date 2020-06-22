import { StringUtils } from "../utils/StringUtils";
import LottoNumber from "../domain/LottoNumber";

export default class LottoNumberLessThanMinError extends Error {
  
  private static readonly ERROR_MESSAGE: string = `로또 번호의 값은 범위보다 작을 수 없습니다. (입력한 값: {0})`;

  constructor(lottoNumber: number) {
    super(StringUtils.format(LottoNumberLessThanMinError.ERROR_MESSAGE, lottoNumber));
    this.name = 'LottoNumberLessThanMinError';
  }
}