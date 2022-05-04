import calculator from '../src/calculator';
describe('Calculator 100% coverage', () => {
  test('it loads without error', () => {
    expect(calculator).toBeDefined();
    expect(typeof calculator).toBe('function');
  });
  test.each`
    a      | op     | b      | expected
    ${2}   | ${'*'} | ${2}   | ${4}
    ${2}   | ${'&'} | ${2}   | ${'error'}
    ${'A'} | ${'&'} | ${2}   | ${'error'}
    ${2} | ${'&'} | ${'#'} | ${'error'}
    ${10}  | ${'+'} | ${2}   | ${12}
    ${10}  | ${'-'} | ${2}   | ${8}
    ${10}  | ${'/'} | ${2}   | ${5}
  `('$a $op $b = $expected', ({ a, op, b, expected }) => {
    if (expected === 'error') {
      expect(() => calculator(a, op, b)).toThrow();
    } else {
      expect(calculator(a, op, b)).toBe(expected);
    }
  });
});
