import { StringUtils } from "../utils/StringUtils";
import Lotto from "../domain/Lotto";

export default class WrongTotalLottoNumberError extends Error {
  
  private static readonly ERROR_MESSAGE: string = `{0}번째 수동 로또에 나머지 {1}개의 번호를 더 입력해주세요. (로또는 한 게임에 ${Lotto.TOTAL_LOTTO_NUMBER}개의 숫자가 필요합니다)`;

  constructor(manualLottoIndex: number, lottoNumberCount: number) {
    super(StringUtils.format(WrongTotalLottoNumberError.ERROR_MESSAGE, manualLottoIndex + 1, Lotto.TOTAL_LOTTO_NUMBER - lottoNumberCount));
    this.name = 'WrongTotalLottoNumberError';
  }
}