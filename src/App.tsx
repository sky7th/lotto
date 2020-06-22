import * as React from 'preact';
import { useState, useEffect } from 'preact/hooks';
import LottoStore from './components/LottoStore';
import Lotto from './domain/Lotto';
import LottoPaper from './components/LottoPaper';

const App = () => {
  const [lottos, setLottos]: [Lotto[], any] = useState([]);

  return (
    <div>
      {lottos.length === 0 && (
        <LottoStore lottos={ lottos } setLottos={ setLottos }/>
      )}
      {lottos.length > 0 && (
        <LottoPaper lottos={ lottos }/>
      )}
    </div>
  );
}

export default App;