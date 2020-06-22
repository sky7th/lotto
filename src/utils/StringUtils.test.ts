import { StringUtils } from "./StringUtils";

describe('StringUtils 클래스', () => {
  it('형식 지정 문자열을 만든다.', () => {
    const str = StringUtils.format('1: {0}, 2: {1}', 'first', 'second');
    expect(str).toEqual('1: first, 2: second');
  });
});