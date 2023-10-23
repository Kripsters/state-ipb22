import { useState } from "react";

function Hello(props) {
  const [mainigais, setMainigais] = useState(props.name);

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
