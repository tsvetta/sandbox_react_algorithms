import { useState, useCallback, useMemo, Fragment } from "react";

import "../App.css";

const formatArr = (arr) => (
  arr.map((n, i) => {
    return (<Fragment key={i}><br />{n}</Fragment>)
  })
);

const createUnsortedArray = () => new Array(100).fill(null).map(() => Math.random() * 10);

const SortingAlgorithm = ({ name, fn }) => {
  const unsortedArray = useMemo(createUnsortedArray, []);

  const [sortedArr, setSortedArr] = useState(unsortedArray);
  const [duration, setDuration] = useState('0 ms');
  const [isSorted, setIsSorted] = useState(false);

  const onSortClick = useCallback(() => {
    if (isSorted) return;

    console.time(name);
    const start = Date.now(); // window.performance.now() ?

    setSortedArr(fn(unsortedArray));
    setIsSorted(true);

    const end = Date.now();
    console.timeEnd(name);

    setDuration((end - start) + ' ms');
  }, [unsortedArray, isSorted]);

  return (
    <>
      <h2>{name}</h2>
      <button type='button' disabled={isSorted} onClick={onSortClick}>Sort Array</button>
      <p>Duration: {duration}</p>
      {isSorted && <p className="success">Array is sorted!</p>}
      <div className="collaplable">
        <table className="table">
          <thead>
            <tr className="table-head-row">
              <th>Unsorted Array</th>
              <th>Sorted Array</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {formatArr(unsortedArray)}
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
