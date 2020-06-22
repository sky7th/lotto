import * as React from 'preact';
import Lotto from '../domain/Lotto';

const LottoNumbersInput = (props: { name: string, description: string }) => {
  return (
    <div>
      <label for={props.name}>{props.description}:</label>
      {[...new Array(Lotto.TOTAL_LOTTO_NUMBER)].map(() => 
        <input type="text" name={props.name} style={{ width: '30px', 'margin-right': '10px' }}/>
      )}
    </div>
  )
}

export default LottoNumbersInput;