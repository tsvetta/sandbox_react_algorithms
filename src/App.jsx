import SortingAlgorithm from "./algorithms/SortingAlgorithm";

import { quickSort } from "./algorithms/quick-sort";

import "./App.css";

function App() {
  return (
    <div className="App">
      <SortingAlgorithm name="Quick Sort" fn={quickSort} />
    </div>
  );
}

export default App;
