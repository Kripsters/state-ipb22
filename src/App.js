import { useState } from "react";

function App() {
  const [mainigais, setMainigais] = useState(0);
  const [opps, setOpps] = useState(0);
  const [x, setX] = useState(0);

  function addRatio() {
    setMainigais(mainigais+1);
  }

  function subtractRatio() {
    setOpps(opps-1);
  }

  function addCustomX(props) {
    if (PLACEHOLDER) {
    setX(x+props);
    } else {
      setX("set custom!");
    }
  }
  return (
    <div>
        <button onClick={addRatio}>GANG +1 ratio</button>
        <h1>{mainigais}</h1>
        <button onClick={subtractRatio}>How many opps left?</button>
        <h1>{opps}</h1>
        <button onClick={addCustomX}>Test</button>
  <h1>{x}</h1>
    </div>
  );
}

export default App;
