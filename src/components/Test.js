import Question from "./Question";
import React from "react";

const Test = ({ questionsList, title }) => {
  const mathQuestionElements = questionsList.map((element, index) => {
    return <Question key={element} questionText={element} index={index} />;
  });
  // some comment
  return (
    <div className="container blue">
      <h2>{title}</h2>
      {mathQuestionElements}
    </div>
  );
};

export default Test;
