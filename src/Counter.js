import { useState } from "react";

function Counter(props) {
const [mainigais, setMainigais] = useState(props.number);
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
        <button onClick={subtractRatio}>GANG -1 ratio</button>
        <br/>
        <input type="number" value={ratioChange} onChange={handleRatioChange}/>
    </div>
  );
}

export default Counter;