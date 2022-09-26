import SortingAlgorithm from "./algorithms/SortingAlgorithm";

import { insertionSort } from "./algorithms/insertion-sort";
import { mergeSort } from "./algorithms/merge-sort";

import "./App.css";

function App() {
  return (
    <div className="App">
      <SortingAlgorithm name="Insertion Sort" fn={insertionSort} length={10000} />
      <SortingAlgorithm name="Merge Sort" fn={mergeSort} length={10000} />
    </div>
  );
}

export default App;
