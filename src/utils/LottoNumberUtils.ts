export default class LottoNumberUtils {
  static getLottoNumbersFromInputs(inputName: string): any[] {
    const lottoNumberElements = document.querySelectorAll(`input[name=${inputName}]`);
      
    return [].filter.call(lottoNumberElements, ((element: HTMLInputElement) => element.value !== ''))
      .map((element: HTMLInputElement) => element.value);
  }

  static getLottoNumberFromInput(inputName: string): any {
    const lottoNumberElements = document.querySelectorAll(`input[name=${inputName}]`);
      
    return [].filter.call(lottoNumberElements, ((element: HTMLInputElement) => element.value !== ''))
      .map((element: HTMLInputElement) => element.value)[0];
  }
}