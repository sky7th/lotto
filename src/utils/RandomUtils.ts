export default class RandomUtils {
  static getRandomLottoNumber() {
    return Math.floor( Math.random() * 45 + 1);
  }
}