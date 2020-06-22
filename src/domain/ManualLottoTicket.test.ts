import ManualLottoTicket from "./ManualLottoTicket";

describe('ManualLottoTicket 객체', () => {
  it('ManualLottoTicket 객체에 수동 로또 번호들이 잘 들어갔는지 확인한다.', () => {
    const lottoNumbersList: number[][] = [[1,2,3,4,5,6], [1,2,3,4,5,6]];
    const manualLottoTicket = ManualLottoTicket.of(lottoNumbersList);
    expect(manualLottoTicket.lottoNumbersList).toStrictEqual(lottoNumbersList);
  });

  it('입력된 수동 로또값에 중복된 값이 있으면 예외가 발생한다.', () => {
    const lottoNumbersList: number[][] = [[1,1,2,3,4,5]];
    const errorProneFunc = () => ManualLottoTicket.of(lottoNumbersList);
    expect(errorProneFunc).toThrow(expect.objectContaining({ name: 'ManualLottoDuplicateNumberError'}));
  });

  it('입력된 수동 로또값을 6자리 입력하지 않으면 예외가 발생한다.', () => {
    const lottoNumbersList: number[][] = [[1,1,2]];
    const errorProneFunc = () => ManualLottoTicket.of(lottoNumbersList);
    expect(errorProneFunc).toThrow(expect.objectContaining({ name: 'WrongTotalLottoNumberError'}));
  });
});