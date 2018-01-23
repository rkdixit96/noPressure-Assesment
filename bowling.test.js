const getScore = require('./bowling');


describe('Output validation', () => {
  const testcase = [10, 7, 2, 7, 3, 1, 1, 0, 0, 5, 4, 10, 1, 8, 5, 5, 2, 1];

  test('Returns a number', () => {
    expect(typeof getScore(testcase)).toBe('number');
  });

  test('Returns a non-negative number', () => {
    expect(getScore(testcase)).toBeGreaterThanOrEqual(0);
  });
});

