import * as React from 'preact';
import { useState } from 'preact/hooks';
import Lotto from '../domain/Lotto';
import LottoCheckingMachine from '../domain/LottoCheckingMachine';
import WinningLotto from '../domain/WinningLotto';
import LottoNumber from '../domain/LottoNumber';
import LottoResult from './LottoResult';

const LottoPaper = (props: { 
  lottos: Lotto[], 
  setLottos: Function,
  winningLotto: WinningLotto, 
  setError: Function 
}) => {

  const [doneCheckLottoResult, setDoneCheckLottoResult] = useState(false);

  const handleClickLottoResultBtn = (e: Event) => {
    e.preventDefault();
    try {
      const resultLottos = props.lottos.map(lotto => {
        LottoCheckingMachine.checkSameNumber(lotto, props.winningLotto);
        LottoCheckingMachine.setLottoPrize(lotto, props.winningLotto);
        return lotto;
      });
      props.setLottos(resultLottos);
      setDoneCheckLottoResult(true);
      
    } catch(err) {
      props.setError(true, err.message);
    }
  }

  const lottoNumberStyle = (lottoNumber: LottoNumber): any => {
    if (lottoNumber.isWin) {
      return {'margin-right': '10px', 'color': 'red', 'font-weight': 'bold'}
    }
    return {'margin-right': '10px'}
  }

  return (
    <div>
      <div>-----내 로또 용지-----</div>
      {props.lottos.map((lotto: Lotto) => (
        <div>
          <span>{lotto.lottoType}: </span>
          {lotto.lottoNumbers.map(lottoNumber => (
            <span style={lottoNumberStyle(lottoNumber)}>{lottoNumber.number}</span>
          ))}
          {doneCheckLottoResult && (
            <LottoResult lotto={lotto}/>
          )}
        </div>
      ))}
      {props.winningLotto === null && (
        <div>아직 당첨 번호 발표 전 입니다 !</div>
      )}
      {props.winningLotto !== null && (
        <>
        {!doneCheckLottoResult && (
          <button type="submit" onClick={handleClickLottoResultBtn}>당첨 확인해보기</button>
        )}
        </>
      )}
      {doneCheckLottoResult && (
        <div>총 당첨금: {LottoCheckingMachine.calculateTotalLottoPrize(props.lottos)}원</div>
      )}
    </div>
  )
}

export default LottoPaper;