import * as React from 'preact';
import { useState, useEffect } from 'preact/hooks';
import LottoStore from './components/LottoStore';
import Lotto from './domain/Lotto';

const App = () => {
  const [lottos, setLottos]: [Lotto[], any] = useState([]);

  return (
    <div>
      <LottoStore lottos={ lottos } setLottos={ setLottos }/>
      {lottos.length > 0 && (
        <div>
          <div>로또 구매 완료 !</div>
        </div>
      )}
    </div>
  );
}

export default App;