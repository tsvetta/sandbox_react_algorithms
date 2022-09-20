import { useState, useCallback, useMemo, Fragment } from "react";

import "../App.css";

const formatArr = (arr) => (
  arr.map((n, i) => {
    return (<Fragment key={i}>{n}<br /></Fragment>)
  })
);

const createUnsortedArr = (length) => () => new Array(length).fill(null).map(() => Math.random() * 10);

const SortingAlgorithm = ({ name, fn, length }) => {
  const [unsortedArr, setUnsortedArr] = useState(createUnsortedArr(length));
  const [sortedArr, setSortedArr] = useState(unsortedArr);
  const [duration, setDuration] = useState('0 ms');
  const [isSorted, setIsSorted] = useState(false);

  const onSortClick = useCallback(() => {
    console.time(name);
    const start = window.performance.now();
    const sortedArr = fn(unsortedArr);
    const end = window.performance.now();
    console.timeEnd(name);

    setSortedArr(sortedArr);
    setIsSorted(true);
    setDuration((end - start).toFixed(1) + ' ms');
  }, [unsortedArr, isSorted]);

  const onRefreshClick = useCallback(() => {
    setUnsortedArr(createUnsortedArr(length));
    setSortedArr([]);
    setIsSorted(false);
  });

  return (
    <>
      <h2>{name}</h2>
      <button type='button' disabled={isSorted} onClick={onSortClick}>
        {isSorted ? <span className="success">Array is sorted!</span> : 'Sort'}
      </button>
      <button type='button' onClick={onRefreshClick}>
        Generate new array
      </button>
      <p>Duration: {duration}</p>

      <div className="collaplable">
        <table className="table">
          <thead>
            <tr className="table-head-row">
              <th>Unsorted Array ({length})</th>
              <th>Sorted Array</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {formatArr(unsortedArr)}
              </td>
              <td>
                {isSorted && formatArr(sortedArr)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}


export default SortingAlgorithm;
