import { StringUtils } from "../utils/StringUtils";
import Lotto from "../domain/Lotto";

export default class LottoAmountGreaterThanMaxError extends Error {
  
  private static readonly ERROR_MESSAGE: string = `로또는 ${Lotto.MAX_TO_PURCHASE}개 까지 구매 가능합니다. (입력한 값: {0})`;

  constructor(amount: number) {
    super(StringUtils.format(LottoAmountGreaterThanMaxError.ERROR_MESSAGE, amount));
    this.name = 'LottoAmountGreaterThanMaxError';
  }
}