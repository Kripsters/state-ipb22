import Counter from "./Counter.js";
import Hello from "./Hello.js";
import Check from "./Check.js";
import { useState } from "react";

//const allNames = ["Jēkebabs", "Makuss", "Kucis"];

function App() {
  const [allNames, setAllNames] = useState(["Jēkebabs", "Makuss", "Kucis"]);

  const [allRatio, setAllRatio] = useState([7, 43, 101]);

  const [allCheck, setAllCheck] = useState([true, true, false]);

  const helloJSX = allNames.map((name, index) => {
    return <Hello key={index} name={name} />;
  });

  const countingJSX = allRatio.map((number, index) => {
    return <Counter key={index} number={number} />;
  });

  const checkJSX = allCheck.map((boole, index) => {
    return <Check key={index} boole={boole} />;
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
      <br />
      {checkJSX}
    </>
  );
}

export default App;
