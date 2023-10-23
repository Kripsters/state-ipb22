import { useState } from "react";

function Check(props) {
  return (
    <>
      <input type="checkbox" checked={props.boole}></input>
    </>
  );
}

export default Check;
