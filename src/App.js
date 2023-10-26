import Counter from "./Counter.js";
import Hello from "./Hello.js";
import Check from "./Check.js";
import LabeledCheck from "./LabeledCheck.js";
import { useState } from "react";

//const allNames = ["Jēkebabs", "Makuss", "Kucis"];

function App() {
  const [allNames, setAllNames] = useState(["Jēkebabs", "Makuss", "Kucis"]);

  const [allRatio, setAllRatio] = useState([7, 43, 101]);

  const [allCheck, setAllCheck] = useState([true, true, false]);

  const [allLabeledCheck, setAllLabeledCheck] = useState([{label: 'Agree to the Policy', check: true}, {label: 'Receive Offers', check: false}]);

  const helloJSX = allNames.map((name, index) => {
    return <Hello key={index} name={name} />;
  });

  const countingJSX = allRatio.map((number, index) => {
    return <Counter key={index} number={number} />;
  });

  const checkJSX = allCheck.map((boole, index) => {
    return <Check key={index} boole={boole} />;
  });

  const labeledCheckJSX = allLabeledCheck.map((individs, index) => {
    return <LabeledCheck key={index} boole={individs.check} label={individs.label} />;
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
      <br />
      <br />
      <br />
      {labeledCheckJSX}
    </>
  );
}

export default App;
