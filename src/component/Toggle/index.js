import React, { useState } from "react";

const Toggle = props => {
  const [toggle, toggleUpdate] = useState(false);

  return (
    <button onClick={() => toggleUpdate(!toggle)}>
      {toggle ? "On" : "Off"}
    </button>
  );
};

export default Toggle;
