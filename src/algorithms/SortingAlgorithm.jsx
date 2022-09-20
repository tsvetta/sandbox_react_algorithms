import { useState, useCallback, useMemo, Fragment } from "react";

import "../App.css";

const formatArr = (arr) => (
  arr.map((n, i) => {
    return (<Fragment key={i}>{n}<br /></Fragment>)
  })
);

const createEmptyArr = (length) => new Array(length).fill(null);
const createUnsortedArr = (length) => () => createEmptyArr(length).map(() => Math.random() * 10);
const createSortedArr = (length) => () => createEmptyArr(length).map((_, i) => i);
const createReversedSortedArr = (length) => () => createEmptyArr(length).map((_, i) => length - i);

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
  }, [name, fn, unsortedArr]);

  const onRefreshClick = useCallback(() => {
    setUnsortedArr(createUnsortedArr(length));
    setSortedArr([]);
    setIsSorted(false);
  }, [length]);

  const onMinTimeSortClick = useCallback(() => {
    setUnsortedArr(createSortedArr(length));
    setSortedArr([]);
    setIsSorted(false);
  }, [length]);

  const onMaxTimeSortClick = useCallback(() => {
    setUnsortedArr(createReversedSortedArr(length));
    setSortedArr([]);
    setIsSorted(false);
  }, [length]);

  return (
    <section className="algorithm-section">
      <h2>{name}</h2>
      <button type='button' disabled={isSorted} onClick={onSortClick}>
        {isSorted ? <span className="success">Array is sorted!</span> : 'Sort'}
      </button>
      <button type='button' onClick={onRefreshClick}>
        Generate new array
      </button>
      <br />
      <button type='button' onClick={onMinTimeSortClick}>
        Create boundary case: MIN time
      </button>
      <button type='button' onClick={onMaxTimeSortClick}>
        Create boundary case: MAX time
      </button>
      <p>Duration: {duration}</p>

      <div className="collapsable">
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
    </section>
  )
}


export default SortingAlgorithm;
