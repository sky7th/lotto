import { StringUtils } from "../utils/StringUtils";

export default class EmptyBonusLottoNumberError extends Error {
  
  private static readonly ERROR_MESSAGE: string = '보너스 값을 입력해주세요.';

  constructor() {
    super(StringUtils.format(EmptyBonusLottoNumberError.ERROR_MESSAGE));
    this.name = 'EmptyBonusLottoNumberError';
  }
}