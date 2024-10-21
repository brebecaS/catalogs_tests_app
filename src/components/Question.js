import { useState } from "react";

const Question = ({ index, questionText, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="questions">
      <section>
        <div className="closed" style={{ display: "block" }}>
          <div>
            <h4>{questionText}</h4>
            <button
              onClick={() => {
                if (showAnswer === false) {
                  setShowAnswer(true);
                }
                if (showAnswer === true) {
                  setShowAnswer(false);
                }
                // setShowAnswer(!showAnswer);
              }}
            >
              {showAnswer === true ? "-" : "+"}
            </button>
          </div>

          <p className={showAnswer === true ? "" : "hide"}>
            Raspuns:
            {answer}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Question;
