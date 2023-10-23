import Counter from "./Counter.js";
import Hello from "./Hello.js";
import { useState } from "react";

//const allNames = ["Jēkebabs", "Makuss", "Kucis"];

function App() {

  const [allNames, setAllNames] = useState(["Jēkebabs", "Makuss", "Kucis"]);

  const [allRatio, setAllRatio] = useState([7,43,101]);

  const helloJSX = allNames.map((name, index) => {
    return <Hello key={index} name={name}/>
  });

  const countingJSX = allRatio.map((number, index) => {
    return <Counter key={index} number={number}/>
  });
  return (
    <>
      {countingJSX}
      <br />
      <br />
      <br />
      {helloJSX}
      <br />
      <br />
    </>
  );
}

export default App;
