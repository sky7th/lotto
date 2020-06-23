import { StringUtils } from "../utils/StringUtils";
import LottoNumber from "../domain/LottoNumber";

export default class BonusNumberDuplicateWinningLottoNumberError extends Error {
  
  private static readonly ERROR_MESSAGE: string = `보너스 번호의 값은 당첨 번호의 값과 중복되면 안됩니다. (입력한 값: {0})`;

  constructor(bonusNumber: LottoNumber) {
    super(StringUtils.format(BonusNumberDuplicateWinningLottoNumberError.ERROR_MESSAGE, bonusNumber.number));
    this.name = 'BonusNumberDuplicateWinningLottoNumberError';
  }
}