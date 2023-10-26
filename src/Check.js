import { useState } from "react";

function Check(props) {
  const [mainigais, setMainigais] = useState(props.boole);

  function handleMainigais(kakens) {
    setMainigais(kakens.target.boole);
  }
  return (
    <>
      <input type="checkbox" checked={mainigais} onChange={handleMainigais}></input>
    </>
  );
}

export default Check;
