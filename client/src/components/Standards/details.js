import React from "react";

const StandardsDetail = props =>
  <div className="standards">
    <p>
      Grade Level: {props.gradeLev}
    </p>
    <p>
      Title: {props.title}
    </p>
    <p>
      Desc: {props.desc}
    </p>
    <p>
      Text: {props.text}
    </p>
    
  </div>;

export default StandardsDetail;