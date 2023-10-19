import { useState } from "react";

function App() {
  const [mainigais, setMainigais] = useState(0);
  const [ratioChange, setRatioChange] = useState(0);

  function addRatio() {
    setMainigais(mainigais+parseInt(ratioChange));
  }

  function subtractRatio() {
    setMainigais(mainigais-parseInt(ratioChange));
  }

  function handleRatioChange(kakens) {
    setRatioChange(kakens.target.value);
  }

  return (
    <div>
        <h1>{mainigais}</h1>
        <button onClick={addRatio}>GANG +1 ratio</button>
        <br/>
        <button onClick={subtractRatio}>How many opps left?</button>
        <br/>
        <input type="number" value={ratioChange} onChange={handleRatioChange}/>
    </div>
  );
}

export default App;
