import SortingAlgorithm from "./algorithms/SortingAlgorithm";

import { insertionSort } from "./algorithms/insertion-sort";

import "./App.css";

function App() {
  return (
    <div className="App">
      <SortingAlgorithm name="Insertion Sort" fn={insertionSort} length={10} />
    </div>
  );
}

export default App;
