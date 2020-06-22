import ManualLottoTicket from './ManualLottoTicket';
import ManualLottoGenerator from './ManualLottoGenerator';
import Lotto from './Lotto';
import AutoLottoGenerator from './AutoLottoGenerator';

export default class LottoGeneratingMachine {

  static generate(autoLottoAmount:number, manualLottoTicket: ManualLottoTicket) {
    const manualLottos: Lotto[] = manualLottoTicket.lottoNumbersList.map(lottoNumbers => 
      ManualLottoGenerator.generate(lottoNumbers));
    const autoLottos: Lotto[] = [...Array(autoLottoAmount)].map(() => AutoLottoGenerator.generate());
    
    return [...manualLottos, ...autoLottos];
  }
}