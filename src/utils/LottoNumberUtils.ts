export default class LottoNumberUtils {
  static getLottoNumbersFromInputs(inputName: string): number[] {
    const lottoNumberElements = document.querySelectorAll(`input[name=${inputName}]`);
      
    return [].filter.call(lottoNumberElements, ((element: HTMLInputElement) => element.value !== ''))
      .map((element: HTMLInputElement) => Number(element.value));
  }

  static getLottoNumberFromInput(inputName: string): any {
    return LottoNumberUtils.getLottoNumbersFromInputs(inputName)[0];
  }
}