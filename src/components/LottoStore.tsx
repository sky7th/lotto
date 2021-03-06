import * as React from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Lotto from '../domain/Lotto';
import LottoGeneratingMachine from '../domain/LottoGeneratingMachine';
import ManualLottoTicket from '../domain/ManualLottoTicket';
import LottoNumbersInput from './LottoNumbersInput';
import { LottoType } from '../domain/LottoType';
import LottoNumberUtils from '../utils/LottoNumberUtils';
import LottoAmountGreaterThanMaxError from '../error/LottoAmountGreaterThanMaxError';
import LottoAmountLessThanMinError from '../error/LottoAmountLessThanMinError';
import ManualLottoAmountGreaterThanMaxError from '../error/ManualLottoAmountGreaterThanMaxError';
import ManualLottoAmountLessThanMinError from '../error/ManualLottoAmountLessThanMinError';

const LottoStore = (props: { lottos: Lotto[], setLottos: Function, setError: Function }) => {

  const [lottoAmount, setlottoAmount] = useState(0);
  const [doneSettingLottoAmount, setDoneSettingLottoAmount] = useState(false);
  const [manualLottoAmount, setManualLottoAmount] = useState(0);
  const [doneSettingManualLottoAmount, setDoneSettingManualLottoAmount] = useState(false);

  const handleChangeLottoAmount = (e: any): void => setlottoAmount(e.target.value);

  const handleChangeManualLottoAmount = (e: any): void => setManualLottoAmount(e.target.value);

  const handleClickLottoAmountBtn = (e: any): void => {
    e.preventDefault();
    props.setError(false);
    try {
      if (lottoAmount < Lotto.MIN_TO_PURCHASE) {
        throw new LottoAmountLessThanMinError(lottoAmount);
      }
      if (lottoAmount > Lotto.MAX_TO_PURCHASE) {
        throw new LottoAmountGreaterThanMaxError(lottoAmount);
      }
      setDoneSettingLottoAmount(true)
    } catch(err) {
      props.setError(true, err.message);
    }
  }

  const handleClickManualLottoAmountBtn = (e: any): void => {
    e.preventDefault();
    props.setError(false);
    try {
      if (manualLottoAmount < ManualLottoAmountLessThanMinError.NO_MANUAL_LOTTO) {
        throw new ManualLottoAmountLessThanMinError(manualLottoAmount);
      }
      if (manualLottoAmount > lottoAmount) {
        throw new ManualLottoAmountGreaterThanMaxError(lottoAmount, manualLottoAmount);
      }
      if (manualLottoAmount === 0) {
        props.setLottos(generateLottos([]));
        return;
      }
      setDoneSettingManualLottoAmount(true);

    } catch (err) {
      props.setError(true, err.message);
    }
  }

  const handleClickManualLottoInputsBtn = (e: any): void => {
    e.preventDefault();
    props.setError(false);
    try {
      const manualLottoNumbersListFromInputs = getManualLottoNumbersListFromInputs();
      props.setLottos(generateLottos(manualLottoNumbersListFromInputs));

    } catch (err) {
      props.setError(true, err.message);
    }
  }

  const getManualLottoNumbersListFromInputs = (): number[][] => {
    return [...Array(Number(manualLottoAmount))].map((n, index) =>
      LottoNumberUtils.getLottoNumbersFromInputs(`lottoNumber${index + 1}`))
  }

  const generateLottos = (manualLottoNumbersList: number[][]) => {
    const manualLottoTicket = ManualLottoTicket.of(manualLottoNumbersList);
    const autoLottoAmount = lottoAmount - manualLottoAmount;

    return LottoGeneratingMachine.generate(autoLottoAmount, manualLottoTicket);
  }

  return (
    <div>
      <div>
        <label for="lottoAmount">로또 몇 장을 구매하시겠어요?</label>
        <input id="lottoAmount" type="text" value={ lottoAmount } 
          onChange={ handleChangeLottoAmount }></input>
        <button type="submit" onClick={ handleClickLottoAmountBtn }>확인</button>
      </div>
      { doneSettingLottoAmount && (
      <div>
        <label for="manualLottoAmount">몇 장을 수동으로 할까요?</label>
        <input id="manualLottoAmount" type="text" value={ manualLottoAmount } 
          onChange={ handleChangeManualLottoAmount }></input>
        <button type="submit" onClick={ handleClickManualLottoAmountBtn }>확인</button>
      </div>
      )}
      { doneSettingManualLottoAmount && manualLottoAmount > 0 && (
      <div>
        <div>수동으로 구매할 번호를 입력해주세요.</div>
        {[...new Array(Number(manualLottoAmount))].map((n, index) =>
          <div>
            <LottoNumbersInput name={`lottoNumber${index + 1}`} description={`${LottoType.MANUAL} ${index + 1}`}/>
          </div>
        )}
        <button type="submit" onClick={ handleClickManualLottoInputsBtn }>확인</button>
      </div>
      )}
    </div>
  );
}

export default LottoStore;