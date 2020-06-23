export class LottoPrize {
  
  static readonly READY = new LottoPrize('결과 발표 전', 0, 0);
  static readonly LOSE = new LottoPrize('꽝', 0, 0);
  static readonly FIFTH = new LottoPrize('5등', 3, 5000);
  static readonly FOURTH = new LottoPrize('4등', 4, 50000);
  static readonly THIRD = new LottoPrize('3등', 5, 2000000);
  static readonly SECOND = new LottoPrize('2등', 6, 50000000, true);
  static readonly FIRST = new LottoPrize('1등', 6, 2000000000);

  private constructor(
    public readonly rank: string, 
    public readonly winNumberCount: number, 
    public readonly reward: number,
    public readonly matchedBonus: boolean = false
  ) {}

  static valueOf(winNumberCount: number, matchedBonus: boolean) {
    if (winNumberCount < LottoPrize.FIFTH.winNumberCount) {
      return LottoPrize.LOSE;
    }
    return this.values().filter(value => value.winNumberCount === winNumberCount)
      .filter(value => value.matchedBonus === matchedBonus)[0];
  }

  static values() {
    return [LottoPrize.LOSE, LottoPrize.FIFTH, LottoPrize.FOURTH, LottoPrize.THIRD, LottoPrize.SECOND, LottoPrize.FIRST]
  }
}