import * as React from 'preact';
import { useState } from 'preact/hooks';
import LottoStore from './components/LottoStore';
import Lotto from './domain/Lotto';
import LottoPaper from './components/LottoPaper';
import LottoCompany from './components/LottoCompany';

const App = () => {
  const [lottos, setLottos]: [Lotto[], any] = useState([]);
  const [winningLotto, setWinningLotto]: [any, Function] = useState(null);

  return (
    <div>
      {lottos.length === 0 && (
        <LottoStore lottos={ lottos } setLottos={ setLottos }/>
      )}
      {lottos.length > 0 && (
        <LottoPaper lottos={ lottos } winningLotto={ winningLotto }/>
      )}
      {lottos.length > 0 && (
        <LottoCompany winningLotto={ winningLotto } setWinningLotto={ setWinningLotto } />
      )}
    </div>
  );
}

export default App;