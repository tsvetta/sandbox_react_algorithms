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

export const quickSort = arr => {
  let sortedArr = [...arr];
  let firstInPair;
  let secondInPair;

  for (let i = 0; i < arr.length - 1; i++) {
    firstInPair = sortedArr[i];
    secondInPair = sortedArr[i + 1];

    if (firstInPair < secondInPair) {
      continue;
    }

    // change places
    sortedArr[i] = secondInPair;
    sortedArr[i + 1] = firstInPair;
    console.count()

    // sort first part of array in reverse order
    let lastInPair;
    let prelastInPair;
    for (let y = i - 1; y >= 0; y--) {
      lastInPair = sortedArr[y + 1];
      prelastInPair = sortedArr[y];

      if (prelastInPair < lastInPair) {
        continue;
      }

      // change places
      sortedArr[y] = lastInPair;
      sortedArr[y + 1] = prelastInPair;
      console.count()
    }
  }

  return sortedArr;
}
