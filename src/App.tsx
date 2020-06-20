import * as React from 'preact';
import { useState } from 'preact/hooks';

const App = () => {
  const [lottoAmount, setlottoAmount] = useState(0);
  const [doneSettingLottoAmount, setDoneSettingLottoAmount] = useState(false);
  const [manualLottoAmount, setManualLottoAmount] = useState(0);
  const [doneSettingManualLottoAmount, setDoneSettingManualLottoAmount] = useState(false);

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
    </div>
  );
}

export default App;