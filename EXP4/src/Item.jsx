import React, { useState } from "react";

function Item({ data }) {

  const [show, setShow] = useState(false);

  return (
    <div className="card">
      <h3>{data.title}</h3>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide Description" : "Show Description"}
      </button>

      {show && <p>{data.body}</p>}
    </div>
  );
}

export default Item;