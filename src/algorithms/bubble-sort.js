// 1
// [{1},{9},2,3,6,7,8,5]
// [1,{9},{2},3,6,7,8,5]
// [1,2,{9},{3},6,7,8,5]
// [1,2,3,{9},{6},7,8,5]
// [1,2,3,6,{9},{7},8,5]
// [1,2,3,6,7,{9},{8},5]
// [1,2,3,6,7,8,{9},{5}]
// [1,2,3,6,7,8,5,9]

export const bubbleSort = arr => {
  let sortedArr = [...arr];
  let temp;

  for (let i = 0; i < arr.length; i++) {
    let maxIdx = arr.length - i - 1;

    for (let y = 0; y < maxIdx; y++) {
      if (sortedArr[y] < sortedArr[y + 1]) {
        continue;
      }

      // swap
      temp = sortedArr[y + 1];
      sortedArr[y + 1] = sortedArr[y];
      sortedArr[y] = temp;
    }
  }

  return sortedArr;
}
