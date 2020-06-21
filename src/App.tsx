import * as React from 'preact';
import { useState } from 'preact/hooks';

const App = () => {

  const TOTAL_LOTTO_NUMBER = 6;

  const [lottoAmount, setlottoAmount] = useState(0);
  const [doneSettingLottoAmount, setDoneSettingLottoAmount] = useState(false);
  const [manualLottoAmount, setManualLottoAmount] = useState(0);
  const [doneSettingManualLottoAmount, setDoneSettingManualLottoAmount] = useState(false);
  const [manualLottoNumbersList, setManualLottoNumbersList] = useState(new Array<Array<Number>>(0));
  const [doneManualLottoNumbersList, setDoneManualLottoNumbersList] = useState(false);

  const handleChangeLottoAmount = (e: any): void => setlottoAmount(e.target.value);
  const handleChangeManualLottoAmount = (e: any): void => setManualLottoAmount(e.target.value);

  const handleClickLottoAmountBtn = (e: any): void => {
    e.preventDefault();
    setDoneSettingLottoAmount(true)
  }

  const handleClickManualLottoAmountBtn = (e: any): void => {
    e.preventDefault();
    setDoneSettingManualLottoAmount(true)
  }

  const handleClickManualLottoInputsBtn = (e: any): void => {
    e.preventDefault();
    setManualLottoNumbersList(getLottoNumbersFromInputs());
    setDoneManualLottoNumbersList(true);
  }

  const getLottoNumbersFromInputs = (): any[][] => {
    return [...Array(Number(manualLottoAmount))].map((n, index) => {
      const lottoNumberElements = document.querySelectorAll(`input[name=lottoNumber${index}]`);
      // TODO: 수동 로또 번호 칸이 비었을 경우 에러 처리
      return [].map.call(lottoNumberElements, (element: HTMLInputElement) => Number(element.value));
    })
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
      { doneSettingManualLottoAmount && (
      <div>
        {[...new Array(Number(manualLottoAmount))].map((n, index) =>
          <div>
            {[...new Array(TOTAL_LOTTO_NUMBER)].map(() => 
              <input type="text" name={`lottoNumber${index}`} style={{ width: '30px', 'margin-right': '10px' }}/>
            )}
          </div>
        )}
        <button type="submit" onClick={ handleClickManualLottoInputsBtn }>확인</button>
      </div>
      )}
    </div>
  );
}

export default App;