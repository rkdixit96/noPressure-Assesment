const getScore = require('./bowling');

describe('Testing with different input combinations', () => {
  const testcase1 = [7, 1, 5, 3, 1, 4, 3, 5, 1, 8, 7, 2, 1, 6, 1, 1, 5, 1, 3, 1];

  test('Input array has no strikes or spares', () => {
    expect(getScore(testcase1)).toBe(66);
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

