import { StringUtils } from "../utils/StringUtils";
import Lotto from "../domain/Lotto";

export default class ManualLottoAmountLessThanMinError extends Error {

  public static readonly NO_MANUAL_LOTTO: number = 0;
  private static readonly ERROR_MESSAGE: string = `수동 로또는 ${ManualLottoAmountLessThanMinError.NO_MANUAL_LOTTO}개 이상부터 선택 가능합니다. (입력한 값: {1})`;

  constructor(manualLottoAmount: number) {
    super(StringUtils.format(ManualLottoAmountLessThanMinError.ERROR_MESSAGE, manualLottoAmount));
    this.name = 'ManualLottoAmountLessThanMinError';
  }
}