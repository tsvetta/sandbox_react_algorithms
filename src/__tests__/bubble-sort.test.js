import { bubbleSort } from "../algorithms/bubble-sort";

describe('Bubble Sort', () => {
  test('Sort empty array:', () => {
    const unsortedArr = [];
    const sortedArr = [];

    expect(bubbleSort(unsortedArr)).toEqual(sortedArr);
  });


  test('Sort sorted array:', () => {
    const unsortedArr = [1,2,3,4,5,6,7,8,9,10];
    const sortedArr = [1,2,3,4,5,6,7,8,9,10];

    expect(bubbleSort(unsortedArr)).toEqual(sortedArr);
  });

  test('Sort reversed array:', () => {
    const unsortedArr = [10,9,8,7,6,5,4,3,2,1];
    const sortedArr = [1,2,3,4,5,6,7,8,9,10];

    expect(bubbleSort(unsortedArr)).toEqual(sortedArr);
  });

  test('Sort random array:', () => {
    const unsortedArr = [4,2,7,1,10,9,5,3,6,8];
    const sortedArr = [1,2,3,4,5,6,7,8,9,10];

    expect(bubbleSort(unsortedArr)).toEqual(sortedArr);
  });
});
