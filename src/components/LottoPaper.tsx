import * as React from 'preact';
import Lotto from '../domain/Lotto';

const LottoPaper = (props: { lottos: Lotto[] }) => {
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
    </div>
  )
}

export default LottoPaper;