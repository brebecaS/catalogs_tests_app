import Question from "./Question";
import React from "react";

const Test = (props) => {
  const mathQuestionElements = props.questionsList.map((element, index) => {
    return <Question key={element} questionText={element} />;
  });

  return (
    <div className="container blue">
      <h2>{props.title}</h2>
      {mathQuestionElements}
    </div>
  );
};

export default Test;
