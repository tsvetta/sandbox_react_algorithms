const { insertionSort } = require('../algorithms/insertion-sort')

test('adds 1 + 2 to equal 3', () => {
  expect(insertionSort([2,1])).toBe([1,2]);
});
