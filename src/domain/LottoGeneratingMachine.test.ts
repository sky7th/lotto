import Lotto from "./Lotto";
import ManualLottoGenerator from "./ManualLottoGenerator";
import LottoGeneratingMachine from "./LottoGeneratingMachine";
import ManualLottoTicket from "./ManualLottoTicket";

describe('generate 정적 메서드', () => {
  it('자동 로또 갯수와 수동 로또 티켓을 인자값으로 받고 로또 객체 배열을 반환한다.', () => {
    const autoLottoAmount: number = 1;
    const manualLottoTicket: ManualLottoTicket = ManualLottoTicket.of([[1,2,3,4,5,6],[1,2,3,4,5,6]])
    const lottos: Lotto[] = LottoGeneratingMachine.generate(autoLottoAmount, manualLottoTicket)
    expect(lottos.length).toStrictEqual(autoLottoAmount + manualLottoTicket.lottoNumbersList.length);
  });
});