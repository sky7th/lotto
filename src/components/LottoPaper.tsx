import * as React from 'preact';
import Lotto from '../domain/Lotto';

const LottoPaper = (props: { lottos: Lotto[], winningLotto: Lotto, setError: Function }) => {

  const handleCheckWinningLottoBtn = (e: Event) => {
    e.preventDefault();
    try {
      // TODO: 당첨 번호와 내 번호 비교하고 당첨 여부 확인하는 과정
    } catch(err) {
      props.setError(err.message);
    }
  }

  return (
    <div>
      <div>-----내 로또 용지-----</div>
      {props.lottos.map((lotto: Lotto) => (
        <div>
          <span>{lotto.lottoType}: </span>
          {lotto.lottoNumbers.map(lottoNumber => (
            <span style={{'margin-right': '10px'}}>{lottoNumber.number}</span>
          ))}
        </div>
      ))}
      {props.winningLotto === null && (
        <div>아직 당첨 번호 발표 전 입니다 !</div>
      )}
      {props.winningLotto !== null && (
        <button type="submit" onClick={handleCheckWinningLottoBtn}>당첨 확인</button>
      )}
      
    </div>
  )
}

export default LottoPaper;