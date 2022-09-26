// (1)
// [9] [{2}]
// [2,9]

// (2)
// [{3}] [4]
// [3,4]

// (3)
// [{6}] [7]
// [6,7]

// (4)
// [{2},{{{{9}}}}] [{{3}},{{{4}}}]
// [2,3,4,9]
const merge = (left, right) => {
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  const mergedArr = [...sortedArr, ...left, ...right];
  return mergedArr;
}

// [9,2,3,4]
// [9,2] [3,4]
// [9] [2] [3,4]
// [2,9] [3] [4]
// [2,9] [3,4]
// [2,3,4,9]
export const mergeSort = arr => {
  if (arr.length <= 1) {
    return arr;
  }

  const middleIdx = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middleIdx));
  const right = mergeSort(arr.slice(middleIdx));

  return merge(left, right);
}
