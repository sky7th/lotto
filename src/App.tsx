import * as React from 'preact';
import { useState } from 'preact/hooks';
import LottoStore from './components/LottoStore';
import Lotto from './domain/Lotto';
import LottoPaper from './components/LottoPaper';
import LottoCompany from './components/LottoCompany';
import ErrorMessage from './components/ErrorMessage';

const App = () => {
  const [lottos, setLottos]: [Lotto[], any] = useState([]);
  const [winningLotto, setWinningLotto]: [any, Function] = useState(null);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const setError = (state: boolean, errorMessage: string = ''): void => {
    setIsError(state);
    setErrorMessage(errorMessage);
  }

  return (
    <div>
      {lottos.length === 0 && (
        <LottoStore lottos={ lottos } setLottos={ setLottos } setError={ setError } />
      )}
      {lottos.length > 0 && (
        <LottoPaper lottos={ lottos } winningLotto={ winningLotto } setError={ setError } />
      )}
      <br/>
      {lottos.length > 0 && (
        <LottoCompany winningLotto={ winningLotto } setWinningLotto={ setWinningLotto } setError={ setError } />
      )}
      { isError && (
        <ErrorMessage message={errorMessage} />
      )}
    </div>
  );
}

export default App;