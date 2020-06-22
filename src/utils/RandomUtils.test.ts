import RandomUtils from "./RandomUtils";

describe('RandomUtils 클래스', () => {
  it('1부터 45까지의 랜덤한 숫자를 얻는다.', () => {
    const randomLottoNumber = RandomUtils.getRandomLottoNumber();
    expect(randomLottoNumber).toBeGreaterThanOrEqual(1);
    expect(randomLottoNumber).toBeLessThanOrEqual(45);
  })
})
