import { useState } from "react";

function Hello(props) {
  const [mainigais, setMainigais] = useState("default");

  function handleMainigais(kakens) {
    setMainigais(kakens.target.value);
  }
  return (
    <>
      <input type="text" value={mainigais} onChange={handleMainigais}></input>
      <p>Hello, {mainigais}!</p>
    </>
  );
}

export default Hello;
