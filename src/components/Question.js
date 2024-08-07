import { useState } from "react";

const Question = ({ questionObject }) => {
  const styleObj = {
    display: "block",
  };
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="questions" key={questionObject.question}>
      <section>
        <div className="closed" style={styleObj}>
          <div>
            <h4>{questionObject.question}</h4>
            <button
              onClick={() => {
                if (showAnswer === true) setShowAnswer(false);
                else setShowAnswer(true);
                // setShowAnswer(!showAnswer)
              }}
            >
              {showAnswer === true ? "-" : "+"}
            </button>
          </div>

          {showAnswer === true && (
            <p>
              <b>Raspuns:</b> {questionObject.response}
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Question;
