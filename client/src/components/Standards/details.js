import React from "react";

const StandardsDetail = props =>
  <div className="text-center">
    
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
      text: {props.text}
    </p>
    
  </div>;

export default StandardsDetail;