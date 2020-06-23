import WinningLotto from "./WinningLotto";
import Lotto from "./Lotto";
import LottoNumber from "./LottoNumber";

describe('WinningLotto 객체', () => {
  it('보너스 번호의 값이 당첨 번호의 값과 중복되면 예외가 발생한다.', () => {
    const winningLotto: Lotto = new Lotto([LottoNumber.of(1), LottoNumber.of(2)])
    const bonusLottoNumber: LottoNumber = LottoNumber.of(1);
    
    const errorProneFunc = () => new WinningLotto(winningLotto, bonusLottoNumber);

    expect(errorProneFunc).toThrow(expect.objectContaining({ name: 'BonusNumberDuplicateWinningLottoNumberError'}));
  });
});

describe('matchForWinningLottoNumber 메서드', () => {
  let winningLottoNumbers: LottoNumber[] = [LottoNumber.of(1), LottoNumber.of(2), LottoNumber.of(3), LottoNumber.of(4), LottoNumber.of(5), LottoNumber.of(6)];
  let bonusNumber: LottoNumber = LottoNumber.of(11);

  it('로또 번호 중 당첨 번호와 같은게 있으면 해당 로또 번호의 당첨 여부를 true로 바꾼다.', () => {
    const lotto: Lotto = new Lotto(winningLottoNumbers);
    const winningLotto: WinningLotto = new WinningLotto(new Lotto(winningLottoNumbers), bonusNumber);

    winningLotto.matchForWinningLottoNumber(lotto);
    
    const isWins: boolean[] = lotto.lottoNumbers.map(lottoNumber => lottoNumber.isWin);
    expect(isWins).toStrictEqual([true, true, true, true, true, true]);
  });

  it('로또 번호 중 5개의 번호가 당첨 번호와 일치하고 보너스 번호와 같은 번호가 존재한다.', () => {
    const myLottoNumbers: LottoNumber[] = [LottoNumber.of(1), LottoNumber.of(2), LottoNumber.of(3), LottoNumber.of(4), LottoNumber.of(5), LottoNumber.of(11)];
    const lotto: Lotto = new Lotto(myLottoNumbers);
    const winningLotto: WinningLotto = new WinningLotto(new Lotto(winningLottoNumbers), bonusNumber);

    winningLotto.matchForWinningLottoNumber(lotto);
    const matchedBonus: boolean = winningLotto.isMatchedBonus(lotto)

    expect(matchedBonus).toEqual(true);
  });
});