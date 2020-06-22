import { StringUtils } from "../utils/StringUtils";
import Lotto from "../domain/Lotto";

export default class ManualLottoAmountGreaterThanMaxError extends Error {
  
  private static readonly ERROR_MESSAGE: string = `수동 로또는 구매하실 양인 {0}개 까지만 입력 가능합니다. (입력한 값: {1})`;

  constructor(lottoAmount: number, manualLottoAmount: number) {
    super(StringUtils.format(ManualLottoAmountGreaterThanMaxError.ERROR_MESSAGE, lottoAmount, manualLottoAmount));
    this.name = 'ManualLottoAmountGreaterThanMaxError';
  }
}