const getScore = require('./bowling');

describe('Testing with different input combinations', () => {
  const testcase1 = [7, 1, 5, 3, 1, 4, 3, 5, 1, 8, 7, 2, 1, 6, 1, 1, 5, 1, 3, 1];
  test('Input array has no strikes or spares', () => {
    expect(getScore(testcase1)).toBe(66);
  });

  const testcase2 = [10, 7, 2, 7, 2, 1, 1, 0, 0, 5, 4, 10, 1, 8, 5, 4, 2, 1];
  test('Input array has strikes but no spares', () => {
    expect(getScore(testcase2)).toBe(88);
  });

  const testcase3 = [10, 7, 2, 7, 3, 1, 1, 0, 0, 5, 4, 10, 1, 8, 5, 5, 2, 1];
  test('Input array has both strikes and spares', () => {
    expect(getScore(testcase3)).toBe(93);
  });

  const testcase4 = [5, 3, 0, 10, 1, 9, 5, 4, 1, 7, 5, 5, 1, 3, 0, 0, 1, 9, 5, 1];
  test('Input array with frame having 0 in first turn and 10 in the second turn', () => {
    expect(getScore(testcase4)).toBe(87);
  });

  const testcase5 = [5, 3, 0, 10, 1, 9, 5, 4, 1, 7, 5, 5, 1, 3, 0, 0, 1, 9, 10, 5, 1];
  test('Input array has strike at the end', () => {
    expect(getScore(testcase5)).toBe(102);
  });

  const testcase6 = [5, 3, 0, 10, 1, 9, 5, 4, 1, 7, 5, 5, 1, 3, 0, 0, 1, 9, 4, 6, 1];
  test('Input array has spare in last frame', () => {
    expect(getScore(testcase6)).toBe(91);
  });
});


describe('Output validation', () => {
  const testcase = [10, 7, 2, 7, 3, 1, 1, 0, 0, 5, 4, 10, 1, 8, 5, 5, 2, 1];

  test('Returns a number', () => {
    expect(typeof getScore(testcase)).toBe('number');
  });

  test('Returns a non-negative number', () => {
    expect(getScore(testcase)).toBeGreaterThanOrEqual(0);
  });
});

