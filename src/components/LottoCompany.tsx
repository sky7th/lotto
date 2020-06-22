import * as React from 'preact';
import { useState } from 'preact/hooks';
import LottoNumbersInput from './LottoNumbersInput';
import LottoNumberUtils from '../utils/LottoNumberUtils';
import ManualLottoTicket from '../domain/ManualLottoTicket';
import WinningLottoGenerator from '../domain/WinningLottoGenerator';
import WinningLotto from '../domain/WinningLotto';
import LottoNumber from '../domain/LottoNumber';
import EmptyBonusLottoNumberError from '../error/EmptyBonusLottoNumberError';

const LottoCompany = (props: { winningLotto: WinningLotto, setWinningLotto: Function }) => {

  const [bonusLottoNumber, setBonusLottoNumber] = useState('');

  const handleChangeBonusLottoNumber = (e: any) => setBonusLottoNumber(e.target.value);

  const handleClickWinningLottoBtn = (e: any) => {
    e.preventDefault();
    const winningLottoNumbersFromInputs = LottoNumberUtils.getLottoNumbersFromInputs('winningLotto');
    ManualLottoTicket.of([winningLottoNumbersFromInputs]);
    const winningLotto = WinningLottoGenerator.generate(winningLottoNumbersFromInputs);
    const bonusLottoNumberFromInput = LottoNumberUtils.getLottoNumberFromInput('bonusLottoNumber');
    const bonusLottoNumber = LottoNumber.of(bonusLottoNumberFromInput);

    if (!bonusLottoNumber.number) {
      throw new EmptyBonusLottoNumberError();
    }
    props.setWinningLotto(new WinningLotto(winningLotto, bonusLottoNumber));
  }

  return (
    <div>
      <div>-----로또 당첨 번호-----</div>
      {props.winningLotto === null && (
        <div>
          <LottoNumbersInput name={'winningLotto'} description='로또 당첨 번호를 입력해주세요: ' />
          <label htmlFor="bonusLottoNumber">보너스 숫자를 입력해주세요: </label>
          <input type="text" name="bonusLottoNumber" style={{ width: '30px', 'margin-right': '10px' }}
            value={ bonusLottoNumber } onChange={ handleChangeBonusLottoNumber }></input>
          <button type="submit" onClick={handleClickWinningLottoBtn}>확인</button>
        </div>
      )}
      {props.winningLotto !== null && (
        <div>
          {props.winningLotto.winningLotto.map(lottoNumber => (
            <span style={{'margin-right': '10px'}}>{lottoNumber.number}</span>
          ))}
          <span>보너스: </span>
          <span>{props.winningLotto.bonusNumber}</span>
        </div>
      )}
    </div>

  )
}

export default LottoCompany;