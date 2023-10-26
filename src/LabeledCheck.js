import { useState } from "react";

function LabeledCheck(props) {
    const [mainigais, setMainigais] = useState(props.boole);

    function handleMainigais(kakens) {
      setMainigais(kakens.target.boole);
    }

    const [mainigais2, setMainigais2] = useState(props.label);

    function handleMainigais2(kakens) {
      setMainigais2(kakens.target.label);
    }
    return (
        <>
        <label for="AAA">{mainigais2}</label>
        <input id="AAA" type="checkbox" checked={mainigais} onChange={handleMainigais}></input>
        <br></br>
        </>
    );
}


export default LabeledCheck;