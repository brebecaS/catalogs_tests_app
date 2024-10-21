import { useState } from "react";

const Question = ({ index, questionText, answer }) => {
  function handleClick() {}

  return (
    <div className="questions">
      <section>
        <div className="closed" style={{ display: "block" }}>
          <div>
            <h4>{questionText}</h4>
            <button onClick={handleClick}>+</button>
          </div>

          <p className={"hide"}>
            Raspuns:
            {answer}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Question;
