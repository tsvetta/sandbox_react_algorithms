// [{9},2,3,6,7,8,5]
// [2,9,3,6,7,8,5]
// [2,{9},3,6,7,8,5]
// [2,3,9,6,7,8,5]
// [2,3,{9},6,7,8,5]
// [2,3,5,6,7,8,9]
// [2,3,5,{6},7,8,9]
// [2,3,5,6,7,8,9]
// [2,3,5,6,{7},8,9]
// [2,3,5,6,7,8,9]
// [2,3,5,6,7,{8},9]
// [2,3,5,6,7,8,{9}]

export const selectionSort = arr => {
  let sortedArr = [...arr];
  let minElIdx;
  let minEl;

  for (let i = 0; i < sortedArr.length - 1; i++) {
    minElIdx = i;

    for (let y = i + 1; y < sortedArr.length; y++) {
      if (sortedArr[minElIdx] < sortedArr[y]) {
        continue;
      }

      minElIdx = y;
    }

    minEl = sortedArr[minElIdx];
    sortedArr[minElIdx] = sortedArr[i];
    sortedArr[i] = minEl;
  }

  return sortedArr;
}
