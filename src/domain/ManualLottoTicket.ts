import ManualLottoDuplicateNumberError from "../error/ManualLottoDuplicateNumberError";
import Lotto from "./Lotto";
import WrongTotalLottoNumberError from "../error/WrongTotalLottoNumberError";

export default class ManualLottoTicket {

  private static readonly ZERO: number = 0;
  private static readonly EMPTY_MANUAL_LOTTOS: number[][] = [];

  private _lottoNumbersList: number[][];

  private constructor(lottoNumbersList: number[][]) {
    this._lottoNumbersList = lottoNumbersList;
  }

  static of(lottoNumbersList: number[][]) {
    if (lottoNumbersList.length === ManualLottoTicket.ZERO) {
      return new ManualLottoTicket(ManualLottoTicket.EMPTY_MANUAL_LOTTOS);
    }
    lottoNumbersList.forEach((lottoNumbers, index) => {
      ManualLottoTicket.checkEmptyNumber(lottoNumbers, index);
      ManualLottoTicket.checkDuplicateNumber(lottoNumbers, index);
    })

    return new ManualLottoTicket(lottoNumbersList);
  }

  get lottoNumbersList() {
    return this._lottoNumbersList;
  }

  private static checkEmptyNumber(lottoNumbers: number[], lottoIndex: number) {
    if (lottoNumbers.length !== Lotto.TOTAL_LOTTO_NUMBER) {
      throw new WrongTotalLottoNumberError(lottoIndex, lottoNumbers.length)
    }
  }

  private static checkDuplicateNumber(lottoNumbers: number[], lottoIndex: number) {
    const noDuplicatesLottoNumbers = Array.from(new Set(lottoNumbers));
    if (lottoNumbers.length !== noDuplicatesLottoNumbers.length) {
      throw new ManualLottoDuplicateNumberError(lottoIndex)
    }
  }
}