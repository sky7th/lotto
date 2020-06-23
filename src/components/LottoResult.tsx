import * as React from 'preact'
import Lotto from '../domain/Lotto';

const LottoResult = ({ lotto }: { lotto: Lotto}) => {
  return (
    <span>
      <span>| {lotto.winLottoNumbers.length}개 맞음 </span>
      {lotto.lottoPrize.matchedBonus && (
        <span>(보너스 포함) </span>
      )}
      <span>/ {lotto.lottoPrize.rank} / </span>
      <span>상금: {lotto.lottoPrize.reward}원</span>
    </span>
  )
}

export default LottoResult;