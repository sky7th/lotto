import { StringUtils } from "../utils/StringUtils";

export default class ManualLottoDuplicateNumberError extends Error {
  
  private static readonly ERROR_MESSAGE: string = '{0}번째 수동 로또에 중복 번호가 있습니다.';

  constructor(manualLottoIndex: number) {
    super(StringUtils.format(ManualLottoDuplicateNumberError.ERROR_MESSAGE, manualLottoIndex + 1));
    this.name = 'ManualLottoDuplicateNumberError';
  }
}