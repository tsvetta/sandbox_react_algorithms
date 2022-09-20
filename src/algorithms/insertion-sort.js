// [{9},2,3,6,7,8,5]
// [2,{9},3,6,7,8,5]
// [2,3,{9},6,7,8,5]
// [2,3,6,{9},7,8,5]
// [2,3,6,7,{9},8,5]
// [2,3,6,7,8,{9},5]
// [2,3,6,7,8,9,{5}]
// [2,3,6,7,8,{5},9]
// [2,3,6,7,{5},8,9]
// [2,3,6,{5},7,8,9]
// [2,3,{5},6,7,8,9]

export const insertionSort = arr => {
  let sortedArr = [...arr];
  let keyEl;

  for (let i = 0; i < arr.length - 1; i++) {
    keyEl = sortedArr[i + 1];

    if (sortedArr[i] < keyEl) {
      continue;
    }

    sortedArr[i + 1] = sortedArr[i];
    sortedArr[i] = keyEl;

    // sort first part of array in reverse order
    for (let y = i - 1; y >= 0; y--) {
      keyEl = sortedArr[y + 1];

      if (sortedArr[y] < keyEl) {
        continue;
      }

      sortedArr[y + 1] = sortedArr[y];
      sortedArr[y] = keyEl;
    }
  }

  return sortedArr;
}
