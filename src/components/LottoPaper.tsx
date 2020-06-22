import * as React from 'preact';
import Lotto from '../domain/Lotto';

const LottoPaper = (props: { lottos: Lotto[], winningLotto: Lotto }) => {

  const handleCheckWinningLottoBtn = () => {
    console.log(props.winningLotto);
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