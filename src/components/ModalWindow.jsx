import React from "react";

function ModalWrapper(props) {
  return (
    <div className="modal hide">
      <h2> {props.warning}</h2>
      <button className="yes">{props.positive}</button>
      <button className="no">{props.negative}</button>
    </div>
  );
}

export default ModalWrapper;
